import SignUpImage from "../assets/lottie/signup-image.json";
import LoginImage from "../assets/lottie/login-image.json";
import OtpImage from "../assets/lottie/otp.json";
export const signUpData = [];

export const logoUrl="https://teclearns.com/images/logo.png" as string;

export const imageUrlConstant = {
  logoUrl: "https://teclearns.com/images/logo.png",
  mainBanner: "/main-banner.png"
}


export const errorMessagesConstants = {
  NAME_REQUIRED: "Username is required.",
  PASSWORD_REQUIRED: "Password is required.",
  PHONE_NUMBER_REQUIRED: "Phone Number is required.",
  PASSWORD_MUST_8_CHARACTERS: "Password must be at least 8 characters.",
  PASSWORD_ALPHA_NUMBER_ERROR:
    "Password must include letters, numbers and special characters.",
  INVALID_EMAIL: "Please enter a valid email.",
  INVALID_PASSWORD: "Invalid password.",
  NAME_IS_REQUIRED: "Please enter your name.",
  EMAIL_REQUIRED: "Please enter your email.",
  FEEDBACK_REQUIRED: "Please enter your feedback.",
  USERID_REQUIRED: "User ID is required.",
  CONFIRM_PASSWORD_REQUIRED: "Confirm password is required.",
  PASSWORD_MUST_SAME: "New password and Confirm password must be same.",
  ERROR_OCCURED_RAZORPAY:
    "An error occurred while setting up razorpay, Please try again.",
  LIMIT_EXCEEDED:
    "You have exceeded your daily limit for stories. please consider upgrading your plan",
  QUERY_LIMIT_EXCEEDED: "Reached the maximum number of queries for this month.",
  PLAN_EXPIRED: "Plan expired, Please upgrade the plan.",
  TENANT_INVITATION_ACCEPTED: "You have already given access to this account.",
  ADD_TEST_QUESTIONS: "Please add test questions.",
} as const;

export const regexConstant = {
  DIGIT_REGEX: new RegExp(/^\d+$/),
  EMAIL_REGEX: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  PASSWORD_REGEX: new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]{8,}$/
  )
};

export const lottieImage = {
  signUpImage: {
    loop: true,
    autoplay: true,
    animationData: LoginImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  loginImage:  {
    loop: true,
    autoplay: true,
    animationData: SignUpImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  otpImage:  {
    loop: true,
    autoplay: true,
    animationData: OtpImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
} as const;

export const homeData = {
  become: [
    {
      title: "Become A Project Manager",
      pic: "/project-manager.jpeg",
    },
    {
      title: "Become A Quality Manager",
      pic: "quality-manager.jpeg",
    },
    {
      title: "Become A Business Manager",
    },
  ],
  courses:  [
      {
        title: "Microsoft Project",
        description: "Analyze the facts and make forecasts.",
        background: "linear-gradient(110deg, #53a2ff, #2a387b)",
      },
      {
        title: "Microsoft Excel",
        description: "Analyze the facts and make forecasts.",
        background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      },
      {
        title: "PRINCE2® Foundation",
        description: "Develop project-related abilities",
        background: "linear-gradient(240deg,#6568ff,#d879ec)",
      },
      {
        title: "PMI RMP Certification Training Course",
        description: "Schedules that PMI RMP course will include",
        background: "linear-gradient(240deg,#d677c0,#41bbbd)",
      },
      {
        title: "PMP® Certification Training Course",
        description: "Schedules that PMP course will include",
        background: "linear-gradient(240deg,#d677c0,#41bbbd)",
      },
      {
        title: "Six Sigma yellow",
        description: "Learn Six Sigma Expert",
        background: "linear-gradient(240deg,#ff6364,#ff88bc)",
      },
    ],
    bannerMsgTitle: "No more dull edges in your company. Make your employees into masters.",
    bannerMsgTitle2: "Nurture talent with instructor-led courses on trending technologies",
} as const;


export const footerData = [
  {
    title: "Trending Certification Courses",
    items: [
      { text: "Microsoft Project", url: "/microsoft-project" },
      { text: "Microsoft Excel", url: "/microsoft-excel" },
      { text: "PRINCE2 Foundation", url: "/prince2-foundation" },
      { text: "PRINCE2 Practitioner", url: "/prince2-practitioner" },
      { text: "PMI RMP", url: "/pmi-rmp" },
      { text: "PMP Certification", url: "/pmp-certification" },
      { text: "CBAP", url: "/cbap" },
      { text: "PMI-ACP", url: "/pmi-acp" },
    ],
  },
  {
    title: "Trending Master Courses",
    items: [
      { text: "Leading SAFe 5.1", url: "/leading-safe-5-1" },
      { text: "Agile Scrum Master", url: "/agile-scrum-master" },
      { text: "Six Sigma Yellow", url: "/six-sigma-yellow" },
      { text: "Six Sigma Green", url: "/six-sigma-green" },
      { text: "Six Sigma Black", url: "/six-sigma-black" },
      { text: "Business Case Writing", url: "/business-case-writing" },
    ],
  },
  {
    title: "Company",
    items: [
      { text: "About us", url: "/about-us" },
      { text: "Reviews", url: "/reviews" },
      { text: "Contact us", url: "/contact-us" },
      { text: "Blog", url: "/blog" },
    ],
  },
  {
    title: "Categories",
    items: [
      { text: "PMI PBA", url: "/pmi-pba" },
      { text: "Financial Modeling", url: "/financial-modeling" },
      { text: "ITIL 4 Foundation", url: "/itil-4-foundation" },
    ],
  },
] as const;