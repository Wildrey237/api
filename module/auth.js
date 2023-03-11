export default function login(request, response) {
    const {email, password} = request.body;
    if (email == "admin" && password == "admin") {
        request.session.user = {
            email
        }
        return response.status(200).json(request.session.user);
    }else{
        return response.status(500).json({msg: "Il y a eu une erreur lors de l'authentification !"});
    }
}
export function logout(request, response) {
    request.session.destroy();
    return response.status(200).json({msg: "Vous êtes déconnecté !"});
}
export function me(request, response) {
    if (request.session.user) {
        return response.status(200).json(request.session.user);
    }else {
        return response.status(200).json({msg: "voici le test !"});
    }
}

