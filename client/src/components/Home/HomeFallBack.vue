<template>
  <div class="hello">
    <div>
      <HomeHeader style = "mb-4"/>
    </div>
    <h1 style="color:black">ViaD Technologies, Solving Tommorow's Problems Today</h1>
    <div>
      <v-parallax src="./static/test.jpg">
      </v-parallax>
    </div>
    <div class="mt-2">
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
    </div>
    <div class="mt-2">
      <Panel title="ViaD Technologies Staff, Bios, and Contacts">
      <v-layout>
        <v-flex xs3>
            <h1>vincent</h1>
            <v-card>
        <v-img
          class="white--text"
          height="250px"
          src="./static/CEO.jpeg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Vince-CEO</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
          <v-btn flat color="orange">Contact</v-btn>
          <v-btn flat color="orange">Bio</v-btn>
        </v-card-actions>
      </v-card>
          </v-flex>

          <v-flex xs3 class="ml-2">
            <h1>Charles</h1>
            <v-card>
        <v-img
          class="white--text"
          height="250px"
          src="./static/charles.jpeg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Charles- Cyber Systems</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
          <v-btn flat color="orange">Contact</v-btn>
          <v-btn flat color="orange">Bio</v-btn>
        </v-card-actions>
      </v-card>
          </v-flex>
          <v-flex xs3 class="ml-2">
            <h1>Jackie</h1>
            <v-card>
        <v-img
          class="white--text"
          height="250px"
          src="./static/jackie.jpeg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Jackie- Networking</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
          <v-btn flat color="orange">Contact</v-btn>
          <v-btn flat color="orange">Bio</v-btn>
        </v-card-actions>
      </v-card>
          </v-flex>

          <v-flex xs3 class="ml-2">
            <h1>Ian</h1>
            <v-card>
        <v-img
          class="white--text"
          height="250px"
          src="./static/ian.jpeg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Ian- CrossPlatform Developer</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
          <v-btn flat color="orange">Contact</v-btn>
          <v-btn flat color="orange">Bio</v-btn>
        </v-card-actions>
      </v-card>
          </v-flex>
        </v-layout>
      </Panel>
    </div>
    <div class="mt-2">
      <Panel title="Briefly about ViaD Technologies and why you should choose us">
         <div>
    <v-layout>
      <v-flex xs6>
        <h1>sort1</h1>
      </v-flex>

      <v-flex xs6 class="ml-2">
       <h1>sort2</h1>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <h1>sort3</h1>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <h1>sort4</h1>
      </v-flex>
    </v-layout>
  </div>
      </Panel>
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
  name: 'Home',
  data () {
  },
  components: {
    HomeHeader,
    Panel,
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
</style>
