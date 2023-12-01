import Button from "../components/Button.jsx"
import './Recommend.css'
const Recommend = ({handleClick,category}) => {
  return (
    <div  className="recommend">
      <h2> Reommended</h2>
       <div className="recommend-flex">
      <Button handleClick={handleClick} value='' title='all products' 
       isSelected={category===''}
      />
      <Button handleClick={handleClick} value='Nike' title='Nike'  isSelected={category==='Nike'}></Button>
      <Button onClickHandler={handleClick} value="Puma" title="Puma"   isSelected={category==='Puma'} />
      <Button onClickHandler={handleClick} value="Vans" title="Vans"  isSelected={category==='Vans'}/>
      </div>

    </div>
  )
}

export default Recommend