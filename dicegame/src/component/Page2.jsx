import Selectscore from "./Selectscore"
import Totalscore from "./Totalscore"
import style from "./Page2.module.css"
import Dicegame from "./Dicegame"
import { useEffect, useState } from "react"
import Rule from "./Rule"
function Page2()
{
  const [glassguard,setglassguard]=useState()
  const [score,setscore]=useState(0)
  const [random,setrandom]=useState(1)
  const [svalue,setvalue]=useState()
  const [error,seterror]=useState()
  const [showrules,setrules]=useState(false)
   const Resetscore=()=>
   {
      setscore(0)
   }
  function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min) + min)
}
  const setdice= ()=>
  {
    if(!svalue)
      {
     seterror('you have not selected any number')
      return;
      }
    seterror('')
     let randomnum=getRandomInt(1,7)
  
       setrandom(randomnum)
      
    setrandom(randomnum)
    console.log({randomnum})
    console.log({randomnum,svalue})
    if(svalue==randomnum)
    {
      setscore((prev)=>prev+randomnum)
    }
    else
    {
      setscore((prev)=>prev-2)
    }
    setvalue(undefined)
  }
  function setshow()
  {
    setrules((prev)=>!prev)
  }
    

  

    return(<>
     <div>
              <div className={style.mainbox}>
                <Totalscore score={score}/>
                <Selectscore svalue={svalue}
                     setvalue={setvalue}
                       error={error} 
                       seterror={seterror}/>
              </div>
              <Dicegame random={random}
               setdice={setdice}/>
               <div className={style.btnbox}>
                         <div >
                               <button onClick={Resetscore}className={style.btn}>Reset score</button>
                          </div>
                          <div className={style.rule}> 
                                 <button onClick={setshow} className={style.btn }>{showrules?'Hide':'Show'} Rule</button>
                         </div>
                         <div className={style.rulebox}>
                                 { showrules && <Rule/>}
                         </div> 
               </div>
      </div>
    </>)
    
}

export default Page2 