import styled from 'styled-components';

const FooterContainer = styled.div`
background: var(--C2);
color: var(--C4);
display: flex;
padding: var(--spacing-s3, 24px) 76px;
justify-content: space-between;
align-items: center;
align-self: center;

.logo {
  width: 14.188rem;
  height: 3.6rem;
}
.social-links-footer {
    gap: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.social-links a img{
  width: 4rem;
}
.home-icon{
  width: 2.6rem;
  height: 2.6rem;
}
@media screen and (max-width: 960px) {
  padding: var(--spacing-s3, 24px) 32px;
}
@media screen and (max-width: 550px) {
  padding: var(--spacing-s3, 24px) 16px;
}
@media screen and (max-width: 390px) {
  justify-content: center;
  .logo {
    display: none;
  }
}

`;

export default FooterContainer;
