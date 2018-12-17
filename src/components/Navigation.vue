<template>
<div>
  <!--
  <div>Post: {{ $route.params.name }}</div>
  -->
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <router-link class="navbar-brand" to="/" @click.native="Home">ROCABALFO</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/music-list" @click.native="Music" id="music">Music</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" id="video" to="/videos" @click.native="Videos">Videos</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" id="contact" to="/contacts" @click.native="Contacts">Contacts</router-link>
      </li>
    </ul>
  </div>	
</nav> 
</div>
</template>

<script>

export default {
	name:'Navigation',
	methods:{
		Home()
    {
      this.$router.replace({path:`/${this.name}`})
    },
    Music()
    {
      this.$router.replace({path:`/${this.name}/music-list`})
    },
    Videos()
    {
      this.$router.replace({path:`/${this.name}/videos`})
    },
    Contacts()
    {
      this.$router.replace({path:`/${this.name}/contacts`})
    }
	},
  beforeMount:function()
  {
    this.name = this.$route.params.name
  },
  data:function()
  {
    return {name:''}
  } 
}
</script>