<template>
<div class="container">
  <center>
  </center>
  <br/>
  <section class="container">
    <div class="container">
    <center>
      <!--
      <button type="button" class="btn btn-light">
        <i class="fas fa-play fa-2x"></i>
      </button>
      -->
      <img v-bind:src="getUser[0].picture" width="200px" height="200px" class="rounded-circle img-custom" alt=""/>
      <hr/>
      <br/>
      <h4>About {{getUser[0].artist_name}}</h4>
      <p v-html="getUser[0].about">
        {{getUser[0].about}}
      </p>
    </center>
    </div>
  </section>
  <hr/>
  <section class="my-work">
    <div class="container">
    <center>
      <h4>My Musical Works</h4>
      <!--
      <i class="fas fa-play" ></i>
      --> 
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
  </section> 
  <hr/>
</div>  
</template>

<script>
export default {
  name:'Home',
  methods:{

  },
  computed:{
    getUser()
    {
      return this.$store.getters.getUser
    },
    getAlbums()
    {
      return this.$store.getters.getAlbums
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
