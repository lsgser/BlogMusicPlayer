<template>
<div class="container">
  <br/>
  <div class="container">
    <center>
      <h4><u>Welcome To 6ity Gang</u></h4>
        <div>
          <p v-html="getMembersInfo.about">
              {{getMembersInfo.about}}
          </p>
        </div>
    </center>
  </div>
  <hr/>
  <div class="container">
    <center>
      <h4><u>Members</u></h4>
    </center>
    <div class="row">
      <div class="col-sm-4" v-for="(d,index) in getMembersData" :key ="index">
        <div class="card" style="width:20rem">
          <img class="card-img-top" v-bind:src="d.picture" alt="" />
          <div class="card-body">
          <center>  
            <h5 class="card-title"><u>{{d.artist_name}}</u></h5>
            <button class="btn btn-primary" @click="GoToProfile(d.artist_name)">Go To {{d.artist_name}}'s Page</button>
          </center>
          </div>
        </div>
      </div>
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
<style scoped>

</style>
