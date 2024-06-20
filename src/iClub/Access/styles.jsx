import styled from 'styled-components';

const AccessContainer = styled.section`
background: var(--C2-50p);
.access_section {
  color: var(--C4);
  padding: 32px 76px 48px 76px;
}
.access-title {
  text-align: left;
  margin-bottom: 3.2rem;
  font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
  color: var(--C4, #123939);
}
.main_container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  width: 100%;
}
@media screen and (max-width: 960px) {
  .access-title {
  margin-bottom: 2.4rem;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em; 
  }
  .access_section {
  padding: var(--spacing-s3, 24px) 32px 32px 32px;
  }
  .main_container {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 550px) {
  .access_section {
    padding: 28px var(--spacing-s3, 24px) 36px var(--spacing-s3, 24px);
  }
  .main_container {
  grid-template-columns: 1fr ;
  }
  .access-title {
    text-align: center;
  }
}
`;

const AccessCardStyles = styled.section`
align-items: center;
background: var(--C2);
border-radius: 1.6rem;
flex-shrink: 0;
padding: 1rem 1.3rem;
text-align: center;
max-width: 100%;
padding-bottom: 2rem;
border-radius: 1.6rem;

img {
  width: 100%;
  margin-bottom:2rem;
  border-radius: 1rem;
}

`;

export { AccessCardStyles, AccessContainer };
