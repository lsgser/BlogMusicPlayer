<template>
	<div class="container">
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
			}
		},
		method:
		{
			playSong()
			{
				
			}
		}
	}
</script>