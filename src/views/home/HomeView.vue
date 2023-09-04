<template>
  <div class="flex flex-col space-y-2 justify-center items-center">
    <section class="banner flex flex-col justify-center items-center">
      <p class="sm:text-[3.4rem] xs:text-[2.2rem] text-[white]">
        풍요로운 땅, 전라남도 곡성으로
      </p>
      <h1 class="sm:text-[3.4rem] xs:text-[2.2rem] text-[white] font-bold">
        나를 찾아 떠나는 가장 나다운 여행.
      </h1>
    </section>

    <section
      class="w-full min-h-[28rem] grid md:grid-cols-3 sm:grid-cols-1 md:px-[8.5rem] sm:px-[2rem] pb-[5.7rem] gap-[1.6rem] bg-[#D8FBF2]"
    >
      <card
        v-for="(item, index) in section2_datasets"
        :key="index"
        :title="item.title"
        :desc="item.desc"
        :img="item.img"
        :path="item.path"
      />
    </section>

    <section
      class="w-full h-[26rem] flex flex-col justify-center items-center gap-[4.6rem] bg-[#CEF5EC] px-[1.5rem]"
    >
      <h1
        class="sm:text-[2.6rem] xs:text-[1.7rem] text-primary font-[SANJUGotgam]"
      >
        왜 정원코리아월드여야 할까요?
      </h1>

      <div class="sm:text-[1.4rem] xs:text-[1rem] Class Properties text-center">
        정원코리아월드를 선택해야 하는 이유는, 어디에서나 기획 가능한
        천편일률적인 관광지 투어가 아닌<br />
        실제 현지에 다양한 인프라를 확보하여 지역 특화 여행상품과 공방, 체험방
        등의 시설을 갖춘 자체 투어 프로그램들이 핵심입니다.<br />
        여행과 체험의 진정한 의미를 깨닫고 가길 바라는 마음을 전달합니다.
      </div>
    </section>

    <section
      class="section_4 flex flex-col justify-start items-center py-[3.2rem]"
    >
      <p class="text-[1.7rem] text-[white]">Recommended Spot</p>
      <h3 class="sm:text-[2.6rem] xs:text-[1.7rem] text-[white] font-bold">
        풍요로운 땅, 전라남도 곡성으로 초대합니다.
      </h3>

      <travel-card
        v-for="(item, index) in section4_datasets"
        :key="index"
        :title="item.title"
        :desc="item.desc"
        :img="`/home/travel_${index + 1}.png`"
      />
    </section>

    <section
      class="w-full flex flex-col items-center bg-[#EDF8F5] px-[1.5rem] pt-[4.4rem] pb-[7.85rem]"
    >
      <p class="sm:text-[1.7rem] xs:text-[1.2rem] text-[#008A93]">
        Recommended Theme
      </p>
      <h1
        class="sm:text-[2.6rem] xs:text-[1.7rem] text-[#008A93] mb-[2rem] font-bold"
      >
        다양한 주제의 여행을 추천해 드립니다.
      </h1>

      <diV class="grid md:grid-cols-7 xs:grid-cols-3 gap-[1.2rem]">
        <category-card
          v-for="(item, index) in section5_datasets"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :img="`/home/${index + 1}.png`"
        />
      </diV>
    </section>

    <section
      class="w-full flex flex-col items-center bg-[#F8F3ED] sm:px-[8.57rem] xs:px-[2rem] py-[3.7rem]"
    >
      <p class="sm:text-[1.7rem] xs:text-[1.2rem] text-[#9A714A]">
        Special Activity
      </p>
      <h1
        class="sm:text-[2.6rem] xs:text-[1.7rem] text-[#9A714A] font-bold text-center"
      >
        오직! 정원코리아에서만 할 수 있는<br />
        곡성 현지 체험 프로그램
      </h1>

      <div class="grid md:grid-cols-3 sm:grid-cols-1 mt-[1.85rem] gap-[1.4rem]">
        <div
          v-for="(item, index) in section6_datasets"
          :key="index"
          :class="index === 1 && 'md:mt-[6.5rem]'"
        >
          <img :src="item.img" alt="program" class="xs:w-full mb-[1.8rem]" />
          <b class="ml-[1rem] text-[1.1rem] text-[#9A714A]">{{ item.title }}</b>
          <p class="ml-[1rem] text-[1.1rem] text-[#9A714A] whitespace-pre-wrap">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="w-full h-[44.4rem] flex flex-col items-center gap-[4.6rem] section_7 xs:px-[5rem] md:px-[10rem] py-[4.6rem]"
    >
      <div
        class="w-full flex sm:flex-row xs:flex-col justify-evenly gap-[2rem]"
      >
        <div>
          <p class="sm:text-[1.7rem] xs:text-[1.2rem] text-[#116824]">
            Only Here!
          </p>
          <h1
            class="sm:text-[2.6rem] xs:text-[1.7rem] text-[#116824] font-bold"
          >
            곡성 농부와의 직거래 장터
          </h1>
        </div>

        <div>
          <p class="text-[1.14rem] text-[#116824]">
            풍요로운 땅 곡성에서 현지 농부가 직접 키우고 재배한 특산물을<br />
            중간 유통 없이 직접 거래해 더욱 싱싱하고 저렴하게 거래해<br />
            한층 더 뜻 깊은 기억도 가져가세요.
          </p>

          <button
            class="border-[3px] border-[white] rounded-[10px] px-[1.8rem] py-[0.6rem] text-[white] mt-[2.2rem]"
          >
            구경하러 하기
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";
import CategoryCard from "../../components/Card/home/Category.vue";
import TravelCard from "../../components/Card/home/Travel.vue";
export default {
  name: "HomeView",
  components: {
    HeaderViewVue,
    Card,
    CategoryCard,
    TravelCard,
  },
  props: {},
  data() {
    return {
      section2_datasets: [
        {
          title: "여행상품",
          desc: "어디서도 찾아 볼 수 없는\n특별한 여행을 원한다면-",
          img: "/home/product.png",
          path: "/product",
        },
        {
          title: "현지 프로그램",
          desc: "곡성 농부에게서 구매하는\n현지 특산물-",
          img: "/home/program.png",
          path: "/program",
        },
        {
          title: "곡성 농부와 직거래 장터",
          desc: "어디서도 찾아 볼 수 없는\n특별한 여행을 원한다면-",
          img: "/home/market.png",
          path: "/marketplace",
        },
      ],

      section4_datasets: [
        {
          title: "여행지 제목 입력",
          desc: "어디서도 찾아 볼 수 없는\n특별한 여행을 원한다면-",
          img: "/home/product.png",
        },
        {
          title: "여행상품",
          desc: "어디서도 찾아 볼 수 없는\n특별한 여행을 원한다면-",
          img: "/home/program.png",
        },
        {
          title: "여행상품",
          desc: "어디서도 찾아 볼 수 없는\n특별한 여행을 원한다면-",
          img: "/home/market.png",
        },
      ],

      section5_datasets: [
        { title: "캠핑여행", desc: "자연과 함께" },
        { title: "골프여행", desc: "넓고 푸르른" },
        { title: "넓고 푸르른", desc: "평생 잊지못할" },
        { title: "커플여행", desc: "둘만의 기억" },
        { title: "가족여행", desc: "함께 쌓는 추억" },
        { title: "힐링여행", desc: "자유로운 여행" },
        { title: "자유여행", desc: "구애받지 않는" },
        { title: "국내여행", desc: "새로운 발견" },
        { title: "해외여행", desc: "안전보장" },
        { title: "장기투숙", desc: "오래 머무르다" },
        { title: "기차여행", desc: "그림같은 풍경" },
        { title: "맛집여행", desc: "맛따라 멋따라" },
        { title: "역사탐방", desc: "흥미진진하게" },
        { title: "교육여행", desc: "배워가는 여행" },
      ],

      section6_datasets: [
        {
          title: "목공예체험",
          desc: "남녀노소 누구나 내 손으로 직접 설계하고 만들며\n오감으로 즐길 수 있는 체험 활동입니다.",
          img: "/home/woodwork.png",
        },
        {
          title: "바리스타체험",
          desc: "곡성 목공예&커피체험관은,바리스타 시험을 볼\n수 있는 바리스타 시험 검정장이며 월드커피바리\n스타협회와 함께합니다.",
          img: "/home/barista.png",
        },
        {
          title: "각종 교육프로그램",
          desc: "각종 숙박시설 및 편의시설로 세미나, 워크샵 등\n다양한 프로그램을 진행할 수 있습니다.",
          img: "/home/education.png",
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
  background: linear-gradient(
      180deg,
      rgba(22, 68, 68, 0.32) 58.92%,
      #d8fbf2 100%
    ),
    url("/home/banner.png"), lightgray 50%;
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
