(function(t){function e(e){for(var s,o,r=e[0],u=e[1],c=e[2],l=0,g=[];l<r.length;l++)o=r[l],i[o]&&g.push(i[o][0]),i[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);d&&d(e);while(g.length)g.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var u=a[r];0!==i[u]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},5497:function(t,e,a){"use strict";var s=a("afd8"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("MusicPlayer"),a("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-md bg-dark navbar-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"},nativeOn:{click:function(e){return t.Home(e)}}},[t._v(t._s(t.getNavigationName.name.toUpperCase()))]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavbar"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{directives:[{name:"show",rawName:"v-show",value:t.getNavBool,expression:"getNavBool"}],staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",id:"music"},nativeOn:{click:function(e){return t.Main(e)}}},[t._v("Home")])],1),a("li",{directives:[{name:"show",rawName:"v-show",value:t.getNavBool,expression:"getNavBool"}],staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/music-list",id:"music"},nativeOn:{click:function(e){return t.Music(e)}}},[t._v("Music")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{id:"contact",to:"/contacts"},nativeOn:{click:function(e){return t.Contacts(e)}}},[t._v("Contacts")])],1)])])],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u=(a("a481"),a("7f7f"),{name:"Navigation",computed:{getNavBool:function(){return this.$store.getters.getNavBool},getNavigationName:function(){return this.$store.getters.getNavigationName}},methods:{Home:function(){"6ITY GANG"!==this.getNavigationName.name&&""!==this.getNavigationName.name?(this.$router.replace({path:"/".concat(this.getNavigationName.name)}),this.$store.dispatch("trueNavLink"),this.$store.dispatch("changeNavName",this.getNavigationName.name)):(this.$router.replace({path:"/"}),this.$store.dispatch("falseNavLink"),this.$store.dispatch("changeNavName","6ITY GANG"))},Music:function(){"6ITY GANG"!==this.getNavigationName.name&&""!==this.getNavigationName.name?(this.$router.replace({path:"/".concat(this.getNavigationName.name,"/music-list")}),this.$store.dispatch("trueNavLink"),this.$store.dispatch("changeNavName",this.getNavigationName.name)):(this.$router.replace({path:"/music-list"}),this.$store.dispatch("falseNavLink"),this.$store.dispatch("changeNavName","6ITY GANG"))},Videos:function(){"6ITY GANG"!==this.getNavigationName.name&&""!==this.getNavigationName.name?(this.$router.replace({path:"/".concat(this.getNavigationName.name,"/videos")}),this.$store.dispatch("trueNavLink"),this.$store.dispatch("changeNavName",this.getNavigationName.name)):(this.$router.replace({path:"/videos"}),this.$store.dispatch("falseNavLink"),this.$store.dispatch("changeNavName","6ITY GANG"))},Contacts:function(){this.$router.replace({path:"/contacts"})},Main:function(){this.$router.replace({path:"/"}),this.$store.dispatch("falseNavLink"),this.$store.dispatch("changeNavName","6ITY GANG")}},beforeMount:function(){"6ITY GANG"!==this.$route.params.name&&void 0!==this.$route.params.name?(this.name=this.$route.params.name.toUpperCase(),this.$store.dispatch("trueNavLink"),this.$store.dispatch("changeNavName",this.name)):(this.name="6ITY GANG",this.$store.dispatch("falseNavLink"),this.$store.dispatch("changeNavName",this.name))},data:function(){return{name:"",navbar_name_display:""}}}),c=u,d=a("2877"),l=Object(d["a"])(c,o,r,!1,null,null,null);l.options.__file="Navigation.vue";var g=l.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.getFirstPlay||t.isPlaying,expression:"getFirstPlay || isPlaying"}]},[a("center",[a("div",{staticClass:"progress duration",on:{click:t.DurationChange}},[a("div",{staticClass:"progress-bar duration",style:{width:t.getChangingTime}})])]),a("nav",{directives:[{name:"show",rawName:"v-show",value:t.getFirstPlay,expression:"getFirstPlay"}],staticClass:"navbar navbar-expand-md bg-dark navbar-dark navbar-song-data"},[a("center",{staticClass:"centering"},[a("p",{staticStyle:{color:"white"}},[t._v(t._s(t.getMin)+":"+t._s(t.getSec)+"/"+t._s(t.getMinDuration)+":"+t._s(t.getSecDuration))]),a("p",{staticStyle:{color:"gray"}},[t._v(t._s(t.getArtist)+" - "+t._s(t.getSong))])])],1),a("nav",{directives:[{name:"show",rawName:"v-show",value:t.getFirstPlay,expression:"getFirstPlay"}],staticClass:"navbar navbar-expand-md bg-dark navbar-dark navbar-music-player"},[a("img",{staticClass:"song-image",attrs:{src:t.getSongCover,width:"79",height:"79"}}),a("center",{staticClass:"centering"},[a("button",{staticClass:"btn btn-light backwards",on:{click:t.Back}},[a("i",{staticClass:"fas fa-backward fa-2x"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"btn btn-light play",on:{click:t.Play}},[a("i",{staticClass:"fas fa-play fa-2x"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"btn btn-light pause",on:{click:t.Pause}},[a("i",{staticClass:"fas fa-pause fa-2x"})]),a("button",{staticClass:"btn btn-light forward",on:{click:t.Next}},[a("i",{staticClass:"fas fa-forward fa-2x"})])])],1)],1)},h=[],v=a("e814"),p=a.n(v),f=a("f499"),_=a.n(f),I={name:"MusicPlayer",methods:{Play:function(){this.$store.dispatch("playAudio",_()({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))},Next:function(){this.$store.dispatch("playNext",_()({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))},Back:function(){this.$store.dispatch("playPrevious",_()({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))},Pause:function(){this.$store.dispatch("pauseAudio",_()({id:this.getOldSongID,type:this.getType,album_id:this.getAlbumID}))},DurationChange:function(t){if(p()(this.getBarDuration)<100&&p()(this.getBarDuration)>0){var e=t.pageX-document.getElementsByClassName("progress")[0].offsetLeft,a=document.getElementsByClassName("progress")[0].clientWidth;this.$store.dispatch("changeTime",_()({clickedSection:e,barSize:a}))}}},computed:{getFirstPlay:function(){return this.$store.getters.getFirstPlay},isPlaying:function(){return this.$store.getters.isPlaying},getSongCover:function(){return this.$store.getters.getSongCover},getSong:function(){return this.$store.getters.getSongName},getArtist:function(){return this.$store.getters.getArtist},getAlbumID:function(){return this.$store.getters.getAlbumID},getOldSongID:function(){return this.$store.getters.getOldSongID},getType:function(){return this.$store.getters.getType},getMin:function(){return this.$store.getters.getMin},getSec:function(){return this.$store.getters.getSec},getMinDuration:function(){return this.$store.getters.getMinDuration},getSecDuration:function(){return this.$store.getters.getSecDuration},getChangingTime:function(){return this.$store.getters.getChangingTime+"%"},getBarDuration:function(){return this.$store.getters.getChangingTime}}},b=I,S=(a("7279"),Object(d["a"])(b,m,h,!1,null,null,null));S.options.__file="MusicPlayer.vue";var y=S.exports,N={name:"app",components:{Navigation:g,MusicPlayer:y}},D=N,w=(a("5497"),Object(d["a"])(D,i,n,!1,null,"bf03b98e",null));w.options.__file="App.vue";var L=w.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("center"),a("br"),a("section",{staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.userIsLoaded,expression:"userIsLoaded"}],staticClass:"container"},[a("center",t._l(t.getUser,function(e,s){return a("div",{key:s},[a("img",{staticClass:"rounded-circle img-custom",attrs:{src:e.picture,width:"200px",height:"200px",alt:""}}),a("hr"),a("br"),a("h4",[a("u",[t._v("About "+t._s(e.artist_name))])]),a("p",{domProps:{innerHTML:t._s(e.about)}},[t._v("\n            "+t._s(e.about)+"\n          ")])])}),0)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.userIsLoaded,expression:"!userIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading Artist Description...")])])],1)]),a("hr"),a("section",{staticClass:"my-work"},[a("center",[a("h4",[a("u",[t._v("Album Covers")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.albumIsLoaded,expression:"albumIsLoaded"}]},[a("div",{staticClass:"container"},[a("center",{directives:[{name:"show",rawName:"v-show",value:t.getAlbums.length,expression:"getAlbums.length"}]},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselControl","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},t._l(t.getAlbums,function(t,e){return a("div",{key:t.id,staticClass:"carousel-item",class:{active:0==e}},[a("img",{staticClass:"img-fluid",attrs:{src:t.album_cover,alt:"",width:"400",height:"400"}})])}),0),a("a",{staticClass:"carousel-control-prev",staticStyle:{background:"#171414 no-repeat center center"},attrs:{href:"#carouselControl",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",staticStyle:{background:"#171414 no-repeat center center"},attrs:{href:"#carouselControl",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])])])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.albumIsLoaded,expression:"!albumIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading Artist Album Cover Slides...")])])],1)],1),a("hr",{directives:[{name:"show",rawName:"v-show",value:t.getAlbums.length,expression:"getAlbums.length"}]}),t._l(t.getUser,function(e,s){return a("div",{key:s},[a("center",[a("button",{staticClass:"btn btn-primary",on:{click:t.Music}},[t._v("Go To "+t._s(e.artist_name)+"'s Music")])])],1)})],2)},T=[],A={name:"Home",methods:{Music:function(){this.$router.replace({path:"/".concat(this.getNavigationName.name,"/music-list")}),this.$store.dispatch("trueNavLink"),this.$store.dispatch("changeNavName",this.getNavigationName.name)}},computed:{getUser:function(){return this.$store.getters.getUser},getAlbums:function(){return this.$store.getters.getAlbums},getNavigationName:function(){return this.$store.getters.getNavigationName},albumIsLoaded:function(){return this.$store.getters.albumIsLoaded},userIsLoaded:function(){return this.$store.getters.userIsLoaded}},beforeMount:function(){this.$route.params.name&&(this.name=this.$route.params.name,this.$store.dispatch("loadUser",this.name),this.$store.dispatch("loadData",this.name))},data:function(){return{name:""}}},E=A,P=Object(d["a"])(E,C,T,!1,null,"63e4bd96",null);P.options.__file="Home.vue";var $=P.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("center",[a("h2",[a("u",[t._v("Music")])])]),a("br"),a("h3",{staticClass:"col-sm-1"},[t._v("Album(s)")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.albumIsLoaded,expression:"albumIsLoaded"}]},[t.getAlbums.length?a("div",{staticClass:"row"},t._l(t.getAlbums,function(e,s){return a("div",{key:s,staticClass:"col-sm-4"},[a("div",{staticClass:"card",staticStyle:{width:"20rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.album_cover,alt:""}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.album_name.toUpperCase()))]),a("p",{staticClass:"card-text"},[t._v("Genre : "+t._s(e.genre.toUpperCase()))]),a("center",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){t.GoToAlbum(e.id)}}},[t._v("Go To Album Songs")])])],1)])])}),0):a("div",[a("h5",[t._v("No Album Uploaded For This Page")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.albumIsLoaded,expression:"!albumIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading Albums...")])])],1),a("br"),a("h3",{staticClass:"col-sm-1"},[t._v("Single(s)")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.singleIsLoaded,expression:"singleIsLoaded"}]},[t.getSingleSong.length?a("div",{staticClass:"row"},t._l(t.getSingleSong,function(e,s){return a("div",{key:s,staticClass:"col-sm-4"},[a("div",{staticClass:"card",staticStyle:{width:"20rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.art_cover,alt:""}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Artist(s) : "+t._s(e.artists.toUpperCase()))]),a("p",{staticClass:"card-text"},[t._v("Song : "+t._s(e.song_name.toUpperCase()))]),a("p",{staticClass:"card-text"},[t._v("Genre : "+t._s(e.genre.toUpperCase()))]),a("button",{directives:[{name:"show",rawName:"v-show",value:""===t.getSongID||t.getSongID!==e.id,expression:"getSongID===''|| getSongID !== s.id"}],staticClass:"btn btn-light play",on:{click:function(a){t.Play(e.id,e.type,e.album_id)}}},[a("i",{staticClass:"fas fa-play fa-2x"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.getPaused===e.id,expression:"getPaused===s.id"}],staticClass:"btn btn-light pause",on:{click:function(e){t.Pause()}}},[a("i",{staticClass:"fas fa-pause fa-2x"})])])])])}),0):a("div",[a("h5",{staticClass:"col-sm-4"},[t._v("No Single Uploaded For This Page")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.singleIsLoaded,expression:"!singleIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading Singles...")])])],1)],1)},O=[],M={name:"Music",computed:{getAlbums:function(){return this.$store.getters.getAlbums},getSingleSong:function(){return this.$store.getters.getSingleSong},isPlaying:function(){return this.$store.getters.isPlaying},isFirstPlay:function(){return this.$store.getters.getFirstPlay},getSongID:function(){return this.$store.getters.getSongID},getPaused:function(){return this.$store.getters.getPaused},albumIsLoaded:function(){return this.$store.getters.albumIsLoaded},singleIsLoaded:function(){return this.$store.getters.singleIsLoaded}},methods:{GoToAlbum:function(t){this.name?this.$router.push({path:"/".concat(this.name,"/music-play/").concat(t)}):this.$router.push({path:"/music-play/".concat(t)})},Play:function(t,e,a){var s={id:t,type:e,album_id:a};this.$store.dispatch("playAudio",_()(s))},Pause:function(){this.$store.dispatch("pauseAudio")}},beforeMount:function(){this.name=this.$route.params.name,this.$store.dispatch("loadData",this.name)},data:function(){return{name:"",albums:[],singles:[]}}},k=M,G=Object(d["a"])(k,x,O,!1,null,null,null);G.options.__file="Music.vue";var R=G.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"list-group"},[a("center",[a("br"),a("div",{directives:[{name:"show",rawName:"v-show",value:t.albumInfoIsLoaded,expression:"albumInfoIsLoaded"}]},[a("h4",[a("u",[t._v(t._s(t.getAlbumInfo.album_name))])]),a("img",{staticClass:"img-thumbnail",attrs:{src:t.getAlbumInfo.album_cover,width:"400",height:"400",alt:""}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.albumInfoIsLoaded,expression:"!albumInfoIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading Album Cover...")])])],1),a("br"),a("br"),a("h5",[a("u",[t._v("Track List")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.songIsLoaded,expression:"songIsLoaded"}]},[t._l(t.getSongList,function(e,s){return t.getSongList.length>0?a("div",{key:s},[a("a",{staticClass:"list-group-item list-group-item-action",class:{active:parseInt(t.getOldSongID)===parseInt(e.id)},staticStyle:{cursor:"pointer"},on:{click:function(a){t.Play(e.id,e.type,e.album_id,s)}}},[t._v(t._s(s+1)+". "+t._s(e.song_name))])]):t._e()}),0==t.getSongList.length?a("div",[a("center",[a("h5",[t._v("No songs for this album yet.")])])],1):t._e()],2),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.songIsLoaded,expression:"!songIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading Tracks...")])])],1)])],1)])},B=[],F={name:"PlayMusic",methods:{Play:function(t,e,a,s){this.index=s,this.$store.dispatch("playAudio",_()({id:t,type:e,album_id:a}))}},computed:{getAlbumInfo:function(){return this.$store.getters.getAlbumInfo},getIndex:function(){return this.index},getOldSongID:function(){return this.$store.getters.getOldSongID},getSongList:function(){return this.$store.getters.getSongList},songIsLoaded:function(){return this.$store.getters.songIsLoaded},albumInfoIsLoaded:function(){return this.$store.getters.albumInfoIsLoaded}},beforeMount:function(){var t=this.$route.params.id;this.$store.dispatch("loadAlbumData",t)},data:function(){return{index:null}}},j=F,Y=(a("f174"),Object(d["a"])(j,U,B,!1,null,null,null));Y.options.__file="PlayMusic.vue";var V=Y.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("center",[a("h3",[t._v("Videos")])])],1)},J=[],W={name:"Videos"},z=W,Q=Object(d["a"])(z,H,J,!1,null,null,null);Q.options.__file="Videos.vue";var X=Q.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("div",[a("center",[a("h3",[a("u",[t._v("Welcome To 6ity Gang")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.artistDataIsLoaded,expression:"artistDataIsLoaded"}]},[a("p",{domProps:{innerHTML:t._s(t.getMembersInfo.about)}},[t._v("\n              "+t._s(t.getMembersInfo.about)+"\n          ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.artistDataIsLoaded,expression:"!artistDataIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading 6ity Gang's Description...")])])],1)])],1),a("hr"),a("div",[a("center",[a("h3",[a("u",[t._v("Artists")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.artistIsLoaded,expression:"artistIsLoaded"}]},[t.getMembersData.length?a("div",{staticClass:"row"},t._l(t.getMembersData,function(e,s){return a("div",{key:s,staticClass:"col-sm-4"},[a("div",{staticClass:"card text-center",staticStyle:{width:"20rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:e.picture,alt:""}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[a("u",[t._v(t._s(e.artist_name))])]),a("button",{staticClass:"btn btn-primary",on:{click:function(a){t.GoToProfile(e.artist_name)}}},[t._v("Go To "+t._s(e.artist_name)+"'s Page")])])])])}),0):t._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.artistIsLoaded,expression:"!artistIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading 6ity Gang's Artists Profiles...")])])],1)],1),a("hr")])},K=[],Z={name:"Welcome",methods:{GoToProfile:function(t){this.$router.push({path:"/".concat(t)}),this.$store.dispatch("changeNavName",t),this.$store.dispatch("trueNavLink")}},computed:{getUser:function(){return this.$store.getters.getUser},getAlbums:function(){return this.$store.getters.getAlbums},getMembersInfo:function(){return this.$store.getters.getMembersInfo},getMembersData:function(){return this.$store.getters.getMembersData},getNavigationName:function(){return this.$store.getters.getNavigationName},artistIsLoaded:function(){return this.$store.getters.artistIsLoaded},artistDataIsLoaded:function(){return this.$store.getters.artistDataIsLoaded}},beforeMount:function(){this.$store.dispatch("loadWelcomeData")},data:function(){return{name:""}}},tt=Z,et=Object(d["a"])(tt,q,K,!1,null,null,null);et.options.__file="Welcome.vue";var at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("center",[a("h3",[a("u",[t._v("Contacts")])])]),a("br"),a("div",{directives:[{name:"show",rawName:"v-show",value:t.contactIsLoaded,expression:"contactIsLoaded"}]},[a("center",[a("h5",[a("u",[t._v("Email:")])]),a("p",[a("i",{staticClass:"fas fa-envelope",staticStyle:{"font-size":"1.2rem"}},[t._v(" "+t._s(t.getContactInfo.email))])]),a("h5",[a("u",[t._v("Phone:")])]),a("p",[a("i",{staticClass:"fas fa-phone",staticStyle:{"font-size":"1.2rem"}},[t._v(" "+t._s(t.getContactInfo.number))])]),a("h5",[a("u",[t._v("Developer:")])]),a("router-link",{staticClass:"nav-link",attrs:{to:"/developer"}},[t._v("Creator of this site")])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.contactIsLoaded,expression:"!contactIsLoaded"}]},[a("center",[a("img",{staticClass:"gif-loader",attrs:{src:"gifs/Rolling.gif"}}),a("h6",[t._v("Loading Contact Info...")])])],1)],1)},it=[],nt={name:"Contacts",computed:{getContactInfo:function(){return this.$store.getters.getContactInfo},contactIsLoaded:function(){return this.$store.getters.contactIsLoaded}},beforeMount:function(){this.$store.dispatch("loadContactData")}},ot=nt,rt=Object(d["a"])(ot,st,it,!1,null,null,null);rt.options.__file="Contacts.vue";var ut=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("section",{staticClass:"container"},[a("div",{staticClass:"container"},[a("center",[a("h2",[a("u",[t._v("Lesego Seritili")])]),a("h3",[t._v("I developed this site and will constantly maintain it and improve it from time to time.")])])],1)]),a("hr"),a("section",{staticClass:"my-work"},[a("div",{staticClass:"container"},[a("center",[a("h4",[a("u",[t._v("Skills")])]),a("h5",[t._v("I'm a full stack web developer that is proficient in the following languages and frameworks(not all of them are included on the list below):")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("CSS3")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("PYTHON")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("PHP")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("MYSQL")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("VUE.js")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("JavaScript")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("JQUERY")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("BOOTSTRAP 3 & 4")]),a("li",{staticClass:"list-group-item list-group-item"},[t._v("JAVA")]),a("p",[t._v("I developed this site with PHP, VUEjs, JQuery and Bootstrap 4,I also added a few CSS3 custom style sheets that I made.")]),a("p",[t._v("This site works via a REST API that I created with PHP 7 where the PHP scripts communicate with the MYSQL relational database to send a json response to the client.")]),a("hr"),a("h4",[a("u",[t._v("Contacts")])]),a("p",[t._v("If you want a website or a web app you can contact me on:")]),a("p",[t._v("Email: "),a("a",{attrs:{href:"mailto:lsg.seritili@gmail.com"}},[t._v("lsg.seritili@gmail.com")])]),a("p",[t._v("Home: "),a("span",{staticStyle:{color:"#007bff"}},[t._v("016 592 5003")])]),a("p",[t._v("Mobile1(Also WhatsApp): "),a("span",{staticStyle:{color:"#007bff"}},[t._v("083 208 7080")])]),a("p",[t._v("Mobile2: "),a("span",{staticStyle:{color:"#007bff"}},[t._v("065 941 9807")])])])],1)]),a("hr")])},dt=[],lt={name:"Developer"},gt=lt,mt=Object(d["a"])(gt,ct,dt,!1,null,null,null);mt.options.__file="Developer.vue";var ht=mt.exports,vt=a("8c4f");s["a"].use(vt["a"]);var pt=new vt["a"]({mode:"hash",routes:[{path:"/",name:"welcome",component:at},{path:"/contacts/",name:"contacts",component:ut},{path:"/developer",name:"developer",component:ht},{path:"/:name",name:"home",component:$},{path:"/:name/music-list/",name:"music-list",component:R},{path:"/:name/music-play/:id",name:"music-play",component:V},{path:"/:name/videos/",name:"videos",component:X}]}),ft=(a("ac6a"),a("2f62")),_t=a("bc3a"),It=a.n(_t);s["a"].use(ft["a"],It.a);var bt=new ft["a"].Store({state:{albums:[],songs:[],songCover:"",singleSong:[],songID:"",albumID:"",isPlaying:!1,isPaused:!1,firstPlay:!1,user:[],albumInfo:[],sec:0,min:0,songName:"",album:"",genre:"",secDuration:0,minDuration:0,time:0,songIndex:0,durationCount:0,artist:"",audio:{},pausedSong:"",oldSongID:"",type:"",songList:[],songdirectory:"",nav_links:!1,membersInfo:[],membersData:[],navigationName:"",contactInfo:[],artistIsLoaded:!1,artistDataIsLoaded:!1,singleIsLoaded:!1,albumIsLoaded:!1,userIsLoaded:!1,contactIsLoaded:!1,albumInfoIsLoaded:!1,songIsLoaded:!1},mutations:{SET_ALBUMS:function(t,e){t.albums=[],e.data.forEach(function(e){t.albums.push(e)}),t.albumIsLoaded=!0},SET_SINGLES:function(t,e){t.singleSong=[],e.data.forEach(function(e){t.singleSong.push(e)}),t.singleIsLoaded=!0},SET_USER:function(t,e){t.user=e.data,t.userIsLoaded=!0},SET_ALBUM_INFO:function(t,e){t.albumInfo=e.data,t.albumInfoIsLoaded=!0},SET_SONGS:function(t,e){t.songs=[],e.data.forEach(function(e){t.songs.push(e)})},PLAY_SONG:function(t){t.songIndex=0,t.songs.length>1?t.songs.forEach(function(e,a){t.songID===e.id&&t.oldSongID!==e.id?(t.directory=e.directory,t.songIndex=a,t.albumID=e.album_id,t.songID=e.id,t.songCover=e.art_cover,t.songName=e.song_name,t.artist=e.artists,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=e.id,t.pausedSong=t.songID,t.audio.duration>0?(t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(e.directory)):(t.audio={},t.audio=new Audio(e.directory)),t.audio.play(),t.audio.addEventListener("timeupdate",function(){t.sec=p()(t.audio.currentTime%60),t.min=p()(t.audio.currentTime/60%60),t.sec<10&&(t.sec="0"+t.sec),t.secDuration=p()(t.audio.duration%60),t.minDuration=p()(t.audio.duration/60%60),t.secDuration<10&&(t.secDuration="0"+t.secDuration),t.audio.currentTime>0&&(t.time=Math.floor(100/t.audio.duration*t.audio.currentTime)),t.audio.ended&&(t.songID="",t.pausedSong="",t.isPlaying=!1,t.audio.pause())})):t.songID===e.id&&t.oldSongID===e.id&&(t.directory=e.directory,t.songIndex=a,t.albumID=e.album_id,t.songID=e.id,t.songCover=e.art_cover,t.songName=e.song_name,t.artist=e.artists,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=e.id,t.pausedSong=t.songID,t.audio.play(),t.audio.addEventListener("timeupdate",function(){t.sec=p()(t.audio.currentTime%60),t.min=p()(t.audio.currentTime/60%60),t.sec<10&&(t.sec="0"+t.sec),t.secDuration=p()(t.audio.duration%60),t.minDuration=p()(t.audio.duration/60%60),t.secDuration<10&&(t.secDuration="0"+t.secDuration),t.audio.currentTime>0&&(t.time=Math.floor(100/t.audio.duration*t.audio.currentTime)),t.audio.ended&&(t.songID="",t.pausedSong="",t.isPlaying=!1,t.audio.pause())}))}):t.songs.forEach(function(e,a){t.songID===e.id&&t.oldSongID!==e.id?(t.directory=e.directory,t.artist=e.artists,t.songIndex=a,t.albumID=e.album_id,t.songID=e.id,t.songCover=e.art_cover,t.songName=e.song_name,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=e.id,t.pausedSong=t.songID,t.audio.duration>0?(t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(e.directory)):(t.audio={},t.audio=new Audio(e.directory)),t.audio.play(),t.audio.addEventListener("timeupdate",function(){t.sec=p()(t.audio.currentTime%60),t.min=p()(t.audio.currentTime/60%60),t.sec<10&&(t.sec="0"+t.sec),t.secDuration=p()(t.audio.duration%60),t.minDuration=p()(t.audio.duration/60%60),t.secDuration<10&&(t.secDuration="0"+t.secDuration),t.audio.currentTime>0&&(t.time=Math.floor(100/t.audio.duration*t.audio.currentTime)),t.audio.ended&&(t.songID="",t.pausedSong="",t.isPlaying=!1,t.audio.pause())})):t.songID===e.id&&t.oldSongID===e.id&&(t.directory=e.directory,t.songIndex=a,t.albumID=e.album_id,t.songID=e.id,t.songCover=e.art_cover,t.songName=e.song_name,t.artist=e.artists,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=e.id,t.pausedSong=t.songID,t.audio.play(),t.audio.addEventListener("timeupdate",function(){t.sec=p()(t.audio.currentTime%60),t.min=p()(t.audio.currentTime/60%60),t.sec<10&&(t.sec="0"+t.sec),t.secDuration=p()(t.audio.duration%60),t.minDuration=p()(t.audio.duration/60%60),t.secDuration<10&&(t.secDuration="0"+t.secDuration),t.audio.currentTime>0&&(t.time=Math.floor(100/t.audio.duration*t.audio.currentTime)),t.audio.ended&&(t.songID="",t.pausedSong="",t.isPlaying=!1,t.audio.pause())}))})},SET_SONG_ID:function(t,e){t.songID=e.song_id},SET_PAUSE:function(t){t.songID="",t.pausedSong="",t.isPlaying=!1,t.audio.pause()},SET_TYPE:function(t,e){t.type=e.type},SET_SONG_LIST:function(t,e){t.songList=[],e.data.forEach(function(e){t.songList.push(e)}),t.songIsLoaded=!0},SET_PREVIOUS:function(t,e){if(1==e.type)t.songID=t.oldSongID,t.pausedSong=t.oldSongID,t.isPlaying=!0,t.isPaused=!1,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory);else if(t.songs.length>1){var a=t.songs.length-1;t.songIndex>0?(t.directory=t.songs[t.songIndex-1].directory,t.albumID=t.songs[t.songIndex-1].album_id,t.songID=t.songs[t.songIndex-1].id,t.songCover=t.songs[t.songIndex-1].art_cover,t.songName=t.songs[t.songIndex-1].song_name,t.artist=t.songs[t.songIndex-1].artists,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=t.songs[t.songIndex-1].id,t.pausedSong=t.songID,t.songIndex=t.songIndex-1,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory)):0==t.songIndex&&(t.directory=t.songs[a].directory,t.albumID=t.songs[a].album_id,t.songID=t.songs[a].id,t.songCover=t.songs[a].art_cover,t.songName=t.songs[a].song_name,t.artist=t.songs[a].artists,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=t.songs[a].id,t.pausedSong=t.songID,t.songIndex=a,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory))}else t.isPlaying=!0,t.isPaused=!1,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory);t.audio.play(),t.audio.addEventListener("timeupdate",function(){t.sec=p()(t.audio.currentTime%60),t.min=p()(t.audio.currentTime/60%60),t.sec<10&&(t.sec="0"+t.sec),t.secDuration=p()(t.audio.duration%60),t.minDuration=p()(t.audio.duration/60%60),t.secDuration<10&&(t.secDuration="0"+t.secDuration),t.audio.currentTime>0&&(t.time=Math.floor(100/t.audio.duration*t.audio.currentTime)),t.audio.ended&&(t.songID="",t.pausedSong="",t.isPlaying=!1,t.audio.pause())})},SET_NEXT:function(t,e){if(1==e.type)t.songID=t.oldSongID,t.pausedSong=t.oldSongID,t.isPlaying=!0,t.isPaused=!1,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory);else if(t.songs.length>1){var a=t.songs.length-1;t.songIndex<a?(t.directory=t.songs[t.songIndex+1].directory,t.albumID=t.songs[t.songIndex+1].album_id,t.songID=t.songs[t.songIndex+1].id,t.songCover=t.songs[t.songIndex+1].art_cover,t.songName=t.songs[t.songIndex+1].song_name,t.artist=t.songs[t.songIndex+1].artists,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=t.songs[t.songIndex+1].id,t.pausedSong=t.songID,t.songIndex=t.songIndex+1,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory)):t.songIndex==a&&(t.directory=t.songs[0].directory,t.albumID=t.songs[0].album_id,t.songID=t.songs[0].id,t.songCover=t.songs[0].art_cover,t.songName=t.songs[0].song_name,t.artist=t.songs[0].artists,t.firstPlay=!0,t.isPlaying=!0,t.isPaused=!1,t.oldSongID=t.songs[0].id,t.pausedSong=t.songID,t.songIndex=0,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory))}else t.isPlaying=!0,t.isPaused=!1,t.audio.pause(),t.audio.currentTime=0,t.audio={},t.audio=new Audio(t.directory);(1==e.type&&""==!t.songID||1!=e.type)&&t.audio.play(),t.audio.addEventListener("timeupdate",function(){t.sec=p()(t.audio.currentTime%60),t.min=p()(t.audio.currentTime/60%60),t.sec<10&&(t.sec="0"+t.sec),t.secDuration=p()(t.audio.duration%60),t.minDuration=p()(t.audio.duration/60%60),t.secDuration<10&&(t.secDuration="0"+t.secDuration),t.audio.currentTime>0&&(t.time=Math.floor(100/t.audio.duration*t.audio.currentTime)),t.audio.ended&&(t.songID="",t.pausedSong="",t.isPlaying=!1,t.audio.pause())})},SET_NAV_TRUE:function(t){t.nav_links=!0},SET_NAV_FALSE:function(t){t.nav_links=!1},SET_MEMBERS_INFO:function(t,e){t.membersInfo=e.data,t.artistDataIsLoaded=!0},SET_MEMBERS_DATA:function(t,e){t.membersData=[],e.data.forEach(function(e){t.membersData.push(e)}),t.artistIsLoaded=!0},SET_NAVIGATION_NAME:function(t,e){t.navigationName=e},SET_CONTACT_INFO:function(t,e){t.contactInfo=e.data,t.contactIsLoaded=!0},SET_ARTIST_LOADER:function(t){t.artistIsLoaded=!1},SET_ARTIST_DATA_LOADER:function(t){t.artistDataIsLoaded=!1},SET_ALBUM_LOADER:function(t){t.albumIsLoaded=!0},SET_SINGLE_LOADER:function(t){t.singleIsLoaded=!1},SET_USER_LOADER:function(t){t.userIsLoaded=!1},SET_CONTACT_LOADER:function(t){t.contactIsLoaded=!1},SET_ALBUM_INFO_LOADER:function(t){t.albumInfoIsLoaded=!1},SET_SONG_LOADER:function(t){t.songIsLoaded=!1},SET_NEW_TIME:function(t,e){var a=e.clickedSection*t.audio.duration/e.barSize;t.audio.currentTime=a}},getters:{getSongs:function(t){return t.songs},getAlbums:function(t){return t.albums},getSongID:function(t){return t.songID},getFirstPlay:function(t){return t.firstPlay},isPaused:function(t){return t.isPaused},isPlaying:function(t){return t.isPlaying},getAlbumID:function(t){return t.albumID},getSongCover:function(t){return t.songCover},getSingleSong:function(t){return t.singleSong},getUser:function(t){return t.user},getAlbumInfo:function(t){return t.albumInfo},getSongName:function(t){return t.songName},getArtist:function(t){return t.artist},getPaused:function(t){return t.pausedSong},getType:function(t){return t.type},getOldSongID:function(t){return t.oldSongID},getSongList:function(t){return t.songList},getSongIndex:function(t){return t.songIndex},getNavBool:function(t){return t.nav_links},getMinDuration:function(t){return t.minDuration},getSecDuration:function(t){return t.secDuration},getMin:function(t){return t.min},getSec:function(t){return t.sec},getChangingTime:function(t){return t.min==t.minDuration&&t.sec==t.secDuration&&0!=t.min&&0!=t.sec?100:t.time},getMembersInfo:function(t){return t.membersInfo},getMembersData:function(t){return t.membersData},getNavigationName:function(t){return t.navigationName},getContactInfo:function(t){return t.contactInfo},artistIsLoaded:function(t){return t.artistIsLoaded},artistDataIsLoaded:function(t){return t.artistDataIsLoaded},singleIsLoaded:function(t){return t.singleIsLoaded},albumIsLoaded:function(t){return t.albumIsLoaded},userIsLoaded:function(t){return t.userIsLoaded},contactIsLoaded:function(t){return t.contactIsLoaded},albumInfoIsLoaded:function(t){return t.albumInfoIsLoaded},songIsLoaded:function(t){return t.songIsLoaded}},actions:{loadData:function(t,e){var a=t.commit;It.a.get("https://www.6itygang.com/api/view/albums/get.php?name="+e).then(function(t){a("SET_ALBUM_LOADER"),a("SET_ALBUMS",t)}).catch(function(t){console.log(t)}),It.a.get("https://www.6itygang.com/api/view/songs/get.php?name="+e+"&album=0").then(function(t){a("SET_SINGLE_LOADER"),a("SET_SINGLES",t)})},loadUser:function(t,e){var a=t.commit;It.a.get("https://www.6itygang.com/api/view/user/get.php?name="+e).then(function(t){a("SET_USER_LOADER"),a("SET_USER",t)})},loadAlbumData:function(t,e){var a=t.commit;It.a.get("https://www.6itygang.com/api/view/albums/get.php?album_info="+e).then(function(t){a("SET_ALBUM_INFO_LOADER"),a("SET_ALBUM_INFO",t)}),It.a.get("https://www.6itygang.com/api/view/albums/get.php?album="+e).then(function(t){a("SET_SONG_LOADER"),a("SET_SONG_LIST",t)})},playAudio:function(t,e){var a=t.commit;e=JSON.parse(e),1==p()(e.type)?It.a.get("https://www.6itygang.com/api/view/songs/get.php?song="+e.id).then(function(t){a("SET_SONG_ID",{song_id:e.id}),a("SET_SONGS",t),a("SET_TYPE",{type:e.type}),a("PLAY_SONG")}):It.a.get("https://www.6itygang.com/api/view/albums/get.php?album="+e.album_id).then(function(t){a("SET_SONG_ID",{song_id:e.id}),a("SET_SONGS",t),a("SET_TYPE",{type:e.type}),a("PLAY_SONG")})},pauseAudio:function(t){var e=t.commit;e("SET_PAUSE")},playNext:function(t,e){var a=t.commit;e=JSON.parse(e),a("SET_NEXT",e)},playPrevious:function(t,e){var a=t.commit;e=JSON.parse(e),a("SET_PREVIOUS",e)},trueNavLink:function(t){var e=t.commit;e("SET_NAV_TRUE")},falseNavLink:function(t){var e=t.commit;e("SET_NAV_FALSE")},loadWelcomeData:function(t){var e=t.commit;It.a.get("https://www.6itygang.com/api/view/6ity_gang/get.php?type=info").then(function(t){e("SET_ARTIST_DATA_LOADER"),e("SET_MEMBERS_INFO",t)}),It.a.get("https://www.6itygang.com/api/view/6ity_gang/get.php?type=members").then(function(t){e("SET_ARTIST_LOADER"),e("SET_MEMBERS_DATA",t)})},changeNavName:function(t,e){var a=t.commit;a("SET_NAVIGATION_NAME",{name:e})},loadContactData:function(t){var e=t.commit;It.a.get("https://www.6itygang.com/api/view/6ity_gang/get.php?type=info").then(function(t){e("SET_CONTACT_LOADER"),e("SET_CONTACT_INFO",t)})},changeTime:function(t,e){var a=t.commit;e=JSON.parse(e),a("SET_NEW_TIME",e)}}});s["a"].config.productionTip=!1,new s["a"]({store:bt,router:pt,render:function(t){return t(L)}}).$mount("#app")},7279:function(t,e,a){"use strict";var s=a("7904"),i=a.n(s);i.a},7904:function(t,e,a){},a0aa:function(t,e,a){},afd8:function(t,e,a){},f174:function(t,e,a){"use strict";var s=a("a0aa"),i=a.n(s);i.a}});
//# sourceMappingURL=app.833210a7.js.map