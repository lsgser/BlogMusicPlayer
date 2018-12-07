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
      <img src="/img/albums/d47593e6d7df2d1bd9b01b7ef8195ff4.jpg" width="200px" height="200px" class="rounded-circle img-custom" alt=""/>
      <hr/>
      <br/>
      <h4>About Balfo</h4>
      <p>
        Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, 
        and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
      </p>
    </center>
    </div>
  </section>
  <hr/>
  <section class="my-work">
    <div class="container">
    <center>
      <h4>Some Of My Musical Works</h4>
      <!--
      <i class="fas fa-play" ></i>
      --> 
      <div id="carouselControl" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="img-fluid" src="/img/albums/88bc762dda179bb7d4a9b199f6b0e71a.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
               <img class="img-fluid" src="/img/albums/4afaf1ec09752a87f56f2a05a8a05acc.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="img-fluid" src="/img/albums/0d6653bb2561cee52e502159b8318f89.jpg" alt="Third slide"/>
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
  name:'Home'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
