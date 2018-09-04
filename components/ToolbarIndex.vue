<template>
  <div>
     <md-toolbar md-elevation="0" class="md-transparent md-dense header">
      <md-button class="md-icon-button" @click="showNavigation=true">
        <md-icon class="navbar">menu</md-icon>
      </md-button>
      <h3 class="md-title logo">MTAC Marin</h3>
      <div class="divSpacer"></div>      
      <ul class="ul-nav">
        <li class="nav__li">About</li>
        <nuxt-link to="/teachers"><li class="nav__li">Teachers</li></nuxt-link>        
        <li class="nav__li">Calendar</li>
        <li class="nav__li">Forms/Docs</li>
        <li class="nav__li">Merit Cert</li>
        <li class="nav__li">Scholarship</li>
        <li class="nav__li">Media</li>
        
      </ul>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>          
          <nuxt-link to="/teachers"><span class="md-list-item-text">Teachers</span></nuxt-link>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
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
  .navbar {
    color: antiquewhite !important;
  }

  .logo {
    color: #E5E1D5 !important;
    margin-right: auto;
  }

  .ul-nav {  
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  // justify-content: space-between;
  
    @media only screen and (max-width: 1120px) {
      visibility: hidden;  
      height: 0;  
    }
  }

  .md-toolbar.md-dense {
    min-height: 48px;
    max-height: 75px;
}

  .divSpacer {
    margin-right: 5rem;
    margin-left: 5rem;  
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .nav__li {
    color: #E5E1D5 !important;
    margin-right: 2rem;

    font-weight: 500;
    font-size: 1.1rem;
    display: block;

    @media only screen and (max-width: 1120px) {
     visibility: hidden;    
   }
  }

 
</style>
