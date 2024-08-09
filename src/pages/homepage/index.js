import React from 'react'

import style from './homepage.module.sass'

import homeimg from '../../images/hmimg.png'
// import card1img from '../../images/homeimg.png'
import { Divider } from '@mui/material'
import card21img from '../../images/images.jfif'
import image1 from '../../images/img1.jfif'
import image2 from'../../images/img2.webp'
import images from '../../images/img3.3.jpg'
import homeimg1 from '../../images/homeimg1.jpg'
import homeimg3 from '../../images/home img3.jpg'

const Homepage = () => (
  <div className={style.home1}>


    <div className={style.home}>

      <div className={style.homeleft}>
        <Divider className={style.ind}>77th INDIAN</Divider>
        <div className={style.style}>INDEPENDENCE DAY</div>
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
        <div Style='font-size:35px;line-height: 35px; font-weight:bold;'>3</div>
        <div Style='font-size:18px'>days</div>
      </div>
      <div Style='font-size:60px;'>:</div>
      <div className={style.day}>
        <div Style='font-size:35px;line-height: 35px;  font-weight:bold;'>10</div>
        <div Style='font-size:18px'>hours</div>
      </div>
      <div Style='font-size:60px;'>:</div>

      <div className={style.day}>
        <div Style='font-size:35px;line-height: 35px;  font-weight:bold;'>03</div>
        <div Style='font-size:18px'>minutes</div>
      </div>

      <div Style='font-size:60px;'>:</div>

      <div className={style.day}>
        <div Style='font-size:35px;line-height: 35px;  font-weight:bold;'>14</div>
        <div Style='font-size:18px'>seconds</div>
      </div>

    </div>

    <div className={style.sel}>SHOP OUR BESTSELLERS</div>

    <div className={style.cards}>

      <div className={style.card11}>

        <div className={style.cardone}>
          LIMITED QUANITITY

        </div>
        <div className={style.card1}>

          {/* <img className={style.cardimg} src={card1img } alt="no imgfound"/>> */}
          <img className={style.cardimg} src={image1} alt='' />
          <div className={style.star}>*****</div>
          <div className={style.cardpara}>Authentic Indian Chai Trial Pack(Free Vallencia Class Teacup & Ideal Teaspoon)</div>
          <div>$1,410.00</div>
          <bitton className={style.car}>ADD TO CART</bitton>
        </div>
      </div>




      <div className={style.card11}>

        <div className={style.cardone}>
          LIMITED QUANITITY

        </div>
        <div className={style.card1}>

          <img className={style.cardimg} src={image2} alt="no imgfound" />
          <div className={style.star}>*****</div>
          <div className={style.cardpara}>Authentic Indian Chai Trial Pack(Free Vallencia Class Teacup & Ideal Teaspoon)</div>
          <div>$1,410.00</div>
          <bitton className={style.car}>ADD TO CART</bitton>
        </div>
      </div>
      <div className={style.card11}>

        <div className={style.cardone}>
          LIMITED QUANITITY

        </div>
        <div className={style.card1}>

          <img className={style.cardimg} src={images} alt="no imgfound" />
          <div className={style.star}>*****</div>
          <div className={style.cardpara}>Authentic Indian Chai Trial Pack(Free Vallencia Class Teacup & Ideal Teaspoon)</div>
          <div>$1,410.00</div>
          <bitton className={style.car}>ADD TO CART</bitton>
        </div>
      </div>

    </div>






    <div className={style.sel}>EXPLORE THE CATEGORIES</div>





    <div className={style.card22}>

      <div className={style.card21}>
        <div className={style.flat}>FLAT</div>
        <div className={style.off}>25%OFF</div>
        <div className={style.green}>ON GREEN TEAS</div>
        <button className={style.button}>SHOP NOW</button>
        <img className={style.card21img} src={homeimg1} alt='' />
      </div>


      <div className={style.card21}>
        <div className={style.flat}>FLAT</div>
        <div className={style.off}>25%OFF</div>
        <div className={style.green}>ON GREEN TEAS</div>
        <button className={style.button}>SHOP NOW</button>
        <img className={style.card21img} src={card21img} alt='' />
      </div>


      <div className={style.card21}>
        <div className={style.flat}>FLAT</div>
        <div className={style.off}>25%OFF</div>
        <div className={style.green}>ON GREEN TEAS</div>
        <button className={style.button}>SHOP NOW</button>
        <img className={style.card21img} src={homeimg3} alt='' />
      </div>

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

export default Homepage
