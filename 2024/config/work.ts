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
  productSubtitle: string;
  designSystem: string;
  palette: string[];
  fonts: string[];
  technologies: TECHNOLOGIES[];
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
  productSubtitle:
    'ScoreShots is a canvas-based image editing applications for pro sports teams',
  designSystem: 'Stadium System',
  palette: ['#592570', '#6b2587', '#42c6c5', '#151516', '#fafafa'],
  fonts: ['Ubuntu', 'Helvetica'],
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.GRAPHQL,
  ],
};

const work: {
  [k: string]: WorkDetails;
} = {
  scoreshots: scoreshots_temp,
  indeed: {
    ...scoreshots_temp,
    TextIcon: IndeedText,
    bg: `bg-indeed`,
    text: `text-indeed`,
    domain: 'Microfrontend Platform',
    title: 'Engineering Team Lead',
    image: '/indeed_product.webp',
    productSubtitle:
      'The Indeed Job Seeker Interface is the primary web and mobile UI for Indeed',
    designSystem: 'Indeed Foundations',
  },
  google: {
    ...scoreshots_temp,
    TextIcon: GoogleText,
    SquareIcon: GoogleSquare,
    bg: `bg-google`,
    text: `text-google`,
    domain: 'Material Design System',
    title: 'Engineering Team Lead',
    image: '/cloud_product.webp',
    productSubtitle:
      'The Google Cloud console is used daily by developers all over the world',
  },
  bandwidth: {
    ...scoreshots_temp,
    TextIcon: BandwidthText,
    SquareIcon: BandwidthSquare,
    bg: `bg-bandwidth`,
    text: `text-bandwidth`,
    domain: 'Frontend Dashboard',
    title: 'Eng Lead, Product Owner',
    image: '/bandwidth_product.webp',
    productSubtitle:
      "The Bandwidth dashboard is the primary frontend for all of Bandwidth's customers",
  },
};

export default work;
