import styled from "styled-components";

const CreateForm = styled.form`
  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  background-color: white;
  margin: 10vh;
  display: flex;
  min-height: 55vh;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  // width: max(20vw, 300px);
  width: min(400px, 90vw);
  border-radius: 5px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  @media (max-width: 1245px) {
    width: 50vw;
  }
  @media (max-width: 1045px) {
    width: 60vw;
  }
  @media (max-width: 520px) {
    width: 90vw !important;
    margin-left: 0;
    margin-right: 0;
  }
`;
export default CreateForm;
