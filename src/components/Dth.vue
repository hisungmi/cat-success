<template>
   <v-data-table :headers="headers" :items="contents" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
export default {
    name: "Table",
    data () {
      return {
      headers: [{
        text: ' ', align: 'start', sortable: false, value: 'name',
      },
      { text: '날짜',value: 'data'},
      { text: '온도',value: 'Temperature'},
      { text: '습도',value: 'Humidity'},
      ],
      contents: [{
        name:'1',
        data: '2022.04.11',
        Temperature: '26℃',
        Humidity: '60%',
      },
      {
        name:'2',
        data: '2022.04.12',
        Temperature: '25℃',
        Humidity: '63%',
      },
      {
        name:'3',
        data: '2022.04.13',
        Temperature: '24℃',
        Humidity: '61%',
      },
      {
        name:'4',
        data: '2022.04.14',
        Temperature: '26℃',
        Humidity: '62%',
      },
      ],
      }
    },

}
</script>

<style>

</style>