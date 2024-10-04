import style from './Page1.module.css'
function Page1({toggle})
{
    return(
        <>
        <div className={style.maincontainer}>
            <div>
            <img src='./image/dices 1.png' alt='pic'/>
            </div>
             <div>
                <div className={style.h}>
                <h1>DICE  GAME</h1>
                </div>
                 <div className={style.btn}>
                    <button onClick={toggle}>PLAY GAME</button></div>
             </div>
        </div>
        </>
    )

}
export default Page1 