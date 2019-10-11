<template>
  <v-app class="bg">
        <nuxt width="100%"/>
      <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import SubHeader from '../components/SubHeader.vue'
import TheSlider from '../components/TheSlider.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: {
    TheHeader ,
    TheFooter ,
    SubHeader ,
    TheSlider
  },
  data () {
    return {

    }
  } ,

}
</script>

<style>

svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  /* set height to pixels if you want angle to change with screen width */
}
.bg {
  background-color: #08AEEA !important ;
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%) !important ;
  background-color: #08AEEA !important ;
  background-image: linear-gradient(237deg, #08AEEA 0%, #2AF598 100%)!important ;

  /*background-color: #21D4FD !important ;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%) !important ; */
}

.bg-svg {
  fill: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

/*#h {   clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    0 calc(100% - 5vw)
  );}
*/
</style>
