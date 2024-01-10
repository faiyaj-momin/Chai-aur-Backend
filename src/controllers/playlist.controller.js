import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body

    //TODO: create playlist
try {

if (!name || !description)
{
    res
    .status(400)
    .json(new ApiError(400, "Name and description are required"))
}

const playlist = new Playlist({
    name,
    description,
    owner: req.user._id
})

const savedPlaylist = await playlist.save()

if (!savedPlaylist) 
{
    
res.status(500).json(new ApiError(500, "Playlist creation failed"))
    
}

res.status(201).json(new ApiResponse(201, savedPlaylist, "Playlist created successfully"))

   
} catch (error) {
   res
    .status(500)
    .json(new ApiError(500, "Playlist not created because error on server"))
};
    
});

const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    //TODO: get user playlists

try {

if (!isValidObjectId(userId))
{
    res
    .status(400)
    .json(new ApiError(400, "Invalid user id"))
}

const playlists = await Playlist.find({owner: userId})

if (!playlists)
{
    res
    .status(404)
    .json(new ApiError(404, "No playlists found for the user"))
}

res.status(200).json(new ApiResponse(200, playlists, "Playlists found successfully"))

} catch (error) {
    res
    .status(500)
    .json(new ApiError(500, "Error on server"))
};

});

const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    //TODO: get playlist by id

try {

if (!isValidObjectId(playlistId))
{
    res
    .status(400)
    .json(new ApiError(400, "Invalid playlist id"))
}

const playlist = await Playlist.findById(playlistId)

if (!playlist)
{

    res
    .status(404)
    .json(new ApiError(404, "Playlist not found"))

}

res.status(200).json(new ApiResponse(200, playlist, "Playlist found successfully"))

} catch (error) {
    res
    .status(500)
    .json(new ApiError(500, "Error on server"))
};
    
});



const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    // TODO: remove video from playlist

})

const deletePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    // TODO: delete playlist
})

const updatePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    const {name, description} = req.body
    //TODO: update playlist
})

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}