<template>
    <footer>
        <ul class="foot" :style="{background:bgcolor}">
            <li v-for="(item,index) in menuList" :key="index" class="foot-menu" @click="selectMenu(item)">
               <router-link :to="item.path">{{item.title}}</router-link>    //router-link相当于一个a标签
                
            </li>
        </ul>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            bgcolor:''
        }
    },
    props:['menuList'],
    methods:{
        selectMenu(item){
            this.bgcolor=item.bgcolor;
            this.$emit('changeTitle',item);
        }
    }
}
</script>
<style scoped>
.foot{
    display: flex;
    position: fixed;
    bottom: 0;
    width:100%;
    background-color: orange;
    height:1rem;
    line-height: 1rem;
}
.foot-menu{
    flex-grow: 1;
    text-align: center;
}
a{
    color: white;
    outline: none;
}
</style>

