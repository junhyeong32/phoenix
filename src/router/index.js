import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/HomeLayout.vue";
import HomeView from "../views/home/HomeView.vue";
import AuthLayout from "../components/AuthLayout.vue";
import SignInView from "../views/auth/SignInView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import ProductView from "../views/product/ProductView.vue";
import ProductDetailView from "../views/product/ProductDetailView.vue";
import ProgramView from "../views/program/ProgramView.vue";
import MarketplaceView from "../views/marketplace/MarketplaceView.vue";
import MarketplaceDetailView from "../views/marketplace/MarketplaceDetailView.vue";
import MyView from "../views/my/MyView.vue";
import PaymentView from "../views/my/PaymentView.vue";
import CartView from "../views/my/CartView.vue";
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
    path: "/product",
    name: "ProductLayout",
    component: HomeLayout,
    redirect: "/product",
    children: [
      {
        path: "/product",
        name: "ProductView",
        component: ProductView,
      },
      {
        path: "/product/detail",
        name: "ProductDetailView",
        component: ProductDetailView,
      },
    ],
  },
  {
    path: "/program",
    name: "ProgramLayout",
    component: HomeLayout,
    redirect: "/program",
    children: [
      {
        path: "/program",
        name: "ProgramView",
        component: ProgramView,
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
        path: "/my/cart",
        name: "CartView",
        component: CartView,
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
