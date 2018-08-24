<template>
  <div>
    <div id="cards" v-for="currency in currencies" :key="currency[0]">
      <card :name="currency[2]" :price_usd="currency.price_usd" :percent_change_1h="currency.percent_change_1h"></card>
    </div>
    <!-- <h3>{{currencies}}</h3> -->
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
console.log(process.env.API_KEY)
</script>

<style scoped>
#cards {
  margin: auto;
  padding: 20px;
}
</style>
