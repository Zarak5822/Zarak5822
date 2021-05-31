import React,{useState} from 'react'
import SilkySlider from './Sliky_slider';
import DataArry from './DramaData';
import DramaData from './DramaData';
import '../App.css';

// const Drama_detail = (props) => {
    const Drama_detail = () => {
        // console.log(props)
   const [items, setItems] = useState(DramaData)
   const filterItems=(categItems)=>{
        const UpdateItem=DramaData.filter((curElm)=>{
            return curElm.category === categItems;
        });
        setItems(UpdateItem);
        console.log(UpdateItem);
    }
    return (
       <>
    
        <div className="headings-style mt-5 ml-5">
          <h6 style={{fontWeight:"bold"}} onClick={()=> filterItems('Hum') }> Hum Tv</h6> 
          <h6 style={{fontWeight:"bold"}} className="ml-3" onClick={()=> filterItems('Geo') }> Geo Entertainment</h6> 
          <h6 style={{fontWeight:"bold"}} className="ml-3" onClick={()=> filterItems('Ary') }> ARY Digital</h6> 
           <h6 style={{fontWeight:"bold"}}  className="ml-3" onClick={()=> setItems(DramaData)}> All</h6>  
          
        </div>

            <div className="container mt-5">
            {items.map((elem)=>{
                const {id, imgsrc, title, category}=elem;
                return(
                    <>
                    <div className="cards my-5" style={{width: "18rem;"}}>
                    <img className="card-img-top" src={imgsrc} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-title">{category}</h6>
                    </div>
                    </div>
                    </>

                );
            })}
                   
        </div>
    
       </>
    )
    
}

export default Drama_detail
