<template>
<v-footer
      padless

    >
      <v-card

        flat
        width="100%"
        color="white"
        class="lighten-1 text-center "
      >
        <!--<v-divider color="white"></v-divider>-->

        <v-card-text class="white--text bg2">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>
<script>
    export default {
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
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

.bg2 {
  text-align: center ;
  font-family: 'Titillium Web', sans-serif;
  background-color: #08AEEA !important ;
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%) !important ;
  background-color: #08AEEA !important ;
  background-image: linear-gradient(237deg, #08AEEA 0%, #2AF598 100%)!important ;

  /*background-color: #21D4FD !important ;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%) !important ; */


}
</style>
