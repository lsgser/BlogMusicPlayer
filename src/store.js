/* eslint-disable */
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
	contactInfo:[],
	currentArtist:'',
	artistIsLoaded:false,
	artistDataIsLoaded:false,
	singleIsLoaded:false,
	albumIsLoaded:false,
	userIsLoaded:false,
	contactIsLoaded:false,
	albumInfoIsLoaded:false,
	songIsLoaded:false,
	songShareIsLoaded:false,
	isMobile:false
},
mutations:{
	SET_ALBUMS(state,data)
	{
		state.albums = []
		data.data.forEach(function(element){
			state.albums.push(element)
		})
		state.albumIsLoaded=true
	},
	SET_SINGLES(state,data)
	{
		state.singleSong = []
		data.data.forEach(function(element){
			state.singleSong.push(element)
		})
		state.singleIsLoaded=true
	},
	SET_USER(state,data)
	{
		state.user = data.data
		state.userIsLoaded=true
	},
	SET_ALBUM_INFO(state,data)
	{
		state.albumInfo=data.data
		state.albumInfoIsLoaded=true
	},
	SET_SONGS(state,data){
		state.songs = []
		data.data.forEach(function(element){
			state.songs.push(element)
		})
	},
	PLAY_SONG(state)
	{
		if(!state.audio.paused || state.songID != state.oldSongID || state.audio.ended)
		{
			//console.log('if')
			state.songIndex=0
			if(state.songs.length>1)
			{
				//console.log('inner if')
				//console.log(state.songs.length)
				state.songs.forEach(function(element,index){
					if(state.songID===element.id && state.oldSongID!==element.id)//new song selected
					{
						//console.log('enter 1')
						state.directory = element.directory
						state.songIndex=index
						state.albumID=element.album_id
						state.songID=element.id
						state.songCover = element.art_cover
						state.songName = element.song_name
						state.artist=element.artists
						state.isPlaying=true
						state.isPaused=false
						state.oldSongID=element.id
						state.pausedSong=state.songID
						if(state.audio.duration>0)//song is playing
						{
							//console.log('IF')
							state.audio.pause()
							state.audio.currentTime=0
							state.audio=null
							state.audio = new Audio(element.directory)
						}
						else
						{
							//console.log('ELSE')
							//state.audio.pause()
							if(state.firstPlay)
							{
								state.audio.pause()
								if(state.audio.paused)
								{
									state.audio.currentTime=0
								}
								else
								{
									state.audio.currentTime = 0
								}
							}
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
							state.audio=null
							state.audio = new Audio(element.directory)
							
						}
						state.firstPlay=true
					}
					else if(state.songID===element.id && state.oldSongID===element.id)//old song was paused then played again
					{
						//console.log("enter 2")
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
						
					}
				})
			}
			else
			{
				//console.log("else")
				state.songs.forEach(function(element,index){
					if(state.songID===element.id && state.oldSongID!==element.id)
					{
						//console.log("If")
						state.directory = element.directory
						state.artist=element.artists
						state.songIndex=index
						state.albumID=element.album_id
						state.songID=element.id
						state.songCover = element.art_cover
						state.songName = element.song_name
						state.isPlaying=true
						state.isPaused=false
						state.oldSongID=element.id
						state.pausedSong=state.songID
						if(state.audio.duration>0)
						{
							state.audio.pause()
							state.audio.currentTime=0
							state.audio={}
							state.audio = new Audio(element.directory)	
						}
						else
						{
							if(state.firstPlay)
							{
								if(!state.audio.paused)
								{
									state.audio.pause()
									//state.audio.currentTime=0
								}	
							}
							
							state.audio.currentTime=0
							state.audio={}
							state.audio = new Audio(element.directory)	
						}
						state.firstPlay=true
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
					}
				})
			}
			state.audio.play()
			if(state.audio.duration == 0 || !state.audio.firstPlay)
			{
				//console.log('event')
				state.audio.addEventListener('timeupdate',function(){
					//console.log("EVENT")
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
				    if(state.audio.ended)
				    {
				  		state.songID=""
						state.pausedSong=""
						state.isPlaying=false
						//state.audio.pause()  	
				    }
				})
			}
		}
		else//Paused and then resumed
		{
			//console.log('Resume')
			//old song was paused then played again
				
			//state.directory = element.directory
			//state.songIndex=index
			//state.albumID=element.album_id
			state.songID=state.oldSongID
			//state.songCover = element.art_cover
			//state.songName = element.song_name
			//state.artist=element.artists
			state.firstPlay=true
			state.isPlaying=true
			state.isPaused=false
			//state.oldSongID=element.id
			state.pausedSong=state.songID	
			state.audio.play()//Resume playing the song
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
		state.songIsLoaded=true	
	},
	SET_PREVIOUS(state,data)
	{
		if(data.type==1)
		{
			state.songID=state.oldSongID
			state.pausedSong=state.oldSongID
			state.isPlaying=true
			state.isPaused=false
			state.audio.pause()
			state.audio.currentTime=0
			state.audio={}
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
					state.audio={}
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
					state.audio={}
					state.audio = new Audio(state.directory)
				}
			}
			else
			{
				state.isPlaying=true
				state.isPaused=false
				state.audio.pause()
				state.audio.currentTime=0
				state.audio={}
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
		    if(state.audio.ended)
		    {
		  		state.songID=""
				state.pausedSong=""
				state.isPlaying=false
				state.audio.pause()  	
		    }
		})
	},
	SET_NEXT(state,data)
	{
		
		if(data.type==1)
		{
			state.songID=state.oldSongID
			state.pausedSong=state.oldSongID
			state.isPlaying=true
			state.isPaused=false
			state.audio.pause()
			state.audio.currentTime=0
			state.audio={}
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
					state.audio={}
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
					state.audio={}
					state.audio = new Audio(state.directory)
				}
			}
			else
			{
				state.isPlaying=true
				state.isPaused=false
				state.audio.pause()
				state.audio.currentTime=0
				state.audio={}
				state.audio = new Audio(state.directory)
			}
		}
		if((data.type==1 && !state.songID=="") || data.type!=1)//single song
		{
			state.audio.play()
		}
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
		    if(state.audio.ended)
		    {
		  		state.songID=""
				state.pausedSong=""
				state.isPlaying=false
				state.audio.pause()  	
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
		state.artistDataIsLoaded=true
	},
	SET_MEMBERS_DATA(state,data)
	{
		state.membersData=[]
		data.data.forEach(function(element){
			state.membersData.push(element)
		})
		state.artistIsLoaded=true
	},
	SET_NAVIGATION_NAME(state,data)
	{
		state.navigationName=data
	},
	SET_CONTACT_INFO(state,data)
	{
		state.contactInfo =data.data
		state.contactIsLoaded=true
	},
	SET_ARTIST_LOADER(state)
	{
		state.artistIsLoaded=false
	},
	SET_ARTIST_DATA_LOADER(state)
	{
		state.artistDataIsLoaded=false
	},
	SET_ALBUM_LOADER(state)
	{
		state.albumIsLoaded=false
	},
	SET_SINGLE_LOADER(state)
	{
		state.singleIsLoaded=false
	},
	SET_USER_LOADER(state)
	{
		state.userIsLoaded=false
	},
	SET_CONTACT_LOADER(state)
	{
		state.contactIsLoaded=false
	},
	SET_ALBUM_INFO_LOADER(state)
	{
		state.albumInfoIsLoaded=false
	},
	SET_SONG_LOADER(state)
	{
		state.songIsLoaded=false
	},
	SET_NEW_TIME(state,data)
	{
		let newTime = data.clickedSection*state.audio.duration/data.barSize
		state.audio.currentTime = newTime
	},
	SET_SONG(state,data)
	{
		//console.log(data.data)
		/*
			If is not set then we can set the content,if it 
			is already set then we shouldn't edit anything,since the user will be on the main pages
		*/
		if(!(state.songCover || state.songName || state.artist || state.type || state.type || state.songID || state.albumID != ''))
		{
			state.songCover = data.data[0].art_cover
			state.songName = data.data[0].song_name
			state.artist = data.data[0].artists
			state.type = data.data[0].type
			state.songID = data.data[0].id
			state.albumID = data.data[0].album_id	
		}
		
		//state.oldSongID = data.data[0].id//for pause and play,when we pause we remove reset the songID,but the oldSongID doesn't change

		state.songShareIsLoaded = true
	},
	SET_SONG_SHARE_LOADER(state)
	{
		state.songShareIsLoaded = false
	},
	SET_CURRENT_ARTIST(state,data)//Setting the artist name for album navigation via the modal
	{
		state.currentArtist = data.data[0].artist_name
	},
	SET_DEVICE(state)//Check if the site is running on a PC or Phone
	{
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
		if (isMobile) {
			state.isMobile = true  
		} 
		else {
			state.isMobile = false
		}
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
	getContactInfo:state=>{return state.contactInfo},
	artistIsLoaded:state=>{return state.artistIsLoaded},
	artistDataIsLoaded:state => {return state.artistDataIsLoaded},
	singleIsLoaded:state=>{return state.singleIsLoaded},
	albumIsLoaded:state=>{return state.albumIsLoaded},
	userIsLoaded:state=>{return state.userIsLoaded},
	contactIsLoaded:state=>{return state.contactIsLoaded},
	albumInfoIsLoaded:state=>{return state.albumInfoIsLoaded},
	songIsLoaded:state=>{return state.songIsLoaded},
	getSongShareIsLoaded:state=>{return state.songShareIsLoaded},
	getCurrentArtist:state=>{return state.currentArtist},
	isMobile:state=>{return state.isMobile}
 },
actions:{
	loadData({commit},user){
		commit('SET_ALBUM_LOADER')
		axios.get('https://www.6itygang.com/api/view/albums/get.php?name='+user+'').then(function(res){
			commit('SET_ALBUMS',res)
		}).catch(function(err){
			console.log(err)
		})
		commit('SET_SINGLE_LOADER')
		axios.get('https://www.6itygang.com/api/view/songs/get.php?name='+user+'&album=0').then(function(res){
				commit('SET_SINGLES',res)
		})
	},
	loadUser({commit},user)
	{
		commit('SET_USER_LOADER')
		axios.get('https://www.6itygang.com/api/view/user/get.php?name='+user+'').then(function(res){
			commit('SET_USER',res)
		})
	},
	loadAlbumData({commit},album)
	{
		commit('SET_ALBUM_INFO_LOADER')
		axios.get('https://www.6itygang.com/api/view/albums/get.php?album_info='+album).then(function(res){
			commit('SET_ALBUM_INFO',res)
		})
		commit('SET_SONG_LOADER')
		axios.get('https://www.6itygang.com/api/view/albums/get.php?album='+album).then(function(res){
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
			axios.get('https://www.6itygang.com/api/view/albums/get.php?album='+data.album_id).then(function(res){
				commit('SET_SONG_ID',{song_id:data.id})
				commit('SET_SONGS',res)
				commit('SET_TYPE',{type:data.type})
				commit('SET_CURRENT_ARTIST',res)
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
		//commit('SET_ARTIST_DATA_LOADER')
		axios.get('https://www.6itygang.com/api/view/6ity_gang/get.php?type=info').then(function(res){
			commit('SET_MEMBERS_INFO',res)
		})

		commit('SET_ARTIST_LOADER')
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
			commit('SET_CONTACT_LOADER')//can keep it here,contacts don't change frequently
			commit('SET_CONTACT_INFO',res)
		})
	},
	changeTime({commit},data)
	{
		data = JSON.parse(data)
		commit('SET_NEW_TIME',data)
	},
	songData({commit},data)
	{
		data = JSON.parse(data)
		commit('SET_SONG_SHARE_LOADER')
		
		axios.get('https://www.6itygang.com/api/view/song/get.php?song='+data.id).then(function(res){
			//console.log(res.data[0])
			commit('SET_SONG',res)
		})
	},
	getDevice({commit})
	{
		commit('SET_DEVICE')
	}
}
})
