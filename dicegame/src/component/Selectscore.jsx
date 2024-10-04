import { useState } from "react"
import style from "./Select.module.css"
function Selectscore({seterror,svalue,setvalue,error})
{
    const Avalue=[1,2,3,4,5,6]
    const [color,setcolor]=useState()
 function setnum(value)
 {
    setvalue(value)
    seterror('')
 }
   
return( 
    < >
    
    <div className={style.firstbox}>
         <p style={{color:'red'}}>{error}</p>
        <div className={style.mainbox}>
       {Avalue.map((value,i)=>(
           <div 
           iselected={svalue==value}
            onClick={()=>setnum(value)} key={i} className={style.box}>
                {value}
        </div>
        
       ))}
       </div>
          <h1>Select Number </h1>
    </div>
    
    </>
)
}

export default Selectscore