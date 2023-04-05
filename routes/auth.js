import  express  from "express";
import login  from "../module/auth.js";
import  {logout}  from "../module/auth.js";
import  {me}  from "../module/auth.js";
import  {register}  from "../module/auth.js";
import {add_title} from "../module/drake.js"

const Router = express.Router();

Router.post('/login', (request, response) => {
    login(request, response);
});
Router.get('/', (request, response) => {
    me(request, response);
})
Router.get('/logout', (request, response) => {
    logout(request, response);
})
Router.post('/register', (request, response) => {
    register(request, response);
})
Router.post('/drake/add', (request, response) => {
    if(request.session.login){
        add_title(request, response);
    }else{
        return response.status(500).json({msg: "Vous n'êtes pas connecté !"});
    }

})
export default Router;