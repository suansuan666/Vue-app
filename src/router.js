import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie/Movie.vue'
import Book from './views/Book/Book.vue'
import Music from './views/Music/Music.vue'
import Photo from './views/Photo/Photo.vue'  //引进名叫Photo的组件


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/movie'   //让首页跳转的时候直接跳到movie这个界面
    },
    {
      path:'/movie',
      name:'movie',
      component:Movie
    },
    {
      path:'/book',
      name:'book',
      component:Book
    },
    {
      path:'/music',
      name:'music',
      component:Music
    },
    {
      path:'/photo',
      name:'photo',
      component:Photo
    },
  ]
    
});
