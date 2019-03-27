import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex,axios)
//var audio

export default new Vuex.Store({
state:{
	albums:[],
	songs:[],
	songCover:'',
	singleSong:[],
	songID:'',
	albumID:'',
	isPlaying:false,
	isPaused:false,
	firstPlay:false,
	user:[],
	albumInfo:[],
	sec:0,
	min:0,
	songName:'',
	album:'',
	genre:'',
	secDuration:0,
	minDuration:0,
	time:0,
	songIndex:0,
	durationCount:0,
	artist:'',
	audio:{},
	pausedSong:"",
	oldSongID:'',
	type:'',
	songList:[],
	songdirectory:'',
	nav_links:false,
	membersInfo:[],
	membersData:[],
	navigationName:'',
	contactInfo:[]
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
	},
	SET_ALBUM_INFO(state,data)
	{
		state.albumInfo=data.data
	},
	SET_SONGS(state,data){
		state.songs = []
		data.data.forEach(function(element){
			state.songs.push(element)
		})
	},
	PLAY_SONG(state)
	{
		state.songIndex=0
		if(state.songs.length>1)
		{
			state.songs.forEach(function(element,index){
				if(state.songID===element.id && state.oldSongID!==element.id)//new song selected
				{
					state.directory = element.directory
					state.songIndex=index
					state.albumID=element.album_id
					state.songID=element.id
					state.songCover = element.art_cover
					state.songName = element.song_name
					state.artist=element.artists
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=element.id
					state.pausedSong=state.songID
					if(parseInt(state.sec)>0)
					{
						state.audio.pause()
						state.audio.currentTime=0
						state.audio = new Audio(element.directory)
					}
					else
					{
						state.audio = new Audio(element.directory)	
					}
					state.audio.play()
					state.audio.addEventListener('timeupdate',function(){
					    state.sec = parseInt(state.audio.currentTime % 60);//Get hours and minutes
					    state.min = parseInt((state.audio.currentTime / 60) % 60);
					    if (state.sec < 10) {
					    	state.sec = '0' + state.sec;
					    }
					    state.secDuration=parseInt(state.audio.duration%60);
					    state.minDuration=parseInt((state.audio.duration/60)%60);
					    if (state.secDuration < 10) 
					    {
					    	state.secDuration = '0' + state.secDuration
					    } 
					    if (state.audio.currentTime > 0) 
					    {
					    	state.time = Math.floor((100 / state.audio.duration) * state.audio.currentTime);
					    }
					})
				}
				else if(state.songID===element.id && state.oldSongID===element.id)//old song was paused then played again
				{
					state.directory = element.directory
					state.songIndex=index
					state.albumID=element.album_id
					state.songID=element.id
					state.songCover = element.art_cover
					state.songName = element.song_name
					state.artist=element.artists
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=element.id
					state.pausedSong=state.songID
					
					state.audio.play()//resume playing the song
					state.audio.addEventListener('timeupdate',function(){
					    state.sec = parseInt(state.audio.currentTime % 60);//Get hours and minutes
					    state.min = parseInt((state.audio.currentTime / 60) % 60);
					    if (state.sec < 10) {
					    	state.sec = '0' + state.sec;
					    }
					    state.secDuration=parseInt(state.audio.duration%60);
					    state.minDuration=parseInt((state.audio.duration/60)%60);
					    if (state.secDuration < 10) 
					    {
					    	state.secDuration = '0' + state.secDuration
					    } 
					    if (state.audio.currentTime > 0) 
					    {
					    	state.time = Math.floor((100 / state.audio.duration) * state.audio.currentTime);
					    }
					})
				}
			})
		}
		else
		{
			state.songs.forEach(function(element,index){
				if(state.songID===element.id && state.oldSongID!==element.id)
				{
					state.directory = element.directory
					state.artist=element.artists
					state.songIndex=index
					state.albumID=element.album_id
					state.songID=element.id
					state.songCover = element.art_cover
					state.songName = element.song_name
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=element.id
					state.pausedSong=state.songID
					if(state.sec>0)
					{
						state.audio.pause()
						state.audio.currentTime=0
						state.audio = new Audio(element.directory)	
					}
					else
					{
						state.audio = new Audio(element.directory)	
					}
					state.audio.play()
					state.audio.addEventListener('timeupdate',function(){
						state.sec = parseInt(state.audio.currentTime % 60);//Get hours and minutes
						state.min = parseInt((state.audio.currentTime / 60) % 60);
					    if (state.sec < 10) {
					    	state.sec = '0' + state.sec;
					    }
					    state.secDuration=parseInt(state.audio.duration%60);
					    state.minDuration=parseInt((state.audio.duration/60)%60);
					    if (state.secDuration < 10) 
					    {
					      	state.secDuration = '0' + state.secDuration
					    } 
					    if (state.audio.currentTime > 0) 
					    {
					      	state.time = Math.floor((100 / state.audio.duration) * state.audio.currentTime);
					    }
					})
				}
				else if(state.songID===element.id && state.oldSongID===element.id)
				{
					state.directory = element.directory
					state.songIndex=index
					state.albumID=element.album_id
					state.songID=element.id
					state.songCover = element.art_cover
					state.songName = element.song_name
					state.artist=element.artists
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=element.id
					state.pausedSong=state.songID
					
					state.audio.play()//resume playing the song
					state.audio.addEventListener('timeupdate',function(){
					    state.sec = parseInt(state.audio.currentTime % 60);//Get hours and minutes
					    state.min = parseInt((state.audio.currentTime / 60) % 60);
					    if (state.sec < 10) {
					    	state.sec = '0' + state.sec;
					    }
					    state.secDuration=parseInt(state.audio.duration%60);
					    state.minDuration=parseInt((state.audio.duration/60)%60);
					    if (state.secDuration < 10) 
					    {
					    	state.secDuration = '0' + state.secDuration
					    } 
					    if (state.audio.currentTime > 0) 
					    {
					    	state.time = Math.floor((100 / state.audio.duration) * state.audio.currentTime);
					    }
					})	
				}
			})
		}
	},
	SET_SONG_ID(state,data)
	{
		state.songID = data.song_id
	},
	SET_PAUSE(state)//Works for both the music player navbar and for the songlist
	{
		state.songID=""
		state.pausedSong=""
		state.isPlaying=false
		state.audio.pause()
	},
	SET_TYPE(state,data)
	{
		state.type=data.type
	},
	SET_SONG_LIST(state,data)
	{
		state.songList = []
		data.data.forEach(function(element){
			state.songList.push(element)
		})	
	},
	SET_NEXT(state,data)
	{
		if(data.type==1)
		{
			state.audio.pause()
			state.audio.currentTime=0
			state.audio = new Audio(state.directory)
		}
		else
		{
			if(state.songs.length>1)
			{
				var len = state.songs.length-1

				if(state.songIndex > 0 )
				{
					state.directory = state.songs[state.songIndex-1].directory
					state.albumID=state.songs[state.songIndex-1].album_id
					state.songID=state.songs[state.songIndex-1].id
					state.songCover = state.songs[state.songIndex-1].art_cover
					state.songName = state.songs[state.songIndex-1].song_name
					state.artist=state.songs[state.songIndex-1].artists
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=state.songs[state.songIndex-1].id
					state.pausedSong=state.songID
					state.songIndex=state.songIndex-1
					state.audio.pause()
					state.audio.currentTime=0
					state.audio = new Audio(state.directory)
				}
				else if(state.songIndex == 0)
				{
					state.directory = state.songs[len].directory
					state.albumID=state.songs[len].album_id
					state.songID=state.songs[len].id
					state.songCover = state.songs[len].art_cover
					state.songName = state.songs[len].song_name
					state.artist=state.songs[len].artists
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=state.songs[len].id
					state.pausedSong=state.songID
					state.songIndex=len
					state.audio.pause()
					state.audio.currentTime=0
					state.audio = new Audio(state.directory)
				}
			}
			else
			{
				state.audio.pause()
				state.audio.currentTime=0
				state.audio = new Audio(state.directory)
			
			}
		}
		state.audio.play()
		state.audio.addEventListener('timeupdate',function(){
		    state.sec = parseInt(state.audio.currentTime % 60);//Get hours and minutes
		    state.min = parseInt((state.audio.currentTime / 60) % 60);
		    if (state.sec < 10) {
		    	state.sec = '0' + state.sec;
		    }
		    state.secDuration=parseInt(state.audio.duration%60);
		    state.minDuration=parseInt((state.audio.duration/60)%60);
		    if (state.secDuration < 10) 
		    {
		    	state.secDuration = '0' + state.secDuration
		    } 
		    if (state.audio.currentTime > 0) 
		    {
		    	state.time = Math.floor((100 / state.audio.duration) * state.audio.currentTime);
		    }
		})
	},
	SET_PREVIOUS(state,data)
	{
		if(data.type==1)
		{
			state.audio.pause()
			state.audio.currentTime=0
			state.audio = new Audio(state.directory)
		}
		else
		{
			if(state.songs.length>1)
			{
				var len = state.songs.length-1

				if(state.songIndex < len )
				{
					state.directory = state.songs[state.songIndex+1].directory
					state.albumID=state.songs[state.songIndex+1].album_id
					state.songID=state.songs[state.songIndex+1].id
					state.songCover = state.songs[state.songIndex+1].art_cover
					state.songName = state.songs[state.songIndex+1].song_name
					state.artist=state.songs[state.songIndex+1].artists
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=state.songs[state.songIndex+1].id
					state.pausedSong=state.songID
					state.songIndex=state.songIndex+1
					state.audio.pause()
					state.audio.currentTime=0
					state.audio = new Audio(state.directory)
				}
				else if(state.songIndex == len)
				{
					state.directory = state.songs[0].directory
					state.albumID=state.songs[0].album_id
					state.songID=state.songs[0].id
					state.songCover = state.songs[0].art_cover
					state.songName = state.songs[0].song_name
					state.artist=state.songs[0].artists
					state.firstPlay=true
					state.isPlaying=true
					state.isPaused=false
					state.oldSongID=state.songs[0].id
					state.pausedSong=state.songID
					state.songIndex=0
					state.audio.pause()
					state.audio.currentTime=0
					state.audio = new Audio(state.directory)
				}
			}
			else
			{
				state.audio.pause()
				state.audio.currentTime=0
				state.audio = new Audio(state.directory)
			}
		}
		state.audio.play()
		state.audio.addEventListener('timeupdate',function(){
		    state.sec = parseInt(state.audio.currentTime % 60);//Get hours and minutes
		    state.min = parseInt((state.audio.currentTime / 60) % 60);
		    if (state.sec < 10) {
		    	state.sec = '0' + state.sec;
		    }
		    state.secDuration=parseInt(state.audio.duration%60);
		    state.minDuration=parseInt((state.audio.duration/60)%60);
		    if (state.secDuration < 10) 
		    {
		    	state.secDuration = '0' + state.secDuration
		    } 
		    if (state.audio.currentTime > 0) 
		    {
		    	state.time = Math.floor((100 / state.audio.duration) * state.audio.currentTime);
		    }
		})
	},
	SET_NAV_TRUE(state)
	{
		state.nav_links=true
	},
	SET_NAV_FALSE(state)
	{
		state.nav_links=false
	},
	SET_MEMBERS_INFO(state,data)
	{
		state.membersInfo=data.data
	},
	SET_MEMBERS_DATA(state,data)
	{
		state.membersData=[]
		data.data.forEach(function(element){
			state.membersData.push(element)
		})
	},
	SET_NAVIGATION_NAME(state,data)
	{
		state.navigationName=data
	},
	SET_CONTACT_INFO(state,data)
	{
		state.contactInfo =data.data
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
	getUser:state => {return state.user},
	getAlbumInfo:state=>{return state.albumInfo},
	getSongName:state=>{return state.songName},
	getArtist:state=>{return state.artist},
	getPaused:state=>{return state.pausedSong},
	getType:state=>{return state.type},
	getOldSongID:state=>{return state.oldSongID},
	getSongList:state=>{return state.songList},
	getSongIndex:state=>{return state.songIndex},
	getNavBool:state=>{return state.nav_links},
	getMinDuration:state=>{return state.minDuration},
	getSecDuration:state=>{return state.secDuration},
	getMin:state=>{return state.min},
	getSec:state=>{return state.sec},
	getChangingTime:state=>{

		if((state.min==state.minDuration && state.sec==state.secDuration) &&  (state.min!=0 && state.sec!=0))
		{
			return 100
		}
		else
		{
			return state.time	
		}
	},
	getMembersInfo:state=>{return state.membersInfo},
	getMembersData:state=>{return state.membersData},
	getNavigationName:state=>{return state.navigationName},
	getContactInfo:state=>{return state.contactInfo}
 },
actions:{
	loadData({commit},user){
		axios.get('https://www.6itygang.com/api/view/albums/get.php?name='+user+'').then(function(res){
			commit('SET_ALBUMS',res)
		}).catch(function(err){
			console.log(err)
		})
		axios.get('https://www.6itygang.com/api/view/songs/get.php?name='+user+'&album=0').then(function(res){
				commit('SET_SINGLES',res)
		})
	},
	loadUser({commit},user)
	{
		axios.get('https://www.6itygang.com/api/view/user/get.php?name='+user+'').then(function(res){
			commit('SET_USER',res)
		})
	},
	loadAlbumData({commit},album)
	{
		axios.get('https://www.6itygang.com/api/view/albums/get.php?album_info='+album).then(function(res){
			commit('SET_ALBUM_INFO',res)
		})
		axios.get('https://www.6itygang.com/api/view/albums/get.php?album='+album).then(function(res){
			//commit('SET_SONGS',res)
			commit('SET_SONG_LIST',res)//for the tracklist on playmusic.vue
		})
	},
	playAudio({commit},data)
	{
		data = JSON.parse(data)
		if(parseInt(data.type)==1)//single
		{
			axios.get('https://www.6itygang.com/api/view/songs/get.php?song='+data.id).then(function(res){
				commit('SET_SONG_ID',{song_id:data.id})
				commit('SET_SONGS',res)
				commit('SET_TYPE',{type:data.type})
				commit('PLAY_SONG')
			})
		}
		else//album
		{
			axios.get('https://6itygang.com/api/view/albums/get.php?album='+data.album_id).then(function(res){
				commit('SET_SONG_ID',{song_id:data.id})
				commit('SET_SONGS',res)
				commit('SET_TYPE',{type:data.type})
				commit('PLAY_SONG')
			})
		}
	},
	pauseAudio({commit})
	{
		commit('SET_PAUSE')
	},
	playNext({commit},data)
	{
		data =JSON.parse(data)
		commit('SET_NEXT',data)

	},
	playPrevious({commit},data)
	{
		data =JSON.parse(data)
		commit('SET_PREVIOUS',data)
	},
	trueNavLink({commit})
	{
		commit('SET_NAV_TRUE')
	},
	falseNavLink({commit})
	{
		commit('SET_NAV_FALSE')
	},
	loadWelcomeData({commit})
	{
		axios.get('https://www.6itygang.com/api/view/6ity_gang/get.php?type=info').then(function(res){
			commit('SET_MEMBERS_INFO',res)
		})

		axios.get('https://www.6itygang.com/api/view/6ity_gang/get.php?type=members').then(function(res){
			commit('SET_MEMBERS_DATA',res)	
		})
	},
	changeNavName({commit},data)
	{
		commit('SET_NAVIGATION_NAME',{name:data})
	},
	loadContactData({commit}){
		axios.get('https://www.6itygang.com/api/view/6ity_gang/get.php?type=info').then(function(res){
			commit('SET_CONTACT_INFO',res)
		})
	}
}
})
