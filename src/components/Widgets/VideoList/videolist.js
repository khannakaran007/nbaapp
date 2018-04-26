import React, { Component } from "react";


import styles from "./videolist.css";

import axios from "axios";
import Button from "../Buttons/buttons";
import  VideoListTemplate from '../VideoList/videolisttemplate';

import { URL } from "../../../config";

class VideoList extends Component {
  state = {
    videos: [],
    teams:[],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount = () => {
    this.request(this.state.start, this.state.end);
  };

  loadMoreVideos = () => {};

  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        loadMore={() => this.loadMoreVideos()}
        cta="Load More Videos"
        type="loadmore"
      />
    ) : (
      <Button linkTo="/videos" cta=" videos" type="linkTo" />
    );
  };


  renderNews=()=>{
let template=null

switch (this.props.type) {
    case 'card':template= <VideoListTemplate
    
    data={this.state.videos} teams={this.state.teams} 
    
    ></VideoListTemplate>
        
        break;

    default:
    template=null
        break;
}


return template

  }

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> videos
      </h3>
    ) : null;
  };

  request = (start, end) => {
    axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
  
  
  
      axios.get(`${URL}/videos?_start=${start} &_end=${end}`).then(response => {
        this.setState({
          videos : [...this.state.videos, ...response.data]
        });
      });
  };

  render() {
   
    return (
      <div>
        <div className={styles.video_wrapper}>{this.renderTitle()}
        {this.renderNews()}
        
        
        {this.renderButton()}
        </div>



      </div>
    );
  }
}
export default VideoList;
