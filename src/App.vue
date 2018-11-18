<template>
  <div id="app">
    <Head :selectMenu="selectMenu"></Head>
    <router-view class="content" @switchTab="switchTab"/>
    <Foot :menuList="menuList" @changeTitle="changeTitle" :footBgcolor="selectMenu.bgcolor"></Foot>
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
    },
    switchTab(itemName){
      this.menuList.forEach(item => {
        if(item.name==itemName){
          this.selectMenu=item;
          // this.footBgcolor=item.bgcolor;
        }
      });
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
      title:"翻译",
      bgcolor:"rgb(63, 81, 181)",
      name:'translate',
      path:'/translate'
    } 
    ],
    selectMenu:{}  ,  //定义一个当前选中的菜单的对象，并设置为空
       
   
}
}
}
</script>

<style scoped>
.content{
  margin:1rem 0;
}

</style>

