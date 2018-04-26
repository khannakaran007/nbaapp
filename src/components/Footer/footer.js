import React from 'react'

import { Link } from 'react-router-dom';

import styles from './footer.css';

import {CURRENT_YEAR} from '../../config'


const Footer = () => {
  return (
    <div className={styles.footer}>


<Link  to="/" className={styles.logo}>
<img  alt="nba " src="/images/nba_logo.png" />
</Link>

<div className={styles.right}>
@  {CURRENT_YEAR} NBA all right reserved. 

</div>



      
    </div>
  )
}

export default Footer
