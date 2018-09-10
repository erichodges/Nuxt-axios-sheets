<template>
    <div>
    <md-table v-model="teachers" md-sort="city" md-sort-order="desc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Marin Music Teachers</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell class="table-cell" md-label="Date" md-sort-by="date">
          {{ item.date }}
        </md-table-cell>
        <md-table-cell md-label="Time" md-sort-by="time">
          {{ item.time }}
        </md-table-cell>
        <md-table-cell md-label="Activity" md-sort-by="activity">{{ item.activity }}</md-table-cell>
        <md-table-cell md-label="Location" md-sort-by="location">{{ item.location }}</md-table-cell>
        <!-- <md-table-cell md-label="Address" md-sort-by="address">{{ item.address }}</md-table-cell> -->
        
        <md-table-cell md-label="Chair" md-sort-by="chair">{{ item.chair }}</md-table-cell>
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

// https://docs.google.com/spreadsheets/d/e/2PACX-1vSkPbcA7pELCFkTKRGWXZMSDvnzCD0hujG4tkmko5Sw-aooPlCjy1r1Fi6Tt3CjR4iG74sjXtLxaOxf/pubhtml

    getData() {
      return axios
        .get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet2?valueRenderOption=FORMATTED_VALUE&key=${process.env.TEACHERS_KEY}`)
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
