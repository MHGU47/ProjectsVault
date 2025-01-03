import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './CSS/LookCard.module.css'

const LookCard = ({ look: { ID, Image, Name } }) => {
  console.log(Name)
  return (
    <div className={styles.look} key={ID}>
      <div>
        <p>Text</p>
      </div>

      <div>
        {/* <img src={Image !== "N/A" ? Image : "https://via.placeholder.com/400"} alt={Name} /> */}
        <Link to="/looksbook"><img src={Image} alt={Name} /></Link>
      </div>

      <div>
        <span>Text</span>
        <h3>{Name}</h3>
      </div>
      <Outlet/>
    </div>
  );
}

export default LookCard;