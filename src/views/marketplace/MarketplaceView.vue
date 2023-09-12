<template>
  <div class="flex flex-col justify-center items-center">
    <section
      class="banner flex flex-col justify-center items-center gap-[1.7rem] md:px-0 xs:px-[2rem] h-[24rem]"
    >
      <h1 class="text-[2rem] text-[white] font-bold">피닉스 클리닉</h1>
      <p class="text-[1.3rem] text-[white] text-center">
        피닉스 컨설팅의 프로그램은 영업 현장에서 도움이 되는 내용만을
        추렸습니다.
      </p>
    </section>

    <div
      class="w-full flex justify-center items-start bg-[#EDEDED] lg:px-[7.8rem] md:px-[5rem] xs:px-[2rem] py-[4.8rem] gap-[1.9rem]"
    >
      <div class="w-[90%] mb-[3rem]">
        <div
          class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[2.85rem]"
        >
          <div
            v-for="(item, index) in program_datasets"
            :key="index"
            class="flex flex-col gap-[0.8rem] relative cursor-pointer bg-white rounded-[18px]"
            @click="$router.push('/marketplace/detail')"
          >
            <img :src="`/training/${index + 1}.png`" alt="program" class="" />

            <div class="flex flex-col px-[1.4rem] py-[1.5rem]">
              <b class="text-[1.3rem]">
                {{ item.title }}
              </b>
              <div class="text-[1.1rem] mt-[6px]">{{ item.sub_title }}</div>
              <div class="text-[1rem] text-[#878787] mt-[1.5rem]">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
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
export default {
  name: "TrainingView",
  components: {},
  props: {},
  data() {
    return {
      program_datasets: [
        {
          title: "마무리 기술 클리닉",
          sub_title:
            "거절의 두려움을 극복하고 계약을 성사시키는 실전 방법들에 집중하는 과정 (1일)",
          desc: "고객에게 뭔가를 요청할 때, 사람들은 대개 거절의 두려움, 관계 악화에 대한 두려움을 가지며 주저하게 됩니다.하지만, 생각해보십시오. 뭔가를 요청하면 고객이 거절할 수도 있고, 수용할 수도 있지만, 뭔가를 요청하지 않으면 아무 일도 벌어지지 않으며, 이건 고객이 거절할 때와 똑같은 결과입니다. 결국, 성과는 용기를 내어 잠재 고객에게 뭔가를 요청할 때 만들어집니다.하지만, 대부분의 사람들은 뭔가를 요청할 때 어색하고 두렵습니다. 이는 마무리를 어떻게 하는지 제대로 배우면 해결됩니다.이 과정에서는 거절의 두려움을 줄여주는 체계적인 노하우를 제공하며, 고객에게 부드럽게 요청할 수 있는 여러 기술들과 구체적인 멘트들을 훈련시켜드립니다.",
        },
        {
          title: "신규 전략 클리닉",
          price:
            "신규 고객을 유치하기 위한 전략부터 실전 실습까지 포함한 과정 (1일)",
          desc: "신규 고객을 유치하려면 '분명하게 될 성 싶은 전략' 이 있어야 합니다. 더 구체적으로는, 어떤 고객이 타겟인가? 어떻게 그 고객을 접촉할 수 있는가? 접촉해서 뭘 할 것인가? 그 고객을 어떻게 지속적으로 관리해나갈 것인가? 등에 대해 명확한 답을 가지고 있어야 하고, 구체적으로 무슨 말을 할지, 고객의 예상되는 반응에 어떻게 대응할지?에 대해 훈련이 되어 있어야 합니다.이런 구체적인 전략과 훈련이 없이 신규 고객을 유치하려고 해봤자, 거절을 당하고 가슴앓이를 하기 십상입니다.뭔가를 할 때 '뭐라도 하긴 해야겠는데...' 라는 마음으로 하는 것과, '될 성 싶어서' 적극적으로 하는 건 매우 다른 결과를 만듭니다.이 과정에서는 구체적으로 신규 고객에 대한 전략을 수립하도록 도우며, 더 구체적으로 신규 고객을 만났을 때 뭘 어떻게 해야 하는지?에 대해 실전 상황처럼 연습을 하도록 돕습니다.이 과정을 마치고 나면 누구나 자신감을 가지고 신규 고객을 유치할 수 있을겁니다.",
        },
        {
          title: "고객 관리 클리닉",
          sub_title:
            "신규 고객을 유치하는 것보다 더 중요한 고객 관리를 체계적으로 배웁니다 (1일)",
          desc: "신규 고객을 유치하는 데 드는 시간과 비용은 기존 고객을 유지하는 데 드는 비용의 최소 6배입니다. 게다가, 만족한 기존 고객이야말로 가장 큰 소개의 원동력이기도 합니다.하지만, 기존 고객을 지속적으로 잘 관리해서 충성도를 높이고, 기존 고객이 경쟁자로 이탈하지 않도록 만드는 건 매우 어려운 일입니다.이 과정에서는 기존 고객의 충성도를 높이는 노하우, 기존 고객이 이탈할 때 보이는 전형적인 징후(sign)들을 파악해서 이탈을 방지하거나 예방하는 방법, '개인적 관계'와 '비즈니스 관계' 사이에서 균형을 잡는 방법 등을 구체적으로 배우고 익힙니다.",
        },
        {
          title: "질문과 파악 기술 클리닉",
          sub_title:
            "고객과 쌍방향 소통을 통해서 상황을 파악해야 하는 영업에서 필요한 기술 (2일)",
          desc: "어떤 업종들에서는 고객과 상담을 하면서 고객의 복잡한 상황, 구체적인 팩트들, 고객의 복잡한 니즈를 파악하는 게 매우 중요합니다. 이런 업종에서 탁월한 분들은 고객과 상담할 때 매우 자연스럽게 여러 질문을 통해 고객과 쌍방향 소통을 하면서 그 과정에서 고객의 모든 걸 파악해냅니다. 이 과정에서 고객이 '이 분이 내 상황과 니즈를 정확히 이해했다' 고 생각하면, 그 고객은 웬만하면 다른 경쟁자를 찾아갈 일이 없어집니다. 이런 걸 '고객 장악' 이라고 하며, 이는 이런 업종에서 탁월한 분들에게서 공통적으로 보이는 기술입니다. 하지만, 대부분의 분들에게 이처럼 자연스럽게 질문해서 파악하는 일은 매우 어려운 일입니다. 어줍잖게 질문을 하면 마치 취조하는 듯한 느낌이 들 수도 있습니다.이 과정에서는 '마법의 세 가지 질문'을 뼈대로 어떻게 하면 고객과 자연스럽게 쌍방향 소통을 할 수 있는지? 어떤 식으로 해야 고객 입장에서 자연스럽게 털어놓게 되는지? 등에 대해 이해하고, 실전과 같은 실습을 통해서 익숙해지도록 돕습니다.",
        },
      ],
    };
  },
  computed: {},
  methods: {
    screenUp() {
      window.scrollTo(0, 0);
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
</style>
