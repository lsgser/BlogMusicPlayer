<template>
<div class="container">
	<center><h2><u>Music</u></h2></center>
	<br/>
	<h3 class="col-sm-1"><u>Album(s)</u></h3>
	<div v-show="albumIsLoaded">
		<div class="row" v-if="getAlbums.length">
			<div class="col-sm-4" v-for="(a,index) in getAlbums" :key ="index">
				<div class="card" style="width:20rem">
					<img class="card-img-top" v-bind:src="a.album_cover" alt="" />
					<div class="card-body">
						<h5 class="card-title">{{a.album_name.toUpperCase()}}</h5>
						<p class="card-text">Genre : {{a.genre.toUpperCase()}}</p>
						<center>
							<button class="btn btn-dark" @click="GoToAlbum(a.id)">Go To Album Songs</button>
						</center>
					</div>
					<a v-bind:href="'https://www.facebook.com/share.php?u=https://www.6itygang.com/%23/'+getProfileName+'/music-play/'+a.id+'&quote=Click+Here+to+Stream+or+to+Download+'+getProfileName+'%27s+album+called+'+a.album_name" class="btn btn-primary btn-lg mb-2 facebook" target="_blank"><i class="fab fa-facebook"></i>
					</a>
					<a v-bind:href="'https://twitter.com/share?url=https://www.6itygang.com/%23/'+getProfileName+'/music-play/'+a.id+'&text=Click+Here+to+Stream+or+Download+'+getProfileName+'%27s+album+called+'+a.album_name+'+on+the+following+link:&hashtags=6itygang,6ity_gang'" class="btn btn-info btn-lg twitter" target="_blank"><i class="fab fa-twitter"></i>
					</a>
					<a v-bind:href="'https://wa.me/?text=Stream+or+Download+'+getProfileName+'%27s+album+called+'+a.album_name+'+on:%0Ahttps://www.6itygang.com/%23/'+getProfileName+'/music-play/'+a.id" v-show="isMobile" class="btn btn-success btn-lg mt-2 whatsapp" target="_blank"><i class="fab fa-whatsapp"></i>
          			</a>
				</div>
			</div>
		</div>
		<div v-else>
			<h5 >No Album Uploaded For This Page</h5>	
		</div>
	</div>
	<div v-show="!albumIsLoaded">
      <center>
        <img class="gif-loader" src="gifs/Rolling.gif" />
        <h6>Loading Albums...</h6>
      </center>
    </div>
	<br>
	<h3 class="col-sm-1"><u>Single(s)</u></h3>
	<div v-show="singleIsLoaded">
		<div class="row" v-if="getSingleSong.length">
			<div class="col-sm-4"  v-for="(s,index) in getSingleSong" :key ="index">
				<div class="card" style="width:20rem">
					<img class="card-img-top" v-bind:src="s.art_cover" alt="" />
					<div class="card-body">
						<h5 class="card-title">Artist(s) : {{s.artists.toUpperCase()}}</h5>
						<p class="card-text">Song : {{s.song_name.toUpperCase()}}</p>
						<p class="card-text">Genre : {{s.genre.toUpperCase()}}</p>
						<button class="btn btn-outline-dark play" v-show="getSongID===''|| getSongID !== s.id" @click="Play(s.id,s.type,s.album_id)"><i class="fas fa-play fa-2x"></i></button>
						<button class="btn btn-outline-dark pause" v-show="getPaused===s.id" @click="Pause()"><i class="fas fa-pause fa-2x"></i></button>
						<!--
						<a class="btn btn-outline-dark float-right" v-bind:download="s.song_name" v-bind:href="s.directory"><i class="fas fa-download fa-2x"></i></a>
						-->
						<button class="btn btn-outline-dark float-right" @click="Download(s.id)"><i class="fas fa-download fa-2x"></i></button>
					</div>
					<a v-bind:href="'https://www.facebook.com/share.php?u=https://www.6itygang.com/%23/song/'+s.id+'&quote='+s.song_name+'+By+'+s.artists+'+.+Listen+to+it+on+6itygang.com/%23/song/'+s.id" class="btn btn-primary btn-lg mb-2 facebook" target="_blank"><i class="fab fa-facebook"></i>
					</a>
					<a v-bind:href="'https://twitter.com/share?url=https://www.6itygang.com/%23/song/'+s.id+'&text='+s.song_name+'+By+'+s.artists+'+.+Listen+to+it+on+the+following+link:&hashtags=6itygang,6ity_gang'" class="btn btn-info btn-lg twitter" target="_blank"><i class="fab fa-twitter"></i>
					</a>
					<a v-bind:href="'https://wa.me/?text='+s.song_name+'+By+'+s.artists+'.+%0AListen+to+it+on:+%0Ahttps://www.6itygang.com/%23/song/'+s.id" v-show="isMobile" class="btn btn-success btn-lg mt-2 whatsapp" target="_blank"><i class="fab fa-whatsapp"></i>
          			</a>
				</div>
			</div>
		</div>
		<div v-else>
			<h5 class="col-sm-4">No Single Uploaded For This Page</h5>
		</div>
	</div>
	<div v-show="!singleIsLoaded">
      <center>
        <img class="gif-loader" src="gifs/Rolling.gif" />
        <h6>Loading Singles...</h6>
      </center>
    </div>
</div>
</template>

<script>
	export default{
		name:'Music',
		computed:
		{
			getAlbums(){
				return this.$store.getters.getAlbums
			},
			getSingleSong(){
				return this.$store.getters.getSingleSong
			},
			isPlaying()
			{
				return this.$store.getters.isPlaying
			},
			isFirstPlay()
			{
				return this.$store.getters.getFirstPlay
			},
			getSongID()
			{
				return this.$store.getters.getSongID
			},
			getPaused()
			{
				return this.$store.getters.getPaused
			},
			albumIsLoaded()
			{
				return this.$store.getters.albumIsLoaded
			},
			singleIsLoaded()
			{
				return this.$store.getters.singleIsLoaded
			},
			getProfileName()
			{
				return this.name
			},
			isMobile()
			{
				return this.$store.getters.isMobile
			}
		},
		methods:
		{
			GoToAlbum(album)
			{
				if(this.name)
				{
					this.$router.push({path:`/${this.name}/music-play/${album}`})
				}
				else
				{
					this.$router.push({path:`/music-play/${album}`})	
				}
			},
			Play(id,type,album_id)
			{
				var data={id:id,type:type,album_id:album_id}
				this.$store.dispatch('playAudio',JSON.stringify(data))
			},
			Pause()
			{
				this.$store.dispatch('pauseAudio')
			},
			Download(song)
			{
				window.open("https://www.6itygang.com/api/download/get.php?song="+song)
			}			
		},
		beforeMount:function()
		{
			this.name = this.$route.params.name
			this.$store.dispatch('loadData',this.name)
		},
		data:function()
		{
			return {name:'',albums:[],singles:[]}
		}
	}
</script>