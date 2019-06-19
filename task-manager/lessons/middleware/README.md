# middleware

[middleware docs](https://mongoosejs.com/docs/middleware.html)   

runing code just before a user is saved
```
  userSchema.pre('save', async function(next){
    let user = this;

  }
```

**GOTCHA: needs an anonymous fn not an arrow fn - it needs access to the fn's 'this' property**
