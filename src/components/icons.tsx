import type { SVGProps } from 'react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 14 4-4" />
      <path d="m12 14 4 4" />
      <path d="M12 14H8" />
      <path d="M12 14v4" />
      <path d="M12 6V2" />
      <path d="m5 5 4 4" />
      <path d="M19 5 9 15" />
      <path d="M22 12h-4" />
      <path d="m19 19-4-4" />
      <path d="M5 19 9 9" />
      <path d="M2 12h4" />
    </svg>
  ),
};
