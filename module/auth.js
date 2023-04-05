import usermodel from "../model/usermodel.js";
export default async function login(request, response) {
    const {email, password} = request.body;

    let user = await usermodel.find({email: email, password: password}); 
    if (user.length > 0) {
        request.session.user = {
            email
        }
        request.session.connect = true;
        return response.status(200).json(request.session.user);
    }else{
        request.session.connect = false;
        return response.status(500).json({msg: "Il y a eu une erreur lors de l'authentification !"});
    }
}
export function logout(request, response) {
    request.session.destroy();
    return response.status(200).json({msg: "Vous êtes déconnecté !"});
}
export function me(request, response) {
    if (request.session.connect) {
        return response.status(200).json(request.session.user);
    }else {
        return response.status(200).json({msg: "connecter vous sur /auth/login"});
    }
}
export function register(request, response) {
    let {email, password} = request.body;
    let new_user = new usermodel({
        email: email,
        password: password
    });
    new_user.save();
    return response.status(200).json(new_user);
}



