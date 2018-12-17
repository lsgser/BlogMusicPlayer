import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	albums:[],
	songs:[],
	songCover:'',
	singleSong:[],
	songID:'',
	albumID:'',
	isPlaying:false,
	isPaused:null,
	firstPlay:false,
}
const mutations={
	SET_ALBUMS(state,data)
	{
		data.data.forEach(function(element){
			state.albums.push(element)
		})
	}
}

const getters={
	getSongs()
	{
		return state.songs
	},
	getAlbums()
	{
		return state.albums
	},
	getSongID()
	{
		return state.songID
	},
	getFirstPlay()
	{
		return state.firstPlay
	},
	isPaused()
	{
		return state.isPaused
	},
	isPlaying()
	{
		return state.isPlaying
	},
	getAlbumID()
	{
		return state.songID
	},
	getSongCover()
	{
		return state.songCover
	},
	getSingleSong()
	{
		return state.singleSong
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})
