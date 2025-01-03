import React from 'react'
import styles from './CSS/SortBar.module.css'

function SortBar() {
  return (
    <div className={styles.sortBarContainer}>
        <select>
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
        </select>
        <select>
            <option value="likes">Likes</option>
            <option value="upload">Upload Date</option>
            <option value="alphabetical">Alphabetical</option>
        </select>
    </div>
  )
}

export default SortBar