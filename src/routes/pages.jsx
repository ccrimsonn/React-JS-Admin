// import PricingPage from "views/Pages/PricingPage.jsx";
import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
// import LockScreenPage from "views/Pages/LockScreenPage.jsx";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
// import MonetizationOn from "@material-ui/icons/MonetizationOn";
// import LockOpen from "@material-ui/icons/LockOpen";
  const pagesRoutes = [
    {
      path: "/pages/register-page",
      name: "User Register",
      short: "Register",
      mini: "UR",
      icon: PersonAdd,
      component: RegisterPage
    },
    {
      path: "/pages/login-page",
      name: "Login Page",
      short: "Login",
      mini: "LI",
      icon: Fingerprint,
      component: LoginPage,
      invisible: true
    },
    // {
    //   path: "/pages/pricing-page",
    //   name: "Pricing Page",
    //   short: "Pricing",
    //   mini: "PP",
    //   icon: MonetizationOn,
    //   component: PricingPage
    // },
    // {
    //   path: "/pages/lock-screen-page",
    //   name: "Lock Screen Page",
    //   short: "Lock",
    //   mini: "LSP",
    //   icon: LockOpen,
    //   component: LockScreenPage
    // },
    {
      redirect: true,
      path: "/pages",
      pathTo: "/pages/login-page",
    }
  ];

export default pagesRoutes;
