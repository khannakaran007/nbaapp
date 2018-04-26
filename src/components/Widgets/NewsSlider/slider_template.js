import React from 'react'
import styles from './slider.css'
import {Link} from 'react-router-dom'





import Slick from 'react-slick'




const SliderTemplate = (props) => {

let template=null;


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
     
      };


switch (props.type) {


    case ('featured'):
    
    template=props.data.map((news,i)=>{

return (
<div key={i}> 

<div className={styles.featured_item}  >

<div className={styles.featured_image} style={{
background:`url(../images/articles/${news.image})`

}} ></div>
<Link to={`articles/${news.id}`} >

<div  className={styles.featured_caption}>

{news.title}

</div>

</Link>







</div>

</div>

)

    })
        
        break;

    default:
    template=null;
        break;
}







 




  return (
    <div>
   <Slick   {...settings}>

{template}

   </Slick>

    </div>
  )
}

export default SliderTemplate
