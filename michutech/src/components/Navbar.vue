<template>

  <div>


    <v-toolbar app class="accent">

      <v-app-bar-nav-icon v-on:click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >MichuTech</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="dark mr-2">Ingreso</v-btn>

      <v-btn class="success ml-2">Salir</v-btn>

    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary dark>

      <v-layout mt-4 column align-center
      >
        <v-flex>
          <v-avatar>
            <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
          </v-avatar>
        </v-flex>
       

        <v-flex>
          <p class="white--text mt-3 headline ">Cabeza de Rodilla</p>
        </v-flex>

           </v-layout>

        <v-layout column>
          <v-flex mx-3>
            <v-btn color="success " block :to="{name: 'Home'}">Home</v-btn>
            <v-btn color="success my-2 " block :to="{name: 'Tasks'}">Tasks</v-btn>
            <v-btn color="success" block :to="{name: 'Chat'}">Chats</v-btn>
           
          </v-flex>
        </v-layout>

    






    </v-navigation-drawer>

  </div>



</template>

<script>
  export default {
    data: () => ({
      drawer: true,


    }),

  }
</script>