import { BandwidthSquare, GoogleSquare } from '@/components/workSquare';
import {
  BandwidthText,
  GoogleText,
  IndeedText,
  ScoreShotsText,
} from '@/components/workText';
import { IconSvgProps } from '@/types';

export type WorkDetails = {
  TextIcon: (args: IconSvgProps) => JSX.Element;
  SquareIcon?: (args: IconSvgProps) => JSX.Element;
  bg: string;
  text: string;
  domain: string;
  title: string;
  image: string;
  imageWide: string;
  imageFull: string;
  productSubtitle: string;
  designSystem: string;
  palette: string[];
  fonts: string[];
  technologies: TECHNOLOGIES[];
  employer: string;
  location: string;
  timeStart: string;
  timeEnd?: string;
  yearStart: string;
  yearEnd?: string;
  titles: string[];
  previous?: string;
  next?: string;
  tldr: string;
};

export enum TECHNOLOGIES {
  ANGULAR = 'Angular',
  TYPESCRIPT = 'Typescript',
  GRAPHQL = 'GraphQL',
  REACT = 'React',
}

const scoreshots_temp: WorkDetails = {
  TextIcon: ScoreShotsText,
  bg: `bg-scoreshots`,
  text: `text-scoreshots`,
  domain: 'Web-based Graphic Design',
  title: 'CTO & Cofounder',
  image: '/scoreshots_product.webp',
  imageFull: '/scoreshots_product_4_3.png',
  imageWide: '/scoreshots_product_16_9.png',
  productSubtitle:
    '[ScoreShots](https://scoreshots.com) is a sports infographics tool designed to enable Sports Information Directors and other untrained staff to post and schedule templated infographics to social media with live and easy to customize data.',
  designSystem: 'Stadium System',
  palette: ['#592570', '#6b2587', '#42c6c5', '#151516', '#fafafa'],
  fonts: ['Ubuntu', 'Helvetica'],
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.GRAPHQL,
  ],
  employer: 'ScoreShots',
  location: 'Fayetteville, NC',
  timeStart: 'Oct 2015',
  yearStart: '2015',
  timeEnd: 'Jul 2018',
  yearEnd: '2018',
  titles: ['Chief Technology Officer', 'Founding Engineer'],
  next: 'bandwidth',
  tldr: 'Cofounded a B2B Web Infographics product for college/pro sports teams. Drove most aspects of the 10-15 person startup until profitability.',
};

const work: {
  [k: string]: WorkDetails;
} = {
  scoreshots: scoreshots_temp,
  indeed: {
    TextIcon: IndeedText,
    bg: `bg-indeed`,
    text: `text-indeed`,
    domain: 'Microfrontend Platform',
    title: 'Engineering Team Lead',
    image: '/indeed_product.webp',
    imageFull: '/indeed_product_4_3.png',
    imageWide: '/indeed_product_16_9.png',
    productSubtitle:
      'The **Indeed Job Search Interface** is the primary web and mobile interface for Indeed, serving over 350 million unique visitors each month, and helping connect them with employers worldwide.',
    designSystem: 'Indeed Foundations',
    employer: 'Indeed',
    location: 'Seattle, WA',
    timeStart: 'Aug 2022',
    yearStart: '2022',
    timeEnd: undefined,
    titles: ['Engineering Team Lead'],
    fonts: ['Indeed Sans'],
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIPT,
      TECHNOLOGIES.GRAPHQL,
    ],
    palette: ['#2557a7', '#164081', '#0d2d5e', '#eef1fe', '#2d2d2d', '#f3f2f1'],
    previous: 'google',
    tldr: "Leading Indeed's microfrontend teams to rearchitect Mosaic, a powerful frontend delivery platform built on webpack module federation.",
  },
  google: {
    TextIcon: GoogleText,
    SquareIcon: GoogleSquare,
    bg: `bg-google`,
    text: `text-google`,
    domain: 'Material Design System',
    title: 'Engineering Team Lead',
    image: '/cloud_product.webp',
    imageFull: '/cloud_product_4_3.png',
    imageWide: '/cloud_product_16_9.png',
    productSubtitle:
      'The **[Google Cloud Web Console](https://console.cloud.google.com)** is likely one of the largest enterprise Angular applications in the world, if not the largest, and I led its Design System team, responsible for delivering the right tools for thousands of downstream Google engineers to build feature pages.',
    employer: 'Google Cloud',
    location: 'Seattle, WA',
    timeStart: 'July 2020',
    yearStart: '2020',
    yearEnd: '2022',
    timeEnd: 'July 2022',
    titles: [
      'Technical Lead Manager',
      'Technical Lead',
      'Senior Frontend Engineer',
    ],
    technologies: [
      TECHNOLOGIES.ANGULAR,
      TECHNOLOGIES.TYPESCRIPT,
      TECHNOLOGIES.GRAPHQL,
    ],
    designSystem: 'Material Design',
    palette: ['#1c3aa9', '#3367d6', '#2d5abc', '#1a73e8', '#c8d5f1', '#b0b0b0'],
    fonts: ['Google Sans, Roboto'],
    next: 'indeed',
    previous: 'bandwidth',
    tldr: "Led a multi-year mission to reinvent Cloud Console's frontend strategy by overhauling its Design System approach and surrounding tooling ecosystem.",
  },
  bandwidth: {
    TextIcon: BandwidthText,
    SquareIcon: BandwidthSquare,
    bg: `bg-bandwidth`,
    text: `text-bandwidth`,
    domain: 'Frontend Dashboard',
    title: 'Eng Lead, Product Owner',
    image: '/bandwidth_product.webp',
    imageFull: '/bandwidth_product_4_3.png',
    imageWide: '/bandwidth_product_16_9.png',
    productSubtitle:
      'The **[Bandwidth Dashboard](https://passport.bandwidth.com/)** is a developer console for Bandwidth CPaaS customers to manage their telephony services and products. I helped to drive this primary frontend touchpoint by unblocking a messy and protracted migration, and then led the Frontend, Developer Exerience, and Auth teams.',
    employer: 'Bandwidth',
    location: 'Raleigh, NC',
    timeStart: 'Aug 2018',
    timeEnd: 'July 2020',
    yearStart: '2018',
    yearEnd: '2020',
    titles: [
      'Technical Product Owner',
      'Engineering Lead Manager',
      'Senior Engineer',
    ],
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIPT,
      TECHNOLOGIES.GRAPHQL,
    ],
    designSystem: 'Foundry Components',
    palette: ['#0A2540', '#004658', '#079CEE', '#00BF8C', '#FF6F47', '#fffff2'],
    fonts: ['Overpass'],
    next: 'google',
    previous: 'scoreshots',
    tldr: "Managed and drove alongside multiple teams to accomplish cross-functional business goals as the Technical Product Owner for Bandwidth Dashboard's frontend strategy.",
  },
};

export default work;
