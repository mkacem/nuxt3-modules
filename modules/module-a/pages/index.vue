<template>
  <div>
    <h2>{{$t('hi')}} Module A</h2>
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
