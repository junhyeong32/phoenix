<template>
  <div class="flex flex-col justify-center items-center mt-[6.3rem] px-[2rem]">
    <h1 class="text-[2.3rem] font-bold">회원가입</h1>

    <div class="flex flex-col max-w-[30.8rem] w-full">
      <input
        type="text"
        v-model="name"
        placeholder="이름"
        class="mt-[5.4rem]"
      />
      <input
        type="text"
        v-model="id"
        placeholder="아이디"
        class="mt-[3.2rem]"
      />
      <div class="flex flex-col mt-[3.2rem] gap-[0.4rem]">
        <input
          type="password"
          v-model="password"
          placeholder="비밀번호 (영문 대소문자/숫자/특수문자 혼용 8~16자)"
        />
        <p class="text-[red] text-[0.9rem]">
          영문 대/소문자, 숫자, 특수문자를 포함한 8~16자여야 합니다.
        </p>
      </div>

      <div class="flex flex-col mt-[3.2rem] gap-[0.4rem]">
        <input
          type="password"
          v-model="password_confirm"
          placeholder="비밀번호 확인"
        />
        <p class="text-[red] text-[0.9rem]">비밀번호가 일치하지 않습니다.</p>
      </div>

      <div class="flex flex-col mt-[3.2rem] gap-[0.4rem]">
        <input type="text" v-model="email" placeholder="이메일" />
        <p class="text-[red] text-[0.9rem]">이메일을 입력해주세요.</p>
      </div>

      <input
        type="text"
        v-model="phone"
        placeholder="휴대폰 번호"
        class="mt-[3.2rem]"
      />

      <div class="flex flex-col gap-[0.9rem] mt-[2.9rem]">
        <div class="flex items-center gap-[0.8rem]">
          <input type="checkbox" id="essential" />
          <label for="essential">만 14세 이상입니다. (필수)</label>
        </div>

        <p class="text-[0.9rem] mt-[0.9rem] text-[#737373]">
          * 만 14세 미만의 아동은 회원가입 시 법적대리인의 동의가 필요합니다.
          회원가입이 필요할 시 당사 고객센터로 연락해주세요.<br /><br />
          * 회원가입에 필요한 최소한의 정보만 입력 받음으로써 고객님의 개인정보
          수집을 최소화하고 편리한 회원가입을 제공합니다.
        </p>
      </div>

      <div class="border-[1px] border-[#D2D2D2] mt-[4.3rem]">
        <div
          class="flex justify-between items-center px-[1.7rem] py-[1.2rem] border-b-[1px] border-[#D2D2D2]"
        >
          <b class="text-[1.0.9rem]">이용약관 동의 (필수)</b>
          <div class="flex gap-[0.8rem]">
            <span class="text-[0.9rem] underline">전체보기</span>
            <input type="checkbox" id="essential" />
          </div>
        </div>
        <div class="px-[1.7rem] py-[1.0.9rem] whitespace-pre-wrap text-[12px]">
          {{ terms[1] }}
        </div>

        <div
          class="flex justify-between items-center px-[1.7rem] py-[1.2rem] border-y-[1px] border-[#D2D2D2]"
        >
          <b class="text-[1.0.9rem]">개인정보 수집 및 동의 동의 (필수)</b>
          <div class="flex gap-[0.8rem]">
            <span class="text-[0.9rem] underline">전체보기</span>
            <input type="checkbox" id="essential" />
          </div>
        </div>
        <div class="px-[1.7rem] py-[1.0.9rem] whitespace-pre-wrap text-[12px]">
          {{ terms[2] }}
        </div>
      </div>

      <div
        class="flex justify-between items-center mt-[2.3rem] pb-[1.2rem] border-b-[1px] border-[#D2D2D2]"
      >
        <b class="text-[1.0.9rem]">쇼핑정보 수신 동의 (선택)</b>
        <div class="flex gap-[0.8rem]">
          <span class="text-[0.9rem] underline">전체보기</span>
          <input type="checkbox" id="essential" />
        </div>
      </div>

      <p class="text-[0.8rem] mt-[0.9rem]">
        할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는<br />
        유익한 쇼핑정보를 SMS와 이메일로 받아보실 수 있습니다.<br /><br />
        단, 주문/거래 정보 및 주요 정책과 관련된 내용은<br />
        수신동의 여부와 관계없이 발송됩니다.<br />
        <br />
        선택 약관에 동의하지 않으셔도 회원가입은 가능하며,<br />
        회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수
        있습니다.
      </p>

      <button
        class="w-full h-[4.4rem] bg-primary text-[white] text-[1.7rem] mt-[3.2rem] mb-[11.5rem]"
        @click="$router.push('/home')"
      >
        회원가입
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInView",
  components: {},
  props: {},
  data() {
    return {
      name: "",
      id: "",
      password: "",
      password_confirm: "",
      email: "",
      phone: "",
      terms: {
        1: `제1조(목적)
이 약관은 주식회사 피닉스컨설팅(전자상거래 사업자)가 운영하는 피닉스컨설팅(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리.의무 및 책임사항을 규정함을 목적으로 합니다.
※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

제2조(정의)
① “몰”이란 주식회사 이투바이오가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자`,
        2: `
[개인정보 수집 및 이용 동의]

1. 개인정보 수집목적 및 이용목적

가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산

콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스

나. 회원 관리

회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달

2. 수집하는 개인정보 항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보
`,
      },
    };
  },
  computed: {},
  methods: {
    click() {},
    eventLogin() {},
    beforeDestroy() {
      this.emitter.off("login", this.eventLogin);
    },
  },
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
input[type="checkbox"] {
  width: 1.42rem !important;
  height: 1.42rem;
  border: 1px solid #000;
  color: #c71c23 !important;
  outline: none;
}

input[type="checkbox"]:checked {
  background-color: #c71c23 !important;
  border: none !important;
  outline: none;
}

label {
  font-size: 1.1rem !important;
}

input[type="text"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid #000;
  color: #848484 !important;
  font-size: 1.1rem !important;
  padding-left: 0 !important;
  outline: none;
}
</style>
