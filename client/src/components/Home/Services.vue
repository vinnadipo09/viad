<template>
      <Panel title="ViaD Technologies Services, Products, and Custom Developments">
        <v-layout>
      <v-flex xs6>
        <h1>ViaD Web Technologies</h1>
        <div>
          <img style="width:800px; height:400px" src="/static/laptop.png" alt="ViaD Web Services">
          <h2>Fix me</h2>
        </div>
        <p>"ViaD technologies is dedicated to offering the best, efficient, and affordable web services"</p>
        <div>
           <v-btn round outline color="black">Order Web Services</v-btn>
        </div>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <h1>ViaD iOS/ Android Technologies</h1>
        <div>
          <img style="width:400px; height:400px" src="/static/iphone.png" alt="ViaD Web Services">
          <h2>fix me</h2>
        </div>
        <p>"ViaD technologies is dedicated to offering the best, efficient, and affordable web services"</p>
        <div>
           <v-btn round outline color="black">Order Mobile Services</v-btn>
        </div>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <h1>ViaD Netwrking Technologies</h1>
        <div>
          <img style="width:800px; height:400px" src="/static/laptop.png" alt="ViaD Web Services">
          <h2>fix me</h2>
        </div>
        <p>"ViaD technologies is dedicated to offering the best, efficient, and affordable web services"</p>
        <div>
           <v-btn round outline color="black">Order Networking Services</v-btn>
        </div>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <h1>ViaD Hardware/ Smart Systems</h1>
        <div>
          <img style="width:400px; height: 400px" src="/static/iphone.png" alt="ViaD Web Services">
          <h2>fix me</h2>
        </div>
        <p>"ViaD technologies is dedicated to offering the best, efficient, and affordable web services"</p>
        <div>
           <v-btn round outline color="black">Order Smart Services</v-btn>
        </div>
      </v-flex>
    </v-layout>
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
  #panel.title{
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px #0000FF;
}

</style>
