export const Home = ({ active }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="house"
      class="svg-inline--fa fa-house "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="white"
        d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
      ></path>
    </svg>
  );
};

export const Road = ({ active }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="road"
      class="svg-inline--fa fa-road "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="white"
        d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"
      ></path>
    </svg>
  );
};

export const Blog = ({ active }) => {
  return (
    <>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="newspaper"
        class="svg-inline--fa fa-newspaper "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="white"
          d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"
        ></path>
      </svg>
    </>
  );
};

export const BookMark = (active) => {
  if (active === true) {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bookmark"
        class="svg-inline--fa fa-bookmark Bookmark_bookmark__fEAk+"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          fill="red"
          d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"
        ></path>
      </svg>
    );
  } else {
    return (
      <>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="bookmark"
          class="svg-inline--fa fa-bookmark "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="#757575"
            d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"
          ></path>
        </svg>
      </>
    );
  }
};

export const ThreeDot = ({ active }) => {
  return (
    <>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="ellipsis"
        class="svg-inline--fa fa-ellipsis "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
        ></path>
      </svg>
    </>
  );
};

export const Tick = ({ active }) => {
  if (active === true) {
    return (
      <>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check"
          class="svg-inline--fa fa-check CourseDetail_icon__sLJtd"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="#f05123"
            d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
          ></path>
        </svg>
      </>
    );
  } else {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check"
        class="svg-inline--fa fa-check CourseDetail_icon__sLJtd"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
        ></path>
      </svg>
    );
  }
};

export const Play = ({ active }) => {
  return (
    <>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="circle-play"
        class="svg-inline--fa fa-circle-play CurriculumOfCourse_icon__1fxR9 CurriculumOfCourse_video__GQtG1"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="#f0512366"
          d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
        ></path>
      </svg>
    </>
  );
};

export const RectangleTick = ({ active }) => {
  if (active === true) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <rect width="16" height="16" rx="4" fill="#64C5B1" />
        <path d="M4 8.22222L6.85714 11L12 6" stroke="white" stroke-width="2" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <rect
          x="1"
          y="1"
          width="16"
          height="16"
          rx="4"
          fill="white"
          stroke="#D9D9D9"
        />
      </svg>
    );
  }
};

export const Cancel = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="black"
    >
      <g id="Group 3419">
        <path
          id="Vector 563"
          d="M13 1L1 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 564"
          d="M13 13L1 0.999999"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const Upload = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
        stroke="#444444"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 8L12 3L7 8"
        stroke="#444444"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 3V15"
        stroke="#444444"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Search = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#444444"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.9999 21L16.6499 16.65"
        stroke="#444444"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Dropdown = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
    >
      <path d="M10 1L5.5 5.5L1 1" stroke="#444444" stroke-width="1.5" />
    </svg>
  );
};

export const STT = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
    >
      <path d="M0 1H12" stroke="#444444" />
      <path d="M0 7H12" stroke="#444444" />
      <path d="M0 13H12" stroke="#444444" />
    </svg>
  );
};

export const UserLogin = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 11c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m0-9C7.79 2 6 3.79 6 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 10.9c2.97 0 6.1 1.46 6.1 2.1v1.1H3.9V15c0-.64 3.13-2.1 6.1-2.1m0-9a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2"
        fill-opacity=".54"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export const Google = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g transform="">
        <g fill-rule="evenodd">
          <path
            d="m17.64 9.2a10.341 10.341 0 0 0 -.164-1.841h-8.476v3.481h4.844a4.14 4.14 0 0 1 -1.8 2.716v2.264h2.909a8.777 8.777 0 0 0 2.687-6.62z"
            fill="#4285f4"
          />
          <path
            d="m9 18a8.592 8.592 0 0 0 5.956-2.18l-2.909-2.258a5.43 5.43 0 0 1 -8.083-2.852h-3.007v2.332a9 9 0 0 0 8.043 4.958z"
            fill="#34a853"
          />
          <path
            d="m3.964 10.71a5.321 5.321 0 0 1 0-3.42v-2.332h-3.007a9.011 9.011 0 0 0 0 8.084z"
            fill="#fbbc05"
          />
          <path
            d="m9 3.58a4.862 4.862 0 0 1 3.44 1.346l2.581-2.581a8.649 8.649 0 0 0 -6.021-2.345 9 9 0 0 0 -8.043 4.958l3.007 2.332a5.364 5.364 0 0 1 5.036-3.71z"
            fill="#ea4335"
          />
        </g>
        <path d="m0 0h18v18h-18z" fill="none" />
      </g>
    </svg>
  );
};

export const FaceBook = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        d="m17.007 0h-16.014a.993.993 0 0 0 -.993.993v16.014a.993.993 0 0 0 .993.993h8.628v-6.961h-2.343v-2.725h2.343v-2a3.274 3.274 0 0 1 3.494-3.591 19.925 19.925 0 0 1 2.092.106v2.43h-1.428c-1.13 0-1.35.534-1.35 1.322v1.73h2.7l-.351 2.725h-2.364v6.964h4.593a.993.993 0 0 0 .993-.993v-16.014a.993.993 0 0 0 -.993-.993z"
        fill="#4267b2"
      />
      <path
        d="m28.586 24.041v-6.961h2.349l.351-2.725h-2.7v-1.734c0-.788.22-1.322 1.35-1.322h1.443v-2.434a19.924 19.924 0 0 0 -2.095-.106 3.27 3.27 0 0 0 -3.491 3.591v2h-2.343v2.73h2.343v6.961z"
        fill="#fff"
        transform="translate(-16.172 -6.041)"
      />
    </svg>
  );
};

export const Bell = ({ active }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bell"
      class="svg-inline--fa fa-bell NavBar_action-icon__l9MxX"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
      ></path>
    </svg>
  );
};
