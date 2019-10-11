<template>
<div>
 <TheHeader logo />
 <v-card light flat width="100%"  class="pa-4" >
   <v-card light flat class="d-flex justify-space-around flex-column pa-4">
     <v-container light class="d-flex justify-space-around" >
     <v-chip-group
          mandatory
          color="info"
          light
          v-model="type"
          active-class="info--text"
        >
          <v-chip value="0" href="./search?type=0" filter light outlined  class="info--text" color="info" >
             Tous
          </v-chip>
          <v-chip value="1" href="./search?type=1" filter  light outlined  class="info--text" color="info" >
             Hotels
          </v-chip>
          <v-chip value="2" href="./search?type=2"  filter  light outlined  class="info--text" color="info" >
             Voayages
          </v-chip>
        </v-chip-group>
      </v-container>
     <v-text-field
       label="Type"
       color="info"
       v-model="search"
       :value="this.search"
       outlined
       @change="fetch()"
       :disabled=" this.type != 1 &&  this.type != 2 "
       rounded
     >
   </v-text-field>
   <v-expansion-panels class="ma-2">
   <v-expansion-panel :disabled=" this.type != 1 ">
   <v-expansion-panel-header>  <v-btn text centered color="info" :disabled=" this.type != 1 " light > <v-icon class="mx-2"> fas fa-sliders-h </v-icon> FILTERS </v-btn> </v-expansion-panel-header>
   <v-expansion-panel-content>
   <v-radio-group row  class="d-flex justify-center grey--text text--darken-2 font-weight-light captio " >
     <v-radio color="info" label="Single"></v-radio>
     <v-radio color="info" label="Double"></v-radio>
     <v-radio color="info" label="Triple"></v-radio>
   </v-radio-group>
        <v-range-slider
         max="10000"
         color="info"
         thumb-label
         thumb-color="info"
         track-color="#2AF598"
         light
         label="Prix"
       >
       <template v-slot:append>
             <v-icon
               color="info"
             >
               fas fa-funnel-dollar
             </v-icon>
           </template>
         </v-range-slider>
   <div class="d-flex justify-center">
     <span class="pl-2 grey--text text--darken-2 font-weight-light captio pa-3"> évaluation </span>
     <v-rating light background-color="info lighten-3" color="info"></v-rating>
   </div>
   </v-expansion-panel-content>
   </v-expansion-panel>
   </v-expansion-panels>
   <v-card class="d-flex row ma-2 bg2" width="100%">
     <v-container  max-width="374" v-for=" ( n , index ) in  products " :key="index" >
       <TheProduct  flat :story="n" />
     </v-container>
   </v-card>
   </v-card>
 </v-card>
</div>
</template>

<script>
import TheProduct from '../components/TheProduct.vue'
import TheHeader from '../components/TheHeader.vue'
export default {
  components: {
    TheHeader ,
    TheProduct
  },
  data () {
     return {
       type : 0 ,
       rating : 0 ,
       price : 0 ,
       by : 0 ,
       search : "" ,
       products : []
     }
   },
  mounted() {
    this.init();
    this.fetch();
  },
  created() {
    this.init();
  },
  methods : {
    init() {
      this.type = this.$route.query.type ;
      if ( this.type == 1 && this.type == 2 )
      this.search = this.$route.query.query ;
      //console.log(this.$route.query.type);
    } ,
    fetch() {
      if ( this.type == 0 ) {
        this.products = [] ;
        this.fetch_hotels() ;
        this.fetch_voyages() ;
      } else if (this.type == 1) {
        this.products = [] ;
        this.fetch_hotels() ;
      } else if (this.type == 2) {
        this.products = [] ;
        this.fetch_voyages() ;
      }
    },
    fetch_hotels() {
      let storyapi  = this.$storyapi();
      var search = this.search != "" ? { "location": { "in" : this.search } } : {}
      console.log(search);
      storyapi.get('cdn/stories',{
        "starts_with": "hotel_offers/" ,
        "filter_query": search

      })
      .then(response => {
        console.log(response.data.stories);
        this.products = response.data.stories ;
      }).catch(error => {
        console.log(error)
      })
    } ,
    fetch_voyages() {
        let storyapi  = this.$storyapi();
        var search = this.search != "" ? { "location": { "in" : toLowerCase(this.search) } } : {}
        storyapi.get('cdn/stories',{
          "starts_with": "voyage_offers/" ,
          "filter_query": search
        })
        .then(response => {
          console.log(response.data.stories);
          if ( this.type == 0 ) {
            this.products.concat(response.data.stories) ;
          } else {
            this.products = response.data.stories ;
          }
        }).catch(error => {
          console.log(error)
        })

    }
   }

}
</script>

<style scoped >
.active {
  color : #2AF598  !important ;
}
.bg2 { background: #ECE9E6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
