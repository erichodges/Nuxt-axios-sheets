<template>
  <main>
    <h1>
      <span>MTAC</span>
      <span>marin</span>
    </h1>
    <h2 class="MTAC-heading">Music Teachers' Association of California
      <br> Marin County Branch</h2>
    <div class="datesandhours">
      <!-- <h3>10.Januar bis 30.April 1960</h3>
      <div>Offen: Montag 14-18, 20-22</div>
      <div>Dienstag-Frietag 10-12, 14-18, 20-22</div>
      <div>Samstag-Sonnttag 10-12, 14-17</div> -->
    </div>

  </main>
</template>

<script>
export default {
  layout: 'index'
}
</script>

<style lang="scss">
  * {
  box-sizing: border-box; }

html {
  font-family: 'Neue Haas Grotesk W01 Disp', Helvetica, sans-serif;
  line-height: 1;
  font-size: 100%;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%; }

body {
  background: #333735;
  color: #B3413D; 
}

li a {
    text-decoration: none !important;
}

.MTAC-heading {
  color: rgb(240, 239, 233);
  margin: 0;
  margin-top: 1rem;
  

  @media only screen and (max-width: 790px) {
    font-weight: 500;
    font-size: 1.4rem;
    display: block;


  }

  //   @media only screen and (max-width: 630px) {
  //   font-weight: 500;
  //   font-size: 1.1rem;
  //   display: block;
  // }
}

h1 {
  font-size: calc(2rem + 20vw);
  letter-spacing: -0.04em;
  display: contents;
  opacity: 0.8; }
  h1 span:nth-of-type(1) {
    color: rgba(185, 32, 19, 0.7);
    margin-left: -0.14em; }
  h1 span:nth-of-type(2) {
    color: rgba(245, 245, 245, 0.7);
    margin-left: -0.05em; }
  // E5E1D5
h3 {
  font-weight: 500;
  font-size: 1.1rem;
  display: block; }

main {
  /* autoprefixer: off */
  display: grid;
  grid-template-columns: minmax(10vw, 35vw) -webkit-max-content -webkit-min-content;
  grid-template-rows: 3vh auto 1fr -webkit-min-content auto 0.5vh;
  grid-template-columns: minmax(10vw, 35vw) max-content min-content;
  grid-template-rows: 3vh auto 1fr min-content auto 0.5vh;
  height: 92vh; 
  
    @media only screen and (max-width: 750px) {
      grid-template-columns: minmax(10vw, 35vw) min-content min-content;

  }
  
  }

h1 span:nth-of-type(1) {
  /* autoprefixer: off */
  grid-row: 4;
  grid-column: 1 / 3; }

h1 span:nth-of-type(2) {
  /* autoprefixer: off */
  grid-row: 4;
  grid-column: 2 / 4; }

h2 {
  /* autoprefixer: off */
  font-weight: 500;
  font-size: 1.5rem;
  display: block;

  grid-row: 2;
  grid-column: 2; }

.datesandhours {
  /* autoprefixer: off */
  margin-top: 7rem;
  grid-row: 5;
  grid-column: 2; }

</style>
