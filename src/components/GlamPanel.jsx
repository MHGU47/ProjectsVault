import React, { useMemo, useState } from 'react';
import { data } from '../constants'
import LookCard from './LookCard';
import Pagination from './Pagination'
import styles from './CSS/GlamPanel.module.css'

function GlamPanel({renderForMain}) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const cardsPerPage = 6;
  // const lastIndex = currentPage * cardsPerPage;
  // const firstIndex = lastIndex - cardsPerPage;
  // const cards = data.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(data.length / cardsPerPage)
  // const numbers = [...Array(npage + 1).keys()].slice(1)
  let panels = [];

  // function prePage() {
  //   if(currentPage  !== 1) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }
  
  // function changeCPage(id) {
  //   setCurrentPage(id)
  // }
  
  // function nextPage() {
  //   if(currentPage  !== npage) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }

  let PageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const allLooks = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize]);

  // function hide(id){
  //   if((currentPage === 1 && id === "Prev") || (currentPage === npage && id === "Next"))
  //     return true
  // }

  for (let index = 0; index < 6; index++) {panels.push(data[index])}

  if(renderForMain){
    return panels.map((panel) => <LookCard look={panel}/>)
  } else {
    return(
      <div>
        <div className={styles.cards}>
          {allLooks.map((item) => {return(<LookCard look={item}/>)})}
        </div>
        <nav>
          {/* <ul className={styles.links}>
            <li className={`${hide("Prev") ? styles.page_button_hidden : styles.page_button}`}
            onClick={prePage}>
              <a className={`${hide("Prev") ? styles.page_link_hidden : styles.page_link}`}>Prev</a>
            </li>
            {
              numbers.map((n, i) =>(
                <li className={`${currentPage === n ? styles.page_button_active : styles.page_button}`} key={i}
                onClick={()=> changeCPage(n)}>
                  <a className={`${currentPage === n ? styles.page_link_active : styles.page_link}`}>{n}</a>
                </li>
              ))
            }
            <li className={`${hide("Next") ? styles.page_button_hidden : styles.page_button}`}
            onClick={nextPage}>
              <a className={`${hide("Next") ? styles.page_link_hidden : styles.page_link}`}>Next</a>
            </li>
          </ul> */}
          <Pagination
            className={styles.links}
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </nav>
      </div>
    )
  }
}

export default GlamPanel