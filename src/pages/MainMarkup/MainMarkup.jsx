import { Header, SiteNavLink } from 'pages/MainMarkup/MainMarkup.styled';

import { TfiVideoClapper } from 'react-icons/tfi';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"

export const MainMarkup = ({children}) => {
  return (
    <div>
      <Header>
      <IconContext.Provider value={{ color: 'white', size: '24px' }}>
        <Link to="/">
          <TfiVideoClapper />
        </Link>
      </IconContext.Provider>
      <nav>
        <SiteNavLink to="/" end >Home</SiteNavLink>
        <SiteNavLink to="/movies">Movies</SiteNavLink>
      </nav>
    </Header>
    {children}
    </div>
  );
};

MainMarkup.propTypes ={
  children: PropTypes.element.isRequired
}