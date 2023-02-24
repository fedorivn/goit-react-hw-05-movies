import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  gap: 10px;

`;

export const SearchFormBtn = styled.button`
background-color: #fff;

width: 100px;
font: inherit;
font-size: 20px;
border: 2px solid #3a87fb;
background-color: transparent;
outline: none;
padding: 6px;
border-radius: 5px;
color: #3a87fb;
font-weight: 600;

  &:hover {
    background-color: #3a87fb;
  color: white;
  }
`;

// export const SearchFormBtnLabel = styled.label`
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   /* overflow: hidden; */
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;

export const SearchFormInput = styled.input`
  background-color: #fff;

  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 2px solid #3a87fb;
  background-color: transparent;
  outline: none;
  padding: 6px;
  border-radius: 5px;
  color: #3a87fb;

  /* &::placeholder {
    font: inherit;
    font-size: 18px;
    color:black;
    background-color: #fff;
  } */

  &:focus {
    background-color: #fff;
  }
`;
