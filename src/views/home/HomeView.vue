<template>
  <div class="flex flex-col space-y-2 justify-center items-center">
    <h1 class="text-3xl font-bold">
      Home
    </h1>
    <router-link to="/auth/signin">
      Sign In
    </router-link>
    <router-link to="/auth/signup">
      Sign Up
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
  beforeUnmount() {
  }
}
</script>
<style>
</style>

