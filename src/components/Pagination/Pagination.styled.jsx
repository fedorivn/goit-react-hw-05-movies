import ReactPaginate from 'react-paginate';

// import styled from '@emotion/styled';

// export const PaginationItem = styled(ReactPaginate)`
//   display: flex;
//   justify-content: center;
//   margin: 20px;
// `
    

// export const BreakLink= styled.a` 
//     font-size: 24px;
  
// `

//   export const PaginatedBtn = styled.button`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40px;
//     height: 40px;
//     border-radius: 5px;
//     background-color: #ccc9c6;
//     margin-left: 5px;
//     cursor: pointer;
  

// &:hover {
//     background-color: #174b99;
//   }

//  &.active {
//     background-color: #174b99;
//   }
//   `

import styled from 'styled-components';

export const PaginationItem = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin: 20px;

  .break-link {
    font-size: 24px;
  }

  .page-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #ccc9c6;
    margin-left: 5px;
    cursor: pointer;
  }

  .page-btn:hover {
    background-color: #174b99;
  }

  .page-btn.active {
    background-color: #174b99;
  }
`;