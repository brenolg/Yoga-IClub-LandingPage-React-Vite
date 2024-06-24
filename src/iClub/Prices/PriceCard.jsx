import PropTypes from 'prop-types';
import React from 'react';

export default function PriceCard({
  title, subTitle, price, list, link, isPremium, isTabletAndMobile, isMobile, isTablet,span
}) {
  const handleSubTitleClass = () => {
    // Mobile
    if (isMobile) {
      if (isPremium) {
        return 'text-xl';
      }
      return 'text-2xl';
    }
    // Tablet
    if (isTablet) {
      if (isPremium) {
        return 'text-xl';
      }
      return 'text-3xl';
    }

    // Desktop
    if (isPremium) {
      return 'text-xl';
    }
    return 'text-3xl';
  };

  return (

    <div
   
      className={`${isPremium ? 'premium' : 'notPremium'} card_container`}
    >

      <div>
        <div className="title_container">
          <h1 className={`${isMobile ? 'H2' : 'H1'} price-title`}>{title}</h1>
          <h4 className={`${handleSubTitleClass()} price-sub-title`}>{subTitle}</h4>
        </div>

        <h4 className="price">
          <span>{span}</span>{price}</h4>

        <ul className="text-md list">
          {list.map((li, index) => (
            <li key={`${li} ${index}`}>
              {li}
            </li>
          ))}
        </ul>
      </div>

      <button className="Button button " type="button">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          quero começar
        </a>
      </button>
    </div>

  );
}

PriceCard.propTypes = ({
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isTabletAndMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
});
