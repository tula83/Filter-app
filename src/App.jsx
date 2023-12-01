import { useState } from 'react'
import Navigation from './Navigation/Navigation.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import Products from './Products//Products.jsx'
import products from './Db/Data.jsx'
import Card from './components/Card.jsx'
import Recommend from './Recommend/Recommend.jsx'

function App() {

  const [selectedCategory,setSelectedCategory]=useState(null);
  const [query,setQuery]=useState("")
  const [clicked,setClicked]=useState(false);

  const handleChange=(e)=>{
    setSelectedCategory(e.target.value)
  }

  const handleInputChange=(e)=>{
    setQuery(e.target.value)
  }

  const handleClick=(e)=>{
    setSelectedCategory(e.target.value)
    console.log(selectedCategory)
    
  }


  const filteredItems=products.filter((product)=>product.title.toLowerCase().indexOf(query.toLowerCase())!==-1)

  const filterData=(products,selected,query)=>{

    let filteredProducts=products;

     if(query){
       filteredProducts=filteredItems;


     }

     if(selected){
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
      
    
     }

     return (
      
      
      <div style={{display:"flex",flexWrap:'wrap',justifyContent:"center",backgroundColor:"#363748"}}>

         { filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          
        
        />
      )
        
     )
       }
       </div>
       )
      }

  const result=filterData(products,selectedCategory,query)

  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation handleInputChange={handleInputChange}></Navigation>
    <Recommend handleClick={handleClick} category={selectedCategory}/>
    <Products result={result}/>
    

      
         
    </>
  )
}

export default App
