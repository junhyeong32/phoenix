<template>
  <div
    class="flex flex-col items-center bg-[#E9E3E3] md:px-[120px] xs:px-[2rem] pt-[5.1rem] pb-[5.8rem]"
  >
    <div
      class="w-full flex justify-center items-center text-[3rem] text-[#630606] font-bold relative"
    >
      <img
        src="/online/arrow.png"
        alt="arrow"
        class="absolute left-0 cursor-pointer"
        @click="$router.back()"
      />
      역량 검사
    </div>

    <div
      class="w-full bg-[#FFF5DA] text-[2rem] font-bold px-[2.8rem] py-[1.8rem] mt-[3.3rem]"
    >
      Category : 소통
    </div>

    <div
      class="w-full h-[6.8rem] flex justify-between items-center text-[1.9rem] font-bold bg-white rounded-[9px] mt-[4.7rem] px-[2.7rem]"
    >
      <span>Q1. 질문을 입력해 주세요. (5지선다형)</span>
      <button
        class="w-[7.6rem] h-[2.3rem] flex justify-center items-center bg-primary rounded-[5px] text-[white] text-[1rem]"
      >
        관련 영상 보기
      </button>
    </div>

    <div
      class="w-full flex flex-col mt-[1.3rem] gap-[1.3rem] bg-white px-[2.4rem] py-[2rem] rounded-[9px]"
    >
      <div
        v-for="(item, index) in test_datasets"
        :key="index"
        class="w-full h-auto flex items-center rounded-[1rem] text-[1.3rem] gap-[1rem]"
      >
        <input type="radio" class="text-[black]" />
        <span>{{ item.text }}</span>
      </div>
    </div>

    <div
      class="w-full h-[6.8rem] flex justify-between items-center text-[1.9rem] font-bold bg-white rounded-[9px] mt-[2.9rem] px-[2.7rem]"
    >
      <span>Q2. 질문을 입력해 주세요. (점수형)</span>
      <button
        class="w-[7.6rem] h-[2.3rem] flex justify-center items-center bg-primary rounded-[5px] text-[white] text-[1rem]"
      >
        관련 영상 보기
      </button>
    </div>

    <div
      class="w-full grid md:grid-cols-10 xs:grid-cols-2 mt-[1.3rem] bg-white px-[2.4rem] py-[2rem] rounded-[9px]"
    >
      <div
        v-for="(item, index) in 10"
        :key="index"
        class="h-[5.6rem] flex justify-center items-center text-[1.3rem] border-[1px] border-[#979797]"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div
      class="w-full h-[6.8rem] flex justify-between items-center text-[1.9rem] font-bold bg-white rounded-[9px] mt-[2.9rem] px-[2.7rem]"
    >
      <span>Q3. 질문을 입력해 주세요. (Yes or No형)</span>
      <button
        class="w-[7.6rem] h-[2.3rem] flex justify-center items-center bg-primary rounded-[5px] text-[white] text-[1rem]"
      >
        관련 영상 보기
      </button>
    </div>

    <div
      class="w-full flex flex-nowrap mt-[1.3rem] bg-white px-[2.4rem] py-[2rem] rounded-[9px]"
    >
      <button
        class="w-[50%] h-[5rem] flex justify-center items-center bg-primary text-white text-[1.3rem]"
        @click="$router.push('/online/all-ability')"
      >
        그렇다
      </button>
      <button
        class="w-[50%] h-[5rem] flex justify-center items-center border-[1px] border-[#979797] text-[1.3rem]"
        @click="$router.push('/online/all-ability')"
      >
        아니다
      </button>
    </div>

    <button
      class="w-[18.3rem] h-[5rem] flex justify-center items-center bg-[#B4696D] rounded-[1rem] text-[white] text-[1.7rem] mt-[4.3rem]"
      @click="$router.push('/online/result')"
    >
      다음
      <img src="/online/right-arrow.png" alt="right-arrow" class="ml-[10px]" />
    </button>
  </div>
</template>

<script>
export default {
  name: "AllAbliltyView",
  components: {},
  props: {},
  data() {
    return {
      menu: "전체",
      count: 0,
      test_datasets: [
        {
          text: "시간이 조금 들더라도 나의 역량 전체에 대한 진단을 받아본 뒤에 그 진단 결과를 보고 싶다.",
          is_check: false,
        },
        {
          text: "일단 무료 강의를 보고 나서 더 진행할지 말지 결정하고 싶다.",
          sub_text:
            "(무료 강의는 60일동안 제공되며, 전체 역량 진단은 언제라도 다시 진행하실 수 있습니다.)",
          is_check: false,
        },
        {
          text: "내게 뭐가 필요한지는 내가 잘 아니, 진단은 빼고 내가 원하는 강의들만 골라서 보고 싶다.",
          is_check: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    toggleCheck(item) {
      item.is_check = !item.is_check;
    },
  },
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
.banner {
  background-image: url("/marketplace/banner.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
}

.product {
  background-image: url("/product/product.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  border-radius: 12px;
}
</style>
