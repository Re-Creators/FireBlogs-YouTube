<template>
  <div class="blog-wrapper">
    <div class="blog-content">
        <div>
            <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
            <h2 v-else>{{ post.title }}</h2>
            
            <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
            <p class="content-preview" v-else>{{ post.blogHTML }}</p>
            
            <router-link class="link link-light" to="#" v-if="post.welcomeScreen">
                Login/Register<Arrow class="arrow arrow-light"/>
            </router-link>
            <router-link to="#" v-else>
                 View The Post<Arrow class="arrow"/>
            </router-link>
        </div>
        <div class="blog-photo">
            <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}`)" alt="">
            <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}`)" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
    name : 'blogpost',
    props : ['post'],
    components : {
        Arrow
    }
}
</script>

<style lang="scss">

</style>