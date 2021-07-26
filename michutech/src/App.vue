<template>
  <div id="app">
         <b-navbar toggleable="lg" type="dark" variant="info"></b-navbar>

    <div id="nav">
            <router-link to="/">Home</router-link> |
       <router-link to="/tasks">Tasks</router-link> |
      <router-link to="/chat">Chat</router-link> 

    </div>
    <router-view/>
  </div>
</template>

