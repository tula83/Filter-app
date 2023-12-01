import { FaShoppingCart } from 'react-icons/fa';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import './Navigation.css'


const Navigation = ({handleInputChange,query}) => {
  return (
    <nav>
      
        <div className='nav-container'>
           <input type="text" className='search-input' 
            onChange={handleInputChange}
            value={query}
            placeholder='Enter your search shoes...'
          />
        
        </div>

        <div className='profile-container'>
        <a href="">
          <FiHeart className='nav-icons'></FiHeart>
        </a>
        <a href="">
        <AiOutlineShoppingCart className='nav-icons'></AiOutlineShoppingCart>
      </a>
      <a href="">
          <AiOutlineUserAdd className='nav-icons'></AiOutlineUserAdd>
        </a>

        </div>

          
    </nav>
  )
}

export default Navigation