
  import style, {css} from "styled-components";

  function GetOtpFormStyle ()
  {
      return css`
     
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
     
          
      `;
      
  }
  
  export const SectionWrapperStyled = style.div`
  ${GetOtpFormStyle};
  `;