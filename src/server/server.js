const express = require('express');
const mongoose = require('mongoose');
const {createServer} = require('http');
const app = express();
const port = 5000;
mongoose
    .connect('mongodb+srv://fantomas150980:fantomas150980@cluster-taras0.' +
        'tpwnp.mongodb.net/users?retryWrites=true&w=majority', {
        useFindAndModify: true,useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));

const NotesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});
// const Notes = mongoose.model('Notes', NotesSchema);
// app.get('/', (req, res) => {
//     // Notes.create({
//     //         id: '3',
//     //         message: 'hello2',
//     // },
//     //  {
//     //         id: '4',
//     //         message: 'hei2'
//     // },
//     //     {id: '5',
//     //         message: 'hello1',
//     // },
//     // {
//     //     id: '6',
//     //     message: 'hei1',
//     // }
//     //
//     //
//     // )
//     //     .then(notes => res.send(notes))
//     //     .catch(err => res.send(err));
//     // Notes.find()
//     //     .then(notes => res.send(notes))
//     //     .catch(err => res.send(err));
// });
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});
const Users = mongoose.model('Users', UsersSchema);
app.get('/', (req, res) => {
    // Users.create({
    //     name: 'Taras Vasilievich',
    //     email: 'test@test.com',
    // },
    //     {
    //         name: 'Taras',
    //         email: 'shev-taras@ya.ru',
    //     }
    // )
    //     .then(user => res.send(user))
    //     .catch(err => res.send(err));
    Users.find()
        .then(users => res.send(users))
        .catch(err => res.send(err));
});
const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));