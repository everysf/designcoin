import styled from "styled-components";

const Contact = styled.div`

  z-index: 10;
  background-color: #ff00ff;
  background-image: url(./img/beachdesk.png);
  background-size: cover;
  background-position: top;

  @media (max-width: 800px) {
    background-image: url(./img/beachmobile.png);
  }

  padding: 200px 20px;

  iframe {
    margin: 40px auto;
  }

  .formEmail {

    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 800px) {
      h1 {
        font-size: 20px;
      }
    }

    a {
      text-align: center;
      border: 1px solid white;
      padding: 10px;
      margin: 20px auto 0;
      transition: .2s ease;
      letter-spacing: 2px;
      font-family: 'Roboto Slab';
      @media (max-width: 800px) {
        font-size: 18px;
      }
    }

    a:hover {
      border: 1px solid #0000ff;
      background-color: #0000ff;
      color: white;
    }

  }

  .contactSheet {
    padding: 50px;
    margin: 200px auto;
    background: linear-gradient(to top, rgba(244,244,244,1),rgba(250,250,250,1));
    border-radius: 10px;
    max-width: 350px;
  
    @media(max-width: 800px){
      margin: 50px auto;
      padding: 20px;
      width: 300px;
    }

    h1 {
      margin-bottom: 15px;
    }
  }


  .contactForm {



    input {
      margin: 10px;
      max-width: 700px;
      font-size: 18px;
      padding: 10px;
      border: none;
      width: 310px;
      
      @media(max-width: 800px){
        width: 260px;
      }

    }

    textarea {
      margin: 10px;
      max-width: 700px;
      font-size: 18px;
      padding: 10px;
      border: none;
      width: 310px;
      @media(max-width: 800px){
        width: 260px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
    }

    a {
      background-color: rgba(255,255,255,0);
      border: 1px solid #0000ff;
      padding: 10px;
      font-size: 18px;
      widthL 100%;
      margin: 10px;
      color: #0000ff;
      transition: .2s ease;
    }

    a:hover {
      background-color: rgba(0,0,255,1);
      color: #ffffff;
    }


  }

`

export default Contact