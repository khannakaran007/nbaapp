import React from "react";
import { Link } from "react-router-dom";
import styles from "./videolist.css";

import CardInfo from "../CardInfo/cardinfo";

const VideoListTemplate = props => {
  return props.data.map((item, i) => {
    return (
      <Link to={`videos/${item.id}`} key={i}>
        <div className={styles.videolist_item_wrapper} >

<div  className={styles.left} 

style={{

background:`url(images/videos/${item.image})`

}}

>

<div></div>


    </div>

<div  className={styles.right}>
<h2> {item.title}  </h2>

</div>


        </div>

        
      </Link>
    );
  });
};

export default VideoListTemplate;
