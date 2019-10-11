<template>
  <v-carousel
    cycle
    width="800px"
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img
        :src="slide.content.photo"
        min-width="100%"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <!--<div class="display-3">{{ slide }} Slide</div>-->
        </v-row>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
/*
import StoryblokClient from 'storyblok-js-client'
let storyapi = new StoryblokClient({
  accessToken: 'j4uvR8Ktnb0ATbelfXaqOAtt'
}) */

  export default {
    data () {
      return {
        slides: [],
      }
    },
    mounted(){
      this.fetch()
    },
    methods : {
    fetch() {
      let storyapi  = this.$storyapi();
      storyapi.get('cdn/stories',{
        "starts_with": "slider/" })
      .then(response => {
        this.slides = response.data.stories ;
      }).catch(error => {
        console.log(error)
      })

    } }

  }
</script>
