const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/users')

app.use(express.json());
app.use('/users',userRouter);

app.listen(PORT,()=> console.log('server running on port' + PORT));