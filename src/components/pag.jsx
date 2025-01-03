import React from 'react'
import styles from './CSS/GlamSegment.module.css'
import Pagination from './Pagination'
import { data } from '../constants'
import GlamSegment from './GlamSegment'
import { useState, useMemo } from 'react'
import LookCard from './LookCard'

function PageThingy() {

  let PageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize]);

  return (
    <div className={styles.glamSegment}>
      {/* <GlamPanel renderForMain={false}/> */}


      {currentTableData.map((item) => {
        return(<LookCard look={item}/>)
      })}

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}

export default PageThingy
// export default GlamSegment