const express = require('express');
const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0, 
        name: "Petar"
    },
    {
        id: 1,
        name: "Toshko"
    }
];


app.use(express.json());
app.get('/', (req, res, next) => {
        res.json(friends);
})

app.post('/', (req, res) =>{
    console.log(req.body);
    const newFriend = {
        id: friends.length,
        name:req.body.name
    };
    friends.push(newFriend);
    res.json(newFriend);
});




app.listen(PORT, () => {
    console.log(`Port listening on ${PORT}`);
})


