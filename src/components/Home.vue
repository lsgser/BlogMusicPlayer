<template>
<div class="container">
  <center>
  </center>
  <br/>
  <div v-show="userIsLoaded">
      <center>
        <div v-for="(u,index) in getUser" :key="index">
          <img v-bind:src="u.picture" width="200px" height="200px" class="rounded-circle img-custom" alt=""/>
          <hr/>
          <br/>
          <h4><u>About {{u.artist_name}}</u></h4>
          <p v-html="u.about">
            {{u.about}}
          </p>
        </div>
      </center>
    </div>
    <div v-show="!userIsLoaded">
      <center>
        <img class="gif-loader" src="gifs/Rolling.gif" />
        <h6>Loading Artist Description...</h6>
      </center>
  </div>
  <hr/>
  <section class="my-work">
    <center>
      <h4><u>Album Covers</u></h4>
    </center>
    <div v-show="albumIsLoaded">
      <div class="container">
        <center v-show="getAlbums.length">
          <div id="carouselControl" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item" v-for="(a,index) in getAlbums" :key="a.id" :class="{active:index==0}">
                    <img class="img-fluid" :src="a.album_cover" alt="" width="400" height="400" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselControl" role="button" style="background:#171414 no-repeat center center" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselControl" role="button" style="background:#171414 no-repeat center center" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
        </center>
      </div>
    </div>
    <div v-show="!albumIsLoaded">
      <center>
        <img class="gif-loader" src="gifs/Rolling.gif" />
        <h6>Loading Artist Album Cover Slides...</h6>
      </center>
    </div>
  </section> 
  <hr v-show="getAlbums.length"/>
  <div v-for="(u,index) in getUser" :key="index">
    <center>
      <button class="btn btn-outline-dark" @click="Music">Go To {{u.artist_name}}'s Music</button>
    </center>
  </div>
</div>  
</template>

<script>
export default {
  name:'Home',
  methods:{
    Music()
    {
      this.$router.replace({path:`/${this.getNavigationName.name}/music-list`})
      this.$store.dispatch('trueNavLink')
      this.$store.dispatch('changeNavName',this.getNavigationName.name)  
    }
  },
  computed:{
    getUser()
    {
      return this.$store.getters.getUser
    },
    getAlbums()
    {
      return this.$store.getters.getAlbums
    },
    getNavigationName()
    {
      return this.$store.getters.getNavigationName
    },
    albumIsLoaded()
    {
      return this.$store.getters.albumIsLoaded
    },
    userIsLoaded()
    {
      return this.$store.getters.userIsLoaded
    }
  },
  beforeMount:function()
  {
    if(this.$route.params.name)
    {
      this.name = this.$route.params.name
      this.$store.dispatch('loadUser',this.name)
      this.$store.dispatch('loadData',this.name)
    }
  },
  data:function()
  {
    return {name:''}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
