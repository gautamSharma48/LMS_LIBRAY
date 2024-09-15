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
      type: "",
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
            answer:`
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
            question: "What are the roles and responsibilities of a Project Management Professional?",
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
            answer:
              `The PMP exam in its new format contains 180 questions. The questions are based on the three domains of People, Process, and Business Environment. You will need to answer this in the allotted 230 minutes. If you are writing the exam online, you get to take one 10-minute break. There is no break if you attend the exam physically. The questions will be a combination of multiple choice, multiple responses, matching, hot area, and fill-in-the-blanks.

Apart from assessing a candidate's knowledge of project management principles, the PMP exam updates also evaluate their understanding of real-world implementation. For successful preparation and certification, keeping up with the latest PMP examination pattern, including the new question formats and domains, is essential. Enrolling in a reputable PMP training program can help you navigate these changes and be well-prepared for the updated exam format.`,
          },
        ],
      },
    },

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
