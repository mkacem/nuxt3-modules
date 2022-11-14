<template>
  <div>
    <h2>{{$t('hi')}} Module B</h2>
    <router-link :to="localePath('module-a')">module A</router-link><br>
    <Article />
  </div>
</template>

<script>
const Article  = defineAsyncComponent(() => import('../components/Article.vue'));
export default {
  name: 'Blog',
  components:{
    Article
  }
}
</script>
