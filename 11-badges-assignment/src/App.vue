<template>
  <div>
    <TheHeader />
    <!-- <the-header></the-header> -> Alternative -->
    <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['anotherProp'] }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    // the-header: TheHeader, -> Alternative
  },
  data() {
    return {
      activeUser: {
        name: 'Anthony',
        description: 'Training VueJS',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>