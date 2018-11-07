<template>
    <header :style="{background:selectMenu.bgcolor}">
        <span class="home">首页</span>
        <h3 class="title">{{selectMenu.title}}</h3>
    </header>
</template>
<script>
export default {
    props: ['selectMenu']
}
</script>
<style scoped>
header{
    height: 1rem;
    line-height:1rem;
    background-color:orange;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    /* color: #ffffff; */
    
}
.home{
    display: inline-block;
}
.title{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,50%);
    display: inline-block;
}
</style>

