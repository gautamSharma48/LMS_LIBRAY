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
        highDemandAndAccerlated: {
          demandTitle: "High Demand For ITSM Professionals",
          demandHeading:
            "ITIL Foundation Among the Highest Paying Certifications",
          demandDetail: `The future is bright for service management, whether looked at through an IT lens or a business focus. Covid-19 has further put service management under the microscope and delivered business value rather than technology solutions. This demand is set to see an upward curve in the near future, making this a prime time for IT Service Management.

The ITIL® framework for IT service management is used by approximately 45 percent of companies throughout the world, according to estimates (ITSM). Aligned with various international quality standards, including ISO/IEC 20000 (IT Service Management Code of Practice), ITIL has been adopted by thousands of organizations worldwide, such as NASA, the UK National Health Service (NHS), and Disney™.

To succeed as an ITSM professional in industry 4.0, equip yourself with the skills to deal with the latest advancements in service management. ITIL’s incorporation of working practices such as Agile, DevOps, and value stream mapping, and of technical practices and technologies such as Cloud, automation, and advanced analytics ensures you will always utilize the latest best-practice methods from across the IT functions.

ITIL® 4 Foundation is the start of your ITIL certification journey and will help you validate your expertise in successfully implementing ITIL principles and concepts to enhance business value. This credential is also a stepping-stone for you to gain more advanced ITIL certification. Grow your ITSM career with confidence with the ITIL 4 Foundation Certification.

For those aspiring to embark on the journey of ITIL certification courses, the ITIL certification exam and obtaining an ITIL certificate, the ITIL Foundation certification course provides a solid foundation. This course not only aligns with the globally recognized IT Infrastructure Library (ITIL) but also ensures that you are well-prepared to navigate the complexities of contemporary IT service management.`,
          demandData: [
            {
              type: "IT Service Manager",
              averageSalary: [12, 15, 18],
              hiringCompany: [],
              demand: {
                percant: "18%",
                description:
                  "ITIL Foundation Among the Highest Paying Certifications",
              },
            },
            {
              type: "IT Director",
              averageSalary: [23, 50, 73],
              hiringCompany: [],
              demand: {
                percant: "18%",
                description:
                  "High rate of adoption of ITIL across industries and geographies",
              },
            },
            {
              type: "Chief Information Officer",
              averageSalary: [30, 55, 84],
              hiringCompany: [],
              demand: {
                percant: "2M",
                description:
                  "Professionals across the globe, certified in ITIL",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record",
              value:
                "KnowledgeHut has empowered thousands of professionals across the globe with certifications in ITSM.",
            },
            {
              icon: "",
              topic: "Experiential Training",
              value:
                "Dive into 16 hours of instructor-led training with real-world scenarios, role-plays, case studies and trainers with 20+ years of rich experience.",
            },
            {
              icon: "",
              topic: "Comprehensive Exam Support",
              value:
                "Theoretical and practical learning backed by mock tests. We’re right by you for any certification assistance.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "One-to-one mentorship, real-world tips and time-tested techniques from accredited expert practitioners.",
            },
            {
              icon: "",
              topic: "Take² Re-Sit Exam Option",
              value:
                "Retake the exam for fraction of the price and get 6 months from date of initial exam to prepare a second attempt.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Make the best of exclusive six-month post-training mentor guidance to overcome challenges in your ITSM career.",
            },
          ],
        },
        courseAuthor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Maheshwar Nynaru-661980df7288463f842b2aae105322a0.svg",
            instructorName: "Maheshwar Nynarus",
            instructorProfession: "Trainer & Consultant",
            experience: "30",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/capgemini 60x26-45b78461bcc14011898baf17b9965ddb.svg",
            instructorDetail: `With 30+ years of experience in Banking and IT, Maheshwar Nynaru is a seasoned consultant specializing in Project Management and IT Service Management. A PMP Certified professional and PMI Authorized Training Partner Instructor, he holds the ITIL Expert Level Certification and has delivered over 500 ITIL and PMP training sessions, showcasing a commitment to excellence and knowledge dissemination in the field.`,
          },
        ],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Alpesh Vasant-9cfb4f70ff2444cf8e37e21aa85ec8e5.svg",
            instructorName: "Alpesh Vasant",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Santhosh Kannan-100a3c877b1544cc8a8dc0fe7a7a987b.svg",
            instructorName: "Santhosh Kannan",
            instructorProfession: "Trainer & Consultant",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Imgcert cta-01-91a5fc0ae3944155a4d6c1843bc9da5e.svg",
          bannerTitle: "Maximize Your ITIL Foundation Exam Success",
          certificationDetail:
            "Obtaining the ITIL 4 Foundation Certification goes beyond simply acquiring a new set of skills—it serves as a recognition of your proficiency in IT service management from the globally recognized ITIL framework. This certification is not merely a piece of paper; it symbolizes your unwavering commitment and competence in implementing ITIL practices. It acts as a key to unlock various possibilities in your career, signaling to employers and colleagues that you have the expertise and dedication to thrive in effectively managing IT services within an organization.",
          certificateImage:
            "https://d2o2utebsixu4k.cloudfront.net/ITIL (3)-928de885a0af40109172497041f4c5b5.svg",
        },
        prerequisites: [
          "No specific prerequisites or prior qualifications required",
          "Suitable for beginners and experienced professionals alike",
          "Basic understanding of IT terminology is beneficial",
        ],
        courseCurriculm: [
          {
            title: "Introduction to ITIL 4",
            isPreview: true,
            objective:
              " In this learning module, you will embark on a comprehensive exploration of the ITIL 4 framework and delve into its foundational elements, principles, and the myriad advantages it offers to organizations. Gain a nuanced understanding of the evolution and significance of ITIL 4, discovering key characteristics that distinguish it and exploring the core principles guiding its approach to service management.",
            topics: [
              "About ITIL4",
              "Components of ITIL4 Framework",
              "Benefits of ITIL",
            ],
          },
          {
            title: "ITIL Key Concepts",
            isPreview: false,
            objective:
              " In this learning module, you will delve into the core concepts of service, its management, and the creation of value. You will explore the intricate components that contribute to the overall value of a service or product, gaining insights into the dynamic relationships between stakeholders, products, and services.",
            topics: [
              "Service and Service Management",
              "Components of Service Value",
              "Determine the Value of a Service or Product",
              "Stakeholders and Value Creation",
              "Products, Services, and Service Offering",
              "Service Relationship",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Fundamental Concepts of ITIL",
            description:
              "Understand the core principles and concepts that drive the ITIL framework",
          },
          {
            title: "Key ITSM Components and Processes",
            description:
              "Explore the key components and processes that form the foundation of IT service management.",
          },
          {
            title: "Aligning IT Services with Business",
            description:
              "Learn how to align IT services with business goals and cater to customer requirements effectively.",
          },
          {
            title: "Best Practices for IT Service Delivery",
            description:
              "Discover industry best practices to ensure efficient and effective IT service delivery.",
          },
          {
            title: "ITIL Service Lifecycle Stages",
            description:
              "Gain insights into the different stages of the ITIL service lifecycle and their significance.",
          },
          {
            title: "Roles and Responsibilities",
            description:
              "Understand the various roles and responsibilities within an IT service management framework.",
          },
          {
            title: "Incident, Problem, and Change",
            description:
              "Learn how to handle incidents, problems, and changes in IT environments to ensure smooth operations.",
          },
          {
            title: "Measuring and Reporting Service",
            description:
              "Master the art of measuring and reporting IT service performance and quality metrics.",
          },
          {
            title: "Benefits of ITIL Adoption",
            description:
              "Discover the advantages of implementing ITIL practices and their positive impact on enterprise success.",
          },
          {
            title: "ITIL Principles and Continual",
            description:
              "Learn effective strategies to implement ITIL principles and foster a culture of continual improvement.",
          },
        ],
        whoCanAttendCourse: [
          "IT Professionals",
          "IT Practitioners",
          "IT Support Staff",
          "IT Managers",
          "IT Project Managers",
          "Business Managers",
        ],
        aboutCourse: [
          {
            question: "What is the ITIL Foundation exam all about?",
            answer: `ITIL Foundation Exam is an entry-level certification for embarking on a career in Information Technology Service Management (ITSM). Clearing the ITIL Foundation Exam will equip one with the right tools to implement all the processes essential for an organization to comply with the ITIL® framework, which describes the most suitable way of performing processes within the IT cycle.The exam is based on the implementation of the ITIL® V3 Foundation level curriculum. By the AXELOS standard, the ITIL Foundation exam usually takes this format:
               Multiple choice examination questions
               40 questions
               26 marks required to pass (out of 40 available) - 65%
               60 minutes duration
               Closed book.`,
          },
          {
            question: "Who conducts the exam?",
            answer: `The exam is conducted through PeopleCert®. (KnowledgeHut is an ATO with PeopleCert®.`,
          },

          {
            question: "What does the exam cover?",
            answer: `The Foundation exam covers Continuous Service Improvement, Service Strategy, Service Design, Service Transition, and Service Operation.`,
          },
          {
            question:
              "where can I find the link to take the ITIL Foundation exam?",
            answer:
              "After you finish your the 2-day ITIL Foundation classes, PeopleCert® will send you an email with all of the information you need to take the test.",
          },
          {
            question:
              "Will I be able to pause the test and return to it later?",
            answer:
              "No, you will be given a 60-minute time limit and will not be able to pause the exam. If you accidentally close the window, then you’ll be able to reopen it immediately. If your exam page freezes, simply reload your browser and you'll be able to resume where you left off. If you have difficulty with your web browser, you can use the start link in your email to return to the previous question.",
          },
        ],
        faqs: [
          {
            type: "Trainig",
            question:
              " What can I expect to accomplish after completing the ITIL Foundation Course?",
            answer: `Our ITIL Foundation Course program is designed to help you learn the fundamentals of the ITIL framework and launch a successful ITSM career. By the completion of the ITIL course online, you will have the knowledge and skills to:

Build products and services with stakeholders and customers to co-create value.
Apply the guiding principles of the ITIL framework to ensure business value
To achieve company goals, master and implement the essential ideas of DevOps, Agile, and Lean.
Apply the four dimensions of Service Management to different areas of service`,
          },
          {
            type: "Trainig",
            question:
              "What are the prerequisites for the ITIL® 4 Foundation Certification Course?",
            answer:
              "The ITIL Foundation course and the accompanying ITIL4 Foundation test have no prerequisites.",
          },

          {
            type: "Carrer Benefit",
            question: "What are the companies that use ITIL®?",
            answer: `An ITIL® Lifecycle Expert is responsible for the following and many more:

Computing current ITIL® environment and existing Implementation
Planning to identify areas for improvement,
Setting up leadership and ITIL® experiences to simplify and improve the current processes based on industry best practices,
Performing gap analysis and providing recommendations,
Liaising with stakeholders to communicate ITSM vision and benefits,
Identifying and mitigating risks associated with processes,
Providing ITIL® best practice service management consulting at a strategic design, and operational level,
Helping with the organization’s transformational efforts.`,
          },

          {
            type: "Carrer Benefit",
            question:
              "What is the average annual pay of a Project Manager having an ITIL® 3 certification or ITIL 4 certification in India, US and around the globe?",
            answer: `The salary of a Project Manager having an ITIL® 3 certification or ITIL 4 certification varies from country to country. We have covered them below:

India: The national average salary for a Project Manager is INR 1,251,978 in India.
US: The national average salary for a Project Manager is $132,453 in the United States.
UK: The national average salary for a Project Manager is £61,188 in the United Kingdom.`,
          },
          {
            type: "Standard and Pro",
            question: "How do I know which plan is right for me?",
            answer: `When deciding between the Standard and Pro plans, consider your aspirations, budget, and the level of support you desire. With the Pro plan, you'll gain access to additional guidance and premium resources, ensuring you reach your full potential.

Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },

          {
            type: "Finance Queries",
            question: "Can I pay the course fees in instalments?",
            answer: `Yes, instalment options are available for payment of course fees. To avail the instalment option, please get in touch with us at kh.support@upgrad.com. The team will explain how the instalments work and provide timelines for your case. Typically, the number of instalments varies from 2 to 3, but the full amount must be paid before you complete the course.
            Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },
          {
            type: "Finance Queries",
            question: "What is the certification exam fee?",
            answer: `The certification fee for the ITIL4 Foundation exam is not charged separately. Once you enrol for the ITIL4 Foundation certification training with KnowledgeHut, the exam fee is included in the course fee. The course fee is inclusive of charges for ITIL4 Foundation exam, online proctoring, ITIL4 Foundation official e-book, and ITIL4 Foundation official training materials.`,
          },
        ],
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
      id: 23,
      title: "Leading SAFe® 6.0",
      courseSubtitle:
        "Leading SAFe® 6.0 Training with SAFe Agile Certification",
      description:
        "Become an In-Demand SAFe Agilist and Lead Enterprise Lean-Agile Transformation",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "",
      courseDetail: {
        courseCategory: "Agile Management",
        careerDetail: [
          { carrer: "SAFe-Certified Professionals", value: "12,000" },
          { carrer: "Agile Transformations", value: "300" },
          { carrer: "Global Scaled Agile Partner", value: "Top 10" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "16 Hours of Live Instructor-Led Training ",
            },
            {
              icon: "",
              value: "Earn·16 PDUs and 16 SEUs for Continual Learning",
            },
            {
              icon: "",
              value: "Real-World Simulations and Activities",
            },
            {
              icon: "",
              value: "Unlock Exam Success with Comprehensive Exam Support",
            },
            {
              icon: "",
              value: "All-Inclusive Learning with Exam Fee Included",
            },
            {
              icon: "",
              value: "Comprehensive Job Support including AI-Resume Builder",
            },
            {
              icon: "",
              value: "Embrace the SAFe Way with Access to the SAFe Studio",
            },
            {
              icon: "",
              value: "Access 1-Year SAFe Community Membership",
            },
            {
              icon: "",
              value: "Mentorship by Agile Industry Experts",
            },
          ],
          overviewDetail: `The Leading SAFe certification has become a standard requirement for Lean-Agile enterprises. It expands your horizons in terms of potential career paths and value within the sector. The Scaled Agile Framework (SAFe) is the most widely adopted enterprise Agile approach according to most survey data, with 53% using it, according to the 16th Annual State of Agile Report.

While Agile approaches have proven to be easily applicable to small teams, the majority of enterprises today work across collaborative teams, complex systems, and geographies. This requires Agile to work across your enterprise to bring in the benefits of faster delivery, better-quality products, and quick response to your customer queries. However, large-scale agile transformation is prone to failure due to a lack of suitable structure and processes, resulting in agile implementations that do not have the desired impact.

The Scaled Agile Framework (SAFe) is a comprehensive framework for large-scale Agile project teams to easily implement an Agile transformation. The first step toward such a change is to use Lean/Agile principles and practices at all levels of your organization. The SAFe methodology synchronizes the alignment, collaboration, and delivery of numerous Agile teams with ease, paving the road for organizational success. Now, in its latest release (version 6.0), SAFe promises to bring in full business agility with significant advances in strategy, execution, and leadership competencies that will help individuals and enterprises deliver innovative business solutions and outperform the competition in its latest release (version 6.0).`,
          overviewPoints: [
            {
              title: "16-Hour Live Instructor-Led Online Training",
              value:
                "Our course is designed to be engaging and interactive, with a seasoned instructor leading you through 16 hours of live, real-time training. You'll have the opportunity to ask questions, participate in discussions, and apply what you learn in a supportive virtual environment.",
            },
            {
              title: "Earn 16 PDUs and 16 SEUs for Continual Learning",
              value:
                "Continuous learning is key to staying at the forefront of Agile practices. By completing this course, you'll earn 16 Professional Development Units (PDUs) and 16 Scrum Education Units (SEUs), recognized by leading industry bodies, to support your professional growth.",
            },
            {
              title: "Unlock Exam Success with Comprehensive Exam Support",
              value:
                "We're here to ensure you're fully prepared to ace the SAFe certification exam. Our course includes comprehensive exam preparation materials, practice tests, and guidance to boost your confidence and success on exam day.",
            },
            {
              title: "All-Inclusive Learning ",
              value:
                " Exam Fee Included: Your investment in this course covers not only the training but also the SAFe certification exam fee. This means there are no hidden costs, and you can focus on your learning journey without worrying about additional expenses.",
            },
            {
              title: "Comprehensive Career Support with Job Boost 360:",
              value:
                "Accelerate your professional growth with our holistic program. Gain access to job placement assistance, resume workshops, interview preparation, and personalized coaching designed to propel your career forward.",
            },
            {
              title: "Embrace the SAFe Way with Access to the SAFe Studio:",
              value:
                "Gain access to the SAFe Studio, a treasure trove of resources that includes a wealth of SAFe content, videos, and tools to deepen your understanding of the framework and its practical applications.",
            },
            {
              title: "Acquire Free 1-Year SAFe Community Membership:",
              value:
                "As a course participant, you'll gain access to the vibrant SAFe community. You'll have the opportunity to network with Agile enthusiasts, access valuable resources, and stay updated on the latest developments in the SAFe framework throughout your one-year free membership.",
            },
            {
              title: "Gateway to the Largest Global Agile Community",
              value:
                "Connect, collaborate, and stay updated on industry trends through our exclusive gateway. Access forums, events, and networking opportunities to forge connections and share best practices with fellow practitioners worldwide",
            },
            {
              title: "Mentorship by Agile Industry Experts",
              value:
                "Tap into the knowledge and experience of Agile leaders. Benefit from personalized guidance, feedback, and insights tailored to your career goals, empowering you to make informed decisions and achieve success in your Agile journey.",
            },
          ],
          overviewCourseDescription: `We're excited to embark on this SAFe journey with you, equipping you with the skills and knowledge you need to lead Agile transformation initiatives successfully. Let's embrace the SAFe way together and achieve excellence in Agile practices. Welcome to the Leading SAFe course!`,
        },
        highDemandAndAccerlated: {
          demandTitle: "DEMAND FOR LEADING SAFE CERTIFIED PROFESSIONALS",
          demandHeading: "Soaring Demand and Accelerated Growth",
          demandDetail: `While Agile methods have been found to be readily applicable to small teams, most organizations today work across collaborative teams, complex systems and geographies. This requires Agile to work across the enterprise to bring in the benefits of faster delivery, better quality products and quick response to customer queries. However, agile transformation across such a large scale is prone to failures due to a lack of proper structure and processes, which results in agile implementations not yielding the expected impact.
          The Scaled Agile Framework® (SAFe®) is a complete methodology for large-scale Agile project teams to carry out an Agile transformation seamlessly. Applying Lean/Agile principles and practices across all levels within an enterprise is the first step toward such a change. The SAFe® methodology effortlessly synchronizes the alignment, collaboration, and delivery of multiple Agile teams, leading the way to enterprise success. Now in its latest release (version 6.0), SAFe® promises to bring in full business agility with significant advances in strategy, execution, and leadership competencies that will help individuals and organizations deliver innovative business solutions and supersede the competition.

          With more than 70% of US Fortune 100 companies actively employing SAFe®, it is clear that the demand for Leading SAFe® is on a constant rise. Earning the Leading SAFe® 6.0 certification from Scaled Agile, Inc. - a globally renowned accreditation body, gives you a major lead over your peers and places you at the helm of Agile transformation in enterprises.

          A Leading SAFe® certificate will not just merit a salary raise in your present organization but also offers several other benefits as listed below:

          ORGANIZATIONAL BENEFITS

          Apply SAFe® 6.0 in an enterprise context.
          Deliver more value.
          Improve communication and collaboration across all projects.
          Introduce Agile not just to your IT delivery teams but the whole organization.
          INDIVIDUAL BENEFITS

          Lead transformation in Agile teams.
          Become a top-earning Agile professional.
          Grab more career opportunities.
          Keep up with the swift-changing market trends.`,
          demandData: [
            {
              type: "SAFe Agilist",
              averageSalary: [18, 25, 36],
              hiringCompany: [],
              demand: {
                percant: "70%",
                description: "Of Fortune 500 companies actively employ SAFe",
              },
            },
            {
              type: "Scrum Master",
              averageSalary: [11, 15, 22],
              hiringCompany: [],
              demand: {
                percant: "1M",
                description:
                  "Professionals around the world are SAFe certified",
              },
            },
            {
              type: "Product Owner",
              averageSalary: [14, 20, 28],
              hiringCompany: [],
              demand: {
                percant: "20,000+",
                description: "Organizations around the world use SAFe",
              },
            },
            {
              type: "Agile Coach",
              averageSalary: [19, 28, 37],
              hiringCompany: [],
              demand: {
                percant: "6,000+",
                description:
                  "Job openings demanding SAFe experience, just in the US",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "High-energy workshops with Agile activities, team-based exercises and practical case studies",
            },
            {
              icon: "",
              topic: "SAFe Practice Consultant Trainers",
              value:
                "Get trained by accredited SPCTs with over a decade of experience across industries around the world.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Acquire real-world tips, proven strategies and practical insights from seasoned industry experts.",
            },
            {
              icon: "",
              topic: "Join the Largest SAFe Network",
              value:
                "1-year free SAFe Community Platform membership - your gateway to the largest Scaled Agile communities.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                "Webinars, e-books, tutorials, articles, and interview questions - we're right by you in your learning journey!",
            },
            {
              icon: "",
              topic: "Scaled Agile Gold SPCT Partner",
              value:
                "We're a Global Top 10 Scaled Agile Gold SPCT partner. 12K+ SAFe career transformations facilitated!",
            },
            {
              icon: "",
              topic: "Comprehensive Job Support",
              value:
                "Make the most of LinkedIn profile reviews, AI-resume builder and access to 1500+ job listings",
            },
            {
              icon: "",
              topic: "Comprehensive Job Support",
              value:
                "Benefit from complete job support, including LinkedIn assistance, resume refinement and mentorship.",
            },
          ],
        },
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/John Mulligan 96-4a9492fa47f043c3a24c4cb6f41a27a5.svg",
            instructorName: "John Mulligan",
            instructorProfession: "SAFe (SPC), Senior Consultant",
            experience: "15",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/Capital_One_SAFE_SSM_02-ea30660d254643c6bcc4d19635a47285.svg",
            instructorDetail: `Mr. Mulligan is an Agile consultant at Applied Frameworks, specializing in Agile transformations and team train... 
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Ritika Birla 96-daba7b3289584f77bbb6382cd39f46c8.svg",
            instructorName: "Ratika Birla",
            instructorProfession: "SPC, Agile and Lean Coach",
            experience: "10",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/AON_60x26_revised-75dd7507c60441e29b4173fdd9f3f538.svg",
            instructorDetail: `Ratika Birla is an accomplished SAFe Program Consultant, Agile and Lean Coach/Trainer, Enterprise Coach, Produc...  
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to unlock your potential as a SAFe Agilist?",
          certificationDetail:
            "On clearing your Leading SAFe exam, you receive the coveted SAFe Agilist certificate from the esteemed Scaled Agile Framework (SAFe) and join the elite club of SAFe 6 Agilist certification holders worldwide.",
          certificateImage:
            "https://d2o2utebsixu4k.cloudfront.net/Leading SAfe-6dae20cba5d842d09eca98d50f1a30fd.svg",
        },
        prerequisites: [
          "There are no prerequisites to attend this course.",
          "5+ years experience in software development and testing is useful.",
          "Experience in product or project management is recommended.",
          "Prior working experience in Scrum is beneficial.",
        ],
        courseCurriculm: [
          {
            title: "Thriving in the Digital Age with Business Agility",
            isPreview: false,
            objective:
              "Get introduced to the fundamental concepts of Business Agility and decipher the major competencies of Business Agility.",
            topics: [
              "Thriving in the Digital Age",
              "SAFe as an operating system for Business Agility",
              "The Seven Core Competencies of Business Agility",
            ],
          },
          {
            title: "Building a Foundation with Mindset, Values, and Principles",
            isPreview: false,
            objective:
              "Gain a solid understanding of important SAFe principles and develop a Lean-Agile mindset like successful Agile leaders.",
            topics: [
              "The Lean-Agile Mindset",
              "SAFe Core Values",
              "SAFe Lean-Agile Principles",
            ],
          },
          {
            title: "Establishing Team and Technical Agility",
            isPreview: false,
            objective:
              "Learn how to manage cross-functional Agile teams and deliver ROI-driven results on a consistent basis.",
            topics: [
              "Forming Cross-Functional Agile Teams",
              "Built-In Quality",
              "Organizing Agile Release Trains around Flow of Value",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Effective Scaling",
            description:
              "SAFe® values of a Lean-Agile mindset to scale Lean and Agile development in your enterprise. ",
          },
          {
            title: "Lean-Agile Principles",
            description:
              "Applying the Lean-Agile mindset and principles to become a Lean-thinking manager.",
          },
          {
            title: "Maximize Value",
            description:
              "Integrate, deploy, and release value to support PI planning and events in Program execution. ",
          },
          {
            title: "Seven Core competencies",
            description:
              "The seven core competencies in SAFe 6.0 and the development of large solutions.",
          },
          {
            title: "Lean-Agile Mindset",
            description:
              "Scaling Lean and Agile with the Lean-Agile Mindset and principles.",
          },
          {
            title: "Program Increments",
            description: "Plan and successfully execute Program Increments.",
          },
          {
            title: "Agile Release Trains",
            description:
              "Execute and release value through Agile Release Trains.",
          },
          {
            title: "Lean-Agile Budgeting",
            description: "Build an Agile portfolio with Lean-Agile budgeting.",
          },
          {
            title: "Lean-Agile Transformation",
            description:
              "Leading the transformation with the SAFe® Implementation Roadmap.",
          },
          {
            title: "Lean Portfolio Management",
            description:
              "Alignment and execution with Strategic Themes and Lean Portfolio Management (LPM).",
          },
        ],
        whoCanAttendCourse: [
          "Executives and Leaders",
          "Infrastructure Management personnel",
          "Project Managers",
          "Product Managers",
          "Leads and Managers",
          "Enterprise, System, Solution Architects",
        ],
        aboutCourse: [
          {
            question: "What is the SAFe Agilist certification all about?",
            answer:
              "A Certified SAFe Agilist (SA) is a professional who has completed the Leading SAFe certification and been successful in the Scaled Agile Framework certification test. By acquiring the SAFe Agilist certification provided by Scaled Agile, Inc, you will be able to address the critical challenges of creating and delivering enterprise-level software and systems in the shortest time. It gives guidance for all levels of organizations involved in solution development: Portfolio, Program, Team, and Large Solutions.",
          },
          {
            question: "Why should I go for the SAFe Agilist certification?",
            answer: `Holding the SAFe Agilist certification shows your proficiency in implementing lean thinking, SAFe Framework, and Product development flow principles in an organizational context. Our two-day Leading SAFe training course gives you practical experience of applying the Scaled Agile Framework in large enterprises and is delivered by a SAFe Practice Consultant, authorized by Scaled Agile, Inc.`,
          },

          {
            question:
              "What is the importance of a SAFe 6.0 Agilist certification?",
            answer: `While applying Lean/Agile principles at the team or department level is relatively straightforward, achieving the same benefits at the enterprise level presents significant challenges due to the scale of the required change. Consequently, organizations often turn to the Scaled Agile Framework (SAFe) to facilitate large-scale, multi-team transformations seamlessly.
            SAFe 6.0 Agilists are highly sought after for their proficiency in spearheading this transformation. They excel in planning and executing program releases with careful consideration and possess the ability to identify the necessary roles and structures essential for scaling Agile practices to the program level.`,
          },
          {
            question: "Who offers the SAFe Agilist certification?",
            answer:
              "Scaled Agile, Inc. is the provider of SAFe which is one of the best-known frameworks for enterprise agility. SAFe was initially released in 2011 by Dean Leffingwell as a knowledge base for enterprises to adopt Agile. It is the leading provider of SAFe courses for implementing Agile practices at enterprise level. The SAFe Agilist (SA) Certification is given to those who have undertaken the SAFe 6.0 Agilist Certification Exam and received a passing score. ",
          },
          {
            question: "How much does the SAFe Agilist certification cost?",
            answer:
              "The Scaled Agile Framework certification cost is included in the SAFe Agilist course fee.",
          },
        ],
        faqs: [
          {
            type: "Course",
            question:
              "What will I accomplish after completing the Leading SAFe online course?",
            answer: `The Leading SAFe course has been thoughtfully designed to help you prepare for the Certified SAFe Agilist exam. On completing this course, you will be equipped with all the tools and techniques to:

Apply SAFe values to scale Lean-Agile development in your enterprise.
Apply the Lean-Agile principles as a Lean-thinking manager.
Integrate, deploy, and release value to support PI planning as well as the events in Program execution.
Understand the core competencies in SAFe 6.0 and coordinate the development of products.
Enhance your Lean-Agile leadership skills and create high-performing, purpose-bound Agile teams.
Support a Lean-Agile transformation in your enterprise with the SAFe Implementation Roadmap.
Establish business alignment via Strategic Themes and Lean Portfolio Management (LPM).`,
          },
          {
            type: "Course",
            question:
              "What practical skills can I expect to have after completing this course?",
            answer: `Our Leading SAFe training aims to equip you with all the skills to be a sought-after SAFe Agilist. In this engaging and interactive two-day program, you will develop the practical skills employers look for in a SAFe Agilist:
              Leadership
              Coaching
              Change management
              Motivation
              Conflict management
              Lean-Agile management
              Design thinking
              Systems thinking
              An understanding of DevOps principles
              Executing Program Increments
              Executing Agile Release Trains
              Lean-Agile Budgeting
              Lead Portfolio Management
`,
          },

          {
            type: "PDUs and SEUs",
            question: "How many PDUs & SEUs will I be eligible for?",
            answer: `You will earn 16 PDUs and 16 SEUs by participating in this two-day Leading SAFe training program.`,
          },

          {
            type: "PDUs and SEUs",
            question:
              "How many PDUs will I need to maintain my SAFe Agilist certification?",
            answer:
              "You will need 10 continuing education or outreach hours (PDUs) to maintain your SAFe Agilist certification.",
          },
          {
            type: "PDUs and SEUs",
            question: "What are PDUs and SEUs?",
            answer: `PDUs are Professional Development Units issued by the Project Management Institute®. They can be earned by completing educational training or learning opportunities, which serve to validate your participation and continued proficiency in the principles and practices of project management.

PDUs are the measuring unit used to quantify your project management professional development as part of the PMI’s Continuing Certification Requirements (CCR) program. 1 PDU = 1 hour of learning/activity.

SEUs are Scrum Educational Units, issued by the Scrum Alliance. They can be earned by completing educational training or learning opportunities, which serve to validate your participation and continued proficiency in the principles and practices of Scrum.

SEUs demonstrate that you are furthering your proficiency as a Scrum practitioner. SEUs follow a 1:1 ratio, where one hour of participation or preparation towards increasing your proficiency in Scrum is equal to one SEU. To maintain your certification from Scrum Alliance, you are required to earn a certain number of SEUs every two years.`,
          },

          {
            type: "Standard and Pro Plans",
            question:
              "Are there any differences in course content between the Standard and Pro plans?",
            answer: `While the core content remains consistent across both plans, the Pro plan enriches your experience with supplementary resources and advanced learning material. It is a meticulously crafted pathway not just for achieving the CSPO certification, but also for propelling your Product Owner career growth to new heights.`,
          },
          {
            type: "Standard and Pro Plans",
            question: "How do I know which plan is right for me?",
            answer: `When deciding between the Standard and Pro plans, consider your aspirations, budget, and the level of support you desire. With the Pro plan, you'll gain access to additional guidance and premium resources, ensuring you reach your full potential.

Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },
          {
            type: "Standard and Pro Plans",
            question: "How do I know which plan is right for me?",
            answer: `When deciding between the Standard and Pro plans, consider your aspirations, budget, and the level of support you desire. With the Pro plan, you'll gain access to additional guidance and premium resources, ensuring you reach your full potential.

Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },
          {
            type: "Workshop Experience ",
            question: "What are the modes of training offered for this course?",
            answer: `The Leading SAFe workshop at KnowledgeHut is delivered through our immersive learning experience platform, via live and interactive instructor-led training sessions.

Listen, learn, ask questions, and get all your doubts clarified from your instructor, who is an experienced practitioner.`,
          },
          {
            type: "Workshop Experience ",
            question:
              "How different is the Leading SAFe online training from the conventional in-person training?",
            answer: `The conventional in-person Leading SAFe training from Scaled Agile, Inc. (SAI) will be delivered for 2-days. The online course is divided into several sessions of shorter duration, unlike the in-person class that consists of 2 classes with 7 to 8 hours-long sessions. The size of the class is capped at 30 so that students gain a better learning experience. The participants and our trainers will be able to virtually collaborate with one another with the help of webcam tool.`,
          },
          {
            type: "Workshop Experience ",
            question: "Who are the instructors?",
            answer: `Our SAFe® Program Consultants (SPCs) are:
Professionals licensed by Scaled Agile, Inc. to teach the official curriculum
Masters in SAFe who have immense experience in leading, applying, coaching, and teaching it
Skilled in SAFe framework and agile software development
Subject matter experts who are active in software development and local Agile communities, along with the broader global SAFe and Agile movements.`,
          },
        ],
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "41,500+ Enrolled",
        bannerImage:
          "https://ww2.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_02-c9719aad47ad4255a95097a79c146264.webp&w=1920&q=75",
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
          "Get trained by globally renowned SAFe Practice Consultants",
          "Unlock opportunities in top-tier organizations seeking SAFe expertise",
          "Experiential learning, simulations, engaging role-plays and much more!",
        ],
      },
    },

    {
      id: 24,
      title: "Agile and Scrum",
      courseSubtitle: "Agile and Scrum Training",
      description:
        "Comprehensive Agile and Scrum training to equip yourself with the skills to excel",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "",
      courseDetail: {
        courseCategory: "Agile Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "40,335+ Enrolled",
        bannerImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner_Pointers-51994aa4899f483eadc3d6d552d5d200.svg",
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
          "Get the foundational skills to become an enabler of high-performance",
          "Explore high-demand career-defining certification opportunities",
          "Experience immersive learning and gain a deeper understanding of Agile and Scrum",
        ],
        careerDetail: [
          { carrer: "Professionals Trained", value: "450k" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "8 Hours of Live Instructor-Led Training Sessions",
            },
            {
              icon: "",
              value: "Earn 8 PDUs and 8 SEUs with the Live Training",
            },
            {
              icon: "",
              value: "54+ Hours of On-Demand Self-Paced Learning",
            },
            {
              icon: "",
              value: "15 Assessments and 13 Recall Quizzes",
            },
            {
              icon: "",
              value: "11 Comprehensive Assignments for Practice",
            },
            {
              icon: "",
              value: "Lifetime Access to Agile and Scrum Courseware",
            },
          ],
          overviewDetail: `Get introduced to the incredible concepts of Agile and Scrum with this beginner’s skills development course. Start with the basics of Agile and its foundations (values, principles, and pillars) and move on to learn about the various Agile variants including Scrum, Kanban, XP, and their tools. Master Agile Project Management (APM) and the 5-stage process for Agile software development, before diving deep into Scrum.

Understand how Agile is used in project development, including Agile estimation, planning, monitoring, and tracking, and Agile metrics and tools. Gain an understanding of SAFe®, Disciplined Agile Delivery (DAD), and Large-Scale Scrum (LeSS) frameworks and get ready to take advantage of career-defining certification opportunities from global accreditation bodies like Scrum Alliance®, Scaled Agile Inc.® and Scrum.org™.

The Agile and Scrum Training program is delivered both in a Blended Learning and Self-Paced mode.`,
          overviewPoints: [],
          overviewCourseDescription: `We're excited to embark on this SAFe journey with you, equipping you with the skills and knowledge you need to lead Agile transformation initiatives successfully. Let's embrace the SAFe way together and achieve excellence in Agile practices. Welcome to the Leading SAFe course!`,
        },
        highDemandAndAccerlated: {
          demandTitle: "",
          demandHeading: "",
          demandDetail: "",
          demandData: [],
        },
        knowledgeHut: {
          subtitle: "Get the KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Activities, team-based exercises, practical case studies: High energy workshops with hands-on learning.",
            },
            {
              icon: "",
              topic: "Elite Panel of Scrum Trainers",
              value:
                "Certified Scrum Trainers with rich experience across industries.",
            },
            {
              icon: "",
              topic: "Expert Practitioners",
              value:
                "Real-world tips and time-tested techniques for your Agile toolbox from leading expert practitioners.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "One-to-one mentorship, real-world tips and time-tested techniques from highly qualified trainers.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                "Webinars, e-books, tutorials, articles, and interview questions - we're right by you in your learning journey!",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your Scrum career.",
            },
          ],
        },
        courseInstructor: [],
        courseAuthor: [],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Imgcert cta-10-356e659eed7f437f83063de6a2cc85eb.svg",
          bannerTitle: "Ready to go from novice to Agile and Scrum expert?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "No prior experience needed! Jumpstart your Agile and Scrum journey.",
          "Get started with powerful management frameworks – everyone is welcome!",
        ],
        courseCurriculm: [
          {
            title: "Background to Agile",
            isPreview: false,
            objective:
              "Know the history of the Agile Manifesto and explain the importance of implementing 4 values and 12 principles in Agile projects. Describe the elements of the house of Agile.",
            topics: [
              "Background to Agile",
              "A day in the life of a Project Manager",
              "The need for change",
              "Traditional Projects vs Agile Projects",
              "Benefits of Agile Methodology",
            ],
          },
          {
            title: "Agile Basics",
            isPreview: false,
            objective:
              "Know the history of the Agile Manifesto and explain the importance of implementing 4 values and 12 principles in Agile projects. Describe the elements of the house of Agile and discuss the Agile principles in depth.",
            topics: [
              "Basics of Agile",
              "Agile Software Development – Part 1",
              "Agile Software Development – Part 2",
              "History: The Agile Manifesto",
              "The Agile Values – Part 1",
              "The Agile Values – Part 2",
              "The Agile Principles - Ensuring customer satisfaction through frequent delivery",
              "The Agile Principles - Encouraging collaboration and accommodating ever-changing requirements",
              "The Agile Principles - Authorizing your team for enhanced responsibility",
            ],
          },
          {
            title: "Business Inputs",
            isPreview: false,
            objective:
              "Understand why conversations are more important than writing requirements. Explain the dimensions of business value and understand the details of the user story prioritization techniques. Learn about the Minimum Viable Product and the Minimum marketable feature. Understand the criteria for, and the components of a well-formed user story. Understand the four stages of User story maturity.",
            topics: [
              "Business inputs",
              "Business 'value' in Agile",
              "Stakeholders value in Agile",
              "What’s so great about User stories",
              "Measuring value",
              "3 Cs of a User story",
              "Investing in User stories",
              "Prioritizing User stories",
              "User story maturity",
              "Minimum viable product and minimum marketable feature",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Agile Fundamentals",
            description:
              "Understand Agile values and 12 Agile principles at work, Agile variants.",
          },
          {
            title: "Agile Business Inputs",
            description: "Learn about user stories and how to create them.",
          },
          {
            title: "Agile Planning Events",
            description:
              "Learn about product planning, release planning, and iteration planning workshops.",
          },
          {
            title: "Scrum Ceremonies",
            description:
              "Sprint, sprint planning, sprint review, sprint retrospective and daily scrum.",
          },
          {
            title: "Agile Estimation & Metrics",
            description:
              "Understand the Techniques of Agile estimation and learn how to calculate Agile metrics and use them.",
          },
          {
            title: "Scaling Agile",
            description:
              "Discover how to scale Agile effectively at the enterprise level.",
          },
        ],
        whoCanAttendCourse: [
          "Project Managers",
          "Developers",
          "Product Owners",
          "Managers-Software Development",
          "Architects-Software Development",
          "Product Managers",
        ],
        aboutCourse: [],
        faqs: [
          {
            type: "Training",
            question:
              "What practical skills can I expect to have after completing the Agile and Scrum training course?",
            answer: `Our Agile and Scrum introductory course is designed to make you a skilled contributor to your Scrum team. You will develop the skills to:

Apply the Agile manifesto, the 4 Agile values, and the 12 Agile Principles to drive successful projects
Create User Stories using the User Story format to enhance collaboration and creativity
Apply User story prioritization techniques to a product backlog and use the mandatory 3 Cs
Distinguish High-level overview for Agile variants and run the Project lifecycle for Agile Product development
Understand the responsibilities for Scrum and Other roles in an Agile setup
Run Scrum ceremonies and apply techniques of Agile estimation
Apply Agile planning events and conduct Daily Scrum to reach goals
Scale Agile with SAFE®, DAD, and LeSS and lead enterprise-wide Agile transformation`,
          },
          {
            type: "Training",
            question:
              "What are the prerequisites for the Agile and Scrum Course?",
            answer: `There is no set of eligibility requirements to attend this Scrum Master Certification course and it can be taken by novices or professionals.
`,
          },

          {
            type: "Workshop",
            question:
              "What are the modes of training offered for the Agile and Scrum Course?",
            answer: `The Agile and Scrum workshop at KnowledgeHut is delivered through PRISM, our immersive learning experience platform, via two modes of delivery:
Blended learning:

Get the best of both worlds with live and interactive instructor-led training sessions along with the convenience and flexibility of self-paced learning.
Listen, learn, ask questions, and get all your doubts clarified from your instructor, who is an experienced practitioner.
You also get to collaborate and learn from the experience of your peers in real-world simulations and activities.
On-Demand Self-Learning:

Learn conveniently at your own pace, whenever and wherever you choose. Spend as much time as you need to on areas or topics that you find most difficult, pausing and replaying relevant segments of video as often as you need to. Benefit from the limitless educational possibility that comes with lifetime access. The entire courseware and all the features of our immersive learning experience platform will remain at your fingertips whenever you wish to refresh concepts and clear your doubts.`,
          },

          {
            type: "Workshop",
            question: "Who are the instructors?",
            answer:
              "Your instructors are experienced industry professionals who have significant experience in Agile and Scrum across various industries. They are leading practitioners who bring current best practices and case studies from their experience to the live and interactive training sessions. The instructors are industry-recognized experts with more than 10 years of experience implementing Agile.",
          },

          {
            type: "Finance",
            question:
              "Can I cancel my enrolment to the Agile and Scrum course? Do I get a refund?",
            answer: `You can cancel your enrolment and receive refunds in line with our Cancellations and Refunds policy.`,
          },

          {
            type: "Finance",
            question: "Can I switch my start date?",
            answer:
              "Yes, you may switch your start date with prior notice of at least 24 hrs and subject to availability in the desired batch.",
          },
          {
            type: "Finance",
            question: "Is there a money-back guarantee?",
            answer: `We offer a 100% Satisfaction Guarantee. Should you require additional clarification, please reach out to your Learning Advisor.`,
          },
          {
            type: "Agile and  Scrum",
            question: "What is Agile Scrum?",
            answer: `Agile is an iterative approach to project management and software development. It enables teams to deliver work in small increments instead of a big launch. Requirements, plans, and deliverables are evaluated on a continuous basis so that teams can respond to change easily.

Widely adopted by top organizations across the globe, Agile is a methodology that has proven to be highly effective in transforming businesses, catalyzing innovation, and accelerating profitable growth.

Scrum stands out as the most dominant Agile framework with a 58% adoption rate across organizations globally. It challenges the notion of the top-down approach to project management and focuses on a software development life cycle based on an incremental and iterative approach. Products are built in short sprints and the focus is on maximizing performance and quality.`,
          },
          {
            type: "Agile and  Scrum",
            question:
              "What is the difference between Agile Scrum Master and Certified Scrum Master?",
            answer: `Agile Scrum Master is a certification offered by EXIN, a foundation originally established by the Ministry of Economic Affairs in the Netherlands. The EXIN Foundation provides certification standards and examinations for technology professionals. Agile Scrum Master is one of the certifications from this organization. It validates a professional’s ability to use coach and facilitate teams in Agile and Scrum practices. The course is open to all who want to pursue a career as Scrum and Agile professionals.

The Certified ScrumMaster® (CSM®) on the other hand, is offered by Scrum Alliance®, a world-renowned body dedicated to furthering the practices of Scrum and Agile. The CSM is an entry-level credential, accepted globally and has high credibility. It validates the holder’s ability to successfully perform the role of servant leader, coach, facilitator, and creator of high-performing scrum teams.`,
          },
        ],
      },
    },

    {
      id: 25,
      title: "PMP Certification",
      courseSubtitle:
        "PMP® (Project Management Professional) Certification Training",
      description:
        "The Most Comprehensive PMP  Certification Course for Guaranteed Exam Success",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "recent-addition",
      courseDetail: {
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "40,335+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_04%20copy-19384d3ccbf24ef0b51b6eed763ee54d.webp&w=1920&q=75",
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
        secretSauce: [
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Experiential%20Learning_CSM_Revised-79e5519eb45244c98cf06fa7153f5d22.svg",
            detail: "Premium 2000+ Question Bank",
          },
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Complimentary%20Mock%20Tests_CSM-01-2b7c9e6768584b72bc6c2d4a0b6a466d.svg",
            detail: "Free PMP Exam Simulator",
          },
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn With Us_Scrum Enablement Sessions_CSM-6a6626d72fe14f6e9a86191dd6b507f9.svg",
            detail: "Complimentary Mock Tests",
          },
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Free%20Agile%20and%20Scrum_20%20SEUs_CSM-01-01-91096e895f5e427db5635a1a7ccc8a81.svg",
            detail: "Guaranteed Exam Pass Study Plan",
          },
        ],
        highlights: [
          "World's #1 PMP Exam Prep to Pass in Your First Attempt",
          "Proven Step-by-Step Blueprint for PMP Exam Success",
          "Aligned with the Latest PMP Exam Content Outline",
        ],
        careerDetail: [
          { carrer: "Career transformations", value: "450k" },
          { carrer: "Workshops every month", value: "200" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "36 Contact Hours with Live, Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "Complimentary On-Demand Course with 35 Contact Hours",
            },
            {
              icon: "",
              value: "Mentor-Led Guaranteed Exam Pass Study Plan",
            },
            {
              icon: "",
              value: "2000+ Question Bank for Hands-On Practice",
            },
            {
              icon: "",
              value: "Complimentary Mock Tests and Exams for Hands-On Practice",
            },
            {
              icon: "",
              value: "Free PMP Exam Simulator for Real Exam Experience",
            },
            {
              icon: "",
              value: "Exact PMP Exam Questions Replica Set from PMI",
            },
            {
              icon: "",
              value: "500+ Premium Exam Questions Exclusive from PMI",
            },
            {
              icon: "",
              value: "12 Full-Length Simulation Tests (180 Qs Each)",
            },
          ],
          overviewDetail: `Have you been wondering where to get started with your PMP exam preparation and whether you’ll have sufficient time to prepare alongside your full-time job? Wouldn’t it be good to have experts you can reach out to regularly to clear any doubts you may have? Are you struggling to get hold of the right kind of learning material that will help you crack the PMP exam right in the first attempt?
Well, you’ve come to just the right place! Get all of this and more in the most comprehensive mentor-guided Project Management Professional (PMP)® Certification Course. PMP certification is a globally recognized certification for project managers worldwide.
Our PMP program is led by Program Director, Kevin Davis, who brings on board over two decades of rich project management experience across industries in addition to top-notch training experience, having trained thousands of students across domains including professionals in the US military. When you sign up for KnowledgeHut's PMP course, you also receive a complimentary on-demand video course by acclaimed project management thought leader, and risk management guru, Carl Pritchard. With over three decades of cross-domain experience, Carl is also an author of eight texts and a dynamic keynote speaker. Recognized for making learning enjoyable, he received PMI's 2019 "Best of the Best" award and has judged competitions for PMI and the Federal Highways Administration..`,
          overviewPoints: [
            {
              title: "Earn 36 Contact Hours with Live Instructor-Led Sessions",
              value:
                "Get the best of live PMP training by industry experts with over a decade’s project management experience across industries all over the globe.",
            },
            {
              title:
                "Enjoy a Complimentary Self-Paced PMP Certification Course by Carl Pritchard",
              value:
                "This is a highly sought-after on-demand program by Carl Pritchard, one of the most renowned project and risk management gurus of the industry. The program helps you earn 35 contact hours.",
            },
            {
              title: "Follow Step-by-Step 5-Week Mentor-Led Study Plan",
              value:
                "Get access to a meticulously crafted, practical, and mentor-led study plan, put together by Kevin himself. No more wasting time searching for what you should plan for—successful execution depends on impeccable planning, after all.",
            },
            {
              title: "Attend Our Regular Doubt-Clearing Sessions.",
              value:
                "We’re with you every step of the way, with regular sessions to clear any doubts you may have throughout your preparation.",
            },
            {
              title: "First-Attempt Success Guarantee:",
              value:
                "Apply for your PMP exam only once your mentor endorses it and aim for an above target score under mentor guidance.",
            },
            {
              title: "Attend Refresher Courses with 180-Day Grand Pass",
              value:
                " Need a refresher course to brush up on PMP exam concepts? With our 180-Day Grand Pass, you can rejoin any of our live workshops as many times as you want.",
            },
            {
              title: "Get Hands-On Practice with a 2000+ Solid Question Bank",
              value:
                "Delve into a comprehensive question bank with over 2000 questions for hands-on practice. Strengthen your understanding and master PMP concepts through in-depth, varied, and targeted practice.",
            },
            {
              title: "Free PMP Exam Simulator",
              value:
                "Experience the real PMP exam environment with our free PMP Exam Simulator. Simulate exam conditions, ensuring you're well-prepared for the actual test day.",
            },
            {
              title:
                "Boost Your Confidence to Ace the Exam with Exclusive PMI Questions",
              value:
                "Access a collection of 500+ premium exam questions curated exclusively from PMI. Sharpen your skills with these meticulously selected questions, ensuring you're well-prepared for the PMP exam.",
            },
          ],
          overviewCourseDescription: `In all, you’re in for the most efficient and the most effective, PMP exam prep journey with a training package that ensures assured success. Our PMP course is fully aligned with the newest version of the PMP exam’s objectives and the 7th Edition of the PMBOK® Guide. KnowledgeHut is a Premier Authorized Training Partner (ATP) of PMI®.
Join the ranks of our successful learners by taking advantage of our Specially Discounted PMP Exam Vouchers! As a PMI Authorized Training Partner, we're thrilled to offer our students not just exceptional training but also the best value on PMP exam vouchers.
🌟 Special ATP Discount: Unlock unbeatable savings on your PMP exam voucher when you purchase through us.
💡 Pro Tip: Before you proceed, touch base with our dedicated sales team to secure the most competitive PMP exam voucher rate available in the market.
Don't miss out on this opportunity to enhance your learning journey and save on your certification cost. Get in touch with our sales experts today and set yourself up for PMP success!`,
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for  PMP Certified Professionals",
          demandHeading: "10M+ Job Openings in Project Management By 2030",
          demandDetail: `The profession of project management has recently become one of the hottest jobs, not only in the tech market, but across industries. Demand for project managers is growing faster than demand for workers in other occupations and by 2027, 90 million individuals will need to be skilled in project-oriented roles.

The PMP certification can help you land lucrative roles in IT, manufacturing, finance, healthcare, and other exciting industries. With more than 1.2 million PMP certification holders worldwide, the median salary for PMP holders across the world is 16% higher (as high as 32% in the US) than what their non-certified peers earn.

Build your Project Management skills, get PMI certified, and be sure to capitalize on the high demand across industries.`,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Project Lead",
              averageSalary: [15, 31, 46],
              hiringCompany: [],
              demand: {
                percant: "22M",
                description:
                  "new Project Management jobs will be created by 2027 globally",
              },
            },
            {
              type: "PMO Lead",
              averageSalary: [18, 38, 56],
              hiringCompany: [],
              demand: {
                percant: "88M",
                description:
                  "individuals needed for Project Management roles by 2027",
              },
            },
            {
              type: "Project Director",
              averageSalary: [22, 43, 63],
              hiringCompany: [],
              demand: {
                percant: "US$ 208 Billion",
                description:
                  "GDP risk due to potential PM talent shortages by 2027",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Latest Curriculum",
              value:
                "Fully updated curriculum aligned with the latest PMP exam content guideline and PMBOK 7 standards.",
            },
            {
              icon: "",
              topic: "Guaranteed-To-Pass",
              value:
                "PMP Exam Prep designed to ensure success in passing the PMP exam the very first time.",
            },
            {
              icon: "",
              topic: "Detailed Study Guide",
              value:
                "Get a step-by-step guide with clarity on daily study goals with expert help all along the way.",
            },
            {
              icon: "",
              topic: "Exclusive PMI-Licensed Learning",
              value:
                "Engaging audio-video content, eBooks, PDFs, assessments, and dynamic discussion forums.",
            },
            {
              icon: "",
              topic: "Mentorship",
              value:
                "Weekly mentor guidance to ensure continuously improvment in speed, accuracy, concepts.",
            },
            {
              icon: "",
              topic: "Exam Application Assistance",
              value:
                "Expert guidance on PMI registration, membership, review, and submission of your exam application.",
            },
            {
              icon: "",
              topic: "180-Day Grand Pass",
              value:
                "Free access to rejoin any of our live training sessions and get all your doubts clarified.",
            },
            {
              icon: "",
              topic: "Comprehensive Job Support",
              value:
                "LinkedIn profile review, AI-resume builder, access to 1,500+ job listings",
            },
            {
              icon: "",
              topic: "Flexible Learning Options",
              value:
                "Need more flexibility with your learning times? Get tried-and-tested training, live or on your schedule",
            },
          ],
        },
        courseAuthor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Maheshwar Nynaru-661980df7288463f842b2aae105322a0.svg",
            instructorName: "Maheshwar Nynarus",
            instructorProfession: "Trainer & Consultant",
            experience: "30",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/capgemini 60x26-45b78461bcc14011898baf17b9965ddb.svg",
            instructorDetail: `With 30+ years of experience in Banking and IT, Maheshwar Nynaru is a seasoned consultant specializing in Project Management and IT Service Management. A PMP Certified professional and PMI Authorized Training Partner Instructor, he holds the ITIL Expert Level Certification and has delivered over 500 ITIL and PMP training sessions, showcasing a commitment to excellence and knowledge dissemination in the field.`,
          },
        ],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Alpesh Vasant-9cfb4f70ff2444cf8e37e21aa85ec8e5.svg",
            instructorName: "Alpesh Vasant",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Santhosh Kannan-100a3c877b1544cc8a8dc0fe7a7a987b.svg",
            instructorName: "Santhosh Kannan",
            instructorProfession: "Trainer & Consultant",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail:
            "On clearing your PMP exam, you earn more than just project management skills: you receive the coveted PMP certificate from the esteemed Project Management Institute and join the elite club of 1.4 Million PMP certification holders worldwide.",
          certificateImage:
            "https://d2o2utebsixu4k.cloudfront.net/PMP-52632d2cc0024411a1b1fd83a30497b2.svg",
        },
        prerequisites: [
          "No prior experience or knowledge is required to attend our PMP Certification Training.",
          "To qualify for the PMP exam, you'll need to have a 4-year degree, high-school Diploma or associate degree.",
          "You'll also need 36-60 months of experience leading projects within the past 8 years, depending on your educational background.",
          "35 contact hours of project management education or training is mandatory to qualify for the exam.",
        ],
        courseCurriculm: [
          {
            title: " Agile Fundamentals and Traditional PM Foundations",
            isPreview: false,
            objective: `
            Gain a comprehensive understanding of the Agile/Scrum Framework, Project Management Framework, and Fundamentals through our course. Dive into the PMP Process Groups and explore the revised PMP Exam Content Outline.

This module in our PMP curriculum also includes a lesson on Business Environment, which covers the essential concepts and business areas that are crucial to grasp before embarking on a project. It aligns with the "Business Environment" domain in the Exam Content Outline and supports learning in the "Business Acumen" aspect of the PMI Talent Triangle.`,
            topics: [
              "Agile/Scrum Framework - From Agile Practice Guide",
              "Introduction to Project Management Fundamentals",
              "Project Management Framework",
              "Summary",
              "Assessment",
              "Aligning with Organizational Trends and Global Strategy",
              "Project benefits and business value",
              "Organizational Culture and Change Management",
              "Project Governance",
              "Project Compliance",
              "Assessment",
            ],
          },
          {
            title: "Start the Project",
            isPreview: false,
            objective:
              "In this module, you will learn to define and discuss stakeholders and the most effective ways to communicate with them, explain the best ways to form a team, describe how to build the most effective understanding of a project and how doing so relates to executing a project successfully and explain how predictive and adaptive project life cycles work; explain what a hybrid development approach is.",
            topics: [
              "Identify and Engage Stakeholders",
              "Form the Team",
              "Build a Shared Understanding of the Project",
              "Project Approach",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Team Building",
            description:
              "Define team ground rules, build a shared understanding, engage, and support virtual teams, and more.",
          },
          {
            title: "Negotiating Project",
            description:
              "Learn how to empower team members and stakeholders by negotiating project agreements",
          },
          {
            title: "Managing Conflict",
            description:
              "Learn how to manage compliances and achieve project benefits and value using PMP methodologies.",
          },
          {
            title: "Choosing the Right Project Methodology",
            description:
              "Learn the best approach for project completion, and plan and manage scope, budget and resources.",
          },
          {
            title: "Managing Risks",
            description:
              "Learn how to manage and plan scope, analyze and manage risk, and more.",
          },
          {
            title: "Project Governance",
            description:
              "Learn to handle project changes, choose the right methods, practices, project governance, and more.",
          },
          {
            title: "Delivering Business Value",
            description:
              "Learn to manage communications, risks and stakeholders while executing projects.",
          },
          {
            title: "Managing Compliances",
            description:
              "Learn to manage compliances and deliver project benefits and value using PMP methodologies.",
          },
          {
            title: "Continuous Process Improvement",
            description:
              "Assess and respond to changes in the internal and external business environment.",
          },
          {
            title: "Project Continuity",
            description:
              "Manage project challenges and adjustments, as well as knowledge transfer.",
          },

          {
            title: "Emotional Intelligence",
            description:
              "Learn about managing conflicts, stakeholder collaboration and prioritizing performance.",
          },

          {
            title: "Business Analysis",
            description:
              "Learn to assess changes in the company and environment to help organizations transform.",
          },
        ],
        whoCanAttendCourse: [
          "Mid-Level Project Managers",
          "Senior Project Managers",
          "Project Coordinators",
          "Project Analysts",
          "Project Leaders",
          "Product Managers",
          "Program Managers",
        ],
        aboutCourse: [
          {
            question: "How do I get the PMP certification?",
            answer: `The best way to achieve the PMP certification is by getting trained by an industry expert and following a meticulously structured approach to exam prep. With KnowledgeHut, you have a tried and tested learning path that's guaranteed for PMP Exam success. Follow the learning path and study plan and prepare to pass your exam on the first attempt with the utmost confidence.
            The entire content ranging from the on-demand PMP course by an industry expert, to the 5-week mentor-led study plan and the full-length simulator exams and PMP mock tests for practice have been developed thoroughly by KnowledgeHut experts in collaboration with industry veterans over the past decade factoring in feedback from the several thousands of workshops carried out to date.`,
          },
          {
            question:
              " What are the eligibility criteria for PMP certification?",
            answer: `Securing your PMP certification certainly involves a significant commitment—but that's precisely what makes it so valuable. If you've ventured into the realm of project management and garnered practical experience, you've overcome the toughest obstacle. Before you apply, make sure you meet one of the following sets of PMP Certification requirements:

You will need to have a 4-Year Degree, 36 months of experience leading projects within the past 8 years and 35 contact hours of project management education or training
OR

A Secondary Degree (high-school diploma or Associates Degree) with 60 months of experience leading projects within the past 8 years and 35 contact hours of project management education or training.
You can apply even if you did not officially have the title of Project Manager.

Need help assessing your eligibility? Get in touch with us at kh.reachus@upgrad.com and our Learning Advisor will help you out.`,
          },
        ],
        faqs: [
          {
            type: "Training",
            question:
              "What practical skills can I expect to have after completing the Agile and Scrum training course?",
            answer: `Our Agile and Scrum introductory course is designed to make you a skilled contributor to your Scrum team. You will develop the skills to:

Apply the Agile manifesto, the 4 Agile values, and the 12 Agile Principles to drive successful projects
Create User Stories using the User Story format to enhance collaboration and creativity
Apply User story prioritization techniques to a product backlog and use the mandatory 3 Cs
Distinguish High-level overview for Agile variants and run the Project lifecycle for Agile Product development
Understand the responsibilities for Scrum and Other roles in an Agile setup
Run Scrum ceremonies and apply techniques of Agile estimation
Apply Agile planning events and conduct Daily Scrum to reach goals
Scale Agile with SAFE®, DAD, and LeSS and lead enterprise-wide Agile transformation`,
          },
          {
            type: "Training",
            question:
              "How can KnowledgeHut help me pass my PMP exam in the first attempt?",
            answer: `There is no set of eligibility requirements to attend this Scrum Master Certification course and it can be taken by novices or professionals.
`,
          },

          {
            type: "Workshop",
            question:
              "What are the modes of training offered for the PMP course?",
            answer: `The PMP Training is offered as a blended training program which consists of both live instructor-led training and self-paced learning sessions.

KnowledgeHut delivers an immersive learning experience through PRISM, our Learning Experience Platform.`,
          },

          {
            type: "Workshop",
            question: "Who are the instructors?",
            answer: `
            Our PMP instructors are professionals who have extensive experience in training PMP programs as well as experience managing real projects.

Our trainers provide training that goes beyond just being compliant to PMI requirements by helping learners understand how to apply the learning and principles outlined in the PMP course in real-world environments.`,
          },

          {
            type: "Workshop",
            question: "What are the software and system requirements?",
            answer: `
           The Software Requirements for this course would include access to an internet browser and MS Word or similar application. Apart from this you will need a workstation or laptop with Windows or a comparable environment with high-speed Internet.`,
          },

          {
            type: "Finance",
            question: ". Can I cancel my enrolment? Do I get a refund?",
            answer: `At upGrad KnowledgeHut, we strive diligently to make sure that your learning experience with us is second to none and you are assured of the highest standards of quality. However, if for any reason your expectations are not met, we will process refunds in accordance with our Cancellation, Refund, and Deferment Policy.`,
          },

          {
            type: "Finance",
            question: "Can I switch my start date?",
            answer:
              "Yes, you may switch your start date in line with our Cancellation, Refund, and Deferment Policy.",
          },
          {
            type: "Finance",
            question: " Is there a money-back guarantee?",
            answer: `Yes, there is a 100% money-back guarantee for this course in line with our 100% Satisfaction Guarantee. At upGrad KnowledgeHut, we strive diligently to make sure that your learning experience with us is second to none and you are assured of the highest standards of quality. However, if for any reason your expectations are not met, we will process refunds in accordance with our Cancellation, Refund, and Deferment Policy.

(*Not applicable for Singapore region).`,
          },

          {
            type: "Career Benefits",
            question: "Who is a Project Management Professional (PMP)?",
            answer: `
            A Project Management Professional (PMP) is a certification and designation provided by the Project Management Institute (PMI). The PMP is one of the most widely recognized and respected credentials for project managers globally. It signifies a certain level of competence, knowledge, and experience in the field of project management.

Getting PMP® certified is advised as it aids project managers in advancing their careers by allowing them to apply for the best positions at the most prestigious corporations worldwide.
            `,
          },

          {
            type: "Career Benefits",
            question: "How to become a PMP-certified Professional?",
            answer:
              "To become a PMP certified Professional, your first step is to confirm your eligibility to take the PMP exam. You are required to complete 35 hours of training from an Authorized Training Partner of PMI. The PMP preparation time will depend on your background in project management. Once you are ready, you can take the exam, and clear it to get certified as a PMP Professional.",
          },

          {
            type: "Career Benefits",
            question:
              "What are the roles and responsibilities of a Project Management Professional?",
            answer:
              "Project managers take the lead in project planning, project execution, project monitoring, control, and closure. Project Manager responsibilities include the entire project scope including the project team, resources, budget, and the overall success of the project.",
          },

          {
            type: "Exam Preparation",
            question: "Which book is best for PMP Exam preparation?",
            answer:
              "A thorough understanding of the PMBOK Guide is necessary to prepare well for the PMP exam. Apart from this, you can refer to self-help books like the “PMP Exam Prep Book- Tenth Edition by Rita Mulcahy” to give you a wider perspective on project management. Additionally, considering a reputable PMP course can complement your study materials and provide valuable guidance in your exam preparation journey.",
          },

          {
            type: "Exam Preparation",
            question: "Which Mock Test is best for PMP exam preparation?",
            answer:
              "Practicing mock exams is essential for passing the PMP exam. Participating in as many mock exams as possible is the best way to prepare for the PMP exam. KnowledgeHut offers 5 mock tests and 2000+ practice questions, making it a top choice for comprehensive PMP training and exam preparation, ensuring you approach the PMP exam with confidence.",
          },
          {
            type: "Exam Preparation",
            question: "What has changed in the new PMP exam format?",
            answer: `The PMP exam in its new format contains 180 questions. The questions are based on the three domains of People, Process, and Business Environment. You will need to answer this in the allotted 230 minutes. If you are writing the exam online, you get to take one 10-minute break. There is no break if you attend the exam physically. The questions will be a combination of multiple choice, multiple responses, matching, hot area, and fill-in-the-blanks.

Apart from assessing a candidate's knowledge of project management principles, the PMP exam updates also evaluate their understanding of real-world implementation. For successful preparation and certification, keeping up with the latest PMP examination pattern, including the new question formats and domains, is essential. Enrolling in a reputable PMP training program can help you navigate these changes and be well-prepared for the updated exam format.`,
          },
        ],
      },
    },

    {
      id: 26,
      title: "Six Sigma Yellow Belt Certification",
      courseSubtitle: "Lean Six Sigma Yellow Belt Training",
      description:
        "Gain a strong foundation in Lean and Six Sigma with Six Sigma Yellow Belt Certification",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "carrer-related",
      courseDetail: {
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "40,335+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_04%20copy-19384d3ccbf24ef0b51b6eed763ee54d.webp&w=1920&q=75",
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
        secretSauce: [],
        highlights: [
          "Learn how to implement, perform, interpret and apply Lean Six Sigma",
          "Address problems, smoothen processes and deliver value to end-users",
          "Accelerate your career by earning a valuable Lean Six Sigma Yellow Belt Certification",
        ],
        careerDetail: [
          { carrer: "Professionals trained", value: "450,000" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "8-Hours Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "Earn 8 PDUs on Course Completion",
            },
            {
              icon: "",
              value: "Interactive Sessions with Activities",
            },
            {
              icon: "",
              value: "Real-World Simulations, Case Studies , and more",
            },
            {
              icon: "",
              value: "Lifetime Access to the Courseware",
            },
            {
              icon: "",
              value: "Expert trainers with quality management experience",
            },
          ],
          overviewDetail: `
          Learn the foundations of the Lean Six Sigma process improvement methodology that bridges the gap between Lean and Six Sigma principles and practices. Identify and remove the causes of error in business processes, and build your own quality toolkit. Reduce wastage, speed up time-to-market, and eliminate the use of marginal methods in traditional settings.

KnowledgeHut is an Accredited Training Organization of PeopleCert®. IASSC Lean Sigma Yellow Belt™ Certification Training is provided through PeopleCert®.

The Lean Six Sigma Yellow Belt will make you a valuable member of complex improvement projects teams. Our Six Sigma Yellow Belt Course will give you strong foundation of the Lean Six Sigma Method.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for Six Sigma Yellow Belt Professionals",
          demandHeading:
            "Why get the Lean Six Sigma Yellow Belt Certification?",
          demandDetail: `Lean Six Sigma works on the premise that perfection is a dynamic goal, and there is always scope for improvement in operational processes. As quality continues to drive the competitive advantage in the world of business, expertise in this popular and productive approach to process improvement is highly sought after. A Six Sigma Yellow Belt Certification will equip you with the quality and process improvement skills that all companies value.

As a Certified Lean Six Sigma Yellow Belt, you will work as a valued team member in a Six Sigma Project Team. This certification will validate your capability of streamlining processes and improving quality. You will be responsible for monitoring and evaluating work progress and process enhancements. By reducing waste and eliminating bottlenecks, costs can be optimized and efficiency enhanced.

Professionals with a Six Sigma Certification earn over $107,000 and are among the highest-paid professionals globally. The average annual salary of a Management Analyst is $87,660 according to the US Bureau of Labor Statistics with a 14% annual job growth.`,
          demandData: [
            {
              type: "Quality Engineer",
              averageSalary: [8, 15, 24],
              hiringCompany: [],
              demand: {
                percant: "13% Increase",
                description: "Annual Growth (CAGR) in Six Sigma Job Market",
              },
            },
            {
              type: "Process Analyst",
              averageSalary: [6, 12, 23],
              hiringCompany: [],
              demand: {
                percant: "7000+",
                description: "Professionals hold an IASSC Certification",
              },
            },
            {
              type: "Operations Manager",
              averageSalary: [9, 16, 27],
              hiringCompany: [],
              demand: {
                percant: "1.5M",
                description: "Six Sigma Practitioners Around the World",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record",
              value:
                "KnowledgeHut has empowered over 250,000 professionals with certifications in various domains. ",
            },
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Make the best of engaging activities, team-based exercises and practical case studies.",
            },
            {
              icon: "",
              topic: "Elite Panel of Experienced Trainers",
              value:
                "Get trained by accredited trainers with over a decade of experience across industries.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Get real-world tips and time-tested techniques from highly qualified mentors.",
            },
            {
              icon: "",
              topic: "Continual Learning Support ",
              value:
                "Webinars, e-books, tutorials, articles, and interview questions - supporting your learning journey.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your professional career.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites for attending the course or to sit for the IASSC Certified Yellow Belt™ (ICYB™) exam.",
        ],
        courseCurriculm: [
          {
            title: " Define Phase: The Basics of Six Sigma",
            isPreview: false,
            objective:
              "In the define phase of the Six Sigma Yellow Belt syllabus, explore the basics of Six Sigma and its meaning. Delve into the general history of Six Sigma and its roles & responsibilities.",
            topics: [
              "Meanings of Six Sigma",
              "General History of Six Sigma & Continuous Improvement",
              "Deliverables of a Lean Six Sigma Project",
              "The Problem-Solving Strategy Y = f(x)",
              "Voice of the Customer, Business and Employee",
              "Six Sigma Roles & Responsibilities",
            ],
          },
          {
            title: "Start the Project",
            isPreview: false,
            objective:
              "In this module, you will learn to define and discuss stakeholders and the most effective ways to communicate with them, explain the best ways to form a team, describe how to build the most effective understanding of a project and how doing so relates to executing a project successfully and explain how predictive and adaptive project life cycles work; explain what a hybrid development approach is.",
            topics: [
              "Identify and Engage Stakeholders",
              "Form the Team",
              "Build a Shared Understanding of the Project",
              "Project Approach",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Error Detection and Prevention",
            description:
              "Learn to detect and prevent errors, and achieve process improvement to maintain productivity.",
          },
          {
            title: "Customer Satisfaction",
            description:
              "Learn how to maintain and provide customer satisfaction by improving the quality of the end product.",
          },
          {
            title: "Efficient Production",
            description:
              "Explore how to speed up the production process that helps businesses to stay competitive and meet customer demands.",
          },
          {
            title: "Lower Costs",
            description:
              "Reduce the costs of production drastically by minimizing variability and eliminating various kinds of waste.",
          },
          {
            title: "Problem Evaluation",
            description:
              "Evaluate problems, statistically and quantitatively in your team or organization for smooth workflow.",
          },
          {
            title: "Process Understanding",
            description:
              "Grasp an understanding of processes, to provide assistance to achieve organizational objectives.",
          },
        ],
        whoCanAttendCourse: [
          "IT Managers",
          "HR Managers",
          "Change Managers",
          "Project Managers",
          "Improvement Managers",
          "Operational Line Managers",
          "IT Analysts",
          "Team Managers",
          "Finance Managers",
          "Program Managers",
          "Quality System Managers",
        ],
        aboutCourse: [],
        faqs: [
          {
            type: "Training",
            question: "What is Six Sigma Yellow Belt certification?",
            answer:
              "Six Sigma Yellow Belt is the entry level certification in the Lean Six Sigma certifications offered by IASSC and PeopleCert. This certification is provided to professionals who can pass the IASSC Lean Six Sigma Yellow Belt exam. This is the entry level certification for Six Sigma. This can be a steppingstone towards higher certifications like the Green Belt and Black Belt.",
          },
          {
            type: "Training",
            question: "What is the process to get Yellow Belt certified?",
            answer: `
            The steps to get the Six Sigma Yellow belt certification can be summarized as below: 

          Step 1: Enroll for the Lean Six Sigma Yellow Belt Training 

          Step 2: Attend the 8-hour training from an authorized institution 

          Step 3: Prepare for the Lean Six Sigma Yellow Belt Exam 

          Step 4: Schedule the exam once you are satisfied with your preparation 

          Step 5: Clear the exam and get certified
            `,
          },
        ],
      },
    },

    {
      id: 27,
      title: "Six Sigma Green Belt Certification ",
      courseSubtitle: "Lean Six Sigma Green Belt Training",
      description:
        "Harness proven strategies to enhance quality standards with Six Sigma Green Belt Certification",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "carrer-related",
      courseDetail: {
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "36,700+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-16-10b16af90826486fa4227ad16e5e52ef.webp&w=1920&q=75",
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
        secretSauce: [],
        highlights: [
          "Learn how toDrive a Lean mindset, cut waste, and slash defects",
          "Drive career growth with an in-demand IASSC certification",
          "Ace your Six Sigma Green Belt Certification exam in the first go",
        ],
        careerDetail: [
          { carrer: "Professionals trained", value: "450,000" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "24 Hours of Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "Complete the Training Session and Earn 24 PDUs",
            },
            {
              icon: "",
              value:
                "Learn from Certified Experts with Quality Management Experience",
            },
            {
              icon: "",
              value: "Prepare to Ace Your Exam with 5 Simulation Exams",
            },
            {
              icon: "",
              value: "End-To-End Exam Prep Support and Assistance",
            },
            {
              icon: "",
              value:
                "Explore Practical Applications with Industry Case Studies",
            },
            {
              icon: "",
              value: "Access Unlimited Classes with 180-Day Grand Pass",
            },
            {
              icon: "",
              value: "Enhance Learning with 200+ Recall Quizzes",
            },
            {
              icon: "",
              value: "Hands-On Learning with Real-World Projects",
            },
          ],
          overviewDetail: `
         As a Lean Six Sigma Green Belt™ certified professional, you’ll be able to lead improvement projects or serve as a valuable team member of a process improvement team. Validate your expertise in bringing about organizational transformation as a dynamic change leader, analyze and address quality problems and create a high-performance organization.

KnowledgeHut’s comprehensive course covers in-depth all the objectives covered in the Lean Six Sigma Green Belt certification exam. The course and subsequent certification will give you expertise in the DMAIC processes and their implementation. This course builds upon and adds to the topics covered in this course. The Lean Six Sigma Green Belt certification will equip you to lead complex improvement projects to success.

KnowledgeHut is an Accredited Training Organization of PeopleCert®. The IASSC Lean Sigma Green Belt™ Certification Training is provided through PeopleCert®. This Six Sigma green belt course is curated by top experts to ensure that you’re proficient in the foundation principles of Lean and Six Sigma.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for Six Sigma-Certified Professionals",
          demandHeading:
            "Ride the Wave of Demand for Certified Six Sigma Professionals",
          demandDetail: `
          As businesses aim for continuous improvement, they look for experts who can use problem-solving skills and business knowledge to improve internal processes. Lean Six Sigma prepares you to lead quality management initiatives and analyze data strategically and scientifically by utilizing process planning, risk management, and benchmarking abilities. A Six Sigma Green Belt Certification will give you the requisite skills to accelerate quality improvement projects in your organization.

Lean Six Sigma Green belts can occupy positions such as Lean Six Sigma Consultant, Lead Manufacturing Engineer, Process Development Engineer, Data Scientist, Director, Performance Excellence and more. The average salary for Lean Six Sigma Green Belt certified professionals ranges from approximately $42,372 per year for Process Technician to $81,222 per year for Business Consultant.
          `,
          demandData: [
            {
              type: "Quality Engineer",
              averageSalary: [8, 15, 24],
              hiringCompany: [],
              demand: {
                percant: "13% Increase",
                description: "Annual Growth (CAGR) in Six Sigma Job Market",
              },
            },
            {
              type: "Process Analyst",
              averageSalary: [6, 12, 23],
              hiringCompany: [],
              demand: {
                percant: "7000+",
                description: "Professionals hold an IASSC Certification",
              },
            },
            {
              type: "Operations Manager",
              averageSalary: [9, 16, 27],
              hiringCompany: [],
              demand: {
                percant: "1.5M",
                description: "Six Sigma Practitioners Around the World",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record",
              value:
                "KnowledgeHut has empowered over 250,000 professionals with certifications in various domains. ",
            },
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Make the best of engaging activities, team-based exercises and practical case studies.",
            },
            {
              icon: "",
              topic: "Elite Panel of Experienced Trainers",
              value:
                "Get trained by accredited trainers with over a decade of experience across industries.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Get real-world tips and time-tested techniques from highly qualified mentors.",
            },
            {
              icon: "",
              topic: "Exclusive GRAND PASS ",
              value:
                "Avail KnowledgeHut's Exclusive GRAND PASS for 180 days and take advantage of the Free Refresher Course.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your professional career.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites for attending this Six Sigma Green Belt Certification course.",
          "Some degree of real-world Lean Six Sigma work experience is recommended.",
        ],
        courseCurriculm: [
          {
            title: " Define Phase: The Basics of Six Sigma",
            isPreview: false,
            objective:
              "In the define phase of the Six Sigma Yellow Belt syllabus, explore the basics of Six Sigma and its meaning. Delve into the general history of Six Sigma and its roles & responsibilities.",
            topics: [
              "Meanings of Six Sigma",
              "General History of Six Sigma & Continuous Improvement",
              "Deliverables of a Lean Six Sigma Project",
              "The Problem-Solving Strategy Y = f(x)",
              "Voice of the Customer, Business and Employee",
              "Six Sigma Roles & Responsibilities",
            ],
          },
          {
            title: "Define Phase: The Fundamentals of Six Sigma",
            isPreview: false,
            objective:
              "Explore the fundamentals of Six Sigma in the next define phase of this Six Sigma Green Belt Certification. Learn how to define a process and the Pareto Analysis.",
            topics: [
              "Defining a Process",
              "Critical to Quality Characteristics (CTQ’s)",
              "Cost of Poor Quality (COPQ)",
              "Pareto Analysis (80:20 rule)",
              "Basic Six Sigma Metrics",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Error Detection and Prevention",
            description:
              "Learn to detect and prevent errors, and achieve process improvement to maintain productivity.",
          },
          {
            title: "Customer Satisfaction",
            description:
              "Learn how to maintain and provide customer satisfaction by improving the quality of the end product.",
          },
          {
            title: "Efficient Production",
            description:
              "Explore how to speed up the production process that helps businesses to stay competitive and meet customer demands.",
          },
          {
            title: "Lower Costs",
            description:
              "Reduce the costs of production drastically by minimizing variability and eliminating various kinds of waste.",
          },
          {
            title: "Problem Evaluation",
            description:
              "Evaluate problems, statistically and quantitatively in your team or organization for smooth workflow.",
          },
          {
            title: "Process Understanding",
            description:
              "Grasp an understanding of processes, to provide assistance to achieve organizational objectives.",
          },
        ],
        whoCanAttendCourse: [
          "IT Analysts",
          "HR Managers",
          "CEO, CFO, CTO",
          "Team Managers",
          "Change Managers",
          "Finance Managers",
        ],
        aboutCourse: [
          {
            question: "What is the Six Sigma Green Belt certification?",
            answer: `The Lean Six Sigma Green Belt Certification is a professional credential that validates your skills and knowledge in applying Lean Six Sigma methodologies to improve business processes.  

After successfully passing the Six Sigma Green Belt examination, you will be provided with a certificate which proves that you possess in-depth knowledge of Lean Six Sigma principles, tools and techniques. `,
          },

          {
            question: "What is the process to get Green Belt certified?",
            answer: `TAfter successful completion of our Lean Six Sigma Green Belt online course, you will need to register for an exam through the IASSC website. After cracking the exam and scoring more than 70%, you will be awarded the designation of Certified Lean Six Sigma Green Belt™ (ICGB™). `,
          },

          {
            question:
              "What are the prerequisites for the Lean Six Sigma Green Belt course?",
            answer: `There are no prerequisites for attending this Lean Six Sigma Green Belt Certification.`,
          },

          {
            question: "Who provides the Green Belt certification?",
            answer: `Lean Six Sigma certifications are offered by the IASSC in partnership with PEOPLECERT.

This is the first level of the Lean Six Sigma Certification scheme, and more advanced levels include the Lean Six Sigma Black Belt Certification.`,
          },
        ],
        faqs: [
          {
            type: "Course",
            question: "Who is the Lean Six Sigma Green Belt  course for? ",
            answer: `KnowledgeHut’s Six Sigma Green Belt training course is for anyone who wants to gain a deep understanding of Lean Six Sigma principles and drive process changes in their organization.

Six Sigma is a data-driven philosophy that focuses on process improvements and increasing business capabilities. If you possess a data driven mindset and want to use it to better the processes of your business our online Six Sigma Green Belt training is the perfect choice for you.
              `,
          },
          {
            type: "Course",
            question:
              "How long will it take for me to complete the LSSGB Curriculum? ",
            answer: `
        The LSSGB curriculum is extensive, including all the subjects necessary to enable you to comprehend and apply advanced analysis. Additionally, you will discover ways to stop quality flaws. Therefore, it can take you many months to fully comprehend the course material. 
            `,
          },

          {
            type: "Carrer Benfefits",
            question:
              "What are the career opportunities after Six Sigma Green Belt certification?  ",
            answer: `
       After successfully completing our Lean Six Sigma Green Belt Certification course and acing the exam with the help of our exam prep and simulations, various career opportunities will be open to you, some of them are: 

Quality Analyst 
Process Improvement Specialist 
Project Manager 
Business Analyst 
            `,
          },

          {
            type: "Carrer Benfefits",
            question:
              "How can organizations benefit from having Six Sigma Green Belt certified professionals?  ",
            answer: `
       Professionals who have successfully completed a Six Sigma Certification course can be invaluable for an organization. They possess in-depth knowledge about how to improve processes and business operations, resulting in a drastic increase in revenue and customer satisfaction. 

Our online Six Sigma Green Belt Certification can help you align skill development with business objectives and drive increased employee productivity. 
            `,
          },
        ],
      },
    },

    {
      id: 28,
      title: "Six Sigma Black Belt Certification",
      courseSubtitle: "Lean Six Sigma Black Belt Training",
      description:
        "Master Lean Six Sigma principles and ace the LSSBB exam on the first go",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "recent-addition",
      courseDetail: {
        courseCategory: "Quality Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "16,850+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-37-eaeb2531d73f4c9aafb36823cadd3391.webp&w=1920&q=75",
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
        secretSauce: [],
        highlights: [
          "Lead Lean Six Sigma implementation across your organization",
          "Comprehensive exam prep to ace the Lean Six Sigma Black Belt exam",
          "Gear up for a high-growth career with the sought-after Lean Six Sigma certification",
        ],
        careerDetail: [
          { carrer: "Professionals trained", value: "450,000" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "Earn 36 PDUs with Live, Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "5 Simulation Exams, Projects, 200+ Quizzes",
            },
            {
              icon: "",
              value: "Interactive Sessions with Activities",
            },
            {
              icon: "",
              value: "Real-World Simulations, Case Studies , and more",
            },
            {
              icon: "",
              value: "Expert trainers with quality management experience",
            },
            {
              icon: "",
              value:
                "Explore Practical Applications with Industry Case StudiesAccess Unlimited Classes with 180-Day Grand Pass",
            },
          ],
          overviewDetail: `
        Learn to implement Lean Six Sigma methodology to drive process improvements, optimize costs, and improve quality across the organization. Identify and remove the causes of error in business processes and build your own quality toolkit. Reduce wastage, speed up time-to-market, and eliminate the use of marginal methods in traditional settings.

The lean six sigma Black belt certification training is scheduled for five days. In the hands-on six sigma black belt course, you will cover advanced concepts and practices that constitute the knowledge and skills that a six sigma black belt practitioner should have.

KnowledgeHut is an Accredited Training Organization of PeopleCert®. IASSC Lean Six Sigma Black Belt™ Certification Training is provided through PeopleCert®. This certification is an advanced-level qualification.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for Six Sigma Black Belt Professionals",
          demandHeading: "Rising Demand for Six Sigma-Certified Professionals",
          demandDetail: `
          Lean Six Sigma works on the premise that perfection is a dynamic goal, and there is always scope for improvement in operational processes. As quality continues to drive the competitive advantage in the world of business, expertise in this popular and productive approach to process improvement is highly sought after.

As a Certified Lean Six Sigma Black Belt, you will lead project teams by identifying issues and areas of improvement. This certification will validate your capability of streamlining processes and improving quality. By reducing waste and eliminating bottlenecks you will learn to reduce costs and enhance efficiency.

Professionals with a Six Sigma Certification earn over $107,000 and are among the highest-paid professionals globally. The average annual salary of a Management Analyst is $87,660 according to the US Bureau of Labor Statistics with a 14% annual job growth.
          `,
          demandData: [
            {
              type: "Quality Engineer",
              averageSalary: [8, 15, 24],
              hiringCompany: [],
              demand: {
                percant: "13% Increase",
                description: "Annual Growth (CAGR) in Six Sigma Job Market",
              },
            },
            {
              type: "Process Analyst",
              averageSalary: [6, 12, 23],
              hiringCompany: [],
              demand: {
                percant: "7000+",
                description: "Professionals hold an IASSC Certification",
              },
            },
            {
              type: "Operations Manager",
              averageSalary: [9, 16, 27],
              hiringCompany: [],
              demand: {
                percant: "1.5M",
                description: "Six Sigma Practitioners Around the World",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record",
              value:
                "KnowledgeHut has empowered over 250,000 professionals with certifications in various domains. ",
            },
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Make the best of engaging activities, team-based exercises and practical case studies.",
            },
            {
              icon: "",
              topic: "Elite Panel of Experienced Trainers",
              value:
                "Get trained by accredited trainers with over a decade of experience across industries.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Get real-world tips and time-tested techniques from highly qualified mentors.",
            },
            {
              icon: "",
              topic: "Exclusive GRAND PASS ",
              value:
                "Avail KnowledgeHut's Exclusive GRAND PASS for 180 days and take advantage of the Free Refresher Course.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your professional career.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites for attending the course or to sit for the IASSC Certified Black Belt™ (ICBB™) exam.",
        ],
        courseCurriculm: [
          {
            title: " Define Phase: The Basics of Six Sigma",
            isPreview: false,
            objective:
              "In the define phase of the Six Sigma Yellow Belt syllabus, explore the basics of Six Sigma and its meaning. Delve into the general history of Six Sigma and its roles & responsibilities.",
            topics: [
              "Meanings of Six Sigma",
              "General History of Six Sigma & Continuous Improvement",
              "Deliverables of a Lean Six Sigma Project",
              "The Problem-Solving Strategy Y = f(x)",
              "Voice of the Customer, Business and Employee",
              "Six Sigma Roles & Responsibilities",
            ],
          },
          {
            title: "Define Phase: The Fundamentals of Six Sigma",
            isPreview: false,
            objective:
              "Explore the fundamentals of Six Sigma in the next define phase of this Six Sigma Green Belt Certification. Learn how to define a process and the Pareto Analysis.",
            topics: [
              "Defining a Process",
              "Critical to Quality Characteristics (CTQ’s)",
              "Cost of Poor Quality (COPQ)",
              "Pareto Analysis (80:20 rule)",
              "Basic Six Sigma Metrics",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Error Detection and Prevention",
            description:
              "Learn to detect and prevent errors, and achieve process improvement to maintain productivity.",
          },
          {
            title: "Customer Satisfaction",
            description:
              "Learn how to maintain and provide customer satisfaction by improving the quality of the end product.",
          },
          {
            title: "Efficient Production",
            description:
              "Explore how to speed up the production process that helps businesses to stay competitive and meet customer demands.",
          },
          {
            title: "Lower Costs",
            description:
              "Reduce the costs of production drastically by minimizing variability and eliminating various kinds of waste.",
          },
          {
            title: "Problem Evaluation",
            description:
              "Evaluate problems, statistically and quantitatively in your team or organization for smooth workflow.",
          },
          {
            title: "Process Understanding",
            description:
              "Grasp an understanding of processes, to provide assistance to achieve organizational objectives.",
          },
        ],
        whoCanAttendCourse: [
          "IT Managers",
          "IT Analysts",
          "HR Managers",
          "Team Managers",
          "Change Managers",
          "Finance Managers",
          "Project Managers",
          "Change Managers",
          "Program Managers",
          "Improvement Managers",
          "Quality System Managers",
          "Operational Line Managers",
        ],
        aboutCourse: [
          {
            question: "What is Six Sigma Black Belt certification?",
            answer: `The Six Sigma Black Belt certification is the highest level of six sigma certifications. This denotes that the certification holder has a great level of understanding of six sigma concepts and can apply them in process improvements, quality control and other areas. `,
          },

          {
            question: " Is Six Sigma Black Belt certification worth it?",
            answer: `Yes, the Lean Six Sigma Black Belt is a credential that will bring you recognition and competence as a six sigma practitioner capable of using six sigma to encourage continuous improvement and improve quality. This will open the door to better roles along with attractive compensation. `,
          },

          {
            question:
              "What are the prerequisites for the Lean Six Sigma Green Belt course?",
            answer: `There are no prerequisites for attending this Lean Six Sigma Green Belt Certification.`,
          },

          {
            question:
              "Is Six Sigma Black Belt certification globally recognized?",
            answer: `Yes, Six Sigma Black Belt is a designation that is globally recognized. There are multiple certification bodies that offer six sigma certifications. Six sigma is a proven method that has been in use in various industries for decades. The success has encouraged more organizations to adopt six sigma practices. `,
          },
        ],
        faqs: [
          {
            type: "Course",
            question: "Who is the Lean Six Sigma Black Belt course for?",
            answer: `The Lean Six Sigma Black Belt course is for professionals who hold the Lean Six Sigma Green Belt certificate or for professionals who have extensive training and experience in Six Sigma. There is no restriction on who can get training or certification except that they must pass the Lean Six Sigma Black Belt exam.
              `,
          },
          {
            type: "Course",
            question: "What is Lean Six Sigma Black Belt training? ",
            answer: `
       Lean Six Sigma Black Belt training online is a program that prepares candidates to understand all the aspects of the lean six sigma method as prescribed by IASSC Lean Six Sigma Black Belt Body of Knowledge™.
            `,
          },
          {
            type: "Course",
            question:
              "Who is eligible to enroll in a Six Sigma Black Belt course? ",
            answer: `
     There is no eligibility requirement for the Six Sigma Black Belt course. If you are new to Six Sigma, it is not advisable to attempt the Six Sigma Black Belt course before attempting the yellow belt and green belt certifications. The Lean Six Sigma Black Belt is one of the most advanced certifications in six sigma and it is not beginner friendly. 
            `,
          },

          {
            type: "Course",
            question:
              "How long will it take for me to complete the LSSBB Curriculum? ",
            answer: `
    36 hours is the time it takes for the live training lead by a qualified trainer. The Lean Six Sigma Black Belt classes may be over four days or spread over a longer timeframe depending on the length of each session. The time it takes to prepare for the exam will take up to three months. A serious amount of preparation is needed to successfully clear the Lean Six Sigma Black Belt exam. 
            `,
          },

          {
            type: "Carrer Benfefits",
            question:
              "What are the career opportunities after Six Sigma Black Belt certification? ",
            answer: `
       Professionals with a Lean Six Sigma Black Belt certification online can get hired in various jobs. They are in demand in a lot of leadership and management roles due to their problem solving and analytic skills. They are also in demand in roles that demand analytic skills, quality control skills and project management skills. Six Sigma skills are useful for contractors, and consultants as well.
            `,
          },

          {
            type: "Carrer Benfefits",
            question: "Does Six Sigma Black Belt help you get a job? ",
            answer: `
     Six Sigma Black Belt is an advanced certification with a comprehensive training in a range of tools and techniques that help you address various business needs. The Lean Six Sigma Black Belt credential will make you an attractive candidate in the eyes of a recruiter. The certification is proof of your advanced skill and competence. It is also a credential that is recognized across the world.   
            `,
          },
        ],
      },
    },

    {
      id: 29,
      title: "PRINCE2 Practitioner Certification Training",
      courseSubtitle: "PRINCE2 Practitioner Training",
      description:
        "Master your project management skills and start leading projects to success",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "",
      courseDetail: {
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "36,057+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
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
        secretSauce: [],
        highlights: [
          "Equip yourself with the tools and strategies to drive project success",
          "Learn to successfully juggle and deliver multiple projects at the same time",
          "This course prepares you for the PRINCE2 Practitioner, 7th Edition exam",
        ],
        careerDetail: [
          { carrer: "Career transformations", value: "450K" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "16 Hours of Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "75+ Hours of On-Demand Self-Paced Learning",
            },
            {
              icon: "",
              value: "Earn 16 PDUs on Completion of the Course",
            },
            {
              icon: "",
              value: "20 Assessments, 14 Case Studies, 3 Mock Tests, More",
            },
            {
              icon: "",
              value: "Exam Fee Included in the Course Fee",
            },
            {
              icon: "",
              value: "Lifetime Access to Prince2 Practitioner Courseware",
            },
          ],
          overviewDetail: `
     Master the PRINCE2 methodology, take your project management role to the next level, and widen your career opportunities in this two-day AXELOS certified PRINCE2 Practitioner certification training. The course is designed to help you understand all the theoretical and practical aspects of PRINCE2 and the best practices for managing successful projects, irrespective of their type or scale, and is aligned to PRINCE2, 7th Edition updates.

You'll understand how the PRINCE2 methodology can be tailored and applied on a real-world project and dive deep into the four integrated components of PRINCE2 - the principles, themes, processes, and project environment. This PRINCE2 Practitioner course will then explore how each of the components impacts each other and learn how to deliver projects in a coordinated, consistent, and transparent manner. In the final module, you'll focus on exam preparation with sample papers and pointers so you can aim for a first-time pass of the exam and gain the PRINCE2 Practitioner credential.

PRINCE2 Practitioner, a designation offered by AXELOS to practitioners who demonstrate their understanding by passing the exam, validates your expertise as a project management professional.

PRINCE2, PRINCE2 Foundation, PRINCE2 Practitioner, and AXELOS are registered trademarks of AXELOS Limited, used under the permission of AXELOS Limited. The Swirl logo™ is a trademark of AXELOS Limited, used under the permission of AXELOS Limited. PeopleCert is the registered trademark of PeopleCert International Ltd., the sole Examination Institute (EI) for the delivery of AXELOS Accreditation and Examination services worldwide. KnowledgeHut is a Certified Partner of AXELOS and an Accredited Training Organization (ATO) with PeopleCert.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why Get PRINCE2 Practitioner Certification",
          demandHeading: "Growing Demand for Prince2 Practitioners",
          demandDetail: `
         The profession of project management has recently become one of the hottest jobs, not only in the tech market, but across industries. Demand for project managers is growing faster than demand for workers in other occupations and by 2027, 88 million individuals will need to be skilled into project management-oriented roles.

The PRINCE2 certification can help you land lucrative roles in IT, manufacturing, finance, healthcare, and other exciting industries. Companies like Shell, BP, Transpower New Zealand, IBM, HP, Aquasoft, Getronics, Siemens, and many more have adopted PRINCE2 and PRINCE2 certified professionals can earn an average salary of $97,915 per annum.

Build your Project Management skills, get PRINCE2 Practitioner certified and be sure to capitalize on the high demand across industries.
          `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Process Lead",
              averageSalary: [15, 31, 46],
              hiringCompany: [],
              demand: {
                percant: "22M",
                description:
                  "new Project Management jobs will be created by 2027 globally",
              },
            },
            {
              type: "PMO Lead",
              averageSalary: [18, 38, 56],
              hiringCompany: [],
              demand: {
                percant: "88M",
                description:
                  "individuals needed for Project Management roles by 2027",
              },
            },

            {
              type: "Project Director",
              averageSalary: [22, 43, 63],
              hiringCompany: [],
              demand: {
                percant: "$208 Billon",
                description:
                  "GDP risk due to potential PM talent shortages by 2027",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Live, Fun and Interactive sessions",
              value:
                "Experiential learning with real-world simulations, role-plays, and case studies.",
            },
            {
              icon: "",
              topic: "Experiential Workshops",
              value: "Elite Panel of Expert Trainers",
            },
            {
              icon: "",
              topic:
                "PRINCE2-certified expert trainers with experience across industries.",
              value:
                "Get trained by accredited trainers with over a decade of experience across industries.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "One-to-one mentorship, real-world tips and time-tested techniques for your PRINCE2 toolbox.",
            },
            {
              icon: "",
              topic: "Exclusive GRAND PASS ",
              value:
                "Avail KnowledgeHut's Exclusive GRAND PASS for 180 days and take advantage of the Free Refresher Course.",
            },
            {
              icon: "",
              topic: "Certification Journey Support",
              value:
                "Need help at any step of PRINCE2 certification? From enrolling to certification, we've got your back.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                "Webinars, e-books, tutorials, articles, and more - we're right by you in your learning journey.",
            },
            {
              icon: "",
              topic: "PeopleCert Accredited Training Organisation",
              value:
                "As a PeopleCert ATO, we've transformed thousands of careers and lives to date.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to elevate your project management expertise?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "To benefit from the PRINCE2® Practitioner certification training, learners must have a firm grasp of the foundations of PRINCE2®.",
          "There are very specific eligibility requirements to qualify for the PRINCE2 Practitioner exam. For more information, see FAQs.",
        ],
        courseCurriculm: [
          {
            title: "Course Overview and Exam Techniques",
            isPreview: false,
            objective:
              "Get an introduction to PRINCE2 Practitioner, with an outline of the structure of PRINCE2 Practitioner. Recognize the exam style and techniques.",
            topics: [
              "Introduction and Exam technique",
              "Overview of PRINCE2 Practitioner",
              "Course structure",
              "Exam style and technique",
            ],
          },
          {
            title: "PRINCE2 Principles",
            isPreview: true,
            objective:
              "Refresh your memory on the PRINCE2 principles. Explain the roles responsible for a specific activity, and how we handle the documentation relating to decisions on tailoring the project.",
            topics: [
              "Review of PRINCE2 principles",
              "PRINCE2 principles – a quick recap",
              "Deeper dive into PRINCE2 Principles - Part 1",
              "Deeper dive into PRINCE2 Principles - Part 2",
              "Tailor to suit the Project environment",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Tailoring PRINCE2",
            description:
              "Learn the concepts of tailoring PRINCE2 and adopting it in an organization.",
          },
          {
            title: "PRINCE2 Principles",
            description:
              "Understand the 7 PRINCE2 Principles, apply and tailor it to different organizational contexts.",
          },
          {
            title: "PRINCE2 Themes",
            description:
              "Understand the 7 PRINCE2 themes and apply them to provide a good framework for the organization.",
          },
          {
            title: "PRINCE2 Processes",
            description:
              "Understand the 7 PRINCE2 Processes, and apply it in the context of a project and organization.",
          },
          {
            title: "Project Risks",
            description:
              "Learn how to apply PRINCE2 fundamentals to control and mitigate risks.",
          },
          {
            title: "PRINCE2 Best Practices",
            description:
              "Learn the latest PRINCE2 best practices and apply them across diverse projects and portfolios.",
          },
        ],
        whoCanAttendCourse: [
          "Product Owners",
          "Scrum Masters",
          "Scrum Developers",
          "Project Managers",
          "Change Managers",
          "Finance Managers",
          "Project Managers",
          "Project Sponsors",
          "PMO",
        ],
        aboutCourse: [
          {
            question: "What is PRINCE2 Practitioner certification?",
            answer: `PRINCE2 Practitioner is the advanced level certification for PRINCE2. This certification is awarded to professionals passing the PRINCE2 Practitioner exam. It is a credential recognized worldwide and in high demand. There are over a million professionals worldwide with PRINCE2 certifications making it one of the most popular certifications.`,
          },

          {
            question: " How does a PRINCE2 Practitioner certification help me?",
            answer: `A PRINCE2 Practitioner certification is proof of a professional’s expertise in project management and in using the PRINCE2 framework. The learners also learn to tailor PRINCE2 for specific project requirements. There is a great demand for certified project management professionals across industries and geographies.`,
          },

          {
            question:
              "Is PRINCE2 Practitioner certification globally recognized?",
            answer: `Yes, PRINCE2 Practitioner is one of the most popular certifications in project management. It is recognized all over the world and PRINCE2 is the most used framework for project management. Getting a PRINCE2 certification will include learning how to manage large and complex projects with the help of the PRINCE2 framework.`,
          },
        ],
        faqs: [
          {
            type: "Course",
            question: "What is the PRINCE2 Practitioner course about?",
            answer: `The PRINCE2 Practitioner course online will help the learner understand how to work with the PRINCE2 framework and how to tailor it to meet your project requirements. The PRINCE2 Practitioner curriculum can be divided into,

PRINCE2 principles

PRINCE2 themes

PRINCE2 processes

There will also be a module on exam preparation
              `,
          },
          {
            type: "Course",
            question: "What level is PRINCE2 Practitioner equivalent to? ",
            answer: `
     PRINCE2 Practitioner certification is an intermediate to advanced level certification. It is comparable to a PMP certification. It trains learners how to manage large and complex projects using the PRINCE2 framework and empowers them with work ready skills.
            `,
          },
          {
            type: "Course",
            question:
              "Why should I consider taking a PRINCE2 Practitioner course? ",
            answer: `
    A PRINCE2 Practitioner course will upgrade your project management skills significantly while familiarizing you with the PRINCE2 framework and helping you understand how to get the best out of it. It is also a widely recognized credential that is in demand across the world. The practical aspect of building project management skills that are readily applicable to the job makes the certification even more appealing.
            `,
          },

          {
            type: "Training",
            question: "Who should attend PRINCE2 Practitioner training? ",
            answer: `
   Anyone interested in learning about project management or about the PRINCE2 framework can benefit from the PRINCE2 Practitioner training. To take the PRINCE2 Practitioner exam, you must hold either a PRINCE2 Foundation certificate or some other project management certification equivalent to it. The type of candidates that benefit the most from this training are: 

Project Managers 
Project Coordinators 
Project Analysts 
Project Leaders 
Product Managers 
Program Managers 
Project Sponsors 
Team Leaders
            `,
          },

          {
            type: "Training",
            question: "What will I learn in PRINCE2 Practitioner training? ",
            answer: `
     The PRINCE2 Practitioner training covers a wide range of topics. This can be classified under a few heads.  

Overview 
PRINCE2 principles 
PRINCE2 themes 
PRINCE2 processes 
Exam preparation
            `,
          },

          {
            type: "Exam",
            question: " Who conducts the PRINCE2 Practitioner exam? ",
            answer: `
   PRINCE2 Practitioner exams are conducted by PeopleCert. PeopleCert has a network of over 8000 testing centers in 165 countries. You can also opt to take the exam online through PeopleCert’s online exam environment.
            `,
          },

          {
            type: "Exam",
            question: " Can I take the PRINCE2 Practitioner exam online? ",
            answer: `
  Yes, you can schedule the PRINCE2 Practitioner Exam online. This will be a proctored exam you can schedule as per your convenience. You will do this through purchasing an exam voucher from PeopleCert.
            `,
          },
        ],
      },
    },

    {
      id: 30,
      title: "PMI-ACP® Certification",
      courseSubtitle:
        "PMI-ACP® (PMI Agile Certified Practitioner) Certification",
      description:
        "Become an Industry-Recognized Agile Leader with the PMI-ACP Certification Training",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "",
      courseDetail: {
        courseCategory: "Agile Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "31,206+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
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
        secretSauce: [],
        highlights: [
          "Practice the latest Agile principles and techniques",
          "Immersive course, designed by experienced Agilists",
          "Experiential learning, real-world simulations, case studies, and more",
        ],
        careerDetail: [
          { carrer: "Professional Trained", value: "450K" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "21 Hours of Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "Earn 21 PDUs on Course Completion",
            },
            {
              icon: "",
              value: "Real-World Simulations, Activities",
            },
            {
              icon: "",
              value: "Six Months Post-Class Career Guidance",
            },
            {
              icon: "",
              value: "Comprehensive Exam Prep Support",
            },
            {
              icon: "",
              value: "Digital Library of Learning Resources",
            },
          ],
          overviewDetail: `
   Enhance and validate your knowledge of Agile practices and techniques with the PMI-ACP® certification. Explore various approaches to agility including Scrum, Kanban, Lean, Extreme Programming (XP) and Test-Driven Development (TDD). Learn to cultivate an Agile mindset and gain hands-on expertise in Agile Project Management.

By the end of the course, you’ll have mastered the practices and techniques that Agile practitioners use to improve team performance, resolve problems and engage in continuous process improvements and be equipped with job-ready skills.

PMI-ACP® is a designation offered by Project Management Institute (PMI)® to candidates who can demonstrate their understanding by passing the assessment exam. PMI-ACP® is a registered trademark owned by PMI. KnowledgeHut is an Authorized Training Partner of PMI.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why get the PMI-ACP Certification Training",
          demandHeading: "Rising Demand for Agile Practitioners",
          demandDetail: `
        Project management is a discipline that holds huge promise with an estimated requirement of 2.3 million project-oriented jobs opening up every year till the year 2030. Agile adoption is widespread and growing fast with 97% of organizations reporting using Agile in some manner according to the 17th State of Agile report.

PMI-ACP is a certification that is widely accepted and carries weight in both project management and Agile circles.
          `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Agile Project Manager",
              averageSalary: [12, 21, 35],
              hiringCompany: [],
              demand: {
                percant: "37%",
                description:
                  "faster project delivery by teams practicing Agile",
              },
            },
            {
              type: "Agile Coach",
              averageSalary: [17, 33, 51],
              hiringCompany: [],
              demand: {
                percant: "94%",
                description:
                  "of organizations practicing Agile report increased quality in their projects",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Activities, team-based exercises, case studies: High energy workshops with hands-on learning.",
            },
            {
              icon: "",
              topic: "Elite Panel of Agilists",
              value:
                "Learn from the best certified Agilists with experience across different industries.",
            },
            {
              icon: "",
              topic: "Expert Practitioners",
              value:
                "Get actionable tips and techniques for your Agile toolbox from our expert practitioners.",
            },
            {
              icon: "",
              topic: "Exam Preparation Support",
              value:
                "Our training ensures that participants can pass the exam on their first attempt.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                "Webinars, e-books, tutorials, articles, and more - we're right by you in your learning journey!",
            },
            {
              icon: "",
              topic: "Certification Journey Support",
              value:
                "Need help at any step of PRINCE2 certification? From enrolling to certification, we've got your back.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                "Webinars, e-books, tutorials, articles, and more - we're right by you in your learning journey.",
            },
            {
              icon: "",
              topic: "Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your Agile career.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to become a skilled Agile practitioner?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites to attend this training program.",
          "To qualify for the PMI-ACP exam, PMI requires candidates to complete 21 hours of training in Agile practices by an authorized training partner of PMI. ",
        ],
        courseCurriculm: [
          {
            title: "ACP Exam Prep",
            isPreview: false,
            objective:
              "Prepare for the PMI-ACP exam by understanding the course overview, completing the exam application, gaining insights into the exam structure, and adopting effective approaches to navigate the examination process on PMI Island.",
            topics: [
              "Course Overview",
              "The Exam Application",
              "The PMI-ACP Exam",
              "Welcome to PMI Island! (Approaching the Exam)",
            ],
          },
          {
            title: "Leading Your Agile Team and Project",
            isPreview: true,
            objective:
              "Gain a comprehensive understanding of agile methodologies, principles, and terminologies, covering PMBOK, predictive vs adaptive approaches, the historical evolution of agile, and a diverse range of specific methodologies like Scrum, Lean, Kanban, and more, culminating in the ability to critically assess and apply the most suitable agile method for various project scenarios.",
            topics: [
              "The PMBOK Guide",
              "Predictive vs Adaptive Methodologies",
              " The History of Agile",
              "Basic Agile Concepts",
              "Choosing Your Priorities",
              "Terminology of Agile",
              "Agile Methodologies: Scrum",
              "Agile Methodologies: Extreme Programming",
              "Agile Methodologies: Lean Software Development",
              "Agile Methodologies: Feature-Driven Development (FDD)",
              "Agile Methodologies: Dynamic Systems Development (DSDM)",
              "Agile Methodologies: Crystal Development",
              "Agile Methodologies: Kanban",
              "Agile Methodologies: Scrum of Scrums, SAFe, and Disciplined Agile Development",
              "Agile Methodologies - LeSS",
              "Agile Methodologies: Nexus",
              "Agile Methodologies: Picking the Perfect Method",
              "Agile Principles and Mindset: EXAM Review",
            ],
          },

          {
            title: " Delivering Value in Agile Projects",
            isPreview: false,
            objective:
              "Understand the principles of Value-Driven Delivery in Agile, encompassing concepts such as business value, project charter creation, value stream mapping, prioritization, story mapping, risk management, Deming's PDCA cycle, decision tree analysis, EMV, agile contracting, earned value, and the utilization of agile tracking tools, with a focus on preparing for the exam through a comprehensive review of Value Driven Delivery.",
            topics: [
              "What is Value Driven Delivery?",
              "Understanding Business Value",
              "The Project Charter",
              "Value Stream Mapping",
              "Prioritizing in Agile",
              "Story Maps",
              "Risk in Agile Projects",
              "Deming and the PDCA",
              "Decision Tree Analysis and EM",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Agile Projects",
            description:
              "Learn about Agile project management. Learn how to implement them at your organization.",
          },
          {
            title: "Agile Mindset",
            description:
              "Discover what having an Agile mindset is about and how it can make a difference for you.",
          },
          {
            title: "Product Quality",
            description:
              "Find out how an Agile practitioner prioritises the quality of the product being delivered.",
          },
          {
            title: "Stakeholder Engagement",
            description:
              "Learn to communicate effectively with stakeholders and work by combining different inputs.",
          },
          {
            title: "Risk Management",
            description:
              "Learn to mitigate and manage risks by using Agile techniques in your organization.",
          },
          {
            title: "Continuous Improvement",
            description:
              "Learn to experiment continuously to find better way of doing things and improving processes.",
          },
        ],
        whoCanAttendCourse: [
          "Software Engineers",
          "Product Managers",
          "Team Leaders",
          "Business Analysts",
          "Development Team Members",
          "Testers",
          "Aspiring Agilists",
        ],
        aboutCourse: [],
        faqs: [
          {
            type: "Certification",
            question: "PMI-ACP Certification",
            answer: `The PMI-ACP certification is offered by PMI, a world-renowned body dedicated to helping professionals, leaders and organizations learn and validate their knowledge and skills in project management and professional development.
              `,
          },
          {
            type: "Certification",
            question: "Can I get PMI-ACP certified without taking the course? ",
            answer: `
 You cannot get PMI-ACP certified without undertaking the course as per PMI requirements which includes 21 hours of training by an Authorized Training Partner.
            `,
          },
          {
            type: "PDUs",
            question:
              " How many PDUs do I earn by completing KnowledgeHut’s PMI-ACP certification training? ",
            answer: `
 You earn 21 PDUs by participating in KnowledgeHut’s PMI-ACP training program.
            `,
          },

          {
            type: "PDUs",
            question:
              " How many PDUs do I earn by completing KnowledgeHut’s PMI-ACP certification training?  ",
            answer: `
 You will earn 21 PDUs by completing our training program for PMI-ACP certification.
            `,
          },
          {
            type: "PDUs",
            question: "What if I have more questions about PDUs? ",
            answer: `
 You can write to us at support@knowledgehut.com
            `,
          },

          {
            type: "Workshop Experience",
            question: "Who are the instructors?  ",
            answer: `All KnowledgeHut’s PMI-ACP certification training is delivered by our team of accredited trainers. They deliver high quality training at par with the standards of excellence set out by PMI. Every candidate receives the same standard of training and content, irrespective of the trainer and the location.
            `,
          },

          {
            type: "Workshop Experience",
            question: "How are the workshops structured? ",
            answer: `Our PMI-ACP course focuses on engaging interaction — we only use lectures to cover the basic terms and concepts. Most class time is dedicated to fun exercises, lively discussions and team collaboration. We focus on practical solutions to real-world, challenges drawn from decades of experience as Agile practitioners, coaches, and professionals in Agile environments.
            `,
          },

          {
            type: "Workshop Experience",
            question:
              "Are course materials and workshop instructions provided in advance?  ",
            answer: `Yes, your course material will be provided in advance. You will receive an email with a link to set your password a few days in advance of the scheduled course. You will have access to the study plan and all the course material.`,
          },

          {
            type: "Finance",
            question:
              " Can I cancel my enrolment to the PMI-ACP course? Do I get a refund?",
            answer: `
  You can cancel your enrolment and receive refunds in line with our Cancellations and Refunds policy.
            `,
          },

          {
            type: "Exam",
            question:
              " Is the certification fee inclusive of the PMI-ACP course fee?  ",
            answer: `
  No, the PMI-ACP certification fee is not included in KnowledgeHut’s training fee.
            `,
          },
        ],
      },
    },

    {
      id: 31,
      title: "PMI-PBA® Certification",
      courseSubtitle:
        "PMI-ACP® (PMI Agile Certified Practitioner) Certification",
      description:
        "Become a business analytics powerhouse and drive data-driven decisions with our PMI-PBA course",
      background: "linear-gradient(242deg, #f49cae, #b05ce2)",
      type: "",
      courseDetail: {
        courseCategory: "Business Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "11,999+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
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
        secretSauce: [],
        highlights: [
          "Learn the skills and gain the clarity needed to effectively perform a business analyst’s role",
          "Learn the core terminology, principles, and practices of Business Analysis",
          "Define requirements, shape project outcomes, and deliver expected results",
        ],
        careerDetail: [
          { carrer: "Professional Trained", value: "4,50,000" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "35 Hours of Live Instructor-Led Training",
            },
            {
              icon: "",
              value: "Earn 35 PDUs on Completing the Course",
            },
            {
              icon: "",
              value: "Training by Authorized Training Partner (ATP) of PMI",
            },
            {
              icon: "",
              value: "Real-Life Simulations and Case Studies",
            },
            {
              icon: "",
              value: "Access to PMI® Approved Courseware",
            },
            {
              icon: "",
              value: "Access to Digital Library of Learning Resources",
            },
          ],
          overviewDetail: `
   The Project Management Institute’s Professional in Business Analysis ® (PMI-PBA) is one of the top certifications to validate your skill set and technical expertise as a business analyst. This credential demonstrates your knowledge and skills in business analysis, and your ability to competently use BA tools and techniques to enhance project success.

This comprehensive course on PMI-PBA® will not only help you gain the certification but also hands-on, practical skills that will help you succeed in your role as a BA. You will learn the discipline of working with stakeholders to define requirements and shaping the output of projects to deliver the expected benefits. Join today and master the concepts of BA for a defining career! PMI-PBA is a certification offered by PMI®. KnowledgeHut is a Premier Authorized Training Partner (ATP) of PMI.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why get the PMI-ACP Certification Training",
          demandHeading: "Rising Demand for Agile Practitioners",
          demandDetail: `
        Project management is a discipline that holds huge promise with an estimated requirement of 2.3 million project-oriented jobs opening up every year till the year 2030. Agile adoption is widespread and growing fast with 97% of organizations reporting using Agile in some manner according to the 17th State of Agile report.

PMI-ACP is a certification that is widely accepted and carries weight in both project management and Agile circles.
          `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Agile Project Manager",
              averageSalary: [12, 21, 35],
              hiringCompany: [],
              demand: {
                percant: "37%",
                description:
                  "faster project delivery by teams practicing Agile",
              },
            },
            {
              type: "Agile Coach",
              averageSalary: [17, 33, 51],
              hiringCompany: [],
              demand: {
                percant: "94%",
                description:
                  "of organizations practicing Agile report increased quality in their projects",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The KnowledgeHut Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record  ",
              value:
                "KnowledgeHut has empowered 450,000+ professionals with skills and certifications in various domains.",
            },
            {
              icon: "",
              topic: "Learn from Industry Experts",
              value:
                "Interact and engage with certified instructors with a wealth of industry experience and subject mastery.",
            },
            {
              icon: "",
              topic: "Advanced Curriculum ",
              value:
                "Learn from the latest, most up-to-date curriculum, designed with industry needs in focus.",
            },
            {
              icon: "",
              topic: "Hands-On Training",
              value:
                "Learn with the help of practical individual and group exercises, quizzes, and activities.",
            },
            {
              icon: "",
              topic: "Strengthen Foundations",
              value:
                "Learn concepts from scratch by learning through step-by-step guidance and detailed feedback.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                "Choose from monthly webinars, e-books, tutorials and more to strengthen your learning.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to become a skilled Agile practitioner?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "The PMI-PBA certification is a great way to boost your business analyst skills! Anyone can take the PMI-PBA course to learn the ropes,",
          "Secondary degree (or equivalent)",
          "7,500 hours of business analysis experience",
          "2,000 hours working on project teams*",
          "35 contact hours of education in business analysis",
        ],
        courseCurriculm: [
          {
            title: "Introduction to Business Analysis",
            isPreview: false,
            objective: "",
            topics: [
              "Definition, Role, Requirements, Methodologies",
              "Project Management Institute’s (PMI)® Code of Ethics",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Introduction",
            description:
              "Get introduced to business analysis and the roles and responsibilities of a business analyst.",
          },
          {
            title: "Needs Assessment",
            description:
              "Understand the reason behind performing needs assessments and how to identify opportunities.",
          },
          {
            title: "Business Analysis Planning",
            description:
              "Understand the importance of business analysis planning and how it is crucial for gathering requirements",
          },
          {
            title: "Gathering Requirements",
            description:
              "Learn about the various ways of gathering business requirements for analysis and their significance.",
          },
          {
            title: "Traceability and Monitoring",
            description:
              "Continuously monitor and document requirements and manage the requirements lifecycle.",
          },
          {
            title: "Solution Evaluation",
            description:
              "Understand if the final solution(s) delivered meet business needs and the changes required (if any).",
          },
        ],
        whoCanAttendCourse: [
          "Business Analysts",
          "Business Systems Analysts",
          "New Product Development PMs",
          "Project Coordinators",
          "Project Managers and Team Leaders",
          "Systems Architects and Developers",
          "IT Managers/Directors",
          "Software Developers",
          "Systems Testers and Analysts",
          "QA Professionals",
          "Business Customers, Users or Partners",
        ],
        aboutCourse: [],
        faqs: [
          {
            type: "Training",
            question:
              "What can I expect to accomplish after completing the PMI-PBA Training?",
            answer: `On completion of the PMI-PBA Training, you will be able to develop an understanding of the following topics:

Skills and clarity needed to effectively perform a business analyst’s role
Core Terminology, principles, and practices of Business Analysis
Achieving reliable, quality results with enhanced efficiency and consistency
              `,
          },
          {
            type: "Training",
            question: "Who should attend this course? ",
            answer: `
 All those who are involved in Business Analysis and Project management will be able to enhance their career by undertaking this training. This course will provide value to:

Business Analysts
Business Systems Analysts
Business customers, users, or partners
New Product Development PMs
            `,
          },
          {
            type: "Training",
            question: "What next after the PMI-PBA course?",
            answer: `
Like all other certifications from PMI®, the PMI-PBA® is also relevant across sectors and geographies and defines a flexible approach to project analysis and management. A PMI-PBA® certification also helps your prospects of salary increase as compared to your non-certified counterparts. After this, you can continue your journey of excellence by pursuing other PMI certifications such as Project Management Professional (PMP)®.
            `,
          },

          {
            type: "Training",
            question: "What are the eligibility criteria for PMI-PBA exam?",
            answer: `
 To qualify for the PMI-PBA exam, candidates would need to fulfill any of these three criteria:
            `,
          },
          {
            type: "Exam",
            question:
              "What are the number of questions, and how long do I have to complete the exam?   ",
            answer: `The certification exam has 200 multiple-choice questions to be completed in four hours`,
          },

          {
            type: "Exam",
            question: "Who are the instructors?  ",
            answer: `PMI Member: ₹23,459.00 Non-member: ₹42,863.00`,
          },

          {
            type: "Workshop Experience",
            question: "What are the modes of training offered for the course?",
            answer: `Currently, all our courses are offered online as live, interactive, trainer-led sessions where you will get to learn directly from the trainer with opportunities to discuss and clear doubts.`,
          },

          {
            type: "Workshop Experience",
            question:
              "Are course materials and workshop instructions provided in advance?  ",
            answer: `Yes, your course material will be provided in advance. You will receive an email with a link to set your password a few days in advance of the scheduled course. You will have access to the study plan and all the course material.`,
          },

          {
            type: "Workshop Experience",
            question: "Who are the instructors?",
            answer: `Our instructors are PMI-certified professionals who are also PMI-PBA certified. They have hands-on experience and will be able to tell you the practical aspects of what you are learning.`,
          },

          {
            type: "Workshop Experience",
            question: " How are the workshops structured? ",
            answer: `Our courses are delivered through live interactive virtual classrooms. Our training focuses on interactive learning, split across hands-on exercises, discussions, and team collaboration, all facilitated by PMI-PBA certified professionals. The focus is on finding practical solutions to real-world scenarios in various development environments, both big and small.`,
          },

          {
            type: "Finance",
            question: "Can I cancel my enrolment? Do I get a refund?",
            answer:
              "You can cancel your enrolment and receive refunds in line with our Cancellations and Refunds policy.",
          },
          {
            type: "Finance",
            question: "Can I switch my start date?",
            answer:
              "Yes, with at least 24 hours' notice and subject to availability in the desired batch, you can change your start date.",
          },
          {
            type: "Finance",
            question: "Are there any scholarships available?",
            answer: `Yes, we have scholarships available for students and veterans with grants that can vary up to 50% of the course fees.

To avail of the scholarships, please contact us at support@knowledgehut.com. You will receive the forms and instructions from the team. Based on the responses and answers that we receive, our panel of experts decides on the Grant. Please note that the entire process could take about 7 to 15 days.`,
          },
        ],
      },
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
      img: "/icn-track.jpg",
       title: "Live Instructors to address questions in real time",
    },
    {
      img: "/icn-unlimited.jpg",
      title: "Online Training Portal with Unlimited Access",
    },
    {
      img: "/icn-24-7.jpg",
      title: "Seek guidance from a learning assistant",
    },
    {
      img: "/icn-realtime.jpg",
      title: "Monitor Your Learning",
    },
  ],
  blogPost: [
    {
      img: "/blog-1.jpg",
      title: "Microsoft Project",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
    },
    {
      img: "/blog-3.jpg",
      title: "Business Management",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
    },
    {
      img: "/blog-4.jpg",
      title: "Finance Modeling",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
    },
    {
      img: "/blog-2.jpg",
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
