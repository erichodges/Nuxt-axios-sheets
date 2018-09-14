<template>
  <div>
     <md-toolbar md-elevation="0" class="md-transparent md-dense header">
      <md-button class="md-icon-button burger" @click="showNavigation=true">
        <md-icon class="navbar">menu</md-icon>
      </md-button>
      <h3 class="md-title logo">MTAC Marin</h3>
      <!-- <div class="divSpacer"></div>       -->
      <ul class="ul-nav">
        <li class="nav__li">About</li>
        <nuxt-link to="/teachers" tag="li"><li class="nav__li">Teachers</li></nuxt-link>        
        <nuxt-link to="/calendar" tag="li"><li class="nav__li">Calendar</li></nuxt-link>   
        <li class="nav__li">Forms/Docs</li>
        <li class="nav__li">Merit Cert</li>
        <li class="nav__li">Scholarship</li>
        <li class="nav__li">Media</li>
        
      </ul>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <!-- <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">My App name</span>
      </md-toolbar> -->

      <md-list>
        <md-list-item>          
          
          <span class="md-list-item-text"><nuxt-link to="/teachers">Teachers</nuxt-link></span>
        </md-list-item>

        <md-list-item>          
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>          
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>          
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  name: 'Temporary',
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  })
}
</script>

<style lang="scss" scoped>

.burger {  
  

  @media only screen and (min-width: 1060px) {
     visibility: hidden;
     width: 0;
  }
}

.navbar {
  color: rgb(240, 239, 233) !important;
}

.logo {
  color: rgb(240, 239, 233) !important;
  margin-right: auto;
  margin-left: 0;
}

.ul-nav {  
display: flex;
padding: 0;
list-style: none;
align-items: center;
// justify-content: space-between;

  @media only screen and (max-width: 1060px) {
    visibility: hidden;  
    height: 0; 
    width: 0; 
  }
}


.header {
  display: flex;
  justify-content: space-between;
  // height: 48px !important;
}

.md-title.logo {
  margin-left: 0;
}

li a {
  text-decoration: none !important;
}

.nav__li {
  color: #E5E1D5 !important;
  margin-right: 2rem;
  cursor: pointer;
  display: block;
  font-weight: 500;
  font-size: 1.1rem;

  @media only screen and (max-width: 1060px) {
    visibility: hidden;    
  }
}

 
</style>
