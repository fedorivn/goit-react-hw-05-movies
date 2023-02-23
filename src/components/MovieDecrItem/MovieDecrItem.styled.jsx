import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieContainer=styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
`

export const MovieTitle= styled.h1`
    color:grey;
`
export const MovieSubtitle= styled.h3`
    color: grey;
`
export const Description = styled.p`
    color: grey;
`
export const InfoSubtitle = styled.h2`
  color:grey;  
`

export const MovieLink= styled(NavLink)`
 display: inline-block;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
  color: white;
  font-weight:600;
  background-color:#3a87fb;
  transition: background-color 300ms linear;

  &:hover {
    background-color:#104087;
  }
`
   