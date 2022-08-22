<template>
{{$route.params.id}} <!-- 라우트 파라미터 값 알기  -->
  <div style="margin-top:70px">
    <h5>{{blog[$route.params.id].title}}</h5>
    <p>{{blog[$route.params.id].date}}</p>      
  </div>
  <router-view></router-view>
</template>

<script>
// import blog from '../assets/blog.js'

export default {
    props:{
      blog:Array
    }
}
</script>

<style>

</style>