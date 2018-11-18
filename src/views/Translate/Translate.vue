<template>
    <div>
        <form action="post">
            <input type="text">
            <input type="button" value="提交">
        </form>
    </div>
</template>
<script>
import axios from 'axios';
var md5 = require('md5');
export default {
     created () {
        this.$emit('switchTab','translate');
        this.postData();
    },
    data(){
        return{

        }
    },
    methods:{
        postData(){
            var appKey = '61eb30dd254b8e09';
            var key = 'd7VNmzNlSnTKAw2ChhDMY4hTtIP28BWt';//注意：暴露appSecret，有被盗用造成损失的风险
            var salt = (new Date).getTime();
            var query = '你好';
            // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
            var from = '';
            var to = 'en';
            var str1 = appKey + query + salt +key;
            var sign = md5(str1);
            axios.get(`https://bird.ioliu.cn/v2?url=http://openapi.youdao.com/api?salt=${salt}&q=${query}&from=${from}&to=${to}&appKey=${appKey}&sign=${sign}`)
            .then(function(res){
                console.log(res);
            })
        }
    }
    

}
</script>
<style scoped>

</style>