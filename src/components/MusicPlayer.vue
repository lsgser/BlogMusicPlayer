<template>
<div v-show="getFirstPlay || isPlaying">
  <center>
    <div class="progress duration" @click="DurationChange">
      <div class="progress-bar duration" v-bind:style="{width:getChangingTime}"></div>
    </div>
  </center>

  <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-song-data" v-show="getFirstPlay" >
    <center class="centering">
      <p style="color: white;">{{getMin}}:{{getSec}}/{{getMinDuration}}:{{getSecDuration}}</p>
      <p style="color:gray;">{{getArtist}} - {{getSong}}</p>
      <!--
        <input type="range" name="volume" v-bind:style="{width: 90}" min="0" max="10" class="volume" value="5" />
      -->
    </center>
  </nav>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-music-player" v-show="getFirstPlay">
    <img v-bind:src="getSongCover" class="song-image" width="79"  height="79"/>
    <center class="centering"> 
      <button class="btn btn-light backwards" @click="Back">
        <i class="fas fa-backward fa-2x"></i>
      </button>
      <button class="btn btn-light play" v-show="!isPlaying" @click="Play">
        <i class="fas fa-play fa-2x"></i>
      </button>
      <button class="btn btn-light pause" v-show="isPlaying" @click="Pause">
        <i class="fas fa-pause fa-2x"></i>
      </button>
      <button class="btn btn-light forward" @click="Next">
        <i class="fas fa-forward fa-2x"></i>
      </button>
    </center>   
  </nav> 
</div>
</template>

<script>

export default {
	name:'MusicPlayer',
	methods:{
		Play()
		{
			this.$store.dispatch('playAudio',JSON.stringify({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))
		},
    Next()
    {
      this.$store.dispatch('playNext',JSON.stringify({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))
    },
    Back()
    {
      this.$store.dispatch('playPrevious',JSON.stringify({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))
    },
    Pause()
    {
      this.$store.dispatch('pauseAudio',JSON.stringify({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))
    },
    DurationChange(e)
    {

      if(parseInt(this.getBarDuration) < 100 && parseInt(this.getBarDuration) > 0)
      {
        let mouseX = e.pageX - document.getElementsByClassName('progress')[0].offsetLeft
        let barsize = document.getElementsByClassName('progress')[0].clientWidth
        //console.log(document.getElementsByClassName('progress'))
        this.$store.dispatch('changeTime',JSON.stringify({clickedSection:mouseX,barSize:barsize}))
      }

    }
	},
  computed:{
    getFirstPlay(){
      return this.$store.getters.getFirstPlay
    },
    isPlaying(){
      return this.$store.getters.isPlaying
    },
    getSongCover(){
      return this.$store.getters.getSongCover
    },
    getSong(){
      return this.$store.getters.getSongName
    },
    getArtist(){
      return this.$store.getters.getArtist
    },
    getAlbumID()
    {
      return this.$store.getters.getAlbumID
    },
    getOldSongID()
    {
      return this.$store.getters.getOldSongID
    },
    getType()
    {
      return this.$store.getters.getType
    },
    getMin()
    {
      return this.$store.getters.getMin
    },
    getSec()
    {
      return this.$store.getters.getSec
    },
    getMinDuration()
    {
      return this.$store.getters.getMinDuration
    },
    getSecDuration()
    {
      return this.$store.getters.getSecDuration
    },
    getChangingTime()
    {
      return this.$store.getters.getChangingTime + '%'
    },
    getBarDuration()
    {
      return this.$store.getters.getChangingTime
    }

  } 
}
</script>

<style>
nav.navbar.navbar-expand-md.bg-dark.navbar-dark.navbar-music-player
{
  /*position: relative;
  
  position:relative;
  min-height: 70px;
  bottom: 0px;
  z-index: 150;
  */
  position:fixed;
  bottom:0;
  left:0;
  right: 0;
  min-height: 50px;
  z-index: 150;
  padding-top: 0px;
}
nav.navbar.navbar-expand-md.bg-dark.navbar-dark.navbar-song-data
{
  position:relative;
  min-height: 70px;
  z-index: 150;
}
button.btn{
  text-align: center;
}

p.pull-right{
  float: right !important;
}

p.pull-left{
  float: left !important;
}

img.song-image{
  margin-left:-18px;
  margin-bottom: -9px;
  cursor:pointer;
}  

center.centering{
  /*Puts the play,pause,rewind,forward buttons to the center of the navbar*/
  margin:auto ;
}

div.progress-bar.duration{
  /*
  margin-top: -4px;
  border-radius: 0px;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  padding-left: 0px;
  padding-right: 0px;  
  text-align: center;
  background-color: #337ab7;
  */
  margin-top: -4px;
}

div.progress.duration{
  /*
  margin-bottom: 0px;
  height: 5px;
  margin-left: 200px;
  margin-right: 200px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 0px;
  padding-left:0px;
  padding-right: 0px;
  */
  cursor: pointer;
  border-radius:0;
  height:0.7rem;
  background-color: #7e8083;
}

p.time-duration{
  
}

input.volume{
  border-radius:10px;
}

input[type="range"] {
  width: 90%;
}
</style>