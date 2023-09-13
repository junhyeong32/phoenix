<template>
  <div class="flex flex-col space-y-2 justify-center items-center">
    <section class="banner flex flex-col justify-center items-center">
      <h1
        class="sm:text-[2.5rem] xs:text-[2.2rem] font-bold text-[white] border-b-[3px] border-[#C71C23]"
      >
        반드시 성공하고 싶은 사람들을 위한.
      </h1>
      <h1 class="sm:text-[2.5rem] xs:text-[2.2rem] text-[white] font-bold">
        Business Online Course
      </h1>
      <button
        class="w-[13rem] h-[3.25rem] bg-primary text-[1rem] text-white mt-[1rem] rounded-[0.5rem] font-bold"
      >
        60일 무료강의 바로가기
      </button>
    </section>

    <section
      class="w-full min-h-[28rem] lg:px-[8.8rem] xs:px-[2rem] pb-[5.7rem] bg-[#F1F1F1]"
    >
      <div
        class="grid md:grid-cols-3 xs:grid-cols-1 gap-[1.2rem] bg-white pl-[3.8rem] pr-[2.4rem] py-[3rem]"
      >
        <div
          v-for="(item, index) in section2_datasets"
          :key="index"
          class="w-full h-auto flex lg:justify-center xs:justify-start items-start gap-[2rem]"
        >
          <img :src="item.img" alt="heritage" class="h-[7.4rem]" />
          <div class="flex flex-col items-start gap-[1.3rem] text-[0.8rem]">
            <b>
              {{ item.title }}
            </b>
            <p>{{ item.desc }}</p>
            <button class="text-[0.8rem] text-primary font-bold">
              바로가기 >
            </button>
          </div>
        </div>
      </div>

      <h2 class="text-[1.5rem] text-[#C71C23] font-bold mt-[6rem] mb-[1.75rem]">
        피닉스 온라인강의를 수강 추천 대상자
      </h2>

      <div class="grid md:grid-cols-3 xs:grid-cols-1 gap-[1.6rem]">
        <card
          v-for="(item, index) in section3_datasets"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :img="item.img"
          :path="item.path"
        />
      </div>
    </section>

    <section
      class="w-full flex flex-col items-start bg-[#000] md:px-[7.5rem] xs:px-[2rem] pt-[4.4rem] pb-[7.85rem]"
    >
      <div
        class="flex justify-center items-center border-[1px] border-primary rounded-[3px] text-primary font-bold p-[0.8rem]"
      >
        Recommended Theme
      </div>
      <h3 class="text-[1.5rem] text-white mb-[2rem] font-bold mt-[1.9rem]">
        피닉스의 강의들을 통해 진정한 1조가치 기업으로의<br />
        성장 방법과 동기부여를 얻어가세요.
      </h3>

      <diV class="grid md:grid-cols-2 xs:grid-cols-1 gap-[1.2rem]">
        <heritage-card
          v-for="(item, index) in section4_datasets"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :img="item.img"
        />
      </diV>

      <h3 class="text-[1.5rem] text-white mb-[2rem] font-bold mt-[6.3rem]">
        피닉스의 온라인 강의에서만 들을 수 있는 비즈니스 성공 원칙중<br />
        일부를 소개합니다.
      </h3>

      <div class="w-full flex justify-center">
        <img src="/home/section.png" alt="section" />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";
import HeritageCard from "../../components/Card/home/Heritage.vue";
import TravelCard from "../../components/Card/home/Travel.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "HomeView",
  components: {
    HeaderViewVue,
    Card,
    HeritageCard,
    TravelCard,
    VueperSlides,
    VueperSlide,
  },
  props: {},
  data() {
    return {
      section2_datasets: [
        {
          title: "온라인 프로그램",
          desc: "여러 업종의 고수들의 핵심만 뽑아서 알려 드리는 온라인 프로그램",
          img: "/home/program.png",
          path: "/",
        },
        {
          title: "트레이닝",
          desc: "영업 현장에서 도움이 되는 과정",
          img: "/home/training.png",
          path: "/",
        },
        {
          title: "진단솔루션",
          desc: "우리 조직이 과연 제대로 성과를 내고 있는 게 맞는 건지 아닌지궁금한 분",
          img: "/home/solution.png",
          path: "/",
        },
      ],

      section3_datasets: [
        {
          title: "중소기업 및 대기업",
          desc: "기업 컨설팅",
          img: "/home/company.png",
        },
        {
          title: "조직, 팀 단위",
          desc: "그룹 컨설팅",
          img: "/home/group.png",
        },
        {
          title: "중소기업 및 대기업",
          desc: "기업 컨설팅",
          img: "/home/startup.png",
        },
      ],

      section4_datasets: [
        {
          title: "상황을 유리하게 이끌어나가는 협상의 기술",
          desc: "궁지에 몰린 쥐가 전세를 역전하는 방법. 소셜커머스 시장 1위를 지키기 위해 세웠던 전략, 글로벌 기업으로 도약을 위한 말레이시아 소셜커머스 인수 등 조직의 상황을 유리하게 이끌어나가기 위해서 택한 전략들을 낱낱이 공개합니다. 오직 피닉스 온라인 강의에서만!",
          img: "/home/1.png",
        },
        {
          title: "하나의 목표를 바라보는 팀을 만드는 방법",
          desc: "기업의 인재관과 좋은 인재를 모셔오는 방법부터 360도 성과 평가와 뚜렷한 보상의 방법, 조직을 해치는 사내 정치와 팀 이기주의 등 조직을 관리하는 1조 기업 조직을 다루는 방식들을 살펴봅니다.",
          img: "/home/2.png",
        },
        {
          title: "위기 관리에 대처하는 의사결정 방법",
          desc: "생각지도 못한 폭발적인 시장의 반응으로 회사가 가진 돈의 절반 이상을 고객에게 환불해줘야 하는 위기를 맞았는데요. 어떻게 위기를 극복했을까요? 영화보다도 더 영화 같은 사례를 통해 위기를 극복할 때 반드시 알아야 할 '이것'을 알려드립니다.",
          img: "/home/3.png",
        },
        {
          title: "좋은 창업 팀 구성, 아이디어를 검증하는 방법",
          desc: "사업 아이템을 정하셨나요? 조금이라도 실험해 보기 위한 조직을 모으기 위해 이리저리 뛰어 다니다보면 느끼게 되는 것. '시간이 부족하구나!' 빨리 성장하고 싶은데 내부에 돈도, 사람도 부족해 어떻게 해야할 지 모르겠다면? 코칭받은 전략들을 거울삼아 조직의 성장 속도를 높일 수 있습니다. 시간은, 금입니다!",
          img: "/home/4.png",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
.banner {
  background: url("/home/banner.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
  height: 44.3rem;
}

.section_4 {
  background-image: url("/home/section_4.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
  height: 66.78rem;
}

.section_7 {
  background-image: url("/home/vegetable.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
  height: 66.78rem;
}
</style>
