<template>
	<div class="container">
		<center><h3><u>Contacts</u></h3></center>
		<br>
		<div v-show="contactIsLoaded">
			<center>
				<h5><u>Email:</u></h5>
				<p>
					<i class="fas fa-envelope" style="font-size: 1.2rem;"> {{getContactInfo.email}}</i>
				</p>
				<h5><u>Phone:</u></h5>
				<p>
					<i class="fas fa-phone" style="font-size: 1.2rem;"> {{getContactInfo.number}}</i>
				</p>
				<h5><u>Developer:</u></h5>
				<router-link class="nav-link" to="/developer">Creator of this site</router-link>
			</center>
		</div>
		<div v-show="!contactIsLoaded">
			<center>
        		<img class="gif-loader" src="gifs/Rolling.gif" />
        		<h6>Loading Contact Info...</h6>
      		</center>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Contacts',
		computed:
		{
			getContactInfo(){
				return this.$store.getters.getContactInfo
			},
			contactIsLoaded()
			{
				return this.$store.getters.contactIsLoaded
			}
		},
		beforeMount:function(){
			this.$store.dispatch('loadContactData')
		}
	}
</script>
<style>
.container{
	font-family:'Permanent Marker' ,'Avenir', Helvetica, sans-serif !important;
	font-size: 1.2em;	
}

</style>