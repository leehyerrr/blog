<template>
  <div v-for="(a,i) in blog" :key="i" style="margin-top:70px">
    <h5 @click="$router.push('/detail/'+i)">{{a.title}}</h5>
    <p>{{a.date}}</p>
  </div>
</template>

<script>
// import blog from '../assets/blog.js'
export default {
    name: 'List',
    props:{
      blog:Array
    }
}
</script>

<style>

</style>