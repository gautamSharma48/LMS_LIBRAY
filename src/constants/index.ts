import SignUpImage from "../assets/lottie/signup-image.json";
import LoginImage from "../assets/lottie/login-image.json";
import OtpImage from "../assets/lottie/otp.json";
export const signUpData = [];

export const logoUrl = "https://teclearns.com/images/logo.png" as string;

export const imageUrlConstant = {
  logoUrl: "/logo.png",
  mainBanner: "/main-banner.png",
};

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
  ),
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
  loginImage: {
    loop: true,
    autoplay: true,
    animationData: SignUpImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  otpImage: {
    loop: true,
    autoplay: true,
    animationData: OtpImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
} as const;

export const aboutUsData = {
  heading: "Welcome to Teclearn".split(" "),
  welcomeMessage: `There are countless online education marketplaces on the internet. And there's us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.
  And the reason is, we don't give up. When a student commits to a course, we commit to the student. We are not going to sugar coat it - we will make you complete, come what may. You may not have given much thought to what you are signing up for, but we believe you are signing up for knowledge that is useful and complete. And what we do, we do to make that belief a reality. We are ridiculously committed to our students. Be it constant reminders, relentless masters or 
  24 x 7 online support - we will absolutely make sure that you run out of excuses to not complete the course.`,
  ourMission: [
    {
      title: "Our Vision",
      content:
        "To become the largest online learning ecosystem for continuing education, in partnership with corporates and academia.",
    },
    {
      title: "Our Mission",
      content:
        "To create an alternate platform for students who wish to continue and complete courses by attending live online courses, using a team of ridiculously committed educators who will stop at nothing to impart education, helped by a 24 x 7 support system. By deploying our world class team of industry experts, we aim to educate our learners with the skills they need to advance their professional life to the next level.",
    },
    {
      title: "Our Client",
      content:
        "To create an alternate platform for students who wish to continue and complete courses by attending live online courses",
    },
  ],
  team: [
    {
      name: "Lovleen Bhatia",
      profile: "Co-Founder & CEO",
      education: "B.Tech.IIT BHU",
      profilePic: "",
      bio: `Lovleen Bhatia is instrumental in setting up the strategic direction of the company, defining company's priorities, driving the mission and company's work culture. He brings with him 13 years of expertise across domains like technology, digital marketing, growth hacking, customer acquisition and hiring. Prior to co-founding techlearn, he headed the R&D at DbyDX Labs.
            At Texas Instruments, Lovleen was a technology evangelist and helped the company stay on the cutting edge. His interests include Artificial Intelligence and Virtual Reality. He started his career at Infosys as a software engineer and has also held key roles at Texas Instruments and Synopsys.`,
    },
    {
      name: "Lovleen Bhatia",
      profile: "Co-Founder & CEO",
      education: "B.Tech.IIT BHU",
      profilePic: "",
      bio: `Lovleen Bhatia is instrumental in setting up the strategic direction of the company, defining company's priorities, driving the mission and company's work culture. He brings with him 13 years of expertise across domains like technology, digital marketing, growth hacking, customer acquisition and hiring. Prior to co-founding techlearn, he headed the R&D at DbyDX Labs.
              At Texas Instruments, Lovleen was a technology evangelist and helped the company stay on the cutting edge. His interests include Artificial Intelligence and Virtual Reality. He started his career at Infosys as a software engineer and has also held key roles at Texas Instruments and Synopsys.`,
    },
    {
      name: "Lovleen Bhatia",
      profile: "Co-Founder & CEO",
      education: "B.Tech.IIT BHU",
      profilePic: "",
      bio: `Lovleen Bhatia is instrumental in setting up the strategic direction of the company, defining company's priorities, driving the mission and company's work culture. He brings with him 13 years of expertise across domains like technology, digital marketing, growth hacking, customer acquisition and hiring. Prior to co-founding techlearn, he headed the R&D at DbyDX Labs.
                At Texas Instruments, Lovleen was a technology evangelist and helped the company stay on the cutting edge. His interests include Artificial Intelligence and Virtual Reality. He started his career at Infosys as a software engineer and has also held key roles at Texas Instruments and Synopsys.`,
    },
  ],
} as const;

export const headerItems = [
  { id: 1, label: "Overview", link: "#overview" },
  { id: 2, label: "Why Knowledge Hut", link: "#why-knowledge-hut" },
  { id: 3, label: "Tuition", link: "#tuition" },
  { id: 4, label: "Instructor", link: "#instructor" },
  { id: 5, label: "Curriculum", link: "#curriculum" },
  { id: 6, label: "FAQs", link: "#faqs" },
];

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
  courses: [
    {
      id: 1,
      title: "Microsoft Project",
      description: "Analyze the facts and make forecasts.",
      background: "linear-gradient(110deg, #53a2ff, #2a387b)",
      type: "",
      curriculm: [
        {
          heading: "Introduction to Microsoft® Project",
          description: "",
          type: "curriculm",
          objective:
            "Familiarize with MS project tool and the initial settings. ",
          topic:
            "The Interface, Tabs (Task, Resource, Report, Project, View, Format), Backstage view, Project Information, Setup a new project, Setup Project Calendar, Setup non working days, Enter basic project information.",
        },
        {
          heading: "Creating Tasks and Task Management",
          description: "",
          type: "curriculm",
          objective: "Understand how to define scope on project. ",
          topic:
            "Auto Scheduled and Manually Scheduled Tasks, Entering Tasks and subtasks, Duration, Notes, Constraints, Hyperlinks, Deadlines, Entering and Deleting Tasks, Indent and Outdent, Establishing Dependencies and Assigning Milestones, Recurring Tasks.",
        },
        {
          heading: "Listing Resources, Assigning Resources and Project Costs",
          description: "",
          type: "curriculm",
          objective:
            "Understand how to create resources and assign resources, understanding how to view costs for individual Tasks, Modules and the Total Project. ",
          topic:
            "Creating Resources, Resource type, Group, Code, Setting Resource Calendar, Cost, Notes, Assigning Resources and Resource Load Analysis, Viewing Project Costs.",
        },
      ],

      courseDescription: {
        courseHeading: "Course Description",
        courseData: [
          {
            question: "About The Course",
            answer:
              "This self-paced online program covers the overview of Project Management and explains how to manage projects using Microsoft Project. Microsoft Project assists Project Managers to do Scope Planning, Assign Resources, Prepare Schedule, Baseline, Update Progress, Track and Report. This training is imperative for all who need to plan, track and effectively communicate with stakeholders. This course helps participants to practically implement the learning through hands-on on MS Project.",
          },
          {
            question: "Course Objectives",
            answer: `After the completion of Microsoft Project Course at Edureka, you should be able to:<br/>

                1. Understand the importance of MS Project in following a structured approach to managing projects.<br/>
                2. Define the initial settings in MS Project.<br/>
                3. Prepare and use MS Project for planning, tracking and reporting on projects.<br/>
                4. Understand how to document lessons learned and close projects.<br/>`,
          },
          {
            question: "Who should go for this course?",
            answer: `Anybody associated with Project Management, in any industry or domain can attend this course.`,
          },
          {
            question: "Pre-requisites",
            answer:
              "A basic understanding of the project and project environment is helpful.",
          },
          {
            question: "Why Learn Microsoft® Project 2013?",
            answer:
              "MS Project is used across industries in many organizations. Many clients want the projects to be planned and tracked in MS Project.",
          },
        ],
      },

      faqs: {
        faqsHeading: "FAQ's",
        faqsData: [
          {
            question:
              "How soon after Signing up would I get access to the Learning Content?",
            answer:
              "As soon as you enrol into the course, your LMS (The Learning Management System) access will be functional. You will immediately get access to our course content in the form of a complete set of videos, PPTs, PDFs and  Assignments. You can start learning right away.",
          },
          {
            question:
              "For how long will I have access to the course materials?",
            answer: `All the videos and other materials like PPTs, Quiz and Assignments, etc are hosted in our Learning Management System (LMS) and you will have a lifetime access to that. `,
          },
          {
            question:
              "Are there any pre-requisite to attend MS Project training?",
            answer: `There are no pre-requisites for this course. But basic understanding of the project and project environment will be helpful.`,
          },
          {
            question: "What is MS Project?",
            answer:
              "Microsoft Project is a project management software program, developed by Microsoft, which is designed to assist a project manager in developing a plan, assigning resources to tasks, tracking progress, managing the budget, and analyzing workloads.",
          },
          {
            question: "What will happen if I have technical queries?",
            answer:
              "We will conduct a doubt clearing session once in a month. You can send your queries to us from the LMS by generating a ticket. The date and time of the session will be intimated via email.",
          },

          {
            question: "What will happen if I have technical queries?",
            answer:
              "We will conduct a doubt clearing session once in a month. You can send your queries to us from the LMS by generating a ticket. The date and time of the session will be intimated via email.",
          },
          {
            question: "What are new features of MS project 2013?",
            answer:
              "1. Run Project in the cloud 2. Improved scheduling engine 3. Improved Workflow Management engine 4. Enhanced Reporting capabilities 5. Simplified time sheets and task 6. management Lightweight project management leveraging SharePoint 7. Simpler Security Model.",
          },
          {
            question: "How will be the practicals done?",
            answer:
              "By following the instructions provided in the Installation guide present in the LMS, you can install MS Project on your local system and execute all the practicals present in the course. ",
          },
          {
            question: "What are the payment options?",
            answer:
              "You can pay by Credit Card, Debit Card or Net Banking from all the leading banks. For INR payment, you can use CCAvenue Payment Gateway. For USD payment, you can pay by Paypal. We also have EMI options available.",
          },
          {
            question: "What if I have more queries?",
            answer:
              "Just give us a CALL at +91 1234567890 OR email at sales@teclearns.com Toll free number is 1800 123 4567.",
          },
        ],
      },
    },

    {
      id: 22,
      title: "ITIL® 4 Foundation Training",
      courseSubtitle: "ITIL® 4 Foundation Training",
      description:
        "The Ultimate Immersive Learning Program to Master ITIL 4 and Ace the Foundation Exam",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "",
      courseDetail: {
        courseCategory: "IT Service Management",
        careerDetail: [
          { carrer: "Carrer Transformation", value: "450,00" },
          { carrer: "Workshops Every Month", value: "250" },
          { carrer: "Countries and Counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "16 Hours of Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "Earn 16 PDUs for Continued Learning",
            },
            {
              icon: "",
              value: "49+ Hours of On-Demand Self-Paced Learning",
            },
            {
              icon: "",
              value: "5 Simulation Exams and 8 Mock Tests to Ace ITIL Exam",
            },
            {
              icon: "",
              value: "8 Assessments with More Than 200 Questions",
            },
            {
              icon: "",
              value: "Get 5 Complimentary Courses from Top 100",
            },
            {
              icon: "",
              value: "PeopleCert Official eBook and Training Material",
            },
            {
              icon: "",
              value: "Course Fee Includes Exam Fee and Online Proctoring",
            },
            {
              icon: "",
              value: "Lifetime Access to On-Demand Courseware",
            },
          ],
          overviewDetail: `Fast-track your career in the booming IT service management domain and master the skills to drive successful IT service delivery. 
          The ITIL4 Certification isn't just a credential—it's your passport to a common language and powerful tools fostering collaboration within IT teams, unlocking unparalleled value across the business.

Our unparalleled course is designed for one spectacular goal: to prepare you comprehensively to ace the ITIL 4 Foundation exam on your very first attempt.

Immerse yourself in our blended learning ITIL Training program, a unique blend of live, instructor-led sessions and on-demand self-paced learning. But here's where the adventure truly begins—our live training sessions are more than just learning; they're an exhilarating experience that will fuel your passion for ITIL. Dive deep into ITIL concepts with real-life case studies, engage in hands-on role-play exercises that simulate work environments, and step into the dynamic world of an ITIL professional through engaging activities.

Guiding you through this thrilling journey are our seasoned trainers, experts with over 20 years in the ITIL domain. They don't just teach; they live and breathe ITIL, ready to share their wealth of knowledge and ensure you conquer every twist and turn in your learning adventure.

Start with the core concepts of ITIL 4, the latest evolution of the ITIL framework, and delve into the intricacies of the ITIL 4 service value system. With an array of exciting learning resources, we guarantee you'll be well-equipped not just to pass the exam, but to power collaboration within IT and deliver unparalleled value across the enterprise.`,

          overviewPoints: [
            {
              title: "Live Instructor-Led Sessions",
              value:
                "Master ITIL with in our exclusive 16-hour live training. Dive into real-world scenarios, tackle hands-on role-play exercises, and amplify your skills with interactive activities. With trainers boasting over two decades in ITIL brilliance, clear all doubts, and transform into an ITIL pro.",
            },
            {
              title: "PDUs for Continued Learning",
              value:
                "Earn 16 Professional Development Units (PDUs) as you seek to maintain or elevate your skills and certifications, ensuring continuous professional growth.",
            },
            {
              title: "On-Demand Self-Paced Learning",
              value:
                "Dive into over 49 hours of on-demand self-paced learning, giving you the flexibility to study at your own pace and ensuring a comprehensive understanding of ITIL concepts tailored to your schedule.",
            },
            {
              title: "Simulation Exams",
              value:
                "Familiarize yourself with the actual ITIL Foundation exam format and difficulty level through 5 simulation exams, preparing you for success.",
            },
            {
              title: "Mock Tests and Assessments",
              value:
                "Reinforce your learning and identify areas for improvement with 8 mock tests and 8 assessments, ensuring you are thoroughly prepared.",
            },
            {
              title: "Complimentary Courses",
              value:
                "Enhance your knowledge and skills in related areas with 5 complimentary courses from the top 100, enriching your learning experience",
            },
            {
              title: "Take² Re-Sit Exam Option",
              value:
                "In case of an unsuccessful attempt, put your worries at ease by opting for the Take² Re-sit Exam Option at the time of registration with the help of your learning advisor. Retake the exam for a fraction of the price and get 6 months from the date of the initial exam to prepare for your second try which you can schedule at your own convenience and attempt from the comfort of your home or office.",
            },
            {
              title: "All-Inclusive Program",
              value:
                "Your course fee covers the ITIL Foundation exam fee, online proctoring, ITIL4 Foundation official e-book, and ITIL4 Foundation official training materials, streamlining your certification process for a hassle-free experience.",
            },
            {
              title: "Lifetime Access to On-Demand Courseware",
              value:
                "Enjoy lifetime access to on-demand courseware, allowing you to revisit and reinforce your knowledge whenever needed, ensuring lasting competence.",
            },
            {
              title: "PeopleCert Official eBook and Training Material",
              value:
                "Access official ITIL 4 Foundation e-book and training materials from PeopleCert, aligning your learning with the official certification requirements.",
            },
          ],

          overviewCourseDescription: `The ITIL Foundation certification isn't just a certification; it's your ticket to mastering the common language and tools that drive collaboration within IT teams, ultimately delivering unmatched value across the entire business landscape.

Elevate your IT journey with a certification that can unlock the door to a future where your expertise sets the standard. Your journey begins here—exciting, transformative, and geared for success!

          NOTE: ITIL®, ITIL® Foundation, and AXELOS are registered trademarks of AXELOS Limited, used under the permission of AXELOS Limited. The Swirl logo™ is a trademark of AXELOS Limited, used under the permission of AXELOS Limited. PeopleCert® is the registered trademark of PeopleCert International Ltd., the sole Examination Institute (EI) for the delivery of AXELOS Accreditation and Examination services worldwide. KnowledgeHut is a Certified Partner of AXELOS and an Accredited Training Organization (ATO) with PeopleCert®.`,
        },
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "120,750+ Learners Enrolled",
        bannerImage:
          "https://ww2.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-10-a1cdf54df4e74060af71db72cc024436.webp&w=3840&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        highlights: [
          "World's #1 ITIL Exam Prep to Pass in Your First Attempt",
          "Includes Exam Fee, eBook, and PeopleCert Training Material",
          "Gear up for a thriving IT career and enjoy greater job security",
          "Immersive Learning with Simulations, Case Studies, Assessments, and more!",
        ],
      },
    },
    {
      id: 2,
      title: "Microsoft Excel",
      description: "Analyze the facts and make forecasts.",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "",
    },
    {
      id: 3,
      title: "PRINCE2® Foundation",
      description: "Develop project-related abilities",
      background: "linear-gradient(240deg,#6568ff,#d879ec)",
      type: "",
    },
    {
      id: 4,
      title: "PMI RMP Certification Training Course",
      description: "Schedules that PMI RMP course will include",
      background: "linear-gradient(240deg,#d677c0,#41bbbd)",
      type: "",
    },
    {
      id: 5,
      title: "PMP® Certification Training Course",
      description: "Schedules that PMP course will include",
      background: "linear-gradient(240deg,#d677c0,#41bbbd)",
    },
    {
      id: 6,
      title: "Six Sigma yellow",
      description: "Learn Six Sigma Expert",
      background: "linear-gradient(240deg,#ff6364,#ff88bc)",
    },
    {
      id: 7,
      title: "Business Case Writing",
      description: "Business Case Writing",
      background: "linear-gradient(240deg,#70bc55,#ea6f6f)",
      type: "carrer-related",
    },
    {
      id: 8,
      title: "CBAP® Certification Training Course",
      description: "CBAP® Certification Training Course",
      background: "linear-gradient(240deg,#ff6364,#ff88bc)",
      type: "carrer-related",
    },
    {
      id: 9,
      title: "PMI-ACP",
      description: "PMI-ACP",
      background: "linear-gradient(240deg,#55e4ef,#c23af1)",
      type: "carrer-related",
    },
    {
      id: 10,
      title: "Leading SAFe 5.1",
      description: "Business Case Writing",
      background: "linear-gradient(240deg,#70bc55,#ea6f6f)",
      type: "recent-addition",
    },
    {
      id: 11,
      title: "Agile Scrum Master (ASM®)",
      description: "Agile Scrum Master (ASM®)",
      background: "linear-gradient(240deg,#70bc55,#ea6f6f)",
      type: "recent-addition",
    },
  ],
  reviewUsers: [
    {
      name: "Vivek",
      profession: "Data science",
      rating: 3,
      description:
        "I am glad to write testimonial for Teclearn after undergoing 2 months of training in Mac",
      createdAt: "22 May 2014",
    },
    {
      name: "Gautam",
      profession: "Devops Eng",
      rating: 3,
      description:
        "I am glad to write testimonial for Teclearn after undergoing 2 months of training in Mac",
      createdAt: "22 May 2014",
    },
    {
      name: "Rishab",
      profession: "Software Eng",
      rating: 3,
      description:
        "I am glad to write testimonial for Teclearn after undergoing 2 months of training in Mac",
      createdAt: "22 May 2014",
    },
  ],
  bannerMsgTitle:
    "No more dull edges in your company. Make your employees into masters.",
  bannerMsgTitle2:
    "Nurture talent with instructor-led courses on trending technologies",
  whyChooseData: [
    {
      img: "https://teclearns.com/images/icn-track.jpg",
      heading1: "Live Instructors to address",
      heading2: "questions in real time",
    },
    {
      img: "https://teclearns.com/images/icn-unlimited.jpg",
      heading1: "Online Training Portal",
      heading2: "with Unlimited Access",
    },
    {
      img: "https://teclearns.com/images/icn-24-7.jpg",
      heading1: "Seek guidance from a",
      heading2: "learning assistant",
    },
    {
      img: "https://teclearns.com/images/icn-realtime.jpg",
      heading1: "Monitor Your ",
      heading2: "Learning",
    },
  ],
  blogPost: [
    {
      img: "https://teclearns.com/images/blog/blog-1.jpg",
      title: "Microsoft Project",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
    },
    {
      img: "https://teclearns.com/images/blog/blog-3.jpg",
      title: "Business Management",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
    },
    {
      img: "https://teclearns.com/images/blog/blog-4.jpg",
      title: "Finance Modeling",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
    },
    {
      img: "https://teclearns.com/images/blog/blog-2.jpg",
      title: "Prince2 Foundation",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
    },
  ],
};

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
