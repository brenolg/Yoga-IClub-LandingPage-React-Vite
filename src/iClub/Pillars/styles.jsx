import styled from 'styled-components';
import firstImg from '../../assets/pillarFirst.png';
import secondImg from '../../assets/pillarSecond.png';
import thirdImg from '../../assets/pillarThird.png';

const PillarsContainer = styled.section`
  color: var(--C4);
  width: 100%;
  display: flex;
  padding: var(--spacing-spacing-none, 0px) 76px var(--spacing-s3, 24px) 76px;
  flex-direction: column;
  align-items: flex-start;
.pillar-question {
  font-family: syne, ivy, sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 530;
  line-height: 1.5em;
  letter-spacing: 0.2ch;
  color: var(--C4, #123939);
  position: relative;
  z-index: 2;
}
.pillars_container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  padding-bottom: 4rem;
  gap: 3rem;
}
.pillar-main-title {
  position: relative;
  z-index: 2;
  margin-bottom: 1.6rem;
  font-family: syne;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 137.143% */
}
.pillar-main-text {
  color: var(--C4, #123939);
  text-align: center;
  font-family: syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  letter-spacing: 0.72px; 
  max-width: 936px;
  margin: 0 auto;
  margin-bottom: 2.8rem;
}
.pillar-main-button{
  display: flex;
  padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s1, 8px);
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  color: var(--C1, #ffffff);
  font-family: Arial , sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.1ch;
  text-transform: lowercase;
  padding: 0.6em 1.2em;
  line-height: 1.5em;
  margin: 0 auto;
  border: 1px solid var(--C4, #123939);
  transition: all 0.3s;
}
.pillar-main-button:hover  {
  background: transparent;
  color: var(--C4, #123939);
}

@media screen and (max-width: 960px) {
  padding: var(--spacing-spacing-none, 0px) 32px 32px 32px;
  .pillar-main-title { 
    margin-bottom: 2.4rem;
  }
  .pillar-question {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
  }
  .pillar-main-title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 125% */
  }
  .pillar-main-text {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.27px;
  }
  .pillar-main-button {
    padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.6px; /* 120% */
    letter-spacing: 0.9px;
  }
}
@media screen and (max-width: 760px) {
  .pillars_container {
    display: grid;
    grid-template-columns: 1fr;
  }}
@media screen and (max-width: 550px) {
  padding: var(--spacing-spacing-none, 0px) var(--spacing-s3, 24px) 32px var(--spacing-s3, 24px);
  .pillar-main-title {
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px; /* 121.429% */
  }
  .pillar-main-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.08px;
  }
  .pillar-main-button {
    padding: 12px 18px 13.5px 18px;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 22.5px */
    letter-spacing: 0.375px;
  }
}
`;

const PillarCardStyles = styled.div`
.pillar-title {
  font-family: ivy , syne, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
  margin-bottom: 0.8rem;
}
.pillar-front {
  height: 365px;
  width: 324px;
  position: relative;
  border-radius: var(--spacing-s3, 24px);
}
.pillar-front.first {
  background: url(${firstImg}) ;
  background-size: cover;
  background-position: center;
}
.pillar-front.second{
  background: url(${secondImg}) ;
  background-size: cover;
  background-position: center;
}
.pillar-front.third {
  background: url(${thirdImg}) ;
  background-size: cover;
  background-position: center;
}
.plus-aba {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 52px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 0px 28px;
  background: var(--c-375, rgba(140, 160, 154, 0.75));
}
.pillar-back {
  height: 365px;
  width: 324px;
  display: flex;
  padding: var(--spacing-s3, 24px) 16px;
  flex-direction: column;
  border-radius: var(--spacing-s3, 24px);
  background: var(--c-250, rgba(201, 211, 208, 0.50));
  align-self: stretch;
}
.pilar-paragraph {
  color: var(--C4, #123939);
  font-family: syne;
  font-size: 18px;
  text-align: justify;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.36px;
  margin-bottom: 1.4rem;
}

.pillar-span {
  font-weight: 600;
}
@media screen and (max-width: 960px) {
  &&:nth-child(3) {
    margin: auto;
  }
}
@media screen and (max-width: 760px) {
  .pillar-back {
    width: 100%;
  }
  .pillar-front {
    width: 100%;
  }
  .pillar_img{
    width: 100%;
  }
  &&:nth-child(3) {
    margin: 0;
  }
  .pillar-front.first {
    background-position: top;
  }
  .pillar-front.second{
    background-position: top;
  }
  .pillar-front.third {
    background-position: bottom;
  }
}
@media screen and (max-width: 550px) {

}
`;

export { PillarCardStyles, PillarsContainer };
