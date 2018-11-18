<template>
    <div>
        <aplayer v-if="isIf" autoplay
         :music="dataList[0]"
         :list="dataList"
         :showLrc='true'
         />
    </div>
</template>
<script>
import aplayer from 'vue-aplayer'
import axios from 'axios'
export default {
    components:{
        aplayer
    },
    data(){
        return{
            dataList:[],
            isIf:false
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('./data/musicdata.json')
            .then((res=>{
                console.log(res);
            this.dataList=res.data.musicData;
            this.isIf=true;
            for(var i=0;i<res.data.musicData.length;i++){
                this.dataList[i].lrc=location.origin+location.pathname+res.data.musicData[i].lrc;
                console.log(this.dataList[i].lrc);   
            }     
            }))
            .catch(()=>{

            })

        }
    }
}
</script>
<style scoped>

</style>


