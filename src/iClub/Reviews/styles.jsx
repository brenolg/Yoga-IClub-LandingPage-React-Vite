import styled from 'styled-components';

const ReviewsContainer = styled.section`
display: flex;
padding: var(--spacing-s7, 56px) 76px;
flex-direction: column;
align-items: center;
gap: var(--spacing-s3, 24px);
align-self: stretch;
.reviews-main-title {
  color: var(--C4);
  margin-right: auto;
    font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
}
.reviews-sub-container {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}
.review-card {
  display: flex;
  min-width: 296px;
  max-width: 360px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
}
.review-img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
}
.review-text{
  font-family: syne , ivy , sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.1ch;
  font-style: normal;
  font-weight: 520;
  line-height: 1.5em;
  color: var(--C4, #123939);
  text-align: center;
}
.review-name {
  color: var(--C4, #123939);
  text-align: center;
  font-family: Syne;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.27px;
}
.stars-container {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
}
@media screen and (max-width: 960px){
  padding: var(--spacing-s5, 40px) 32px 32px 32px;
  .reviews-main-title {
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.1ch;
    line-height: 1.2em; 
  }
  .reviews-sub-container {
    justify-content: space-around;
    gap: 1.6rem;
  }
  .review-card:last-child {
    max-width: 600px;
  }
}
@media screen and (max-width: 550px){
  padding: 28px var(--spacing-s3, 24px) 36px var(--spacing-s3, 24px);
  .review-card {
    max-width: 600px;
  }
  .reviews-main-title {
    text-align: center;
    margin-right: 0;
  }
}
`;

export default ReviewsContainer;
