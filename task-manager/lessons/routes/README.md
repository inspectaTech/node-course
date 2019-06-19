# Separate Route Files

routes can be added to their own separte file, grouped by path.
so all the "/user" routes can be added to one file and the "/task" routes can be in a separate file

The exported routes first have to be required, then used by express app.use()

```
  const userRouter = require("./routers/user");
  const taskRouter = require("./routers/task");

  app.use(express.json());
  app.use(userRouter);
  app.use(taskRouter);

```
