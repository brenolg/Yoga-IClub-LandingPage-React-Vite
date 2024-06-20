import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import yogaLogo from '../../images/yoga_iclub.svg';
import defaultScrollProps from '../../utils/defaultScrollProps';
import HeaderContainer from './styles';

function Header() {
  return (

    <HeaderContainer>
      <nav className=" headerNav">
        <button className='header-link' type="button">
          <Link to="start" {...defaultScrollProps}> início </Link>
        </button>
        <button className='header-link desktop-link' type="button">
          <Link to="students" {...defaultScrollProps}> depoimentos </Link>
        </button>

        <Link className='logo-header'to="prices" {...defaultScrollProps}>
          <img alt="logo" src={yogaLogo} />
        </Link>

        <button className='header-link desktop-link' type="button">
          <Link to="doubts" {...defaultScrollProps}> dúvidas</Link>
        </button>
        <button className='header-link' type="button">
          <Link to="contact" {...defaultScrollProps}> contato </Link>
        </button>
      </nav>

    </HeaderContainer>
  );
}

Header.propTypes = ({
  isTablet: PropTypes.bool.isRequired,
});

export default Header;
