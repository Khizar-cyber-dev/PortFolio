// import React from "react";
// import styled from "styled-components";

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="cta w-auto">
//         <span className="text-neutral-500">View Site</span>
//         <svg width="15px" height="10px" viewBox="0 0 13 10" className="text-neutral-500">
//           <path d="M1,5 L11,5" />
//           <polyline points="8 1 12 5 8 9" />
//         </svg>
//       </button>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .cta {
//     position: relative;
//     margin: auto;
//     padding: 12px 18px;
//     transition: all 0.2s ease;
//     border: none;
//     background: none;
//     cursor: pointer;
//     display: inline-flex;
//     align-items: center; /* Aligns text and SVG vertically */
//   }

//   .cta:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     border-radius: 50px;
//     background: white;
//     width: 45px;
//     height: 45px;
//     transition: all 0.3s ease;
//   }

//   .cta span {
//     position: relative;
//     font-family: "Ubuntu", sans-serif;
//     font-size: 18px;
//     font-weight: 700;
//     letter-spacing: 0.05em;
   
//   }

//   .cta svg {
//     position: relative;
//     top: 0;
//     margin-left: 10px;
//     fill: none;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke: #737373;
//     stroke-width: 2;
//     transition: all 0.3s ease;

//   }

//   .cta:hover:before {
//     width: 100%;
//     background: white;
//   }

//   .cta:hover svg {
//     transform: translateX(0);
//   }

//   .cta:active {
//     transform: scale(0.95);
//   }

//   @media (max-width: 768px) {
//     .cta svg {
//       margin-left: 5px; /* Adjust margin-left on smaller screens */
//       transform: translateX(0); /* Prevent shifting on smaller screens */
//     }
//   }
// `;

// export default Button;


import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="learn-more">
        <span aria-hidden="true" className="circle">
          <span className="icon arrow" />
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  margin-bottom: 7px;
}

button.learn-more {
  width: 12rem;
  height: auto;
}

button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  box-shadow: 0 0 5px 1px white;
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
}

button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: rgba(255, 255, 255, 0.493);
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}

button:hover .circle {
  width: 100%;
  box-shadow: 0 0 10px 2px white;
}

button:hover .button-text {
  transform: translate(-1.7rem, 0);
}

button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(8.7rem, 0);
}

button:active .circle .icon.arrow {
  transform: translate(9.5rem, 0);
  transition: all 0.3s;
}

button:active .circle {
  transform: scale(0.9);
  transition: all 0.3s;
  box-shadow: 0 0 5px 0.5px white;
}

button:hover .button-text {
  color: #fff;
}

button:active .button-text {
  color: rgba(255, 255, 255, 0.459);
}
`;

export default Button;
