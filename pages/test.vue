<template>
  <main>
    <h1>
      <span>MTAC</span>
      <span>Marin</span>
    </h1>
    <h2 class="MTAC-heading">Music Teachers' Association of California
      <br> Marin County Branch</h2>
    <div class="datesandhours">
      <h3>10.Januar bis 30.April 1960</h3>
      <div>Offen: Montag 14-18, 20-22</div>
      <div>Dienstag-Frietag 10-12, 14-18, 20-22</div>
      <div>Samstag-Sonnttag 10-12, 14-17</div>
    </div>

  </main>
</template>

<script>
export default {
  layout: 'index'
}
</script>

<style>
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
  color: #B3413D; }

.MTAC-heading {
  color: antiquewhite;
}

h1 {
  font-size: calc(2.5rem + 20vw);
  letter-spacing: -0.04em;
  display: contents;
  opacity: 0.8; }
  h1 span:nth-of-type(1) {
    color: #A1A48C;
    margin-left: -0.14em; }
  h1 span:nth-of-type(2) {
    color: #E5E1D5;
    margin-left: -0.06em; }

h2, div, h3 {
  font-weight: 500;
  font-size: 1.1rem;
  display: block; }

main {
  /* autoprefixer: off */
  display: grid;
  grid-template-columns: minmax(10vw, 40vw) -webkit-max-content -webkit-min-content;
  grid-template-rows: 3vh auto 1fr -webkit-min-content auto 0.5vh;
  grid-template-columns: minmax(10vw, 40vw) max-content min-content;
  grid-template-rows: 3vh auto 1fr min-content auto 0.5vh;
  height: 97vh; }

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
  grid-row: 2;
  grid-column: 2; }

.datesandhours {
  /* autoprefixer: off */
  margin-top: 7rem;
  grid-row: 5;
  grid-column: 2; }

</style>
