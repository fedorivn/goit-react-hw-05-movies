import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const SiteNav = styled.nav``;
export const Logo = styled.a`
  fill: white;
  cursor: pointer;
  height: 32px;
  width: 32px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #3a87fb;
`;

export const SiteNavLink = styled(NavLink)`
  font-weight: 500;
  margin-left: 20px;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 4px;
  color: white;
  transition: background-color, color 200ms linear;
  text-decoration: none;

  &.active {
  }

  :hover:not(.active) {
    color: #3a87fb;
    background-color: white;
  }
`;
