<template>
<div>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <router-link class="navbar-brand" to="/">ROCABALFO</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/music-list">Music</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/videos">Videos</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contacts">Contacts</router-link>
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
		ChangeClass()
		{
			//do nothing yet
		}
	}  
}
</script>