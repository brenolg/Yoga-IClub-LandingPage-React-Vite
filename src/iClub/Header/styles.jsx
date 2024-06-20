import styled from 'styled-components';

const HeaderContainer = styled.header`
background: var(--C2);
padding: 1.7rem 7.6rem ;
width: 100%;
position: sticky;
top: 0;
z-index: 99;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);

.link {
  height: 100%;
  align-items: center;
  display: flex;
}

.header-link {
  font-family: syne;
  font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 30px */
letter-spacing: 0.5px;
}
.headerNav {
  flex-direction: row;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}//1.5 de padding para não ficar colado no scroll da tela

.headerNav img {
  width: 141.882px;
}

.button_container {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.button {
  color: var(--C4);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button:active {
  scale: 0.98;
}

/* Tablet */
@media screen and (max-width: 960px) {
  padding: 1.7rem 3.2rem ;
  .headerNav {
    max-width: 538px;
    margin: auto;
  }
  .desktop-link {
    display: none;
  }
}
@media screen and (max-width: 550px) { 
  .header-link  {
    display: none;
  }
  .logo-header {
    margin: auto;
  }
}
`;

export default HeaderContainer;
