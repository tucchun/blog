<template>
  <div>
    <blog-header />
    <blog-article />
    <blog-footer />
  </div>
</template>
<script>
import Header from '@/components/header/Index'
import Article from '@/components/article/Index'
import Footer from '@/components/footer/Index'
export default {
  components: {
    BlogHeader: Header,
    BlogArticle: Article,
    BlogFooter: Footer
  }
}
</script>
<style scoped>

</style>
