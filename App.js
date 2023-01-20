import { startTransition, useState } from "react";
import { data } from "./Birthday"
function App()
{ 
  const [people,setPeople]=useState(data)
  const remove=(id)=>
  {
    let newPerson=people.filter((person) =>person.id!==id)
    setPeople(newPerson)
  }
  return(
    <>
    <h1 style={{backgroundColor:"yellow",color:"blue",textAlign:"center",fontSize:"40px"}}>
      YOU HAVE{people.length} BIRTHDAY'S TODAY
    </h1>
    {people.map((person)=> {const {id,name,age,city,image}=person
    return(
       <div className="container">
        <img src={image} alt={name} />
        <ul>
          <li><b>{name}</b></li>
          <li><b>{age}</b></li>
          <li><b>{city}</b></li>
        </ul>
        <div className="btn">
          <button onClick={() => remove(id)}><b>DISMISS</b></button>
        </div> 
       </div>
    ) 
     })}
    </>
  )
}
export default App