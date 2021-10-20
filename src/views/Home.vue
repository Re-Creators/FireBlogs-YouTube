<template>
  <div class="home">
    <blog-post :post="welcomeScreen"/>
    <blog-post :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';

export default {
  name: "Home",
  components: {BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost : [
        {
          title : 'This is first blog title',
          blogHTML : 'This is a filter blog post',
          blogCoverPhoto : 'beautiful-stories',
        },
        {
          title : 'This is second blog title',
          blogHTML : 'This is a filter blog post',
          blogCoverPhoto : 'designed-for-everyone',
        }
      ]
    }
  }
};
</script>
