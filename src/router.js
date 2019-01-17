import Vue from 'vue'
import Home from './components/Home.vue'
import Music from './components/Music.vue'
import PlayMusic from './components/PlayMusic.vue'
import Videos from './components/Videos.vue'
import Welcome from './components/Welcome.vue';
import Contacts from './components/Contacts.vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
	mode:'history',
	//base:__dirname,
	routes:[
		{path:'/',name:'welcome',component:Welcome},
		{path:'/contacts/',name:'contacts',component:Contacts},
		{path:'/:name',name:'home',component:Home},
		{path:'/:name/music-list/',name:'music-list',component:Music},
		{path:'/:name/music-play/:id',name:'music-play',component:PlayMusic},
		{path:'/:name/videos/',name:'videos',component:Videos}
	]
})
