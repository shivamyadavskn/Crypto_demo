import React from 'react';
import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

export default function PaginationComp({pageNumber=1, handlePageChange}) {
  return (
    <div className='flex justify-center my-8'>
      <Pagination count={10} page={pageNumber} onChange={handlePageChange} 
      sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--black)",
          border: "1px solid var(--text-grey)",
        },
      }}
      />
    </div>
  );
}
