<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources
    :resources="storedResources"
  ></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    StoredResources, // Alternative -> 'custom-name' :  LearningResource
    TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official VueJS documentation',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          ink: 'https://google.com/'
        },
      ],
    };
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>