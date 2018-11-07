<template>
  <div id="app">
    <Head :selectMenu="selectMenu"></Head>
    <router-view class="content"/>
    <Foot :menuList="menuList" @changeTitle="changeTitle"></Foot>
  </div>
</template>

<script>
import Head from '@/components/Head.vue';
import Foot from '@/components/Foot.vue';

export default {
  components:{
    Head,
    Foot
},
methods:{
    changeTitle(item){
      this.selectMenu=item;
    }
},
data(){
  return{
    menuList:[
       {
      title:"电影",
      bgcolor:'orange',
      name:'movie',
      path:'/movie'
    },
    {
      title:"音乐",
      bgcolor:'rgb(0, 150, 136)',
      name:'music',
      path:'/music'
    },
    {
      title:"书籍",
      bgcolor:"rgb(121, 85, 72)",
      name:'book',
      path:'/book'
    },
    {
      title:"图片",
      bgcolor:"rgb(63, 81, 181)",
      name:'photo',
      path:'/photo'
    } 
    ],
    selectMenu:{}    //定义一个当前选中的菜单的对象，并设置为空

   
}
}
}
</script>

<style scoped>
.content{
  margin:1rem 0;
}

</style>

