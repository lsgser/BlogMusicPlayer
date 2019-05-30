<template>
<div class="container">
  <br/>
  <div>
    <center>
      <h3><u>Welcome To 6ity Gang</u></h3>
        <div v-show="artistDataIsLoaded">
          <p v-html="getMembersInfo.about">
              {{getMembersInfo.about}}
          </p>
        </div>
        <div v-show="!artistDataIsLoaded">
          <center>
           <img class="gif-loader" src="gifs/Rolling.gif" />
           <h6>Loading 6ity Gang's Description...</h6>
          </center>
        </div>
    </center>
  </div>
  <hr/>
  <div>
    <center>
      <h3><u>Artists</u></h3>
    </center>
    <div v-show="artistIsLoaded">
      <div class="row" v-if="getMembersData.length">
        <div class="col-sm-4" v-for="(d,index) in getMembersData" :key ="index">
          <div class="card text-center" style="width:20rem">
            <img class="card-img-top" v-bind:src="d.picture" alt="" />
            <div class="card-body">  
              <h5 class="card-title"><u>{{d.artist_name}}</u></h5>
                <button class="btn btn-dark" @click="GoToProfile(d.artist_name)">Go To {{d.artist_name}}'s Page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!artistIsLoaded">
      <center>
        <img class="gif-loader" src="gifs/Rolling.gif" />
        <h6>Loading 6ity Gang's Artists Profiles...</h6>
      </center>
    </div>
  </div> 
  <hr/>
</div>  
</template>

<script>
export default {
  name:'Welcome',
  methods:{
    GoToProfile(name)
    {
      this.$router.push({path:`/${name}`})
      this.$store.dispatch('changeNavName',name)
      this.$store.dispatch('trueNavLink')
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
    getMembersInfo()
    {
      return this.$store.getters.getMembersInfo
    },
    getMembersData()
    {
      return this.$store.getters.getMembersData
    },
    getNavigationName()
    {
      return this.$store.getters.getNavigationName
    },
    artistIsLoaded()
    {
      return this.$store.getters.artistIsLoaded
    },
    artistDataIsLoaded()
    {
      return this.$store.getters.artistDataIsLoaded
    }
  },
  beforeMount:function()
  {
    this.$store.dispatch('loadWelcomeData')
  },
  data:function()
  {
    return {name:''}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
