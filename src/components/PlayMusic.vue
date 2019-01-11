<template>
<div class="container">
<div class="list-group">
<center>
  <br>
  <h4><u>{{getAlbumInfo.album_name}}</u></h4>
  <img  v-bind:src="getAlbumInfo.album_cover" width="400" height="400" alt="" class="img-thumbnail">
  <br>
  <br>
  
  <h5><u>Track List</u></h5>
  <div v-if="getSongList.length>0" v-for="(s,index) in getSongList" :key="index">
  <a class="list-group-item list-group-item-action" style="cursor: pointer;" @click="Play(s.id,s.type,s.album_id,index)" :class="{active:parseInt(getOldSongID)===parseInt(s.id)}">{{index+1 }}. {{s.song_name}}</a>
  </div>
  <div v-if="getSongList.length==0">
	<center>
		<h5>No songs for this album yet.</h5>
	</center>
  </div>
</center>
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
			Pause(){

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