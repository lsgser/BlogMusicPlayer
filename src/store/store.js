import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	albums:[],
	songs:[],
	songID:'',
	albumID:'',
	isPlaying:false,
	isPaused:null,
	firstPlay:false,
}
const mutations={

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
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})