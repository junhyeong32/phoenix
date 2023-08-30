<template>
  <div class="flex justify-center items-center">
    <h1 class="text-3xl font-bold">
      Sign In
    </h1>
    <input type="text" v-model="email"/>
    <input type="password" v-model="password"/>
    <button @click="click">
      Sign In
    </button>
  </div>
</template>

<script>
export default {
  name: 'SignInView',
  components: {
  },
  props: {
  },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
  },
  methods: {
    click() {
      @console.log("click")
    }
    ,
    eventLogin() {
      @console.log("eventLogin")
    }
    ,
    beforeDestroy() {
      this.emitter.off("login",this.eventLogin);
    }
    ,
  },
  created() {
    @console.log("created")this.emitter.on("login",this.eventLogin);
  }
  ,
  mounted() {
  },
  beforeUnmount() {
  }
}
</script>
<style>
</style>

