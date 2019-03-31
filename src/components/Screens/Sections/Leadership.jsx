import styled from "styled-components";

const Leadership = styled.div`

  // position: absolute;
  background-image: url(./img/wavy.png);
  min-height: 500px;
  width: 100vw;
  background-size: cover;
  padding: 200px 0;
  display; flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: white;
  background-repeat: no-repeat;
  z-index: 10;

  @media(max-width: 800px) {
    h3, h4 {
      font-size: 20px !important;
      line-height: 30px;
      margin: 10px !important;
    }
    h1 {
      font-size: 30px !important;
      margin: 0;
    }
    padding: 100px 0 0px;
  }

  h1 {
    font-size: 44px;
    color: white;
    margin-bottom: 20px;
  }

  a {
    transition: .2s ease;
  }

  a:hover {
    color: #ff00ff;
  }
  
  .headshot {
    background: url(./img/thumbnail.jpg);
    height: 200px;
    width: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 200px;
    margin: 10px auto 40px;
  };

  .bio {
    padding: 20px 50px;
    max-width: 600px;
    margin: 0 auto;
    h3 {
      font-size: 25px;
      line-height: 40px;
      font-family: "Roboto Slab";
      font-weight: 300;
    }

    @media (max-width: 800px) {
      padding: 20px !important;

    }
  }

  .kevin {

    max-width: 880px;
    display: flex;
    margin: 50px auto 0;
    flex-direction: column;
    justify-content: center;
    border: 1px solid white;
    padding: 40px 0;
    background: linear-gradient(to top, rgba(0,0,255,.5), rgba(0,0,0,.1) 90%);

    @media (max-width: 800px) {
      margin: 50px 10px !important;
    }

    h2 {

      font-size: 36px;
      text-align: center;
      margin: 10px 10px 20px;

    };

    .iconbox {

      width: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 40px 25px;
      transition: .2s ease;

      @media (max-width: 800px) {
        margin: 20px 10px;
        width: 150px;
      }

    }

    .iconbox:hover {
      margin: 35px 25px 45px;
      
    }

    .icons {

      min-height: 400px;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      img {
        height: 100px;
        margin: 10px auto 20px;
        text-align: center;
      }

      h4 {
        text-align: center;
        font-size: 13px;
        margin-bottom: 2px;
      }

      h5 {
        font-size: 18px;
        text-align: center;
        line-height: 30px;
        font-family: "Roboto Slab"
      }
      
      @media (max-width: 800px) {

        img {
          height: 60px !important;
          margin: 10px auto 5px;
        }

        h4 {
          font-size: 20px !important;
          line-height: 30px !important;
          margin: 0 !important;
        }

        h5 {
          font-size: 15px !important;
          line-height: 20px !important;
        }

      }
    
  }

`


export default Leadership