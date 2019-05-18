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
  }
}

</script>

<style scoped>
#app {
  
  font-family:'Permanent Marker' ,'Avenir', Helvetica, sans-serif !important;
  font-size: 1em;
  /*
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.container{
    margin-bottom:2.2cm;
}

@media (max-width:576px) {
  img.gif-loader{
    width: 0.05rem;
    height: 0.05rem;
  }
}

</style>
