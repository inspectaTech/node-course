# JWT - JSON Web Tokens

#### to create the JWT
```
  const jwt = require('jsonwebtoken');

  const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123'}, 'thisiismynewcourse');
    console.log("[jwt]",token);
  }

  myFunction();
```
>body: { \_id: 'abc123'}   
>signature/secret: 'thisiismynewcourse'


### sample jwt
>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1NTk4NTE3NjV9.2NuvsDxyIX0S4E_HihHfaiPpmKKXIk2nf4OtdOluxsI

[Base64 decode encode](https://www.base64decode.org/)   

#### JWT part 1
1st part of the jwt is the header  - contains meta info and the algorithm used to generate it

base64 decoding:
```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

  //returns
  {"alg":"HS256","typ":"JWT"}
```

#### JWT part 2
the second part of the jwt "payload/body", its the part with the '\_id' used to sign it

base64 decoding:
```
  .eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1NTk4NTE3NjV9.

  //returns
  {"_id":"abc123","iat":1559851765}
```
**iat = issued at - timestamp**

#### JWT part 3
the 3rd part is the signature - used to verify the token (uses the secret)

base64 decoding:
```
  2NuvsDxyIX0S4E_HihHfaiPpmKKXIk2nf4OtdOluxsI

  //returns
  ۯ<r!}Awڈf(ȓi]:[
```
**trying to decode the secret failed**

#### expire token

```
  const token = jwt.sign({ _id: 'abc123'}, 'thisiismynewcourse',{expiresIn:"7 days"});
```
> also tested using {expiresIn:"0 seconds"}

## Generating tokens

>tokens array has token objects that have their own id (ObjectID)
these arrays are now subdocuments and all objects in a subdocument have their own id's

### create a mongoose custom model method


index.js
```
  const token = await user.generateAuthToken();

  //in context
  router.post('/user/login',async (req, res) => {
  try {
    console.log("[user login] running");
    const user = await User.findByCredentials(req.body.email, req.body.password);

    const token = await user.generateAuthToken();
```

#### in the models file use userSchema.methods to create your custom method
>methods work off the lowercase (single) user object

>the difference between statics and methods - statics work off the entire User model (uppercase), methods run against the individual returned user. (lowercase)

models/user.js
```
  userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString()},"thisiismynewcourse");

    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
  }
```
**GOTCHA: user._id is compressed using ObjectID
use: user._id.toString()**

#### Express middleware

> without middleware:   new request -> run route handler
>
> with middleware:      new request -> do something -> run route handler
>

**GOTCHA: make sure middleware is above other app.use calls**

```
  app.use((req, res, next) => {
    console.log("[app.use]",req.method, req.path);
    next();
  });

  app.use(express.json());
  app.use(userRouter);
  app.use(taskRouter);
```

middleware/auth.js
>simple middlware sample
```
  const auth = async (req, res, next) => {
    console.log("[auth middleware]");
    next();
  }//auth

  module.exports = auth;
```

set up authentication
Postman:
Post /users
Headers > Key = Authorization Value = Bearer token
