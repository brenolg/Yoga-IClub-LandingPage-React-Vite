import styled from 'styled-components';
import background from '../../assets/heroSub.jpg';


const HeroSubContainer = styled.section`
  position: relative;
  display: flex;
  padding: 32px var(--spacing-s12, 96px) var(--spacing-s7, 56px) 76px;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  background: var(--C2);
  .sub-hero-sub-img {
    position: relative;
    z-index: 2;
    width: 456px;
    height: 344px;
    background: url(${background});
    border-radius: 24px;
    background-size: cover;
    background-position: center;
  }
  .divider-hero {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 136px;
    transform: translateY(50%);
    z-index: 1;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    padding: var(--spacing-spacing-none, 0px) 32px 32px 32px;
    gap: var(--spacing-s3, 24px);
    .sub-hero-sub-img {
      width: 100%;
      height: 504px;
    }
  }
  @media screen and (max-width: 550px) {
      .sub-hero-sub-img {
      width: 100%;
      height: 240px;
    }
  }
`;

const TextContainer = styled.div`
color: var(--C4, #123939);
width: 604px;
text-align: center;
display: flex;
flex-direction: column;
gap: 16px;
position: relative;
z-index: 2;
.sub-hero-strong-txt {
text-align: center;
font-family: syne;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 27px; /* 150% */
letter-spacing: 0.54px;
}
.sub-hero-normal-txt {
font-family: syne;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.32px;
}

@media screen and (max-width: 960px) {
  width: 100%;
  .sub-hero-strong-txt {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px; /* 164.286% */
    letter-spacing: 0.14px;
  }
  .sub-hero-normal-txt  {
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.54px;
  }
  @media screen and (max-width: 550px) {
      .sub-hero-strong-txt {
        font-size: 12.5px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 160% */
        letter-spacing: 0.5px;
      }
      .sub-hero-normal-txt  {
          font-size: 11.5px;
          font-style: normal;
          font-weight: 500;
          line-height: 19px;
          letter-spacing: 0.575px;
      }
  }
}
`;


export { HeroSubContainer, TextContainer };
