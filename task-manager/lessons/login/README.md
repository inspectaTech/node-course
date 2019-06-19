# Logging in users

i can create my own mongoose query option by adding statics property to userSchema followed by my custom name
```
  userSchema.statics.findByCredentials
```

**GOTCHA: remember that you need to post the plain text version of the password not the hash version
 for validation**
