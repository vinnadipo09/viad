<template>
  <div class="hello">
    <div>
      <HomeHeader style = "mb-4"/>
    </div>
    <h1 class="myhome">ViaD Technologies, Solving Tommorow's Problems Today</h1>
    <div>
      <v-parallax src="./static/test.jpg">
      </v-parallax>
    </div>
    <div class="mt-2">
      <Services></Services>
    </div>
     <div class="mt-2">
      <ViadOnline></ViadOnline>
    </div>
        <div class="mt-2">
      <ChooseViad1/>
    </div>
    <div class="mt-2">
      <Staff/>
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
import Services from '@/components/Home/Services.vue'
import Staff from '@/components/Home/Staff.vue'
import ChooseViad1 from '@/components/Home/ChooseViad1.vue'
import ViadOnline from '@/components/Home/ViadOnline.vue'
export default {
  name: 'Home',
  data () {
  },
  components: {
    HomeHeader,
    Panel,
    Services,
    Staff,
    ChooseViad1,
    ViadOnline,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.myhome{
  color: black;
  font-size: 40px;
  font-weight: 800;
  text-shadow: 1px 1px #000000;
}
</style>
