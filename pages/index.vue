<template>
  <div>
    <md-table v-model="test" md-sort="last-name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Marin Music Teachers</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="First Name" md-sort-by="first-name">{{ item.first-name }}</md-table-cell>
        <md-table-cell md-label="Last Name" md-sort-by="last-name">{{ item.last-name }}</md-table-cell>
        <md-table-cell md-label="Travel?" md-sort-by="travel">{{ item.travel }}</md-table-cell>
        <md-table-cell md-label="Address" md-sort-by="address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="City" md-sort-by="city">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Instrument" md-sort-by="instrument">{{ item.instrument }}</md-table-cell>
      </md-table-row>
    </md-table>

    <!-- <div id="cards" v-for="currency in currencies" :key="currency[0]">
      <card :name="currency[0]" :price_usd="currency.price_usd" :percent_change_1h="currency.percent_change_1h"></card>
    </div> -->
    
  </div>
</template>

<script>
import axios from "axios";
require('dotenv').config()
import Card from "~/components/Card.vue";

const convert = function(data) {
  let keys = data[0];
  let values = data.slice(1);
  let object = {};
  let objects = values.map(array => {
    object = {};

    keys.forEach((key, i) => object[key] = array[i]);
  
    return object;
  });
  this.test = JSON.stringify(objects);
// console.log(JSON.stringify(objects));
}


export default {
  asyncData() {
    return axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${process.env.API_KEY}`)
      .then(response => {
        return convert(response.data.values);          
      });     
  },
  data: () => {
    test: []
  },
  components: {
    Card
  }
};
</script>

<style scoped>
#cards {
  margin: auto;
  padding: 20px;
}
</style>
