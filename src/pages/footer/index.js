import React from 'react'
import style from './footer.module.sass'

const Footer = () => {
  return (
    <div>
      <div className={style.nav}>
        <div className={style.boxs1}>

          <div className={style.foothead}>Visit Us</div>
          <div  className={style.address}>Teaxpress Private Unmited Plat No.319/9, Eastem  Bypass Rood,Near Baneshwar More, Silligurl bBengel-734006</div>
          



        </div>
        <div className={style.box2}>
          <div className={style.foothead}> Need Help?</div>
         
          <div className={style.boxneed}>
            
           <div>My Accound</div> 
            <div>Contact Us</div>
            <div>Rewards</div>
            <div>Help Center</div>
          <div>  About Teabox</div>
            <div>Shipping  & Delivary</div>
           <div> Tearms</div>
            <div>Privicy Police</div>
           <div> Refund Police</div>
            <div> Career</div>
            </div>
            </div>
            

          

       
        <div className={style.box3}>
          
        <div className={style.foothead}>Shop</div>
          
          <div className={style.boxneed} >
            <div>Tea<div/>
            <div>Trial Pocks</div>
            <div>Teaware</div>
            <div>Gifits</div>
            <div>Why Us?</div>
            <div>Reviews</div>
          
            </div>

            </div>
            </div>
        <div className={style.box4}>
          <div className={style.foothead} >Let's Be Friends</div>
          <div className={style.email}>Discover exclusive to easy sales, coptivating offers,and tantallzing exotic tea recipest Unsubscrible anytime</div>
          <input type='email' className={style.email1} placeholder='E-mail'/>


          
        </div>
     
      
     
     
     
      </div>
      </div>
  )
}

export default Footer
