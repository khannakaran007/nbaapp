import React from "react";
import styles from "./buttons.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const buttons = props => {
  

  let template = null;

  switch (props.type) {
    case "loadmore":
      template = (
        <div>
          <Button
            className={styles.btn_blue}
            bsStyle="primary"
            onClick={props.loadMore}
          >
            {props.cta}
          </Button>
        </div>
      );

      break;
      case "linkTo":
      template = (
        <div>

           <Link to={props.linkTo}>
          <Button
            className={styles.btn_blue}
            bsStyle="primary"
            
          >
            {props.cta}
          </Button>
          </Link> 
        </div>
      );

      break;


    default:
      template = null;
      break;
  }

  return template;
};

export default buttons;
