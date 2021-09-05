import express from 'express';
import cors from 'cors';

const db = {
    chatUsers: [
        {
            name: 'mor',
            id: 123
        },
        {
            name: 'or',
            id: 124
        },
        {
            name: 'tal',
            id: 125
        }
    ],

    chatMessages: [
        {
            id: 123,
            messages: [
                'hi',
                'how was your weekend',
                'have a good day'
            ]
        },
        {
            id: 124,
            messages: [
                'hi',
                'how was your weekend',
                'have a good day'
            ]
        },
        {
            id: 125,
            messages: [
                'hi',
                'how was your weekend',
                'have a good day'
            ]
        }
    ]
}

const app = express();

app.use(cors());

//routes
// get all chat users
app.get('/chatUsers', (req, res) => {
    res.json(db.chatUsers);
});

//get all messages from chat
app.get('messages/:id', (req, res) => {
    const {id} = req.params;
    db.chatMessages.forEach((userMessages) => {
        if(userMessages.id === id) {
            return res.json(userMessages.messages);
        }
    });

    res.status(404).json('not found');
});

// post message to chat
app.post('messages/:id', (req, res) => {
    const {id} = req.params;
    const {message} = req. body;

    db.chatMessages.forEach((userMessages) => {
        if(userMessages.id === id) {
            userMessages.messages.push(message);
            return res.json({
                ok: true
            });
        }
    });

    res.json({
        ok: false
    });
})


app.listen(3001, () => {
    console.log('server is running');
})