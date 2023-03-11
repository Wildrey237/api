import mongoose from "mongoose";

export default mongoose.model('drakemodel', {
    album: String,
    lyrics_title: String,
    lyrics_url: String,
    lyrics: String,
    track_views: String,
    date: {type: Date, 'default': Date.now, index: true}
});