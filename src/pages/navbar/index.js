import React from 'react'
import navbar from "./navbar.module.sass"
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
  return (
    <div className={navbar.nav1}>
      <div className={navbar.menu}>
        <div >Independance Day Sale is Live|Upto 30%Off
          </div>
          </div>


           <div className={navbar.navv}>
          
          <div className={navbar.nav}>
            <div className={navbar.big}>GLOWBOX</div>
            
            <div className={navbar.colo}>NEW</div>
            <div className={navbar.org}>Lipstick</div>
            <div>Lipbom+</div>
            <div className={navbar.colo}>TRIAL PACKS</div>
            <div>GIFTS</div>
            <div>TEAWARE</div>
            <div>WHY TEABOX?</div>
            <div>REVIWS</div>
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

