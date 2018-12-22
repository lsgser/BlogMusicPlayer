import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex,axios)

export default new Vuex.Store({
state:{
	albums:[],
	songs:[],
	songCover:'',
	singleSong:[],
	songID:'',
	albumID:'',
	isPlaying:false,
	isPaused:null,
	firstPlay:false,
	user:[]
},
mutations:{
	SET_ALBUMS(state,data)
	{
		state.albums = []
		data.data.forEach(function(element){
			state.albums.push(element)
		})
	},
	SET_SINGLES(state,data)
	{
		state.singleSong = []
		data.data.forEach(function(element){
			state.singleSong.push(element)
		})
	},
	SET_USER(state,data)
	{
		state.user = data.data
	}
},
getters:{
	getSongs :state => {return state.songs},
	getAlbums:state => {return state.albums},
	getSongID:state => {return state.songID},
	getFirstPlay:state => {return state.firstPlay},
	isPaused:state => {return state.isPaused},
	isPlaying:state => {return state.isPlaying},
	getAlbumID:state => {return state.albumID},
	getSongCover:state => {return state.songCover},
	getSingleSong:state => {return state.singleSong},
	getUser:state => {return state.user}
 },
actions:{
	loadData({commit},user){
		axios.get('http://localhost/Balfo/api/view/albums/get.php?name='+user+'').then(function(res){
			commit('SET_ALBUMS',res)
		}).catch(function(err){
			console.log(err)
		})
		axios.get('http://localhost/Balfo/api/view/songs/get.php?name='+user+'&album=0').then(function(res){
				commit('SET_SINGLES',res)
		})
	},
	loadUser({commit},user)
	{
		axios.get('http://localhost/Balfo/api/view/user/get.php?name='+user+'').then(function(res){
			commit('SET_USER',res)
		})
	}
}
})
