<template>
    <div>
        <div class="container">
            <ul>
                <li @click="$router.push('/MusicDetail')" v-for="(items,index) in dataList" :key="index+'dl'">
                    <img :src="items.bg">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created(){
        this.getData();
        this.$emit('switchTab','music');
    },
    data(){
        return{
            dataList:[]
        }
    },
    methods:{
        getData(){
            axios.get('./data/musiclist.json')
            .then((res)=>{
                this.dataList=res.data.albums
                console.log(res);
                
            })
            .catch(()=>{

            })
        }
    }
}
</script>
<style scoped>
li{
    float: left;
    width:50%;
}
img{
    width:100%;
}
</style>

