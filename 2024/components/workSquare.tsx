import { IconSvgProps } from '@/types';

export const BandwidthSquare = ({ width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={height}
    role="presentation"
    viewBox="-4 0 40 40"
    width={width}
    {...props}
  >
    <path
      fill="#FFF"
      d="M27.18,10.13c-1.4-.3-1.56.43-1,1.76,3.17,7,.35,13.83-2.67,15.53a3.15,3.15,0,0,1-.08-.69c-.36-3.32-1.62-6.21-2.47-6.21-.68,0-.26,2.84-.44,5.35-1.12-.66-1.8-1.13-3-.92-1.71.3-4,3.93-4.07,3.41-.68-4.2.95-10.66,3.21-11.35.35-.14,1,.4,2.34.91,1.07.41.94-.66.45-1.06A5.19,5.19,0,0,0,14,16.47c-3.4,1.66-4.94,9.22-3.11,12.31a4.79,4.79,0,0,0,3.41,2.36c2.28.26,3-.22,4.81-2.47a2.17,2.17,0,0,0,.87.42c-1.5,4.66-7.11,8.59-8.32,7.92-5.88-4-4.25-16.79-.1-28a63.24,63.24,0,0,0,2-6.23c.62-3-3.2-3.62-5.82-1.4C5.83,3,4,6.72,2.51,11.09-2.24,25-.22,36.7,8.28,39.25c9.78,2.92,14.44-3.18,15.16-9.31a11.67,11.67,0,0,0,1.8.09c3-.06,7.33-1.62,8.61-8.24C34.82,16.79,31.61,11,27.18,10.13Z"
    />
  </svg>
);

export const GoogleSquare = ({ width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={height}
    role="presentation"
    viewBox="4.97 4.78 40.24 32.39"
    width={width}
    {...props}
  >
    <path
      fill="#ea4335"
      d="M30.51,13.7h1.23l3.5-3.5.17-1.49A15.73,15.73,0,0,0,9.83,16.39a1.92,1.92,0,0,1,1.23-.08l7-1.15s.36-.59.54-.55a8.73,8.73,0,0,1,12-.91Z"
    />
    <path
      fill="#4285f4"
      d="M40.22,16.39a15.63,15.63,0,0,0-4.75-7.66l-4.91,4.91a8.72,8.72,0,0,1,3.2,6.92v.87a4.37,4.37,0,1,1,0,8.74H25l-.87.88v5.24l.87.88h8.74a11.36,11.36,0,0,0,6.46-20.78Z"
    />
    <path
      fill="#34a853"
      d="M16.27,37.12H25v-7H16.27a4.29,4.29,0,0,1-1.8-.39l-1.23.38-3.52,3.5-.31,1.22A11.28,11.28,0,0,0,16.27,37.12Z"
    />
    <path
      fill="#fbbc05"
      d="M16.27,14.42A11.37,11.37,0,0,0,9.41,34.8l5.07-5.07A4.37,4.37,0,1,1,20.26,24l5.07-5.07A11.37,11.37,0,0,0,16.27,14.42Z"
    />
  </svg>
);
