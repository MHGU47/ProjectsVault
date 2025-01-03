import React from 'react'
import GlamPanel from './GlamPanel'
import { Link, Outlet } from 'react-router-dom'
import styles from './CSS/GlamSegment.module.css'

function GlamSegment({main}) {
  if (main) {
    return (
      <div>
        <div className={styles.glamSegment}>
          <GlamPanel renderForMain={main}/>
        </div>
        <div className={styles.seeMoreBtnContainer}>
          <Link to="/Library" className={styles.seeMoreBtn}>
            See more
          </Link>
          <Outlet/>
        </div>
      </div>
    )
  }
  return (
      <ol className={styles.glamSegment}>
        <GlamPanel renderForMain={false}/>
      </ol>
  )
}

export default GlamSegment