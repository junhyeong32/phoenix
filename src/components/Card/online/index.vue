<template>
  <div
    class="w-full flex flex-col gap-[0.8rem] pb-[1.5rem] relative cursor-pointer bg-white rounded-[18px]"
  >
    <img :src="img" alt="lecture" class="" />

    <div class="flex flex-col justify-between h-full px-[1.4rem]">
      <div class="flex flex-col gap-[7px]">
        <div class="text-[1.1rem] mt-[6px] whitespace-pre-wrap">
          {{ title }}
        </div>
        <b class="text-[1.3rem]">
          {{ sub_title }}
        </b>
        <div class="text-[1rem] text-[#BFBFBF]">
          {{ time }}
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center text-[1rem]">
            <span class="text-[1rem]">정가</span>
            <span class="text-[1.5rem] text-[#7B7B7B] line-through">{{
              price
            }}</span>
          </div>
          <div class="flex justify-between items-center text-[1rem]">
            <img src="/online/sale_price.png" class="w-[5.8rem]" alt="sale" />
            <b class="text-[1.5rem]">{{ sale_price }}</b>
          </div>
        </div>
        <button
          class="w-full h-[3rem] text-[1.3rem] font-bold text-white bg-[#555]"
          @click="$router.push('/payment/cart')"
        >
          장바구니 담기
        </button>
        <button
          class="w-full h-[3rem] text-[1.3rem] font-bold text-white bg-primary"
          @click="$router.push('/payment/order')"
        >
          구매하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    sub_title: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    sale_price: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },

    img: {
      type: String,
      default: "",
    },
  },
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
<style></style>
