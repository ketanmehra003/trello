import React from "react";

export type SearchSVGProps = React.SVGProps<SVGSVGElement> &
Partial<{
  fillColor: string;
  className: string;
}>;

export const SearchSVG: React.FC<SearchSVGProps> = ({ fillColor = "#000000", className = "", ...props }) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
      className={className}
      {...props}
    >
      <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707" />
    </svg>
  );
};
