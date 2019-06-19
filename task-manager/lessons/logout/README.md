# logout

```
  router.post('/user/logout',auth, async (req, res) => {
    try {

      req.user.tokens = req.user.tokens.filter((token) => {
        //this is going to return all the tokens, except the one given in the header (removing it from the array)
        return token.token !== req.token;
      });
      await req.user.save();
      res.send();

    } catch (e) {
      console.log("[logout] error",e);
      res.status(500).send();
    }
  })
```

- in order to get into this route the request has to pass authentication
- after passing authentication the req.user & req.token variables/objects become available

- the idea of this script is to only logout this session while leaving other sessions (either on another device or another browser tab) running

- the filter helps to identify only the current session's token by comparing it to tokens produced by other login sessions
**we need a way to keep the same session from logging in multiple times**

- All other login session tokens will be added to the new array and the current session's token will be omitted.

- The next time the user tries to send up a request the current token available on the users machine will not be authenticated and send back an error message - please authenticate

#### Logout all
```
  router.post('/user/logoutAll',auth, async (req, res) => {
    try {
      // req.user.tokens.length = 0;
      req.user.tokens = [];

      console.log("[logoutAll] user.tokens",req.user.tokens);
      await req.user.save();

      res.send();

    } catch (e) {
      console.log("[logout] error",e);
      res.status(500).send();
    }
  })// logoutAll
```
