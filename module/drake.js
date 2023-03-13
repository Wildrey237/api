import drakemodel from '../model/drakemodel.js'
export default async function all_drake(request,response) {
    let drake = await drakemodel.find();
    return response.status(200).json(drake);
}
export async function all_album(request,response) {
    let drake = await drakemodel.find();
    let album = []
    let i=0
    for(let temp of drake) {
        album.push({album : temp['album']})
    };
    return response.status(200).json(album);
}
export async function all_title(request,response) {
    let drake = await drakemodel.find();
    let title = []
    let i=0
    for(let temp of drake) {
        title.push({title : temp['lyrics_title']})
    };
    return response.status(200).json(title);
}
export async function trackById(request, response) {
    let {id} = request.params;
    let result = await drakemodel.findById(id);
    return response.status(200).json(result);
};
export async function trackByAlbum(request, response) {
    let {album} = request.params;
    let result = await drakemodel.find({album : album});
    return response.status(200).json(result);
};
export async function trackByTitle(request, response) {
    let {title} = request.params;
    let result = await drakemodel.find({lyrics_title : title});
    return response.status(200).json(result);
};

export function add_title(request, response) {
    let {title, album, lyrics, cover} = request.body;
    let new_title = new drakemodel({
        lyrics_title: title,
        album: album,
        lyrics: lyrics,
        cover_links: cover
    });
    new_title.save();
    return response.status(200).json(new_title);
}
