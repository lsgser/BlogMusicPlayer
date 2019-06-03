<template>
	<div class="container">
		<div v-show="getSongShareIsLoaded">
			<div class="align-center">
				<img v-bind:src="getSongCover" class="cover img-thumbnail"/>
				<h5 class="title">{{getSongName}} - {{getArtist}}</h5>
				<button div class="btn btn-light  btn-lg  song play" v-show="!isPlaying" @click="Play">
					<i class="fas fa-play fa-2x"></i>
				</button>
				<button class="btn btn-light btn-lg song pause" v-show="isPlaying" @click="Pause">
        			<i class="fas fa-pause fa-2x"></i>
      			</button>
			</div>
		</div>
		<div v-show="!getSongShareIsLoaded">
			<center>
	        	<img class="gif-loader" src="gifs/Rolling.gif" />
	        	<h6>Loading Song...</h6>
      		</center>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Song',
		computed:
		{
			getSongCover()
			{
				return this.$store.getters.getSongCover
			},
			getArtist()
			{
				return this.$store.getters.getArtist
			},
			getSongName()
			{
				return this.$store.getters.getSongName
			},
			getType()
			{
				return this.$store.getters.getType
			},
			getSongID()
			{
				return this.$store.getters.getSongID
			},
			getAlbumID()
			{
				return this.$store.getters.getAlbumID
			},
			getSongShareIsLoaded()
			{
				return this.$store.getters.getSongShareIsLoaded
			},
			isPlaying()
			{
				return this.$store.getters.isPlaying
			},
			getOldSongID()
			{
				return this.$store.getters.getOldSongID
			},
			getFirstPlay()
			{
				return this.$store.getters.getFirstPlay
			}
		},
		methods:
		{
			Play()
			{
				var data 
				if(this.getSongID)//first time playing the audio
				{
					 data={id:this.getSongID,type:this.getType,album_id:this.getAlbumID}
				}	
				else 
				{
					/*
						once a user pauses the audio the this.getSongID will be empty,so we have to 
						use the older stored value i.e this.getOldSongID getter that contains the 
						original id value that existed when the play button was clicked for the first 
						time
					*/
					data={id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}	
				}
				
				//console.log(data)
				this.$store.dispatch('playAudio',JSON.stringify(data))
			},
			Pause()
			{

				this.$store.dispatch('pauseAudio')
			}
		},
		beforeMount:function()
		{
			//console.log(this.$route.params.id)
			var data = {id:this.$route.params.id}

			//Another song has been played,meaning you're on the main pages
			if(!isNaN(this.$route.params.id) && this.getFirstPlay)
			{
				this.$router.replace({path:'/'})
			}
			this.$store.dispatch('songData',JSON.stringify(data))
		}
	}
</script>

<style>
.align-center{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
}

.align-center .btn.btn-light.song.play{
	position: absolute;
	/*opacity: 0.9;*/
	margin-bottom: 1em;
}

.align-center .btn.btn-light.song.pause{
	position: absolute;
	/*opacity: 0.9;*/
	margin-bottom: 1em;
}


.align-center .title{
		position:absolute;
		color:white;
		background: black;
		margin-bottom: 25em;
		opacity:0.8;
}

@media(max-width: 575px)
{
	.align-center .title{
		position:absolute;
		color:white;
		background: black;
		opacity:0.8;
		margin-bottom:20em;
	}	
}

</style>