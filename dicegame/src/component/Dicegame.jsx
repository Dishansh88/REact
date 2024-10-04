import { useState } from 'react'
import style from './Dice.module.css'
function Dicegame({random,setdice})
{
    
    
    return(
        <>
        <div>
                <div className={style.maincontainer}>
                     <div className="img" onClick={setdice} >
                     <img src={`./image/diceimages/dice_${random}.png`} alt="pic"/>
                     </div>
                     <p>Click To Roll The Dice</p>
                     
                 </div>
           </div>
        </>
    )


}
export default Dicegame