<template>
<div>
  <!--
  <div>Post: {{ $route.params.name }}</div>
  -->
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <router-link class="btn btn-outline-light" to="/" @click.native="Home">{{getNavigationName.name.toUpperCase()}}</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <div class="d-inline-flex justify-content-center">
        <li class="nav-item m-1" v-show="getNavBool">
          <router-link class="btn btn-outline-light" to="/" @click.native="Main" id="music">Home</router-link>
        </li>
        <li class="nav-item m-1" v-show="getNavBool">
          <router-link class="btn btn-outline-light" to="/music-list" @click.native="Music" id="music">Music</router-link>
        </li>
        <!--
          <li class="nav-item" v-show="getNavBool">
            <router-link class="nav-link" id="video" to="/videos" @click.native="Videos">Videos</router-link>
          </li>
        -->
        <li class="nav-item m-1">
          <router-link class="btn btn-outline-light" id="contact" to="/contacts" @click.native="Contacts">Contact</router-link>
        </li>
      </div>
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
    },
    getNavigationName()
    {
      return this.$store.getters.getNavigationName
    }
  },
	methods:{
		Home()
    {
      if(this.getNavigationName.name!=='6ITY GANG' && this.getNavigationName.name !=='')
      {
        this.$router.replace({path:`/${this.getNavigationName.name}`})
        this.$store.dispatch('trueNavLink')
        this.$store.dispatch('changeNavName',this.getNavigationName.name)  
      }
      else
      {
        this.$router.replace({path:'/'})
        this.$store.dispatch('falseNavLink')
        this.$store.dispatch('changeNavName','6ITY GANG')
      }
    },
    Music()
    {
      if(this.getNavigationName.name!=='6ITY GANG' && this.getNavigationName.name !=='')
      {
        this.$router.replace({path:`/${this.getNavigationName.name}/music-list`})
        this.$store.dispatch('trueNavLink')
        this.$store.dispatch('changeNavName',this.getNavigationName.name)
      }
      else
      {
        this.$router.replace({path:`/music-list`}) 
        this.$store.dispatch('falseNavLink')
        this.$store.dispatch('changeNavName','6ITY GANG')
      }
    },
    Videos()
    {
      if(this.getNavigationName.name!=='6ITY GANG' && this.getNavigationName.name !=='')
      {
        this.$router.replace({path:`/${this.getNavigationName.name}/videos`})
        this.$store.dispatch('trueNavLink')
        this.$store.dispatch('changeNavName',this.getNavigationName.name)
      }
      else
      {
        this.$router.replace({path:`/videos`})
        this.$store.dispatch('falseNavLink')
        this.$store.dispatch('changeNavName','6ITY GANG') 
      }
    },
    Contacts()
    {
        this.$router.replace({path:`/contacts`}) 
    },
    Main()
    {
      this.$router.replace({path:`/`})
      this.$store.dispatch('falseNavLink')
      this.$store.dispatch('changeNavName','6ITY GANG')
    }
	},
  beforeMount:function()
  {
    if(this.$route.params.name !== '6ITY GANG' && this.$route.params.name !==undefined)
    {
      this.name = this.$route.params.name.toUpperCase()
      this.$store.dispatch('trueNavLink')
      this.$store.dispatch('changeNavName',this.name)  
    }
    else
    {
      this.name ='6ITY GANG'
      this.$store.dispatch('falseNavLink')
      this.$store.dispatch('changeNavName',this.name)
    }
  },
  data:function()
  {
    return {name:'',navbar_name_display:''}
  } 
}
</script>