<template>
    <div class="container">
        <!-- <img :src="itemList.images.large"> -->
        <div class="intro">
            <h3>{{itemList.title}}</h3>
            <h5>原名：{{itemList.original_title}}</h5>
            <h6>豆瓣评分：{{itemList.rating.average}}</h6>
            <p>介绍：{{itemList.summary}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Axios from 'axios';
export default {
    data(){
        return{
            itemList:[]
        }
    },
    created() {
        let url=`https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/subject/${this.$route.params.id}`;
        axios.get(url).then(res=>{
            console.log(res);
            this.itemList=res.data;
        })
    },
    
}
</script>
<style scoped>
.container{
    padding: .2rem;
}
h3{
    margin:0 auto;
    display: block;
}
h6{
    color: orange;
    margin-top:0.1rem;
}
h5{
    color: #778899;
}
p{
    margin-top:.3rem;
}
</style>

