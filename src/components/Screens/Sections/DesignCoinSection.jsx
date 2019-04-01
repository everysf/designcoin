import styled from "styled-components";

const DesignCoinSection = styled.div`

    padding: 250px 0 200px;
    z-index: 20;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    @media(max-width: 800px) {
      h3, h4 {
        font-size: 20px !important;
        margin: 10px !important;
      }
      h1 {
        font-size: 30px !important;
        margin: 0;
      }
      padding: 100px 0 100px;
    }

    h1 {
      font-size: 48px;
      margin-bottom: 30px;
    }

    h3 {
      font-size: 32px;
      margin-bottom: 30px;
      font-weight: 700;
    }

    h4 {
      margin-bottom: 30px;
      font-size: 24px;
      font-family: "Roboto Slab";
      font-weight: 300;
    }

    .categoryBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
    }

    .categories {

      margin: 0 auto;
      padding: 10px;
      width: auto;
      display: flex;

      @media (max-width: 800px) {
        flex-direction: column;
      }

    }

    .servicesOffered {
      padding: 70px 30px 0;
      box-shadow: 0px 0px 5px rgba(0,0,0,.3);
      border-radius: 10px;
      max-width: 900px;
      margin: 0 auto;
      background: linear-gradient(to top, ${ props => (props.theme == "soma" ? "rgba(0,0,255,.1)" : "rgba(255, 249, 176, .3)")}, ${ props => (props.theme == "soma" ?  "rgba(255,0,255,.1) 3%": "rgba(0,0,0,.1) 5%")},rgba(0,0,0,0) 10%)

    }

    img {
      height: 150px;
      margin: 0 auto;
      text-align: center;
      transition: 2s ease;

      @media (max-width: 800px) {
        height: 90px;
        margin: 30px auto 0 !important;
      }

    }
    
    .ferry {
      transition: 2s ease;
      display: flex;
      justify-content: center;
    }

`
export default DesignCoinSection