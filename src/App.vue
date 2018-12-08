<template>
  <div id="app">
    <Navigation/>
    <MusicPlayer/>
    <router-view/>    
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import MusicPlayer from './components/MusicPlayer'

export default {
  name: 'app',
  components: {
    Navigation,
    MusicPlayer   
  },
  beforeMount:function()
  {
    
  }
}

</script>

<style scoped>
#app {
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.container{
    margin-bottom:2.2cm;
  }
</style>
