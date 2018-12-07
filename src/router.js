import Vue from 'vue'
import Home from './components/Home.vue'
import Music from './components/Music.vue'
import PlayMusic from './components/PlayMusic.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',name:'home',component:Home},
		{path:'/music-list',name:'music-list',component:Music},
		{path:'/music-play',name:'music-play',component:PlayMusic}
	]
})
