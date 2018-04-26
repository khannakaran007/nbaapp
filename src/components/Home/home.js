import React from 'react'
import Slider from '../Widgets/NewsSlider/slider'
import NewsItem from '../Widgets/NewsItems/news_item';
import VideoList from '../Widgets/VideoList/videolist';





const Home = () => {
  return (
    <div>
      <Slider  start={3} amount={6} type="featured" settings={{
dots:false

      }}  />

      <NewsItem  
      type="card" 
      start={3}
      amount={3}
      loadmore={true}
      
      
      />
      <VideoList  
      type="card" 
      title={true}
      start={0}
      amount={3}
      loadmore={true}
      
      
      />

     
    </div>
  )
}

export default Home
