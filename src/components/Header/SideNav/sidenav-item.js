import React from "react";
import FontAwesome from "react-fontawesome";
import styles from "./sidenav.css";

import { Link } from "react-router-dom";

const SideNavItem = () => {
  const items = [
    {
      type: styles.option,
      link: "/",
      icon: "home",
      text: "home"
    },
    {
        type: styles.option,
        link: "/news",
        icon: "address-card",
        text: "news"
      },
    
    
    {
        type: styles.option,
        link: "/videos",
        icon: "play",
        text: "videos"
      },
      {
        type: styles.option,
        link: "/signout",
        icon: "sign-out",
        text: "sign-out"
      },
      {
        type: styles.option,
        link: "/signin",
        icon: "sign-in",
        text: "sign-in"
      }

  ];

  const showOptions = () => {
    return items.map((item,i)=>{

        return (

            <div className={item.type} key={i}>
        <Link to={item.link}>
          <FontAwesome name={item.icon} />
        </Link>
        {item.text}
      </div>
        )



    });
  };

  return (
    <div>
      {showOptions()}

      {/* <div className={styles.option}>
        <Link to="/">
          <FontAwesome name="home" />
        </Link>
        home
      </div> */}
    </div>
  );
};

export default SideNavItem;
