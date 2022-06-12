const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = 3000;


const friendsRouterr = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

app.use((req, res, next) => {
    const start = Date.now(); 
    next();
    const delta = Date.now() - start;
    console.log(`${req.method}, ${req.baseUrl}${req.url}, ${delta}`);
})
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My friends are very Clever',
        caption: 'Lets go skiing',
    });
} )
app.use('/friends', friendsRouterr);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
     console.log(`Listening on ${PORT}`)
 });