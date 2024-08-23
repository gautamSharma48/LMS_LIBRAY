import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

export const HeaderConstant = {
  name: "S",
  pages: [
    {
      to: "#About",
      isBlank: true,
      value: "About"
    },
    {
      to: "#Skills",
      isBlank: true,
      value: "Skills"
    },
    {
      to: "#Projects",
      isBlank: true,
      value: "Projects"
    }
  ],
  socialMediaIcon: [
    {
      Icon: AiFillGithub,
      value: "GitHub",
      link: "https://github.com/gautamSharma48/portfolio_website"
    },
    {
      Icon: BsLinkedin,
      value: "LinkedIn",
      link: "https://www.linkedin.com/in/gautam-sharma-27422121a/"
    }
  ]
};

export const BannerConstant = {
  name: "< Gautam Sharma />",
  profile: "Fullstack Developer",
  experience: "1.3",
  experienceText: "years of experience",
  projects: "04",
  profileText: "Projects Completed"
};

export const aboutConstant = {
  title: "<About />",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc. ",
  cardDetails: [
    {
      text: "Fullstack Developer",
      icon: "</>",
      platform: "Hire me!"
    },
    {
      text: "Freelancer",
      icon: "{ }",
      platform: "Freelancer"
    }
  ]
};
export const skillsConstant = {
  title: "<Skills />",
  images: [
    {
      idx: 1,
      name: "Javascript",
      logo: "/images/javascript-logo.svg"
    },
    {
      name: "reactJs",
      logo: "/images/react-2.svg"
    },

    {
      name: "Css",
      logo: "/images/css-logo.svg"
    },
    {
      name: "Tailwind-css",
      logo: "/images/tailwind-css-logo.svg"
    },

    {
      name: "Bootstrap",
      logo: "/images/bootstrap-logo.svg"
    },
    {
      name: "nodeJs",
      logo: "/images/nodejs-logo.svg"
    },
    {
      name: "MongoDB",
      logo: "/images/mongodb-logo.svg"
    }
  ]
};

export const projectsConstant = {
  title: "<Projects />",
  projects:[
    {
      img:"https://i.ytimg.com/vi/dBeNfSE7rPI/maxresdefault.jpg",
      name:"XDC Goverance",
      description:"Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas.",
    },
    {
      img:"https://i.ytimg.com/vi/dBeNfSE7rPI/maxresdefault.jpg",
      name:"NFTinger",
      description:"Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas.",
    },
    {
      img:"https://i.ytimg.com/vi/dBeNfSE7rPI/maxresdefault.jpg",
      name:"Metavesal",
      description:"Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas.",
    },
    {
      img:"https://i.ytimg.com/vi/dBeNfSE7rPI/maxresdefault.jpg",
      name:"AppsStore",
      description:"Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas.",
    },
  ]
};

export const companyConstant = {
  title: "<Company />",
  content: [
    {
      idx:1,
      companyName: "LeewayHertz",
      description: "Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas."
    },
    {
      idx:2,
      companyName: "Metavesal",
      description: "Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas."
  
    },
    {
      idx:3,
      companyName: "AppsStore.Ai",
      description: "Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas."
  
    },
  ]
};
