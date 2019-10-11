<template>
<v-dialog v-model="dialog" max-width="374" height="auto" class="d-flex">
  <template v-slot:activator="{ on }">
  <v-card
        light
        :raised="!flat"
        :flat="flat"
        class="mx-5"
        max-width="325px"
      >
        <v-img
          class="white--text"
          height="200px"
          :src="story.content.image"
        >
        </v-img>
        <v-card-title class="d-flex mx-3">
          {{ story.name }}
        </v-card-title>
        <v-card-text class="d-flex mx-2"> <v-icon small class="mx-2" color="red"> fas fa-map-marked-alt  </v-icon> {{ story.content.location }} </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="d-flex justify-space-around" >
          <v-rating v-model=" story.content.evaluation " background-color="amber" readonly color="amber"></v-rating>
          <v-btn outlined v-on="on" > Read </v-btn>
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

    <v-card-title class="mx-2"> {{ story.name }}     <v-rating v-model="story.content.evaluation" class="mx-4" background-color="amber" dense small readonly color="amber"></v-rating>   </v-card-title>

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
</template>
<script>
  export default {
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
    created() {
      console.log(this.story);
    },
    methods: {
      fetch() {
        let storyapi  = this.$storyapi();
        storyapi.get(`cdn/stories/hotel_offers/${id}`)
        .then(response => {
          console.log(response);
          //this.products = response.data.stories ;
        }).catch(error => {
          console.log(error)
        })
      },
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
</style>
