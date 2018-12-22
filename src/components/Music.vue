<template>
<div class="container">
	<center><h2>Music</h2></center>
	<br/>
	<h3>Albums</h3>
	<div class="row">
		<div class="col-sm-4" v-for="(a,index) in getAlbums" :key ="index">
			<div class="card" style="width:20rem">
			<img class="card-img-top" v-bind:src="a.album_cover" alt="" />
			<div class="card-body">
			<h5 class="card-title">{{a.album_name}}</h5>
			<p class="card-text">Genre:{{a.genre}}</p>
			<a href="#" class="btn btn-primary">Go To Album Songs</a>
			</div>
			</div>
		</div>
	</div>
	<br>
	<h3>Singles</h3>
	<div class="row">
		<div class="col-sm-4" v-for="(s,index) in getSingleSong" :key ="index">
			<div class="card" style="width:20rem">
			<img class="card-img-top" v-bind:src="s.art_cover" alt="" />
			<div class="card-body">
			<h5 class="card-title">Artist(s):{{s.artists}}</h5>
			<p class="card-text">Genre:{{s.genre}}</p>
			<a href="#" class="btn btn-primary">Play Song</a>
			</div>
			</div>
		</div>
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
			}
		},
		methods:
		{
			
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