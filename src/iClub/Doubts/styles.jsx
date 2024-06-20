import styled from 'styled-components';

const DoubtsContainer = styled.section`
  color: var(--C4);
  padding: var(--spacing-s7, 56px) 76px;
  padding-bottom: 3.2rem;
  .main_container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  .doubt-main-title {
    font-family: syne, ivy, sans-serif;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1ch;
    line-height: 1.2em;
    color: var(--C4);
    margin-bottom: 3.2rem;
  }
@media screen and (max-width: 960px) {
  padding: 32px 32px 48px 32px;
  .doubt-main-title {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1ch;
    line-height: 1.2em; 
    margin-bottom: 2.4rem;
  }
}
@media screen and (max-width: 550px) {
    .doubt-main-title {
    text-align: center;
  }
}
`;

const DoubtCardStyles = styled.div`
align-items: flex-start;
background: var(--C2-50p);
border-radius: var(--radius-radius-rounded);
box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-shrink: 0;
gap: 2.4rem;
justify-content: space-between;
padding: 1.6rem 0;
width: 100%;

.question {
  background: var(--C2);
  padding: 1rem 3.2rem;
  width: 100%;
}

.answer {
  padding: 0 3.2rem;
  width: 100%;
}
`;

export { DoubtCardStyles, DoubtsContainer };
