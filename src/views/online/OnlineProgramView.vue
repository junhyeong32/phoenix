<template>
  <div class="flex flex-col justify-center items-center">
    <section
      class="banner flex flex-col justify-center items-center gap-[1.7rem] md:px-0 xs:px-[2rem] h-[24rem] md:py-0 xs:py-[2rem]"
    >
      <h1 class="md:text-[2rem] xs:text-[1.5rem] text-[white] font-bold">
        비즈니스 성공을 위한 실전 온라인 강의
      </h1>
      <p class="text-[1.3rem] text-[white] text-center">
        여러 업종의 고수들의 핵심만 뽑아서 누구나 따라 할 수 있는 구체적인 방법
        제시.<br />
        이제 구체적인 방법을 배워서 성공에 성큼 다가서시기 바랍니다!
      </p>
      <div
        class="flex justify-center items-center bg-[#FFC01D] md:px-[6.3rem] xs:px-[3rem] py-[0.5rem] rounded-[6px] text-[1.1rem] text-center font-bold"
      >
        모든 온라인 강의는 결제후 30일동안 시청 가능<br />
        결제 이후 강의가 도움이 안됐을 경우 24시간 내 환불 가능
      </div>
    </section>

    <div
      class="fixed top-[13%] w-[90%] max-w-[1220px] h-[80vh] bg-white rounded-[1rem] z-[1] px-[2.9rem] py-[2rem] overflow-y-scroll"
      style="box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.19)"
      v-if="is_open"
    >
      <div class="flex justify-end">
        <img
          src="/online/x.png"
          alt=""
          class="cursor-pointer"
          @click="is_open = false"
        />
      </div>
      <h1
        class="md:text-[40px] xs:text-[2rem] font-bold flex justify-center md:mb-[6.5rem] xs:mb-[2rem]"
      >
        영업 펀더멘탈 만들기
      </h1>
      <div class="flex flex-col">
        <b
          class="md:text-[2rem] sm:text-[1.2rem] border-b-[1px] border-[black] pb-[1.6rem] mb-[1.8rem]"
          >강의 커리큘럼</b
        >
        <ul class="md:text-[1.2rem] sm:text-[1.1rem]">
          <li>설득 모델</li>
          <li>고객의 구매 프로세스</li>
          <li>영업의 법칙들</li>
          <li>영업 성과의 법칙</li>
          <li>공감력과 추진력</li>
          <li>거절과 실패의 두려움 극복</li>
          <li>빅 스몰 성공법</li>
          <li>스몰 빅 성공법</li>
          <li>전략 영업: 신규 고객 만들고 기존 고객 빼앗기지 않는 전략</li>
          <li>신규 고객 만드는 방법</li>
          <li>기존 고객 빼앗기지 않는 방법</li>
          <li>핵심 고객 관리하는 방법</li>
          <li>첫 말 걸기</li>
          <li>멘탈을 잘 쓰면 성과가 높아져요</li>
          <li>성공과 성향에 대한 이해: 낙관 vs 비관 성향</li>
          <li>성공과 성향에 대한 이해: 재능 고정론 vs 재능 개발론</li>
          <li>성공과 성향에 대한 이해: 외향 vs 내향</li>
          <li>성공과 성향에 대한 이해: 목적 vs 수단</li>
          <li>부자를 이해하면 성공의 길이 보인다</li>
        </ul>
      </div>
    </div>

    <div
      class="w-full flex flex-col justify-center items-start bg-[#EDEDED] lg:px-[7.8rem] md:px-[5rem] xs:px-[2rem] py-[4.8rem]"
    >
      <div class="flex flex-start flex-wrap gap-[12px] mb-[2.7rem]">
        <button
          class="px-[1.9rem] py-[7px] text-[1.1rem] font-bold border-[1px] border-primary rounded-[2.6rem]"
          :class="menu === item.menu ? 'bg-primary text-white' : 'text-primary'"
          @click="
            () => {
              menu = item.menu;
              moveSection(item.class);
            }
          "
          v-for="(item, index) in menu_datasets"
          :key="index"
        >
          {{ item.menu }}
        </button>
      </div>

      <section class="w-full flex flex-col sales">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem]"
          >실전 세일즈 과정</b
        >
        <div
          class="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[1.9rem]"
        >
          <online-card
            v-for="(item, index) in sales_datasets"
            :key="index"
            :img="`/online/sales_${index + 1}.png`"
            :title="item.title"
            :sub_title="item.sub_title"
            :time="item.time"
            :price="item.price"
            :sale_price="item.sale_price"
            :date="item.date"
            @click="is_open = true"
          />
        </div>
      </section>

      <section class="w-full flex flex-col leader">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem] mt-[5rem]"
          >실전 리더쉽 과정</b
        >
        <div
          class="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[1.9rem]"
        >
          <online-card
            v-for="(item, index) in leader_datasets"
            :key="index"
            :img="`/online/leader_${index + 1}.png`"
            :title="item.title"
            :sub_title="item.sub_title"
            :time="item.time"
            :price="item.price"
            :sale_price="item.sale_price"
            :date="item.date"
          />
        </div>
      </section>

      <section class="w-full flex flex-col self">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem] mt-[5rem]"
          >실전 자영업 사장님 온라인 과정</b
        >
        <div
          class="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[1.9rem]"
        >
          <online-card
            v-for="(item, index) in leader_datasets"
            :key="index"
            :img="`/online/self_${index + 1}.png`"
            :title="item.title"
            :sub_title="item.sub_title"
            :time="item.time"
            :price="item.price"
            :sale_price="item.sale_price"
            :date="item.date"
          />
        </div>
      </section>

      <section class="w-full flex flex-col marketing">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem] mt-[5rem]"
          >실전 네트워크 마케팅 온라인 과정</b
        >
        <div
          class="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[1.9rem]"
        >
          <online-card
            v-for="(item, index) in marketing_datasets"
            :key="index"
            :img="`/online/marketing_${index + 1}.png`"
            :title="item.title"
            :sub_title="item.sub_title"
            :time="item.time"
            :price="item.price"
            :sale_price="item.sale_price"
            :date="item.date"
          />
        </div>
      </section>

      <section class="w-full flex flex-col sales_leader">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem] mt-[5rem]"
          >실전 세일즈 리더 온라인 과정</b
        >
        <div
          class="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[1.9rem]"
        >
          <online-card
            v-for="(item, index) in sales_leader_datasets"
            :key="index"
            :img="`/online/sales_leader_${index + 1}.png`"
            :title="item.title"
            :sub_title="item.sub_title"
            :time="item.time"
            :price="item.price"
            :sale_price="item.sale_price"
            :date="item.date"
          />
        </div>
      </section>

      <section class="w-full flex flex-col pb">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem] mt-[5rem]"
          >마스터 PB 과정</b
        >
        <div
          class="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[1.9rem]"
        >
          <online-card
            v-for="(item, index) in pb_datasets"
            :key="index"
            :img="`/online/pb_${index + 1}.png`"
            :title="item.title"
            :sub_title="item.sub_title"
            :time="item.time"
            :price="item.price"
            :sale_price="item.sale_price"
            :date="item.date"
          />
        </div>
      </section>
      <section class="w-full flex flex-col subtopic">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem] mt-[5rem]"
          >소주제 컨텐츠</b
        >
        <div
          class="w-full grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[1.9rem]"
        >
          <div
            v-for="(item, index) in subtopic_datasets"
            :key="index"
            class="flex justify-between items-center px-[1.3rem] py-[1.3rem] gap-[4vw] bg-white"
          >
            <div class="flex flex-col">
              <span class="text-[1.4rem]"
                ><b>{{ item.title }}</b> {{ item.time }}</span
              >

              <p class="text-[1.4rem] text-[#790000]">{{ item.price }}</p>
            </div>
            <button
              class="w-[8.9rem] h-[3rem] text-[1.3rem] font-bold text-white bg-primary"
            >
              구매하기
            </button>
          </div>
        </div>
      </section>

      <div class="w-full flex justify-center mt-[3rem]">
        <button
          class="w-[18.3rem] h-[4.4rem] text-[1.9rem] font-bold text-white bg-[#B4696D] rounded-[1rem]"
        >
          접기
        </button>
      </div>

      <section class="w-full flex flex-col online">
        <b class="w-full border-t-[2px] pt-[1.7rem] text-[2rem] mt-[3rem]"
          >피닉스 온라인 서포팅</b
        >

        <div
          class="flex md:xs:flex-row xs:flex-col justify-between items-start px-[1.3rem] py-[2.8rem] mt-[2.6rem] gap-[3rem] rounded-[1.1rem] bg-white"
        >
          <div
            class="flex flex-col gap-[0.7rem] md:w-[80%] md:max-w-[404px] xs:w-full"
          >
            <div
              class="flex justify-start items-center text-[1.6rem] text-white bg-[#08AB36] rounded-[1.4rem] p-[2.4rem]"
            >
              서포트 1. 잠재고객 DB 리스트
            </div>
            <div
              class="flex justify-start items-center text-[1.6rem] text-white bg-[#0849AB] rounded-[1.4rem] p-[2.4rem]"
            >
              서포트 2. 마케팅 자동화 시스템 구축
            </div>
            <div
              class="flex justify-start items-center text-[1.6rem] text-white bg-[#D38C00] rounded-[1.4rem] p-[2.4rem]"
            >
              서포트 3. 소개/추천 시스템 도입
            </div>
          </div>
          <div class="flex flex-col">
            <div class="text-[1.3rem]">
              상품이나 서비스는 준비 되어 있지만, 이걸 어떻게 고객들에게 알리고
              구매하도록 만들지에 대해 막막하신가요?<br />
              <b
                >피닉스 컨설팅에서는 이런 고민을 하시는 중소기업, 자영업자
                사장님을 위해 마케팅 자동화 솔루션을 제공 합니다.</b
              >
            </div>
            <div class="w-full flex flex-col items-end mt-[2.7rem]">
              <div class="flex items-center text-[1rem] gap-[5.9rem]">
                <span class="text-[1rem]">정가</span>
                <span class="text-[1.5rem] text-[#7B7B7B] line-through"
                  >월/100만원</span
                >
              </div>
              <div class="flex items-center text-[1rem] gap-[0.87rem]">
                <span class="text-[1rem]">완전특가</span>
                <img src="/online/50.png" class="w-[4.8rem]" alt="sale" />
                <b class="text-[1.5rem]">월/50만원</b>
              </div>
            </div>
            <div class="w-full flex justify-end items-end mt-[1rem]">
              <button
                class="w-[35%] max-w-[244px] h-[3rem] text-[1.3rem] font-bold text-white bg-[#555555]"
              >
                장바구니 담기
              </button>
              <button
                class="w-[35%] max-w-[244px] h-[3rem] text-[1.3rem] font-bold text-white bg-primary"
              >
                구매하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <img
      src="/training/up.png"
      alt="up"
      class="fixed right-[3%] bottom-[5%] cursor-pointer w-[5rem] h-[5rem]"
      @click="screenUp"
    />
  </div>
</template>

<script>
import OnlineCard from "../../components/Card/online/index.vue";
export default {
  name: "OnlineProgramView",
  components: { OnlineCard },
  props: {},
  data() {
    return {
      menu: "전체",
      is_open: false,
      menu_datasets: [
        { menu: "전체", class: "" },
        { menu: "세일즈", class: "sales" },
        { menu: "리더십", class: "leader" },
        { menu: "자영업", class: "self" },
        { menu: "네트워크 마케팅", class: "marketing" },
        { menu: "세일즈 리더", class: "sales_leader" },
        { menu: "PB", class: "pb" },
        { menu: "소주제 컨텐츠", class: "subtopic" },
        { menu: "온라인 컨텐츠", class: "online" },
      ],
      sales_datasets: [
        {
          title: "입문자 추천!\n마무리 기술 클리닉",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총 6시간 33분",
          price: "36,000원",
          sale_price: "19,000원",
        },
        {
          title: "입문자 추천!\n마무리 기술 클리닉",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총 6시간 33분",
          price: "36,000원",
          sale_price: "19,000원",
        },
        {
          title: "입문자 추천!\n마무리 기술 클리닉",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총 6시간 33분",
          price: "36,000원",
          sale_price: "19,000원",
        },
        {
          title: "입문자 추천!\n마무리 기술 클리닉",
          sub_title: "리더는 신뢰다",
          time: "총 6시간 33분",
          price: "23,000원",
          sale_price: "11,900원",
        },
      ],
      leader_datasets: [
        {
          title: "신뢰받는 리더들은 뭐가 다른걸까?",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총4시간 6분",
          price: "36,000원",
          sale_price: "19,000원",
        },
        {
          title: "신뢰받는 리더들은 뭐가 다른걸까?",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총4시간 6분",
          price: "36,000원",
          sale_price: "19,000원",
        },
        {
          title: "신뢰받는 리더들은 뭐가 다른걸까?",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총4시간 6분",
          price: "36,000원",
          sale_price: "19,000원",
        },
        {
          title: "신뢰받는 리더들은 뭐가 다른걸까?",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총4시간 6분",
          price: "36,000원",
          sale_price: "19,000원",
        },
        {
          title: "신뢰받는 리더들은 뭐가 다른걸까?",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총4시간 6분",
          price: "36,000원",
          sale_price: "19,000원",
        },
      ],
      self_datasets: [
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
      ],
      marketing_datasets: [
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },

        {
          title: "성공하기 위해 필수로 준비해야 할 것",
          sub_title: "성공 근육 만들기",
          time: "총4시간 1분",
          price: "23,000원",
          sale_price: "11,900원",
        },
      ],
      sales_leader_datasets: [
        {
          title: "성과를 내는 세일즈 리더들의 비밀",
          sub_title: "성과를 만드는 세일즈 리더",
          time: "총4시간 44분",
          price: "27,000원",
          sale_price: "12,900원",
        },
        {
          title: "성과를 내는 세일즈 리더들의 비밀",
          sub_title: "성과를 만드는 세일즈 리더",
          time: "총4시간 44분",
          price: "27,000원",
          sale_price: "12,900원",
        },
        {
          title: "성과를 내는 세일즈 리더들의 비밀",
          sub_title: "성과를 만드는 세일즈 리더",
          time: "총4시간 44분",
          price: "27,000원",
          sale_price: "12,900원",
        },
        {
          title: "성과를 내는 세일즈 리더들의 비밀",
          sub_title: "성과를 만드는 세일즈 리더",
          time: "총4시간 44분",
          price: "27,000원",
          sale_price: "12,900원",
        },
        {
          title: "성과를 내는 세일즈 리더들의 비밀",
          sub_title: "성과를 만드는 세일즈 리더",
          time: "총4시간 44분",
          price: "27,000원",
          sale_price: "12,900원",
        },
      ],
      pb_datasets: [
        {
          title: "PB 영업의 필수 스킬을 배워보자!",
          sub_title: "PB 영업 핵심 : 고객 장악 1",
          time: "총5시간 24분",
          price: "36,000원",
          sale_price: "19,900원",
        },
        {
          title: "PB 영업의 필수 스킬을 배워보자!",
          sub_title: "PB 영업 핵심 : 고객 장악 1",
          time: "총5시간 24분",
          price: "36,000원",
          sale_price: "19,900원",
        },
        {
          title: "PB 영업의 필수 스킬을 배워보자!",
          sub_title: "PB 영업 핵심 : 고객 장악 1",
          time: "총5시간 24분",
          price: "36,000원",
          sale_price: "19,900원",
        },
        {
          title: "PB 영업의 필수 스킬을 배워보자!",
          sub_title: "PB 영업 핵심 : 고객 장악 1",
          time: "총5시간 24분",
          price: "36,000원",
          sale_price: "19,900원",
        },
      ],
      subtopic_datasets: [
        {
          title: "갑을관계에서 멘탈 지키기",
          time: "(1시간 24분)",
          price: "4,900원",
        },
        {
          title: "계약을 이끌어내는 마무리 기술",
          time: "(39분)",
          price: "1,900원",
        },
        {
          title: "갑을관계에서 멘탈 지키기",
          time: "(1시간 24분)",
          price: "4,900원",
        },
        {
          title: "계약을 이끌어내는 마무리 기술",
          time: "(39분)",
          price: "1,900원",
        },
        {
          title: "갑을관계에서 멘탈 지키기",
          time: "(1시간 24분)",
          price: "4,900원",
        },
        {
          title: "계약을 이끌어내는 마무리 기술",
          time: "(39분)",
          price: "1,900원",
        },

        {
          title: "갑을관계에서 멘탈 지키기",
          time: "(1시간 24분)",
          price: "4,900원",
        },
        {
          title: "계약을 이끌어내는 마무리 기술",
          time: "(39분)",
          price: "1,900원",
        },
      ],
    };
  },
  computed: {},
  methods: {
    screenUp() {
      window.scrollTo(0, 0);
    },
    moveSection(className) {
      const ele = document.getElementsByClassName(className)[0];
      console.log(ele);

      window.scrollBy({
        top: ele.getBoundingClientRect().top,
        behavior: "smooth",
      });
    },
  },
  watch: {
    is_open() {
      console.log(this.is_open);
    },
  },
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
.banner {
  background-image: url("/training/banner.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
}

li {
  list-style: disc;
  margin-left: 2rem;
}
</style>
