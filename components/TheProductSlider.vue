<template>
  <v-card light flat tile id="Recommandés">
      <v-card-title> Hôtels Recommandés   <v-chip class="mx-2 text--white" dark color="#2AF598"> {{ number }} </v-chip> </v-card-title>
    <v-window v-model="onboarding"  width="100%">
        <v-alert v-if="mods.length == 0"
       outlined
       color="cyan"
       type="info"
       class="mb-4"
     >
       This category is empty.
     </v-alert>
      <v-window-item v-else
        v-for="( n , index ) in  mods "
       :key="`card-${index}`" min-height="400px" width="100%"  >
       <v-container d-flex justify-center width="100%">
         <TheProduct  v-for="( i , index ) in  n  " :story="i" :key="i['id']" />
       </v-container>
      </v-window-item >

    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >

      </v-item-group>
      <v-btn
        text
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import TheProduct from './TheProduct.vue'
  export default {
    props : {
      cat : String ,
    },
    data: () => ({
      model: null,
      number : 0 ,
      products : [] ,
      mods : [] ,
      onboarding: 0,
    }),
    components:{
      TheProduct
    },
    created() {
      //console.log(this.mods);
    },
    mounted(){
      this.fetch()
    },
    methods : {
    fetch() {
      let storyapi  = this.$storyapi();
      storyapi.get('cdn/stories',{
        "starts_with": "hotel_offers/" ,
        "filter_query": {
          "category": {
            "all_in_array": this.cat
          }
        }
      })
      .then(response => {
        console.log(response.data.stories);
        this.products = response.data.stories ;
        this.mods_maker() ;
      }).catch(error => {
        console.log(error)
      })

    },
     mods_maker() {
       this.number = this.products.length
       for ( var i = 0 ; i < this.products.length ; i ++ ) {
         if ( i % 3 == 0 ) {
         this.mods.push( this.products.slice( i ,  i+3 )) }
       }
     },
     next () {
       this.onboarding = this.onboarding + 1 === this.length
         ? 0
         : this.onboarding + 1
     },
     prev () {
       this.onboarding = this.onboarding - 1 < 0
         ? this.length - 1
         : this.onboarding - 1
     },
   }
  }
</script>
<style scoped> /*
.product {
  margin : 3%;
} */
</style>
