import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/HomeLayout.vue";
import HomeView from "../views/home/HomeView.vue";
import AuthLayout from "../components/AuthLayout.vue";
import SignInView from "../views/auth/SignInView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import DiagnosisView from "../views/diagnosis/DiagnosisView.vue";
import OnlineView from "../views/online/OnlineView.vue";
import AbilityView from "../views/online/AbilityView.vue";
import AllAbilityView from "../views/online/AllAbilityView.vue";
import ResultView from "../views/online/ResultView.vue";

import CartView from "../views/payment/CartView.vue";
import OrderView from "../views/payment/OrderView.vue";

import ProgramView from "../views/program/ProgramView.vue";
import MarketplaceView from "../views/marketplace/MarketplaceView.vue";
import MarketplaceDetailView from "../views/marketplace/MarketplaceDetailView.vue";
import MyView from "../views/my/MyView.vue";
import PaymentView from "../views/my/PaymentView.vue";

import DeliveryView from "../views/my/DeliveryView.vue";
import FinishView from "../views/my/FinishView.vue";
import ModifyView from "../views/my/ModifyView.vue";

const routes = [
  {
    path: "/",
    name: "HomeLayout",
    component: HomeLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "HomeView",
        component: HomeView,
      },
    ],
  },
  {
    path: "/auth",
    name: "AuthLayout",
    component: AuthLayout,
    redirect: "/auth/signin",
    children: [
      {
        path: "signin",
        name: "SignInView",
        component: SignInView,
      },
      {
        path: "signup",
        name: "SignUpView",
        component: SignUpView,
      },
    ],
  },
  {
    path: "/diagnosis",
    name: "DiagnosisLayout",
    component: HomeLayout,
    redirect: "/diagnosis",
    children: [
      {
        path: "/diagnosis",
        name: "DiagnosisView",
        component: DiagnosisView,
      },
    ],
  },
  {
    path: "/online",
    name: "OnlineLayout",
    component: HomeLayout,
    redirect: "/online",
    children: [
      {
        path: "/online",
        name: "OnlineView",
        component: OnlineView,
      },
      {
        path: "/online/ability",
        name: "AbilityView",
        component: AbilityView,
      },
      {
        path: "/online/all-ability",
        name: "AllAbilityView",
        component: AllAbilityView,
      },
      {
        path: "/online/result",
        name: "ResultView",
        component: ResultView,
      },
    ],
  },
  {
    path: "/marketplace",
    name: "MarketplaceLayout",
    component: HomeLayout,
    redirect: "/marketplace",
    children: [
      {
        path: "/marketplace",
        name: "MarketplaceView",
        component: MarketplaceView,
      },
      {
        path: "/marketplace/detail",
        name: "MarketplaceDetailView",
        component: MarketplaceDetailView,
      },
    ],
  },
  {
    path: "/payment",
    name: "PaymentLayout",
    component: HomeLayout,
    redirect: "/payment",
    children: [
      {
        path: "/payment/cart",
        name: "CartView",
        component: CartView,
      },
      {
        path: "/payment/order",
        name: "OrderView",
        component: OrderView,
      },
    ],
  },
  {
    path: "/my",
    name: "MypageLayout",
    component: HomeLayout,
    redirect: "/my",
    children: [
      {
        path: "/my",
        name: "MyView",
        component: MyView,
      },
      {
        path: "/my/payment",
        name: "PaymentView",
        component: PaymentView,
      },
      {
        path: "/my/delivery",
        name: "DeliveryView",
        component: DeliveryView,
      },
      {
        path: "/my/finish",
        name: "FinishView",
        component: FinishView,
      },
      {
        path: "/my/modify",
        name: "ModifyView",
        component: ModifyView,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
export default router;
