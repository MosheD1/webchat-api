import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());;

//routes
// get all chat users
//get all messages from chat
// post message to chat


app.listen(3000, () => {
    console.log('server is running');
})