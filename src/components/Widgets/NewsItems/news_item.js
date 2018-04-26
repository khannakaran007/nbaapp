import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";


import styles from "./news_item.css";

import axios from "axios";
import   Button from '../Buttons/buttons';
import CardINfo from '../CardInfo/cardinfo'

import { URL } from "../../../config";

class NewsItem extends Component {
  state = {
    news: [],
    teams:[],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount = () => {
    this.request(this.state.start, this.state.end);
  };

loadmore=()=>{
let end =this.state.end+this.state.amount;

this.request(this.state.end,end);



}


  renderNews = type => {
    let template = null;

    switch (type) {
      case "card":
        template = this.state.news.map((item, i) => {
          return (
         

            <CSSTransition
                        classNames={{
                            enter:styles.newsList_wrapper,
                            enterActive:styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>

                            <div className={styles.newslist_item}>
                            <CardINfo teams={this.state.teams}  teamId={item.team} date={item.date} />
                                <Link to={`/articles/${item.id}`}>
                                   
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
        
       
          );
        });

        break;

      default:
        template = null;
        break;
    }

    return template;
  };

  request = (start, end) => {
    axios.get(`${URL}/teams`).then(response => {
      this.setState({
        teams: response.data
      });
    });



    axios.get(`${URL}/articles?_start=${start} &_end=${end}`).then(response => {
      this.setState({
        news: [...this.state.news, ...response.data]
      });
    });
  };

  render() {
  
    return (
      <div>

<TransitionGroup component="div"
className="list"
>


<div>{this.renderNews(this.props.type)}</div>
</TransitionGroup>

        <Button  type="loadmore"
                  loadMore={()=>this.loadmore()}
                  cta="Load More News"
        ></Button>

        
      </div>
    );
  }
}
export default NewsItem;
