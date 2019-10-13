<template>
<div>
<TheVoyage v-if=" story.content.component == 'voyage' " :story="story" />
<v-dialog  v-else v-model="dialog" max-width="374" class="d-flex">
  <template v-slot:activator="{ on }">
  <v-card
        light
        :raised="!flat"
        :flat="flat"
        elevation='1'
        class="mx-5 text-lg-left"
        height="400px"
        max-width="325px"
      >
        <v-img
          class="white--text"
          height="200px"
          :src="story.content.image"
        >
        </v-img>
        <v-card-text>
          <h2 class="title info--text"> {{ story.name }} </h2>
          <span> {{ story.content.description.substring(0, 70) + "..." }} </span> <br>
          <v-icon small class="my-2 mr-2" color="red"> fas fa-map-marked-alt  </v-icon> <span> {{ story.content.location.toLowerCase() }} </span>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="d-flex justify-space-around" >
          <v-rating :value="parseInt(story.content.evaluation)" background-color="orange" readonly color="orange"></v-rating>
          <v-btn color="info" dark v-on="on" > Read </v-btn>
        </v-card-actions>
      </v-card>
    </template>
    <v-card
    light
    :loading="loading"
    max-width="450"
  >
    <v-img
      height="250"
      :src="story.content.image"
    ></v-img>

    <v-card-title class="mx-2"> {{ story.name }}     <v-rating :value="parseInt(story.content.evaluation)" class="mx-4" background-color="amber" dense small readonly color="amber"></v-rating>   </v-card-title>

    <v-card-text>
      <v-row align="center">
      </v-row>
        <v-simple-table dense width="100%">
        <thead>
          <tr>
            <th class="text-left"> Chambre </th>
            <th class="text-left"> Prix </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Single </td>
            <td>{{ story.content.Chambre_Single  }}</td>
          </tr>
          <tr>
            <td> Double </td>
            <td>{{ story.content.Chambre_Double }}</td>
          </tr>
          <tr>
            <td> Triple </td>
            <td>{{ story.content.Chambre_Triple }}</td>
          </tr>
        </tbody>
    </v-simple-table>
    </v-card-text>
    <v-card-text class="d-flex"> <v-icon small class="mx-2" color="red"> fas fa-map-marked-alt  </v-icon> {{ story.content.location }} </v-card-text>

    <v-divider class="m-4"></v-divider>

    <v-card-text>
      <v-chip-group
        column
        light
      >
        <v-chip light color="info" outlined v-for=" i in story.content.options"> {{ i.toUpperCase() }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        right
        color="info accent-4"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-dialog>
</div>
</template>
<script>
import TheVoyage from './TheVoyage.vue'

  export default {
    components:{
      TheVoyage
    },
    data: () => ({
      loading: false,
      selection: 1,
      dialog: false ,
      rating: 3 ,
      Product : {
        image : '' ,
        title : '' ,
        name  : '' ,
        discription : '' ,
        rate :  '' ,
        features : '' ,
        price : ''
      }
    }),
    props:{
    story : Object ,
    flat : Boolean
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
<style scoped>
  .v-input__slider {
    width: 100%;
  }
  span { text-transform: capitalize ;}
</style>
