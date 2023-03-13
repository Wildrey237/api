import  express  from "express";
import login  from "../module/auth.js";
import  {logout}  from "../module/auth.js";
import  {me}  from "../module/auth.js";

const Router = express.Router();

Router.post('/', (request, response) => {
    login(request, response);
});
Router.get('/me', (request, response) => {
    me(request, response);
})
Router.get('/logout', (request, response) => {
    logout(request, response);
})

export default Router;