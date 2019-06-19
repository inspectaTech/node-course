# Hiding credentials
[The toJSON mystery](https://www.bennadel.com/blog/3277-json-stringify-will-recursively-call-tojson-if-it-exists-during-serialization-in-javascript.htm)   


>JSON.stringify calls .toJSON as middleware if it exists to run any custom function on the available data before the string is produced. stringify then produces a string of what remains after the toJSON functions returns data

>obj.toJSON = fn just has to be defined on the object and whenever the object is stringified anywhere the .toJSON method will be run first

#### the pet example
```
  const pet = {
    name: 'Hal'
  }

  pet.toJSON = function(){
    // console.log(this)
    // return this
    return {}
  }

  console.log(JSON.stringify(pet));
```

#### my userSchema example

```
  // userSchema.methods.getPublicProfile = function () {
  userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
  }// toJSON
```
