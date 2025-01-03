import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './CSS/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.article_strip}>
        <article className={styles.article_panel}>
            News
        </article>
        <article className={styles.article_panel}>
            Stuff
        </article>
        <article className={styles.article_panel}>
            Things
        </article>
    </div>
  )
}

export default Hero