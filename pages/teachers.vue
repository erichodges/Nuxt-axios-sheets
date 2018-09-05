<template>
    <div>
    <md-table v-model="teachers" md-sort="city" md-sort-order="desc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Marin Music Teachers</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell class="table-cell" md-label="First Name" md-sort-by="firstName">
          {{ item.firstName }}
        </md-table-cell>
        <md-table-cell md-label="Last Name" md-sort-by="lastName">
          {{ item.lastName }}
        </md-table-cell>
        <md-table-cell md-label="City" md-sort-by="city">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Will Travel?" md-sort-by="travel">{{ item.travel }}</md-table-cell>
        <!-- <md-table-cell md-label="Address" md-sort-by="address">{{ item.address }}</md-table-cell> -->
        
        <md-table-cell md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Instrument" md-sort-by="instrument">{{ item.instrument }}</md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>

<script>
import axios from "axios";
require('dotenv').config()
import Card from "~/components/Card.vue";

export default {
  data() {
    return {
      teachers: []
    }

  },
  components: {
  },
  mounted() {
    this.getData()
  },
  methods: {
    onConvert(data) {
      let keys = data[0];
      let values = data.slice(1);
      let object = {};
      let objects = values.map(array => {
        object = {};

        keys.forEach((key, i) => object[key] = array[i]);

        return object;
      });
      this.teachers = objects;
    },

    getData() {
      return axios
        .get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${process.env.TEACHERS}`)
        .then(response => {
          this.onConvert(response.data.values);
        });
    },
  }
};
</script>

<style scoped>
#cards {
  margin: auto;
  padding: 20px;
}
/* .div {

} */
.table-cell {
  font-size: 13px !important;  
  line-height: 18px !important;
  
}
</style>
