<template>
  <div>
    <div>
      <HomeHeader/>
    </div>
    <div>
      <v-parallax src="../static/page1.png">
      </v-parallax>
    </div>
    <div>
      <Footer class="mt-4"/>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/shared_components/HomeHeader.vue'
import Panel from '@/components/shared_components/Panel.vue'
import Footer from '@/components/shared_components/Footer.vue'
export default {
  props: [
    'title'
  ],
   components: {
    HomeHeader,
    Panel,
    Footer
  }
}
</script>

<style scoped>
</style>
