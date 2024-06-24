import styled from 'styled-components';
import hero from '../../assets/hero.jpg';

const HeroContainer = styled.section`
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: var(--radius-r5, 128px) 76px 164px 76px;
  padding-top: 5.2rem;
  background: url(${hero}) ;
  background-size: cover;
  background-position: bottom;
  position: relative;
  .hero-color-bg {
    background: #c9d3d075;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
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
    padding-top: 5.8rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-bottom: 12.8rem;
  }
`;

const TextContainerStyle = styled.div`
  max-width: 744px;
  position: relative;
  z-index: 2;
  padding: 40px 24px 52px 24px;
  padding-top: 5.8rem;
  padding-bottom: 5.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  color: var(--C4);
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  justify-content: center;
  text-align: center;
  width: 100%;
  border-radius: var(--spacing-s5, 40px);
  background: rgba(201, 211, 208, 0.65);
.text-hero {
  font-family: syne;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.54px;
}
.hero-button {
  display: flex;
  padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
  justify-content: center;
  align-items: center;
  color: var(--C1, #EFEFEF);
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  font-family: syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: lowercase;
  border: 0.1rem solid var(--C4);
}
.hero-button:hover {
  background-color: inherit;
  border: 0.1rem solid var(--C4);
  color: var(--C4);
}

@media screen and (max-width: 960px) {
  max-width: 100%;
  display: flex;
  max-width: 680px;
  padding: 32px 32px var(--spacing-s5, 40px) 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s3, 24px);
  align-self: stretch;
  .text-hero {
    font-family: syne;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: 0.54px;
  }
  .hero-button  {
    display: flex;
    padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-family: syne;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.6px; /* 120% */
    letter-spacing: 0.9px;
    text-transform: lowercase;

  }
}

@media screen and (max-width: 550px) {
  .text-hero {
    font-size: 11.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 139.13% */
    letter-spacing: 0.345px;
  }
  .hero-button {
    padding: 12px 18px 13.5px 18px;
    gap: var(--spacing-s1, 8px);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 22.5px */
    letter-spacing: 0.375px;
    height: 35.5px;
  }

}
`;


export { HeroContainer, TextContainerStyle };
