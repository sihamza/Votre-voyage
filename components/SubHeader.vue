<template>
<div class="pt-6" style="background-color:transparent">
  <div ref="chartdiv" id="top" class="m-6 p-6" hidden></div>
  <v-card  flat color="transparent" class="mb-3">
    <v-container>
    <h1 class="card-title mb-2 m-6">Votre Voayage</h1>
    <v-spacer></v-spacer>
    <!--<div class="text-xs-center"><v-rating value=5 readonly color="yellow"></v-rating></div>-->
    <!--<h6 class="mb-6"> “{{ this.quotes[this.quote] }}” </h6>-->

    <v-tabs
      v-model="tab"
      background-color="transparent" color="white" class="text--white "
      centered
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
        <v-icon class="mx-2">{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="card"  v-model="tab">
      <v-tab-item
        class="card  py-6"
      >
        <div>
          <v-text-field
                  width="500px"
                  label="Veuillez indiquer une ville"
                  rounded
                  filled
                  v-model="searchq"
                  append-icon="fas fa-search"
                  @click:append="search()"
                  @change="search()"
                  color="white"
                ></v-text-field>
        </div>
      </v-tab-item>
      <v-tab-item
        class="card my-6 py-6"
      >
      <TheMap/>
      </v-tab-item>
    </v-tabs-items>

    <h2><v-btn color="#2AF598" elevation="5" x-large @click="$vuetify.goTo('#Recommandés', {duration: 300 , offset: 0 ,easing: 'easeInOutCubic'})"  rounded> explorer nos propositions </v-btn></h2>
    <!--<h6 class="mb-3 mt-3"> Do you want to vist  <span class="teal-/-text" > {{ country }} </span> ? </h6>
     <fingerprint-spinner :animation-duration="9000" :size="64" color="#ff1d5e" /> -->
  </v-container>

</v-card>

</div>

</div>
</div>
</template>

<script>
import TheMap from './TheMap.vue'
//import { FingerprintSpinner } from 'epic-spinners'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    TheMap//,
    //FingerprintSpinner
  },
  mounted() {
    /*    //am4core.useTheme(am4themes_animated);
        var chart = am4core.create(this.$refs.chartdiv, am4maps.MapChart);
        // Set map definition
        var vue = this ;
        chart.geodata = am4geodata_worldLow;
        chart.seriesContainer.draggable = false;
        chart.seriesContainer.resizable = false;
        chart.maxZoomLevel = 1;
        // Set projection
        chart.projection = new am4maps.projections.Miller();
        chart.panBehavior = "";
        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#9BBFF5");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#AED2F2");
        //imageSeries.mapImages.template.nonScaling = true;
        // Remove Antarctica
        polygonSeries.exclude = ["AQ"];
        //var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.events.on("over", function(ev) {
          // zoom to an object
         vue.country = ev.target.dataItem.dataContext.name ;
      });
      //this.chart = chart;

*/
 },
 beforeMount() {
  // this.charloaded = false ;
 },
 beforeDestroy() {
  /* if (this.chart) {
     this.chart.dispose();
   }*/
 },
  data() {
    return {
      charloaded : true ,
      searchq : '' ,
      quote  : 0 ,
      tab: null,
      items: [
          { tab : 'Hotels' , icon : 'fas fa-hotel' }, { tab : 'Voyages' , icon : 'fas fa-suitcase-rolling' }
      ],
      quotes : [
        'An Intelligent Investor Sees An Opportunity In Dip Than Risk.' ,
        'Modern technologies are 99 percent bravery , and 1 percent investment',
        'Crypto is money 2.0, a huge huge huge deal. '
    ]
    }
  },
  created() {
    this.quoteslide();
    setInterval(this.quoteslide, 10000);
  },
  methods : {
    search() {
      window.location.href = `./search?type=1&query=${this.search}`
    },
    quoteslide () {
      this.quote =  ( this.quote + 1 ) % 3 ;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Lobster+Two&display=swap');

/** { color : #327C8C ;}*/
a , h1 , h6 { text-transform: capitalize;
     font-size: 96px ;
     text-align: center;
     color : white ;
     font-family: 'Lobster Two', cursive;
}
.color-teal { color : teal ;}
#top {
  width: 100%;
  height: 550px;
}
 h6 { font-size: 24px ;
  text-align: center;
}
h2 {
 text-align: center;
}
.btn { font-family: 'Lobster Two', cursive;
       font-size: 18px ;
       text-transform: capitalize;}
a {
    color: #327C8C ;
    font-size: 18px ;}
a:hover { text-decoration: underline;
          color: black;}
          .slide-fade-enter-active {
            transition: all .3s ease;
          }
          .slide-fade-leave-active {
            transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
          }
          .slide-fade-enter, .slide-fade-leave-to
          /* .slide-fade-leave-active below version 2.1.8 */ {
            transform: translateX(10px);
            opacity: 0;
          }
          h3 {
            margin: 40px 0 0;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            display: inline-block;
            margin: 0 10px;
          }
          a {
            color: #42b983;
          }
.card {
  color:white !important  ;
  background-color:transparent !important  ;
}
</style>
