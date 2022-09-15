// import { typographyClasses } from '@mui/material';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import GetOtp from '../../GetOtp';
// import GetOtpByEmail from '../GetOtpByEmail';

// const Tab = styled.button` 
//   font-size: 1rem;
//   padding: 10px 60px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 5px solid black;
//     opacity: 1;
//     border-radius:20px
//   `}
// `;
// const ButtonGroup = styled.div`
//   display: flex;
//   align-items: center;
//     justify-content: center;
//     margin-top : 20px
   
   
// `;

// const types = ["Get_Otp_By_Phone","Get_Otp_By_Email"];
// function TabGroup() {
//   const [active, setActive] = useState(types[0]);
//   console.log(active)
//   return (
//     <>
//     <ButtonGroup>
//       {types.map(type => (
//         <Tab
//           key={type}
//           active={active === type}
//           onClick={() => setActive(type)}
//         >
//           {type}
//         </Tab>
//       ))}
//     </ButtonGroup>
//     <p />
//     { active=="Get_Otp_By_Phone"? <GetOtp/> : <GetOtpByEmail/>}
  
//   </>
// );
// }
// // Usage
// <TabGroup/>



// export default TabGroup