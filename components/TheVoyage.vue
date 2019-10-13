<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
      class="mx-5"
      height="400px"
      max-width="325px"
      >
        <v-img :src="story.content.img"></v-img>

        <v-card-text>
          <h2 class="title info--text">{{ story.content.name }}</h2>
          <span> {{ story.content.description.substring(0, 250) + "..." }} </span> <br>
          <v-icon small class="my-2 mr-2" color="red"> fas fa-map-marked-alt  </v-icon> <span> {{ story.content.location.toLowerCase() }} </span>
        </v-card-text>
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn color="info"> reserve </v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
  export default {
    props:{
    story : Object
    } ,
    data: () => ({
      overlay: false,
    }),
    mounted(){
      console.log(this.story);
    }
  }
</script>
<style scoped>
span { text-transform: capitalize ;}

</style>
