import Vue from "vue";
import StoryblokClient from 'storyblok-js-client'
Vue.prototype.$storyapi = () => 
    new StoryblokClient({
    accessToken: 'j4uvR8Ktnb0ATbelfXaqOAtt'
  })
