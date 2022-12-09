import React from "react";

export default function HomeLine({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_525)">
        <path
          d="M0 16.174C0 12.874 4.521 12.497 7.921 12.497C9.879 12.497 15.84 12.497 15.84 16.197C15.84 19.492 11.32 19.874 7.921 19.874C5.962 19.87 0 19.87 0 16.174ZM1.5 16.174C1.5 17.632 3.66 18.374 7.921 18.374C12.182 18.374 14.34 17.641 14.34 16.197C14.34 14.753 12.18 14 7.921 14C3.662 14 1.5 14.729 1.5 16.174ZM7.889 10.619C6.4932 10.5961 5.16256 10.0245 4.18508 9.02783C3.2076 8.03118 2.66191 6.68969 2.66611 5.29371C2.67032 3.89773 3.22409 2.55956 4.20756 1.56882C5.19103 0.578085 6.52509 0.0144829 7.921 0C9.31655 0.0191526 10.6484 0.586973 11.6285 1.58061C12.6086 2.57426 13.1581 3.91382 13.1581 5.3095C13.1581 6.70518 12.6086 8.04474 11.6285 9.03839C10.6484 10.032 9.31655 10.5998 7.921 10.619H7.889ZM4.038 5.31C4.0356 6.33546 4.43999 7.32001 5.16247 8.04774C5.88495 8.77547 6.86655 9.18697 7.892 9.192L7.921 9.907V9.192C8.68874 9.1918 9.43919 8.96396 10.0775 8.53728C10.7157 8.1106 11.2131 7.50424 11.5068 6.79488C11.8005 6.08552 11.8772 5.30502 11.7273 4.55205C11.5774 3.79908 11.2076 3.10747 10.6646 2.56466C10.1217 2.02185 9.42998 1.65223 8.67697 1.50252C7.92397 1.35281 7.14348 1.42975 6.43419 1.7236C5.72491 2.01744 5.11868 2.51501 4.69217 3.15338C4.26565 3.79175 4.038 4.54226 4.038 5.31V5.31Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_525">
          <rect width="15.84" height="19.87" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
