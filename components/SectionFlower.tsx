import type { SVGProps } from "react";

export default function SectionFlower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 25 25"
      {...props}
    >
      <circle cx="12.5" cy="12.5" r="3" />
      <ellipse cx="12.5" cy="5" rx="2" ry="4" />
      <ellipse cx="12.5" cy="20" rx="2" ry="4" />
      <ellipse cx="5" cy="12.5" rx="4" ry="2" transform="rotate(0 5 12.5)" />
      <ellipse cx="20" cy="12.5" rx="4" ry="2" />
      <ellipse
        cx="7.4"
        cy="7.4"
        rx="2"
        ry="4"
        transform="rotate(-45 7.4 7.4)"
      />
      <ellipse
        cx="17.6"
        cy="17.6"
        rx="2"
        ry="4"
        transform="rotate(-45 17.6 17.6)"
      />
      <ellipse
        cx="17.6"
        cy="7.4"
        rx="2"
        ry="4"
        transform="rotate(45 17.6 7.4)"
      />
      <ellipse
        cx="7.4"
        cy="17.6"
        rx="2"
        ry="4"
        transform="rotate(45 7.4 17.6)"
      />
    </svg>
  );
}
