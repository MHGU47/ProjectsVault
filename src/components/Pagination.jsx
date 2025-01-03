import React from 'react';
import styles from './CSS/GlamPanel.module.css'
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 2,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if(currentPage !== lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if(currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  function hide(btn){
    return ((currentPage === 1 && btn === "Prev") || (currentPage === lastPage && btn === "Next"))
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
  <ul className={className}>
    <li className={`${hide("Prev") ? styles.page_button_hidden : styles.page_button}`} onClick={onPrevious}>
      <div className={`${hide("Prev") ? styles.page_link_hidden : styles.page_link}`}>Prev</div>
    </li>
    {paginationRange.map(pageNumber => {
      if (pageNumber === DOTS) {
        return <li className={styles.dots}>&#8230;</li>;
      }
      return (
        <li className={`${currentPage === pageNumber ? styles.page_button_active : styles.page_button}`}
        onClick={() => onPageChange(pageNumber)}>
          <div className={`${currentPage === pageNumber ? styles.page_link_active : styles.page_link}`}>{pageNumber}</div>
        </li>
      );
    })}
    <li className={`${hide("Next") ? styles.page_button_hidden : styles.page_button}`} onClick={onNext}>
      <div className={`${hide("Next") ? styles.page_link_hidden : styles.page_link}`}>Next</div>
    </li>
  </ul>
  );
};

export default Pagination;
