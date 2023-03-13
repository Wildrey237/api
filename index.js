import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import session from 'express-session'
import TakeData from './tools/import.js';
import authRoute from './routes/auth.js';
import drakeRoute from './routes/drake.js';
 
const PORT = 3500;
const App = express();
App.use(morgan('dev'));
App.use(express.json());
App.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        secure: false
    }
}))

mongoose.connect('mongodb://root:root@127.0.0.1:27017/', {
    useNewUrlParser: true
}, (error) => {
    if (error) {
        console.log('erreur de connection:' + error);
    } else {
        console.log("DB connect");
    }
});

App.get('/',(request, response) => {
    return response.send('<h1>Wilfried BEMELINGUE API Projet</h1>');
});

App.get('/import',(request, response) => {
    try {
        TakeData();
        return response.statut(200).send({msg: 'data successfully imported'});
    } catch (error) {
        return response.status(400).send({msg: 'error :'+error});
    }
});
App.use('/drake',drakeRoute);
App.use('/login',authRoute);


App.listen(PORT, () => {
    console.log(`server ready on http://localhost:${PORT}`);
});