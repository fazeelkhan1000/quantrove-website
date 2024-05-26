// data.ts

// Importing logos from the local directory
import logo1 from "../../public/assets/brands-logos/aptiv.svg";
import logo2 from "../../public/assets/brands-logos/chicago.svg";
import logo3 from "../../public/assets/brands-logos/cooper.svg";
import logo4 from "../../public/assets/brands-logos/grata.svg";
import logo5 from "../../public/assets/brands-logos/metinvest.svg";
import logo6 from "../../public/assets/brands-logos/roshen.svg";
import logo7 from "../../public/assets/brands-logos/schwarz.svg";
import logo8 from "../../public/assets/brands-logos/toyota.svg";
// import logo9 from '../../public/assets/brands-logos/aptiv.svg'
// import logo10 from '../../public/assets/brands-logos/aptiv.svg';
import inActive from "../../public/assets/site-images/inActive.svg";
import isActive from "../../public/assets/site-images/isActive.svg";

export const heroData = [
  {
    id: 1,
    logo: logo1,
  },
  {
    id: 2,
    logo: logo2,
  },
  {
    id: 3,
    logo: logo3,
  },
  {
    id: 4,
    logo: logo4,
  },
  {
    id: 5,
    logo: logo5,
  },
  {
    id: 6,
    logo: logo6,
  },
  {
    id: 7,
    logo: logo7,
  },
  {
    id: 8,
    logo: logo8,
  },
  {
    id: 9,
    logo: logo7,
  },
  {
    id: 10,
    logo: logo8,
  },
];

export const navigationPaths = [
  {
    id: 1,
    title: "Services",
    link: "",
  },
  {
    id: 2,
    title: "Technologies",
    link: "",
  },
  {
    id: 3,
    title: "Portfolio",
    link: "",
  },
  {
    id: 4,
    title: "About Us",
    link: "",
  },
  {
    id: 5,
    title: "Blog",
    link: "",
  },
];

export const servicesArray = [
  {
    id: 1,
    title: "Product Design",
    isInActive: inActive,
    isActive: isActive,
    description:
      "Maximize your competitive edge in the marketplace by partnering with us to conduct research and design tailored program evaluations.",
  },
  {
    id: 2,
    title: "Custom Software",
    isInActive: inActive,
    isActive: isActive,
    description:
      "Empower your business with bespoke software solutions designed to meet your unique needs and drive operational efficiency.",
  },
  {
    id: 3,
    title: "Mobile Development",
    isInActive: inActive,
    isActive: isActive,
    description:
      "Transform your ideas into innovative mobile applications that engage users and enhance your digital presence in the mobile-first world.",
  },
  {
    id: 4,
    title: "Web Development",
    isInActive: inActive,
    isActive: isActive,
    description:
      "Elevate your online presence with cutting-edge web development services, creating responsive and dynamic websites tailored to your goals.",
  },
  // {
  //   id: 5,
  //   title: "UI UX Design",
  //   description: "",
  // },
];
