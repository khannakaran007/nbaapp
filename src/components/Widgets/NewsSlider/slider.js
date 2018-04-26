import React, { Component } from 'react'
import  axios from 'axios';



import SliderTemplate from './slider_template'




 class Slider extends Component {

state={
    articles:[]
}



componentWillMount = () => {
  
axios.get(`http://localhost:3000/articles?_start=${this.props.start}&_end=${this.props.amount}`).then(response=>{

this.setState({

 articles:response.data

})

})

}


  render() {



    return (
      <div>
<SliderTemplate  data={this.state.articles} type={this.props.type}  settings={this.props.settings}  />

        
      </div>
    )
  }
}

export default Slider