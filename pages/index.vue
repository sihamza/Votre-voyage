<template>
<div>
  <div >
  <TheHeader/>
  <SubHeader/>
  <v-spacer></v-spacer>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="-1000,100 100,0 100,100"  />
      <defs>
        <filter id="shadow">
          <feDropShadow dx="-0.01" dy="-0.01" stdDeviation="0.3"/>
        </filter>
          <linearGradient id="myGradient" gradientTransform="rotate(120)">
            <stop offset="5%"  stop-color="#fdfbfb" />
            <stop offset="95%" stop-color="#ebedee" />
          </linearGradient>
      </defs>
    </svg>
  </div>
  <v-container width="90%" style="border:none">
    <TheSlider/>
  </v-container>
</div>
<v-card
  flat
  width="100%"
  color="white"
  class="lighten-1 elevation-0 text-center "
>
    <v-card flat width="100%" color="transparent">
      <v-container flat >
        <TheProductSlider cat="1"/>
        <TheProductSlider cat="2"/>
        <TheProductSlider cat="3"/>
      </v-container>
      <h2><v-btn color="#08AEEA" elevation="3" href="/search?type=0"x-large  rounded> Plus d'offres </v-btn></h2>
      <v-card  flat color="white"class="my-2 d-flex flex-row justify-center" width="100%" >
        <v-timeline light >
   <v-timeline-item
     v-for="n in why"
     :key="n"
     color="#08AEEA"
     width="70%"
     :icon="n.icon"
     large
     icon-color="white"
   >
     <v-card color="#08AEEA" dark class="elevation-2 mx-6 text--grey">
       <v-card-title class="headline text-center"> {{ n.title }}</v-card-title>
       <v-card-text>
         {{ n.content }}
       </v-card-text>
     </v-card>
   </v-timeline-item>
 </v-timeline>
      </v-card>
    </v-card>
  </v-card>
</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheSlider from '../components/TheSlider.vue'
import SubHeader from "../components/SubHeader.vue"
import TheProductSlider from "../components/TheProductSlider.vue"

export default {
  components: {
    TheHeader ,
    TheSlider ,
    SubHeader,
    TheProductSlider
  } ,
  data () {
    return {
      why : [
        { icon : 'fas fa-money-bill-wave' ,
          title : 'Garantie du prix via' ,
          content : 'Reserver dans les quatres coins du monde avec via.tn. Et profiter des meilleures prix sur le marche. Nous verifions nos prix quotidienement.'
        } ,
        { icon : 'fas fa-user-friends' ,
          title : 'Un Accompagnement a 100%' ,
          content : 'Notre service client se tient a votre service, avant, pendant et apres vote voyage. Demander a L’un de nos milliers de clients.'
        } ,
        { icon :'fas fa-percentage'  ,
          title : 'Profiter de nos meilleures promo' ,
          content : 'Profiter de nos promo exclusives, pour reserver vos sejours, vols, hotels et bien plus. Decouverez aussi nos promos de dernieres minutes et partez en vacances pas cheres.'
        }
      ]

  }
}
}
</script>
