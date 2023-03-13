import  express  from "express";
import all_drake, { trackByTitle } from "../module/drake.js"
import {all_album} from "../module/drake.js"
import {all_title} from "../module/drake.js"
import {trackByAlbum} from "../module/drake.js"
import {trackById} from "../module/drake.js"

const Router = express.Router();

Router.get('/', (request, response) => {
    all_drake(request, response);
});

Router.get('/album', (request, response) => {
    all_album(request, response);
});
Router.get('/title', (request, response) => {
    all_title(request, response);
});

Router.get('/id/:id', (request, response) => {
    trackById(request, response)
})

Router.get('/album/:album', (request, response) => {
    trackByAlbum(request, response);
})

Router.get('/title/:title', (request, response) => {
    trackByTitle(request, response);
})

Router.post('/add', (request, response) => {
    add_title(request, response);
})
export default Router;