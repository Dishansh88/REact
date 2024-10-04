import style from "./Totalscore.module.css"
function Totalscore({score})
{
   return(
   <>
     <div className={style.maincontainer}>
             <h1>{score}</h1>
             <p>Total score</p>
   </div>
   </>
    )
}
export default Totalscore