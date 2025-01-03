import '../App.css';
import React from 'react'
import BreakdownPanel from './BreakdownPanel'
import styles from './CSS/LookBreakdown.module.css'
import SlideShow from './SlideShow';
import {images} from '../constants'

function LookBreakdown() {
  return (
    <div className={styles.LooksbookContainer}>
      <div style={{color: "white"}}>
        Text
      </div>
      <div className={styles.imagesContainer}>
        {/* <h6>Picture of Look goes here</h6> */}
        <SlideShow slides={images}/>
      </div>
      <div className={styles.midsection}>
        <div className={styles.lookInfoContainer}>
          <h6>HAIRSTYLES/HEAD PARTS</h6>
          <BreakdownPanel/>
          <h6>BODY PAINT</h6>
          <BreakdownPanel/>
          <BreakdownPanel/>
          <BreakdownPanel/>
          <h6>LAYERS</h6>
          <BreakdownPanel/>
          <BreakdownPanel/>
          <BreakdownPanel/>
        </div>
        <div className={styles.rightSideContainer}>

        </div>
      </div>
    </div>
  )
}

export default LookBreakdown