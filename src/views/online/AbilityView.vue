<template>
  <div
    class="flex flex-col items-center bg-[#E9E3E3] md:px-[120px] pt-[5.1rem] pb-[5.8rem]"
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

    <div class="bg-[#FFF5DA] text-[1.1rem] px-[1.6rem] py-[3.4rem] mt-[3.3rem]">
      <b
        >이 역량 진단은 무료이며, 진단 결과를 바로 pdf로 다운받으실 수 있습니다. </b
      ><br />
      (이 역량 진단에서는 지식에 대해서는 다루지 않습니다. 따라서, 지식에 대해
      관심이 있으신 분들은 해당 분야에 대한 다른 방법들을 찾아가시기
      바랍니다.)<br /><br />

      저희는 성공한 수 많은 기업인들과 창업가들을 인터뷰 하면서 그 분들이
      성공하지 못한 분들과 확연히 다른 뛰어난 점을 발견했습니다.<br />
      ‘나에게 있어서 중요한 사람 또는 나의 고객이 누군지? 그들이 뭘 원하는지’에
      대한 명확한 이해와 고객 또는 다른 사람들과 소통하고, 그들을 설득하거나
      이끄는데 있어서 매우 체계적인 훈련이 되어 있다는 걸 반복적으로 발견했고
      이에 대한 구체적인 방법들을 정리했습니다.<br /><br />

      뭔가가 잘 안 된다면 그건 여러분의 탓이 아니라, 여러분이 그걸 어떻게 잘 할
      수 있는지에 대해 제대로 된 내용으로 구체적으로 배운 적이 없기
      때문입니다.<br /><br />

      <b
        >따라서, 이 역량 진단은 단지 진단으로 그치고 나서 "알아서 잘 하시길
        바랍니다. 행운을 빕니다." 는 식이 아니라,<br />
        여러분이 진단한 역량들에 대해서 실제적이고 구체적인 개선 방법을
        알려드리는 짧은 포인트 강의들로 연결됩니다. <br />
        역량 진단 전체 문항은 XXX개이며, 역량 진단을 완료하는 데에는 10~15분
        정도의 시간이 듭니다.</b
      >
    </div>

    <div
      class="w-full h-[6.8rem] flex items-center text-[1.9rem] font-bold bg-white rounded-[9px] mt-[4.7rem] px-[2.7rem]"
    >
      Q. 나는 다음에 관심이 있다.
    </div>

    <div class="grid md:grid-cols-3 xs:grid-cols-1 mt-[3.8rem] gap-[1.5rem]">
      <div
        v-for="(item, index) in test_datasets"
        :key="index"
        class="w-full min-h-[9.1rem] h-auto flex justify-center items-center rounded-[1rem] px-[1rem] py-[3.8rem] text-[1.6rem] text-center font-bold cursor-pointer relative"
        :class="
          test_datasets[index].is_check ? 'bg-primary text-white' : 'bg-white'
        "
        @click="toggleCheck(item)"
      >
        {{ item.text }}
        <img
          src="/online/check.png"
          alt="check "
          class="absolute right-[10px] top-[10px]"
          v-if="test_datasets[index].is_check"
        />
      </div>
    </div>
    <div class="flex gap-[1.6rem]">
      <button
        class="w-[18.3rem] h-[5rem] flex justify-center items-center bg-[#616161] rounded-[1rem] text-[white] text-[1.7rem] mt-[4.3rem]"
        @click="$router.push('/online/all-ability')"
      >
        전체 역량 진단하기
      </button>
      <button
        class="w-[13rem] h-[5rem] flex justify-center items-center bg-[#B4696D] rounded-[1rem] text-[white] text-[1.7rem] mt-[4.3rem]"
        @click="$router.push('/online/all-ability')"
      >
        다음
        <img
          src="/online/right-arrow.png"
          alt="right-arrow"
          class="ml-[10px]"
        />
      </button>
    </div>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";

import TravelCard from "../../components/Card/home/Travel.vue";
export default {
  name: "OnlineView",
  components: {
    HeaderViewVue,
    Card,

    TravelCard,
  },
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
