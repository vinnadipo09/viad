<template>
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

</style>
