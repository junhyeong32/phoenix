<template>
  <div
    class="flex flex-col justify-center items-center background md:px-0 xs:px-[2rem] min-h-[67vh]   "
  >
    <h1 class="sm:text-[2.2rem] xs:text-[1.5rem] text-white">
      진단을 제대로 하면 해법이 제대로 보입니다.
    </h1>

    <div
      class="sm:text-[1.3rem] xs:text-[1.1rem] text-white text-center mt-[2.5rem]"
    >
      <span class="text-[#FFA800]"
        >우리 조직이 과연 제대로 성과를 내고 있는게 맞는 건지 아닌지</span
      >
      궁금할 수 있습니다.<br />
      그럴 때, 궁금해하지만 마시고
      <span class="text-[#FFA800]">체계적인 방법으로 진단해보세요.</span> 새로운
      방법이 보일 수 있습니다.<br /><br />​ 탁월한 분들의 노하우만 추려서
      정리해두어도일반적인 분들에게 큰 도움이 될 수 있습니다. <br />(시간과
      비용은 조직과 상황에 따라 달라집니다.)
    </div>
    <button
      class="w-[24rem] h-[5rem] bg-primary rounded-[1rem] text-[white] text-[1.7rem] mt-[4.3rem]"
      @click="$router.push('/diagnosis/online')"
    >
      검사실시 >
    </button>
  </div>
</template>

<script>
export default {
  name: "DiagnosisView",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
.background {
  background: url("/diagnosis/background.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
  height: 44.3rem;
}
</style>
