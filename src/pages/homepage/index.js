import React from 'react'

import style from './homepage.module.sass'

import "react-responsive-carousel/lib/styles/carousel.min.css";

import homeimg from '../../images/homeimg.jfif'
// import card1img from '../../images/homeimg.png'
import { Divider, Link } from '@mui/material'
import shopingimg4 from '../../images/shopingimg4img.jfif'
import shopings1img from'..//../images/shopings1img.jfif'
import shopingimg2 from "..//..//images/shoping2img.jfif"
import card2img from '../../images/shopingimg3.jfif'
import shopingimg5 from '..//..//images/shopingimg55.jfif'
import shopingimg21 from'..//..//images/imgsale.jfif'

import newimg1 from '../..//images/new1.jfif'
import newimg2 from '../../images/new2.jfif'
import newimg3 from'../../images/new3.jfif'
import newimg4 from'../../images/new4.jfif'
import newboximg1 from '../../images/newbox1.jfif'
import newboximg2 from '..//..//images/newbox2.jfif'
import newboximg3 from '..//..//images/newbox3.jfif'
import newboximg4 from'..//..//images/newbox4.jfif'
import weddingimg from '..//..//images/love.jpg'
import loveimg2 from '..//..//images/loveimg2.jpg'
import { Carousel } from 'react-responsive-carousel'
import slide1 from "../../images/homeimg.jfif"
import slide2 from "../../images/img2.jfif"
import slide3 from "../../images/new2.jfif"

const Homepage = () => {



const shop = [

{
  head : "Limited Quantity",
  image : shopings1img,
  review : "*****",
  para : "Originally, vegetables were collected from the wild by hunter-gatherers and entered cultivation)",
  rupees : "$1,410.00",
  button : "ADD TO CART"  

},
{
  head : "Limited Quantity",
  image : shopingimg2,
  review : "*****",
  para : "Vegetables can be eaten either raw or cooked and play an important role in human nutrition)",
  rupees : "$1,410.00",
  button : "ADD TO CART"  

},
{
  head : "Limited Quantity",
  image : card2img,
  review : "*****",
  para : "As an adjective, the word vegetable is used in scientific and technical contexts with a different and much)",
  rupees : "$1,410.00",
  button : "ADD TO CART"  

},
{
  head : "Limited Quantity",
  image : shopingimg5,
  review : "*****",
  para : "Authentic Indian Chai Trial Pack(Free Vallencia Class Teacup & Ideal Teaspoon)",
  rupees : "$1,410.00",
  button : "ADD TO CART"  

}





]

const shop1 = [

  {
    head : "Limited Quantity",
    image : newimg1,
    review : "*****",
    para : "The cool climate and northern latitude has certain advantages for agriculture",
    rupees : "$1,410.00",
    button : "ADD TO CART"  
  
  },
  {
    head : "Limited Quantity",
    image : newimg2,
    review : "*****",
    para : "The Norsemen were pastoral people who relied heavily on a succession of successful)",
    rupees : "$1,410.00",
    button : "ADD TO CART"  
  
  },
  {
    head : "Limited Quantity",
    image : newimg3,
    review : "*****",
    para : "Farming in Iceland during the Middle Ages was complemented by hunting and gathering",
    rupees : "$1,410.00",
    button : "ADD TO CART"  
  
  },
  {
    head : "Limited Quantity",
    image :newimg4 ,
    review : "*****",
    para : "Early farms had a significant impact on the landscape in Iceland)",
    rupees : "$1,410.00",
    button : "ADD TO CART"  
  
  }
  
  
  
  
  
  ]

const secure = [
  {
    img : newboximg1,
    head : "100% SECURE PAYMENTS",
    para : "Moving your card details to a much more secured place"


  },

  {
    img : newboximg2,
    head : "santhosh",
    para : "Moving your card details to a much more secured place"


  },
  {
    img : newboximg3,
    head : "losu priya",
    para : "Moving your card details to a much more secured place"


  },
  {
    img : newboximg4,
    head : "100% SECURE PAYMENTS",
    para : "Moving your card details to a much more secured place"


  }
]
const subcard = [
  {
    img : weddingimg,
    head : "santhoshpriya",
    para : "Veran Vethaika Pata Nall 14-12-2021 Edam Tusion Center"
  },
  {
    img : loveimg2,
    head : "Murugesan Nanthini etc",
    para : "Chenai Hot pups"
  },
  {
    img : weddingimg,
    head : "santhoshpriya",
    para : "Veran Vethaika Pata Nall 14-12-2021 Edam Tusion Center"
  },
  {
    img : weddingimg,
    head : "santhoshpriya",
    para : "Veran Vethaika Pata Nall 14-12-2021 Edam Tusion Center"
  }





]




  return(

  
  <div className={style.home1}>


<Carousel  autoPlay={true} showThumbs={false} className={style.slide} transitionTime={1000} infiniteLoop={true} interval={3000} >
                <div >
                    <img src={slide1} alt='no img' width="100%" height="cover" className={style.slide1}/> 
                   
                </div>
                <div>
                    <img src={slide2} alt='no img' className={style.slide1}/>
                   
                </div>
                <div>
                    <img src={slide3} alt='no img' className={style.slide1}/>
                   
                </div>
            </Carousel>


    <div className={style.home}>

      <div className={style.homeleft}>
        <Divider className={style.ind}>Agriculture</Divider>
        <div className={style.style}>Prodects</div>
        <Divider className={style.style2}>SALE</Divider>
        <div className={style.upto}>
          <div className={style.up}>UPTO</div>
          <div className={style.of}>30%OFF</div>
          <div className={style.sit}>SITEWIDE</div>
          <button className={style.shop}>SHOP NOW</button>
        </div>


      </div>

      <div className={style.homeright}>
        <img src={homeimg} alt=''  className={style.hmimg}/>
      </div>
    </div>
    <div className={style.bor}>
      <div className={style.day}>
        
      </div>

    </div>

    <div className={style.sel}>SHOP OUR BESTSELLERS</div>



    <div className={style.card11}>

{ shop1.map((x,index)=> (
  <div key={index} className={style.cards}>

        <div key={index} className={style.cardone}>
         {x.head}

        </div>
        <div key={index} className={style.card1}>

          {/* <img className={style.cardimg} src={card1img } alt="no imgfound"/>> */}
          <img className={style.cardimg} src={x.image} alt='' />
          <div className={style.star}>{x.review}</div>
          <div className={style.cardpara}>{x.para}</div>
          <div>{x.rupees}</div>
          <button className={style.car}>{x.button}</button>
        </div>

        </div>
   ) )  }
        
                
      </div>
      



    <div className={style.sel}>EXPLORE THE CATEGORIES</div>





    <div className={style.card22}>

      <div className={style.card21}>
        <div className={style.flat}>FLAT</div>
        <div className={style.off}>25%OFF</div>
        <div className={style.green}>SEEDS</div>
        <button className={style.button}>SHOP NOW</button>
        <img className={style.card21img} src={shopingimg21} alt='' />
      </div>


      <div className={style.card21}>
        <div className={style.flat}>FLAT</div>
        <div className={style.off}>25%OFF</div>
        <div className={style.green}>SEEDS</div>
        <button className={style.button}>SHOP NOW</button>
        <img className={style.card21img} src={shopingimg4} alt='' />
      </div>


      <div className={style.card21}>
        <div className={style.flat}>FLAT</div>
        <div className={style.off}>25%OFF</div>
        <div className={style.green}>SEEDS</div>
        <button className={style.button}>SHOP NOW</button>
        <img className={style.card21img} src={shopingimg5} alt='' />
      </div>

    </div>

    <div>
      <div className={style.box31}>VEGETABLE SEEDS</div>
    </div>


    <div className={style.card11}>

{ shop.map((x,index)=> (
  <div key={index} className={style.cards}>

        <div key={index} className={style.cardone}>
         {x.head}

        </div>
        <div key={index} className={style.card1}>

          {/* <img className={style.cardimg} src={card1img } alt="no imgfound"/>> */}
          <img className={style.cardimg} src={x.image} alt='' />
          <div className={style.star}>{x.review}</div>
          <div className={style.cardpara}>{x.para}</div>
          <div>{x.rupees}</div>
          <button className={style.car}>{x.button}</button>
        </div>

        </div>
   ) )  }       
      {/* </div>

      <div className={style.box18}>
        {secure.map((x,index)=>(
      <div key={index} className={style.new1box}>
        <div> <img className={style.img1box} src={x.img}  alt=""/></div>
        <div className={style.box1}>{x.head}</div>
        <div>{x.para} </div>
      </div>

     )   )} */}


     
      {/* </div>
      
       <div className={style.box31}>Just For Try</div>


       <div className={style.newbox22}>
       {subcard.map((x,index)=>(
      <div key={index} className={style.newbox2}>
        <div><img className={style.love} src={x.img}alt=""/></div>
        <div className={style.box3para}>{x.head}</div>
        <div>{x.para}</div>
      </div>
     

       ) )} */}

</div>
      
    
    <div>
      <div className={style.sel}>TERMS & CONDITIONS</div>
      <div className={style.para}>
        <ul>
          <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quaerat doloremque soluta illum commodi.</p></li>


          <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quaerat doloremque soluta illum commodi.</p></li>


          <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quaerat doloremque soluta illum commodi.</p></li>


          <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quaerat doloremque soluta illum commodi.</p></li>


          <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quaerat doloremque soluta illum commodi.</p></li>


          <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quaerat doloremque soluta illum commodi.</p></li>


          <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deserunt quaerat doloremque soluta illum commodi.</p></li>
        </ul>
      </div>
    </div>






  </div>
)
}
export default Homepage
