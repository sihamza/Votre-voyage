<template>
  <div>
     <v-toolbar color="transparent" extended flat >

       <v-toolbar-items>
         <v-btn text><v-icon>fab fa-instagram</v-icon></v-btn>
         <v-btn text href="https://www.facebook.com/Votre-Voyage-Tunisie-620138278439243/"><v-icon>fab fa-facebook-messenger</v-icon></v-btn>
         <v-btn text><v-icon>fab fa-twitter</v-icon></v-btn>
       </v-toolbar-items>

       <div class="flex-grow-1 d-flex justify-space-around"> <n-link style="text-decoration:none;" to="/" >  <h1 v-if="logo" class="card-title ">Votre Voayage</h1> </n-link>  </div>

       <v-toolbar-items>
         <v-tooltip bottom>
           <template v-slot:activator="{ on }">
             <v-btn text v-on="on" @click="copyboard(x)" ><v-icon>fas fa-envelope</v-icon></v-btn>
           </template>
           <span>Tooltip</span>
         </v-tooltip>
         <v-btn text><v-icon>fas fa-map-marker-alt</v-icon></v-btn>
         <v-tooltip bottom>
           <template v-slot:activator="{ on }">
             <v-btn text v-on="on" @click="copyboard('23 043 000')" ><v-icon>fas fa-phone</v-icon></v-btn>
           </template>
           <span> 23 043 000 </span>
         </v-tooltip>
       </v-toolbar-items>
     </v-toolbar>
   </div>
</template>

<script>
export default {
  props : {
    logo : Boolean
  } ,
  data () {
    return {
    }
  },
  methods:{
    copyboard(x){
      var textArea = document.createElement("textArea") ;
      textArea.value  = x ;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("Copy");
      textArea.remove();
      event.target.parentNode.parentNode.focus() ;
    }
  }

}
</script>

<style >

h1 { text-transform: capitalize;
     font-size: 42px ;
     text-align: center;
     color : white ;
     font-family: 'Lobster Two', cursive;
}
</style>
