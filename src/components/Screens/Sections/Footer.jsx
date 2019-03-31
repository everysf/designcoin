import styled from "styled-components";

const Footer = styled.div`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f1f1;
  width: 100%;
  z-index: 50;

  min-height: 200px;

  img {
    height: 50px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  h3 {
    text-align: center;

  }

  @media (max-width: 800px) {
    min-height: 100vh;
    margin-bottom: -100vh;
    h3 {
      font-size: 20px !important;
    }
    img {
      margin-bottom: 0 !important;
    }
  }

`

export default Footer