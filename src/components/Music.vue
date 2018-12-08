<template>
<div class="container">
	<center><h2>Music</h2></center>
	<br/>
	<h3>Albums</h3>
	<div class="row">
		<div class="col-sm-4">
			<div class="card" style="width:20rem">
			<img class="card-img-top" src="/img/albums/0d6653bb2561cee52e502159b8318f89.jpg" alt="" />
			<div class="card-body">
			<h5 class="card-title">Tetsuo & Youth</h5>
			<p class="card-text">Album Description</p>
			<a href="#" class="btn btn-primary">Go To Album Songs</a>
			</div>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="card" style="width:20rem">
			<img class="card-img-top" src="/img/albums/f07522244640ee7ce3e7da20abc5cf82.jpg" alt="" />
			<div class="card-body">
			<h5 class="card-title">DAYTONA</h5>
			<p class="card-text">Album Description</p>
			<a href="#" class="btn btn-primary">Go To Album Songs</a>
			</div>
			</div>
		</div>
		<div class="col-sm-4"> 
			<div class="card" style="width:20rem">
			<img class="card-img-top" src="/img/albums/d47593e6d7df2d1bd9b01b7ef8195ff4.jpg" alt="" />
			<div class="card-body">
			<h5 class="card-title">The Waters</h5>
			<p class="card-text">Album Description</p>
			<a href="#" class="btn btn-primary">Go To Album Songs</a>
			</div>
			</div>
		</div>
	</div>
	<br>
	<h3>Singles</h3>
	<div class="row">
		<div class="col-sm-4">
			<div class="card" style="width:20rem">
			<img class="card-img-top" src="/img/albums/d2458a8d3df433abe512a6d1c8147107.jpg" alt="" />
			<div class="card-body">
			<h5 class="card-title">BANG!BOOM</h5>
			<p class="card-text">Album Description</p>
			<a href="#" class="btn btn-primary">Go To Song</a>
			</div>
			</div>
		</div>
	</div>
	<h3>Favourite Tracks</h3>
	<div class="row">
		<div class="col-sm-4">
			<div class="card" style="width:20rem">
			<img class="card-img-top" src="/img/albums/f07522244640ee7ce3e7da20abc5cf82.jpg" alt="" />
			<div class="card-body">
			<h5 class="card-title">Daytona</h5>
			<p class="card-text">Album Description</p>
			<a href="#" class="btn btn-primary">Go To Song</a>
			</div>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="card" style="width:20rem">
			<img class="card-img-top" src="/img/albums/88bc762dda179bb7d4a9b199f6b0e71a.jpg" alt="" />
			<div class="card-body">
			<h5 class="card-title">Waves</h5>
			<p class="card-text">Album Description</p>
			<a href="#" class="btn btn-primary">Go To Song</a>
			</div>
			</div>
		</div>
	</div>  
</div>
</template>

<script>
	export default{
		name:'Music',
		computed:
		{
			
		},
		methods:
		{

		},
		beforeMount:function()
		{
			
		},
		data:function()
		{
			return {albums:[],singles:[]}
		}
	}
</script>