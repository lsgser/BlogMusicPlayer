<template>
<div class="container">
	<center><h2><u>Music</u></h2></center>
	<br/>
	<h3>Album(s)</h3>
	<div class="row" v-if="getAlbums.length">
		<div class="col-sm-4" v-for="(a,index) in getAlbums" :key ="index">
			<div class="card" style="width:20rem">
			<img class="card-img-top" v-bind:src="a.album_cover" alt="" />
			<div class="card-body">
			<h5 class="card-title">{{a.album_name.toUpperCase()}}</h5>
			<p class="card-text">Genre : {{a.genre.toUpperCase()}}</p>
			<button class="btn btn-primary" @click="GoToAlbum(a.id)">Go To Album Songs</button>
			</div>
			</div>
		</div>
	</div>
	<div v-else>
		<h5 >No Album Uploaded For This Page</h5>	
	</div>
	<br>
	<h3>Single(s)</h3>
	<div class="row" v-if="getSingleSong.length">
		<div class="col-sm-4"  v-for="(s,index) in getSingleSong" :key ="index">
			<div class="card" style="width:20rem">
			<img class="card-img-top" v-bind:src="s.art_cover" alt="" />
			<div class="card-body">
			<h5 class="card-title">Artist(s) : {{s.artists.toUpperCase()}}</h5>
			<p class="card-text">Song : {{s.song_name.toUpperCase()}}</p>
			<p class="card-text">Genre : {{s.genre.toUpperCase()}}</p>
			<button class="btn btn-light play" v-show="getSongID===''|| getSongID !== s.id" @click="Play(s.id,s.type,s.album_id)"><i class="fas fa-play fa-2x"></i></button>
			<button class="btn btn-light pause" v-show="getPaused===s.id" @click="Pause()"><i class="fas fa-pause fa-2x"></i></button>
			</div>
			</div>
		</div>
	</div>
	<div v-else>
		<h5>No Single Uploaded For This Page</h5>
	</div>
</div>
</template>

<script>
	//import axios from 'axios';	
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