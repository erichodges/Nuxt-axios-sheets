<template>
  <div>
    <md-table v-model="currencies" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
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

export default {
  asyncData() {
    return axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${process.env.API_KEY}`)
      .then(response => {
        return {
          currencies: response.data.values
        };  
      });      
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
