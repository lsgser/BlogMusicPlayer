<template>
<div>
  <!--
  <div>Post: {{ $route.params.name }}</div>
  -->
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <router-link class="navbar-brand" to="/" @click.native="Home">{{navbar_name_display}}</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" v-show="getNavBool">
        <router-link class="nav-link" to="/music-list" @click.native="Music" id="music">Music</router-link>
      </li>
      <!--
        <li class="nav-item" v-show="getNavBool">
          <router-link class="nav-link" id="video" to="/videos" @click.native="Videos">Videos</router-link>
        </li>
      -->
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
  computed:{
    getNavBool()
    {
      return this.$store.getters.getNavBool
    }
  },
	methods:{
		Home()
    {
      if(this.name)
      {
        this.$router.replace({path:`/${this.name}`})
        this.$store.dispatch('trueNavLink')  
      }
      else
      {
        this.$router.replace({path:'/'})
        this.$store.dispatch('falseNavLink')
      }
    },
    Music()
    {
      if(this.name)
      {
        this.$router.replace({path:`/${this.name}/music-list`})
        this.$store.dispatch('trueNavLink')
      }
      else
      {
        this.$router.replace({path:`/music-list`}) 
        this.$store.dispatch('falseNavLink')
      }
    },
    Videos()
    {
      if(this.name)
      {
        this.$router.replace({path:`/${this.name}/videos`})
        this.$store.dispatch('trueNavLink')
      }
      else
      {
        this.$router.replace({path:`/videos`})
        this.$store.dispatch('falseNavLink') 
      }
    },
    Contacts()
    {
        this.$router.replace({path:`/contacts`}) 
    }
	},
  beforeMount:function()
  {
    if(this.$route.params.name)
    {
      this.name = this.$route.params.name.toUpperCase()
      this.navbar_name_display = this.$route.params.name.toUpperCase()
      this.$store.dispatch('trueNavLink')  
    }
    else
    {
      this.name =''
      this.navbar_name_display = '6ITY GANG'
      this.$store.dispatch('falseNavLink')
    }
  },
  data:function()
  {
    return {name:'',navbar_name_display:''}
  } 
}
</script>