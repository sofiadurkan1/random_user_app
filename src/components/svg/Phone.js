import * as React from "react"

function Phone(props) {
  return (
    <svg
      height={60}
      viewBox="0 0 512 512"
      width={50}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M406 31H286c-57.891 0-106 47.109-106 105 0 52.808 40.185 96.636 91 103.931V286a14.983 14.983 0 009.258 13.857c5.533 2.309 12.023 1.071 16.348-3.252L346 247.211l6.211-6.211H406c57.891 0 106-47.109 106-105S463.891 31 406 31z"
        fill="#fed843"
      />
      <path
        d="M406 241c57.891 0 106-47.109 106-105S463.891 31 406 31h-60v216.211l6.211-6.211z"
        fill="#fabe2c"
      />
      <path
        d="M382 376v60c0 26.1-21.31 45-44.79 45-86.41 0-170.71-40.85-233.41-103.3S0 231.2 0 144.79C0 119.97 20.19 100 45 100h60c6.46 0 12.19 4.13 14.22 10.25l30 89.79c1.47 4.4.82 9.22-1.74 13.07l-25.44 38.17c9.64 20.22 26.7 42.32 46.4 61.78 19.71 19.45 42.06 36.26 62.28 45.9l38.17-25.44c3.87-2.55 8.67-3.22 13.07-1.74l90 30c6.12 2.03 10.04 7.76 10.04 14.22z"
        fill="#ff641a"
      />
      <path
        d="M382 376v60c0 26.1-21.31 45-44.79 45-86.41 0-170.71-40.85-233.41-103.3l64.64-64.64c19.71 19.45 42.06 36.26 62.28 45.9l38.17-25.44c3.87-2.55 8.67-3.22 13.07-1.74l90 30c6.12 2.03 10.04 7.76 10.04 14.22z"
        fill="#f03800"
      />
      <circle cx={285.999} cy={135.999} fill="#613d5c" r={15} />
      <circle cx={346} cy={135.998} fill="#613d5c" r={15} />
      <g fill="#4b2746">
        <path d="M361 135.998c0-8.284-6.716-15-15-15v30c8.284 0 15-6.716 15-15z" />
        <circle cx={405.999} cy={135.999} r={15} />
      </g>
    </svg>
  )
}

export default Phone;