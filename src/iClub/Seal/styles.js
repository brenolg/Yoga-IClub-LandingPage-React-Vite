import styled from 'styled-components';

const SealContainer = styled.section`
display: flex;
align-items: center;
align-self: stretch;
justify-content: center;
padding-bottom: 4.8rem;
flex-direction: column;
padding-left: 76px;
padding-right: 76px;
position: relative;
.seal-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  padding-bottom: 4.4rem;
}
.seal-img {
  width: 15rem;
  height: 15rem;
}
.seal-text {
color: var(--C4, #123939);
max-width: 60rem;
text-align: center;
/* text-md */
font-family: syne;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 26px; /* 144.444% */
letter-spacing: 0.36px;
}
.seal-text span {
  color: var(--C4, #123939);
font-family: syne;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px;
letter-spacing: 0.4px;
}
.seal-button {
  display: flex;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s1, 8px);
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  font-family: syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: lowercase;
  color: var(--C1);
  height: 5.6rem;
}
.seal-elipse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 177px;
  z-index: -1;
}
@media screen and (max-width: 960px) {
  .seal-text{
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
  }
  .seal-text span {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.32px;
  }
  .seal-button {
  display: flex;
  padding: var(--spacing-s2, 16px) var(--spacing-s4, 32px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-s1, 8px);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21.6px; /* 120% */
  letter-spacing: 0.9px;
  text-transform: lowercase;
  }
}
@media screen and (max-width: 550px) {
  padding: var(--spacing-s3, 24px) 16px 28px 16px;
  .seal-img {
    width: 15rem;
    height: 15rem;
  }
  .seal-container {
    flex-direction: column;
    gap: 1.6rem;
    padding-bottom: 3.6rem;
  }
  .seal-elipse {
    height: 100%;
  }
  .seal-button {
    display: flex;
    padding: 16px 24px 18px 24px;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s1, 8px);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
    letter-spacing: 0.5px;
  }

}

`;

export default SealContainer;
