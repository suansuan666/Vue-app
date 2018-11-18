<template>
    <div class="container">
        <ul>
            <li v-for="(item,index) in movieList" :key="index" @click="$router.push({name:'movieDetail',params:{id:item.id}})">
                <div>                                         
                    <img :src="item.images.small" alt="">
                </div>
                <div>
                    <h4>{{item.title}}</h4>
                    <span v-for="(item,index) in item.casts" :key="index+'mc'">{{item.name}} </span>
                    <p>{{item.collect_count}}人已观看</p>
                    <p>豆瓣评分：<span class="rating">{{item.rating.average}}</span></p>
                    <p>年份:{{item.year}}</p>
                    <span v-for="(item,index) in item.genres" :key="index+'gl'">{{item}}</span>
                </div>
            </li>
        </ul>
         <div class="loading" v-show="!isFinish">
            <div class="load-content">
            <img src="@/assets/loading.gif">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            movieList:[],
            isFinish:true
        }
    },
    methods: {
       getData(){
        let url='https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5';
        axios.get(url).then(res=>{
        console.log(res);
        this.movieList=this.movieList.concat(res.data.subjects);
        this.isFinish=true;
    })
    } 
    },
    created () {
        this.$emit('switchTab','movie');
        this.getData();
    },
    mounted(){
        window.onscroll=()=>{
            console.log("可视高度："+document.documentElement.clientHeight);
            console.log("滚动高度"+document.documentElement.scrollHeight);
            console.log(document.documentElement.scrollTop);
            let cHeight=document.documentElement.clientHeight;
            let sHeight=document.documentElement.scrollHeight;
            let sTop=Math.floor(document.documentElement.scrollTop);
            if(sTop+cHeight==sHeight){
                if(this.isFinish){
                    this.getData();
                }
            }
        }
    }
}
</script>
<style scoped>
ul{
    padding:.2rem;
}
li{
    display: flex;
    border-bottom: 1px solid #999;
    padding:.5rem 0;
}
li div{
    width:0;
}
li div:first-child{
    flex-grow: 1;
}
li div:last-child{
    flex-grow: 2;
    margin-left:.5rem;
}
.rating{
    color:#faaf00;
}
.loading{
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    background: rgba(0,0,0,.5);
}
.load-content{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding:1rem;
    border-radius: .1rem;
    background: rgba(255,255,255,.5);
}
</style>
