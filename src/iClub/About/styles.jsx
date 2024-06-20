import styled from 'styled-components';
import bela from '../../assets/bela-about-desktop.png';

const AboutContainer = styled.section`
background: var(--C2-50p);
color: var(--C4);

.about-section  {
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 3rem;
  padding: var(--spacing-s7, 56px) 76px;
}

.img-container {
  width: 45%;
}

.image {
  border-radius: 337px 337px var(--spacing-spacing-none, 0px) var(--spacing-spacing-none, 0px);
  border-right: 16px solid var(--C2, #C9D3D0);
  border-bottom: 16px solid var(--C2, #C9D3D0);
  background: url(${bela}) lightgray 50% / cover no-repeat;
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  height: 100%;
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 3rem;
  justify-content: center;
  text-align: center;
  width: 45%;
}

.about-title {
  text-align: center;
    font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
}

.text-container p {
  text-align: center;
}

@media screen and (max-width: 960px) {
  .about-section  {
    flex-direction: column;
    padding: 32px var(--spacing-s5, 40px) var(--spacing-s5, 40px) var(--spacing-s5, 40px);
  }
  .img-container {
    width: 100%;
    height: 600px;
    border-radius: 337px 337px var(--spacing-spacing-none, 0px) var(--spacing-spacing-none, 0px);
  }
  .image {
    max-width: 100%;
  }
  .text-container {
    width: 100%;
  }
}
@media screen and (max-width: 550px) {
  .about-section  {
    padding: var(--spacing-s3, 24px) 16px 28px 16px;
  }}
`;

const ContactContainer = styled.section`
  color: var(--C4);
  flex-direction: row;
  padding: var(--spacing-s7, 56px) 76px;
  display: flex;
  justify-content: space-between;
  .doubt-about-title {
  font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
  }
.doubt-about-button {
  display: flex;
  width: 269px;
  color: var(--C1);
  padding: var(--spacing-s2, 16px);
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--radius-radius-full, 360px);
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  font-family: syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 1px;
  text-transform: lowercase;
  border: 0.1rem solid transparent;
  }
.doubt-about-button:hover {
  color: var(--C4);
  background-color: inherit;
  border: 0.1rem solid var(--C4);
}
  @media screen and (max-width: 960px) {
    padding: 32px;
    .doubt-about-title {
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0.1ch;
      line-height: 1.2em; 
    }
  }
@media screen and (max-width: 550px) {
  .doubt-about-title {
    text-align: center;
  
  }
    padding: 32px 16px;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
}
`;

export { AboutContainer, ContactContainer };
