<template>
  <div ref="chartdiv" id="top" class="m-6 p-6" ></div>
</template>

<script>
//import { FingerprintSpinner } from 'epic-spinners'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    //FingerprintSpinner
  },
  mounted() {
        //am4core.useTheme(am4themes_animated);
        let {am4core, am4maps, am4geodata_worldLow } = this.$am4core();
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
        polygonTemplate.fill = am4core.color("white");
        polygonTemplate.stroke =  am4core.color("transparent");
        polygonTemplate.strokeWidth = 1 ;
        polygonTemplate.strokeOpacity = 0 ;
        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#2AF598");
        console.log(hs.properties);
        //imageSeries.mapImages.template.nonScaling = true;
        // Remove Antarctica
        polygonSeries.exclude = ["AQ"];
        //var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.events.on("over", function(ev) {
         vue.country = ev.target.dataItem.dataContext.name ;
      });
      polygonTemplate.events.on("hit", function(ev) {
        vue.search() ;
    });
      //this.chart = chart;


 },
 beforeMount() {
   this.charloaded = false ;
 },
 beforeDestroy() {
   if (this.chart) {
     this.chart.dispose();
   }
 },
  data() {
    return {
      country : '' ,
      charloaded : true ,
  }
},
methods: {
  search() {
    window.location.href = `./search?type=2&query=${this.country}`
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.color-teal { color : teal ;}
#top {
  width: 100%;
  height: 550px;
}

</style>
