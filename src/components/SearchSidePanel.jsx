import { Grid } from '@mui/material';
import React from 'react'
import styles from './CSS/SearchSidePanel.module.css'

function SearchSidePanel() {
    const imageClick = () => {
        alert("Clicked");
    }
    return (
        <div className={styles.searchSidePanelContainer}>
            <div className="dropdowns">
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
            {/* <div className="filter-icons">
                <Grid container spacing={0}>
                    <Grid xs={3}>
                        <item><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></item>
                    </Grid>
                    <Grid xs={3}>
                        <item><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></item>
                    </Grid>
                    <Grid xs={3}>
                        <item><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></item>
                    </Grid>
                    <Grid xs={3}>
                        <item><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></item>
                    </Grid>
                </Grid>
            </div> */}
            <div class={styles.grid_container}>
                <div class={styles.grid_item}><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></div>
                <div class={styles.grid_item}><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></div>
                <div class={styles.grid_item}><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></div>
                <div class={styles.grid_item}><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></div>
                <div class={styles.grid_item}><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></div>
                <div class={styles.grid_item}><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></div>
                <div class={styles.grid_item}><img src="https://via.placeholder.com/32" onClick={() => imageClick()}/></div>
            </div>
        </div>
    )
}

export default SearchSidePanel