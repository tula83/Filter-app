import  Color from  './Color/Color.jsx'
import Category from './Category/Category.jsx'
import Price from './Price/Price.jsx'
import './Sidebar.css'

const Sidebar = ({handleChange}) => {

  return (
    <>
     <section className='sidebar'>
     <div className='logo-container'>
         <h1>🛒</h1>
         
      
     </div>

       <Category handleChange={
        handleChange
       }></Category>

       <Price handleChange={handleChange}></Price>
       
       <Color handleChange={handleChange}></Color>


     </section>

    </>
  )
}

export default Sidebar