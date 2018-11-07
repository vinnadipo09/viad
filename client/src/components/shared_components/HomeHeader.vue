<template>
  <div>
      <v-toolbar fixed class="black" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>ViaDTechnologies</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Hosting Services</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-4 mr-2 mt-4">
        <router-link style="text-decoration:none;text-transform:lowercase;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Order Services</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Offers</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Android/iOS</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Hosting Services</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Web</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Pricing</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Help</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Register</v-btn>
        </router-link>
      </div>
       <div class="toolbuttons ml-2 mr-2 mt-4">
        <router-link style="text-decoration:none;" to="/offers">
          <v-btn flat class="mytoolbarbutton" >Login</v-btn>
        </router-link>
      </div>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link{
  text-decoration: none;
}
.mytoolbarbutton{
  width: 40px;
  height: 15px;
}
/* .toolbuttons{
width: 20px;
height: 20px;
} */
</style>
