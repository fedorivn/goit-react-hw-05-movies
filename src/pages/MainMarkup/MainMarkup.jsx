import { Header, SiteNavLink, Logo } from 'pages/MainMarkup/MainMarkup.styled';

import { TfiVideoClapper } from 'react-icons/tfi';
import { IconContext } from 'react-icons';
import { Outlet } from 'react-router-dom';

export const MainMarkup = ({children}) => {
  return (
    <div>
      <Header>
      <IconContext.Provider value={{ color: 'white', size: '24px' }}>
        <Logo to="/">
          <TfiVideoClapper />
        </Logo>
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
