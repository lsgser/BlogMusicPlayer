import Vue from 'vue'
import Home from './components/Home.vue'
import Music from './components/Music.vue'
import PlayMusic from './components/PlayMusic.vue'
import Videos from './components/Videos.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/:name',name:'home',component:Home},
		{path:'/music-list/:name',name:'music-list',component:Music},
		{path:'/music-play/:name',name:'music-play',component:PlayMusic},
		{path:'/videos/:name',name:'videos',component:Videos}
	]
})
