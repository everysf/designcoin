import styled from "styled-components";

const AboutSection = styled.div`

    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    min-width: 100%;

    @media(max-width: 800px){
      padding: 100px 0 300px;
      h3 {
        font-size: 20px !important;
        line-height: 30px !important;
        margin: 25px;
      }
    }

    .color {
      margin-top: 100px;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        to bottom,
        ${props => (props.theme == "soma" ? props.color.soma2 : props.color.fidi1)}, 
        rgba(255,255,255,.0));
        z-index: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: skew(0,-5deg);
      // background-image: url(./img/wavydesk.png);

        img {
          height: 500px;
        }

    }

    .text {
  
      z-index: 10;
      background-color: rgba(255,255,255,.85);
      // background: red;
      width: 100vw;
      padding: 300px 0 450px;
      display: flex;
      justify-content: center;
      transition. 3s ease;
      transform: skew(0,5deg);

      @media(max-width: 800px){
        padding: 100px 0 200px;
      }

      h3 {
        transform: skew(0,-5deg);
        font-weight: 300;
        font-size: 36px;
        line-height: 54px;
        max-width: 800px;
        font-family: 'Roboto Slab';

        .gray {
          color: #4d4d4d;
        }

        .bold {
          font-family: 'Montserrat';
          font-weight: 700;
          transition: .5s ease;
          border-bottom: 1px solid rgba(0,0,0,0);
          background: -webkit-linear-gradient(-30deg, ${props => (props.theme == "soma" ? props.color.soma2 : props.color.fidi1)}, ${props => (props.theme == "soma" ? props.color.soma1 : props.color.fidi2)});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }

        .bold:hover {
          border-bottom: 1px solid #ff00ff;
        }

        .montserrat {
          font-family: 'Montserrat';
          font-weight: 700;
          padding-right: 3px;
        }
      }

    }

    .textAlt {

      @media(max-width: 800px){
        padding: 100px 0 100px;
        h3 {
          font-size: 20px !important;
          line-height: 30px !important;
          margin: 25px;
        }
      }
      

      margin-top: -150px;
      z-index: 20;
      background-color: rgba(244,244,244,1);
      // background: red;
      width: 100vw;
      padding: 300px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition. 3s ease;
      transform: skew(0,-5deg);



      h3 {
        transform: skew(0,5deg);
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
        font-size: 36px;
        line-height: 54px;
       
        max-width: 800px;

        span {


        }

        .gray {
          color: #4d4d4d;
          background: none;
        }

        .bold {
          font-family: 'Montserrat';
          margin-right:6px;
          font-weight: 700;
          transition: .5s ease;
          border-bottom: 1px solid rgba(0,0,0,0);
          background: -webkit-linear-gradient(-30deg, ${props => (props.theme == "soma" ? props.color.soma2 : props.color.fidi1)}, ${props => (props.theme == "soma" ? props.color.soma1 : props.color.fidi2)});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bold:hover {
          border-bottom: 1px solid #ff00ff;
        }


        .montserrat {
          font-family: 'Montserrat';
          font-weight: 700;
          padding-right: 3px;
        }
      }

    }

    .alt {


      transform: skew(0,-5deg);
      background: linear-gradient(
        30deg,
        rgba(0,0,255,1), 
        rgba(255,0,255,1));
        z-index: 5;

      h3 {
        color: white !important;
      }
    }

`

export default AboutSection