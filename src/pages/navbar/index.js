import React from 'react'
import navbar from "./navbar.module.sass"
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoimg from '..//..//images/logo.jpeg'


const Navbar = () => {
  return (
    <div className={navbar.nav1}>
      <div className={navbar.menu}>
       Agricultural Products Online Shopping!!!

          </div>


           <div className={navbar.navv}>
          
          <div className={navbar.nav}>
            <img src={logoimg} alt="" className={navbar.logo1}/>

            
            <div className={navbar.colo}>BRANDS</div>
            <div className={navbar.org}>SEEDS</div>
            <div>CROP PROTECTION</div>
            <div className={navbar.colo}>CROP NUTRITION</div>
            <div>EQUIPMENTS</div>
            <div>ANIMAL HUSBANDARY</div>
            <div>ORGANIC</div>
            <div>SERVICES</div>
            </div>
            <div className={navbar.icon}>
                <SearchIcon/>
                <Person2Icon/>
                <ShoppingCartIcon/>
            </div>
            </div> 
            
            
            
            
            
            
            
            
 
       
      
    </div>
  )
}

export default Navbar

