import styled from 'styled-components';

const NumberContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 32px 76px 48px 76px;
gap: 3.2rem;
.numbers-main-title {
  font-family: syne, ivy, sans-serif;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em; 
  color: var(--C4, #123939);
  margin-right: auto;
}
.numbers-sub-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (max-width: 960px) {
  padding: var(--spacing-s3, 24px) 32px 32px 32px;
  gap: 2.4rem;
  .numbers-sub-container {
    justify-content: space-around;
    gap: 1.6rem;
  }
  .numbers-main-title {
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px; /* 121.429% */
    letter-spacing: 0.56px;
  }
}
@media screen and (max-width: 550px) { 
    padding: var(--spacing-s3, 24px) var(--spacing-s3, 24px) 28px var(--spacing-s3, 24px);
    .numbers-main-title {
      text-align: center;
      font-family: Syne;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 134%; /* 29.48px */
      letter-spacing: 0.55px;
    }
}



`;

const NumberCard  = styled.div`
max-width: 20.64rem;
display: flex;
flex-direction: column;
align-items: center;
.percent-number {
  color: var(--C4, #123939);
text-align: center;
font-family: ivy;
font-size: 75px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 3.75px;
}
.percent-text {
  color: var(--C4, #123939);
  width: 172px;
  text-align: center;
  font-family: syne , ivy , sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.1ch;
  font-style: normal;
  font-weight: 520;
  line-height: 1.5em;
}
@media screen and (max-width: 960px) {
  .percent-number {
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.2px;
  }
  .percent-text {
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 148.148% */
    letter-spacing: 0.54px;
  }
}
@media screen and (max-width: 550px){
  
}
`;

export { NumberContainer, NumberCard };
