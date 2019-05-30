<template>
<div class="container">
<div class="list-group">
<center>
	<br>
	<div v-show="albumInfoIsLoaded">
		<h4><u>{{getAlbumInfo.album_name}}</u></h4>
		<img  v-bind:src="getAlbumInfo.album_cover" width="400" height="400" alt="" class="img-thumbnail">
	</div>
	<div v-show="!albumInfoIsLoaded">
		<center>
        	<img class="gif-loader" src="gifs/Rolling.gif" />
        	<h6>Loading Album Cover...</h6>
      	</center>
	</div>
	<div v-show="songIsLoaded">
		<button type="button" data-toggle="modal" data-target="#downloadModal" class="btn btn-success" style="margin-top:2em;">Click Here To Download</button>
	</div>
	<br>
	<br>
  	<h5><u>Track List</u></h5>
  	<div v-show="songIsLoaded">
		<div v-if="getSongList.length>0" v-for="(s,index) in getSongList" :key="index">
		<a class="list-group-item list-group-item-action" style="cursor: pointer;" @click="Play(s.id,s.type,s.album_id,index)" :class="{active:parseInt(getOldSongID)===parseInt(s.id)}">{{index+1 }}. {{s.song_name}}</a>
		</div>
		<div v-if="getSongList.length==0">
		<center>
			<h5>No songs for this album yet.</h5>
		</center>
		</div>
	</div>
	<div v-show="!songIsLoaded">
		<center>
        	<img class="gif-loader" src="gifs/Rolling.gif" />
        	<h6>Loading Tracks...</h6>
      	</center>
	</div>
</center>
</div>

<div class="modal" id="downloadModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Download Tracks</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
      	<!--
       	<table class="table table-striped" v-show="songIsLoaded">
       		<thead>
	       		<tr>
	       			<th scope="col">Track</th>
	       			<th scope="col">Song</th>
	       			<th scope="col"></th>
	       		</tr>
	       	</thead>
	       	<tbody>
		       	<div >	
		       		<tr v-for="(s,index) in getSongList" :key="index">
		       			<td scope="row">{{index+1}}</td>
		       			<td>{{s.song_name}}</td>
		       			<td><button type="button" class="btn btn-outline-primary" @click="Download(s.directory,s.song_name)">Download</button></td>
		       		</tr>
		       	</div>
       		</tbody>
       	</table>
       -->
       <table class="table table-striped">
		  <thead>
		    <tr>
		      <th scope="col">Track</th>
	       	  <th scope="col">Song</th>
	       	  <th scope="col"></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(s,index) in getSongList" :key="index">
       			<td scope="row">{{index+1}}</td>
       			<td>{{s.song_name}}</td>
       			<td><button type="button" class="btn btn-outline-primary" @click="Download(s.id)">Download</button></td>
       			<!--
       			<td><a :href="'http://localhost/Balfo/api/download/get.php?song='+s.id" class="btn btn-outline-primary" > Download</a></td>
       			-->
       		</tr>
		  </tbody>
		</table>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
</div>
</template>

<script>
	export default{
		name:'PlayMusic',
		methods:{
			Play(id,type,album_id,index)
			{
				this.index=index
				this.$store.dispatch('playAudio',JSON.stringify({id:id,type:type,album_id:album_id}))
			},
			Download(song)
			{
				window.open("https://www.6itygang.com/api/download/get.php?song="+song)
			}
		},
		computed:{
			getAlbumInfo()
			{
				return this.$store.getters.getAlbumInfo
			},
			getIndex()
			{
				return this.index
			},
			getOldSongID()
			{
				return this.$store.getters.getOldSongID
			},
			getSongList()
			{
				return this.$store.getters.getSongList
			},
			songIsLoaded()
			{
				return this.$store.getters.songIsLoaded
			},
			albumInfoIsLoaded()
			{
				return this.$store.getters.albumInfoIsLoaded
			}
		},
		beforeMount:function(){
				var album_id=this.$route.params.id
				this.$store.dispatch('loadAlbumData',album_id)
		},
		data:function(){
			return {index:null}
		}
	}
</script>
<style>
	.list-group-item{
		background-color:#ede9e9;
	}
</style>