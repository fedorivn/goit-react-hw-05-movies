
import {PaginationItem} from 'components/Pagination/Pagination.styled'

export const Pagination = ({ totalPage, getPage }) => {
//   const PER_PAGE = 12; 
//   const offset = {current page} * BY_PAGE; 
//   const {current page data} = data  
//   .slice(offset, offset + BY_PAGE)  
//  .map(({ thumburl }) => <img src={thumburl} />);
//  const pageCount = Math.ceil(data.length / PER_PAGE);  

// const [CurrentPage, setCurrentPage] = useState(0);  
// const [data, setData] = useState([]);  


// useEffect(() => {  
//   get information();  
// }, []); function fetchdata() {  
//   search("https://ihsavru.me/Demo/uploads.json")  
//     .then((res) => res.json())  
//     .then((data) => {  
//       constant {  
//         course: {loads}  
//       } = data;  
//       setData(loads);  
//     });  
// }  
    const handlePageClick = event => {
      const currentPage = event.selected + 1;
  
      getPage(currentPage);
    };
  
    return (
      <>
        <PaginationItem
          breakLabel="..."
          nextLabel="&raquo;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={totalPage}
          previousLabel="&laquo;"
          renderOnZeroPageCount={null}
          className="pagination"
          pageClassName="page-btn"
          previousClassName="page-btn"
          nextClassName="page-btn"
          breakClassName="page-btn break-item"
          breakLinkClassName="break-link"
          activeClassName="active"
        />
      </>
    );
  };
  