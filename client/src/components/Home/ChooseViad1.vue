<template>
      <Panel title="Briefly about ViaD Technologies and why you should choose us">
         <div>
    <v-layout>
      <v-flex xs2 class="ml-2 mt-2 mb-2 mr-2">
        <div class>
          <v-parallax class="par" src="./static/iphone14.jpg">
          <h1>Why Viad?</h1>
          <h3>
            Viad does all the work for you without a single cent until you are sartisfied with the output.
            We believe in professionalism and value for our customers' money.
          </h3>
          <div>
            <v-btn round outline color="white">Read More...</v-btn>
          </div>
          </v-parallax>
        </div>
      </v-flex>
       <v-flex xs2 class="ml-2 mt-2 mb-2 mr-2">
        <div class>
          <v-parallax src="./static/iphone3.jpg">
          <h1>How Viad Works</h1>
          <h3>
            Sign Up, Place an Order, and we will get back to you in under five minutes.
          </h3>
          <div>
            <v-btn round outline color="white">Read More...</v-btn>
          </div>
          </v-parallax>
        </div>
      </v-flex>
       <v-flex xs2 class="ml-2 mt-2 mb-2 mr-2">
        <div class>
          <v-parallax src="./static/iphone4.jpg">
          <h1>Delivery</h1>
            <h3>
            Depending on the nature of your order, we will give clear information regarding delivery information.
          </h3>
          <div>
            <v-btn round outline color="white">Read More...</v-btn>
          </div>
          </v-parallax>
        </div>
      </v-flex>
       <v-flex xs2 class="ml-2 mt-2 mb-2 mr-2">
        <div class>
          <v-parallax src="./static/iphone5.jpg">
          <h1>Importatoin</h1>
            <h3>
            For Amazon, Ebay, or any other imported products, contact ViaD and get clear way forward to get your products.
          </h3>
          <div>
            <v-btn round outline color="white">Read More...</v-btn>
          </div>
          </v-parallax>
        </div>
      </v-flex>
        <v-flex xs2 class="ml-2 mt-2 mb-2 mr-2">
        <div class>
          <v-parallax src="./static/iphone11.jpg">
          <h1>Viad Careers</h1>
            <h3>
            We are always employing. We seek to do constructive business as well as offer employment opportunities
            to youths and other talented young Kenyans.
          </h3>
          <div>
            <v-btn round outline color="white">Read More...</v-btn>
          </div>
          </v-parallax>
        </div>
      </v-flex>
       <v-flex xs2 class="ml-2 mt-2 mb-2 mr-2">
        <div class>
          <v-parallax src="./static/iphone12.jpg">
          <h1>Future Plans</h1>
            <h3>
            Viad Seeks to intergrate with other international online stakeholders by mid 2019 to ease the acquisition
            of both goods and services gloabally.
          </h3>
          <div>
            <v-btn round outline color="white">Read More...</v-btn>
          </div>
          </v-parallax>
        </div>
      </v-flex>
    </v-layout>
  </div>
      </Panel>
</template>

<script>
import Panel from '@/components/shared_components/Panel.vue'
export default {
  name: 'Home',
  data () {
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.par{
  height: 600px;
  widows: 100;
}
h3, h2, h1{
  color: white!important;
}
</style>
