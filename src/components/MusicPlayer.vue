<template>
<div>
  <center v-show="true">
    <div class="progress duration">
      <div class="progress-bar duration" style="width: 30%;"></div>
    </div>
  </center>

  <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-song-data" v-show="true">
    <center class="centering">
      <p style="color: white;">Time</p>
      <p style="color:gray;">Artist-song</p>
      <input type="range" name="volume" style="width:90%" min="0" max="10" class="volume" value="5" />
    </center>
  </nav>

  <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-music-player" v-show="true">
    <img src="/img/albums/88bc762dda179bb7d4a9b199f6b0e71a.jpg" class="song-image" width="79"  height="79"/>
    <center class="centering"> 
      <button class="btn btn-light backwards">
        <i class="fas fa-backward fa-2x"></i>
      </button>
      <button class="btn btn-light play">
        <i class="fas fa-play fa-2x"></i>
      </button>
      <button class="btn btn-light pause">
        <i class="fas fa-pause fa-2x"></i>
      </button>
      <button class="btn btn-light forward">
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
			//do nothing yet
		},
    Next()
    {

    },
    Back()
    {

    },
    Pause()
    {

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
  /*position: relative;*/
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
  height:0.2rem;
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