import express from 'express';
import router from './routes/web.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use('/exnoting', router);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});