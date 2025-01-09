export default function FileIcon(props) {
  // Temporary workaround for img tag not working properly in Article component with react-draggable
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width="96px"
      height="96px"
      fillRule="nonzero"
    >
      <defs>
        <linearGradient
          x1="28.529"
          y1="15.472"
          x2="33.6"
          y2="10.4"
          gradientUnits="userSpaceOnUse"
          id="color-1"
        >
          <stop offset="0" stopColor="#cfcfcf"></stop>
          <stop offset="1" stopColor="#d2cfcf"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
      >
        <g transform="scale(5.33333,5.33333)">
          <path
            d="M39,16v25c0,1.105 -0.895,2 -2,2h-26c-1.105,0 -2,-0.895 -2,-2v-34c0,-1.105 0.895,-2 2,-2h17z"
            fill="#ebe9e9"
          ></path>
          <path d="M28,5v9c0,1.105 0.895,2 2,2h9z" fill="url(#color-1)"></path>
        </g>
      </g>
    </svg>
  );
}
