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
		<button type="button" data-toggle="modal" data-target="#shareModal" class="btn btn-primary ml-1" style="margin-top:2em;">Share on Social Media</button>
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

<div class="modal" id="shareModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Share on Social Media</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
      	<div class="table-responsive">
	       <table class="table table-striped" style="scroll-direction">
			  <thead>
			    <tr>
			      <th scope="col">Track</th>
		       	  <th scope="col">Song</th>
		       	  <th scope="col">Share on Facebook</th>
		       	  <th scope="col">Share on Twitter</th>
		       	  <th scope="col" v-show="isMobile">Share on WhatsApp</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="(s,index) in getSongList" :key="index">
	       			<td scope="row">{{index+1}}</td>
	       			<td>{{s.song_name}}</td>
	       			<td>
		       			<a v-bind:href="'https://www.facebook.com/share.php?u=https://www.6itygang.com/%23/song/'+s.id+'&quote='+s.song_name+'+By+'+s.artists+'+.+Listen+to+it+on+6itygang.com/%23/song/'+s.id" class="btn btn-primary" target="_blank"><i class="fab fa-facebook"></i>
						</a>
					</td>
	       			<td><a v-bind:href="'https://twitter.com/share?url=https://www.6itygang.com/%23/song/'+s.id+'&text='+s.song_name+'+By+'+s.artists+'+.+Listen+to+it+on+the+following+link:&hashtags=6itygang,6ity_gang'" class="btn btn-info" target="_blank"><i class="fab fa-twitter"></i>
	       				</a>
	       			</td>
	       			<td>
		       			<a v-bind:href="'https://wa.me/?text='+s.song_name+'+By+'+s.artists+'.+%0AListen+to+it+on:+%0Ahttps://www.6itygang.com/%23/song/'+s.id" v-show="isMobile" class="btn btn-success" target="_blank"><i class="fab fa-whatsapp"></i>
	          			</a>
	       			</td>
	       		</tr>
			  </tbody>
			</table>
		</div>
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
			},
			isMobile()
			{
				return this.$store.getters.isMobile
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

	.twitter{
	  border-radius: 0;
	}

	.facebook{
	  border-radius: 0;
	}
</style>