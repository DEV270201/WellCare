import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
      <path d="m9.879 9.88 6.364-2.122-2.122 6.364-6.364 2.122L9.88 9.88h-.001Z"></path>
    </svg>
  );
}
