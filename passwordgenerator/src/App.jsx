import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [Length, setLength] = useState(7)
  const [Numberallowed,setNumberallowed]=useState(false)
  const [characterallowed,setcharacterallowed]=useState(false)
  const [Password,setpassword]=useState('')
  function setnewlength(e)
  {
    setLength(e.target.value)
    console.log(Length)
    
  }
  const Passwordgenerato=useCallback(()=>
    {
        let pass=''
        let str='abcdefghijklomnpqrstUvwxyxABCDEFGHIGKLMNOPQRSTUVWXYZ';
        console.log(Length,'p')
         if(Numberallowed) str+='123456789';
        if(characterallowed) str+='#$%^&*'
       for (let i=1; i<=Length;i++) {
             let char=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
            
          
        }
       setpassword(pass)
      console.log(pass)

    },[Length,characterallowed,Numberallowed])
   useEffect(()=>Passwordgenerato(),[Length,characterallowed,Numberallowed])
      function clipboardhandle()
      {
        passwordref.current?.select()
        window.navigator.clipboard.writeText(Password)
      }
     const passwordref=useRef(null)
  return (
    <>
    <div className='main-box' style={{textAlign:'center'}}>
     <h1>Password generator</h1>
      <div >
        <input className='input1' type='text' value={Password} style={{width:'30%', textAlign:'center',padding:"10px",borderRadius:"8px"}} ref={passwordref}/>
        <button className='input1' onClick={clipboardhandle} style={{padding:'10px',borderRadius:"10px",fontWeight:"bolder",}}>COPY</button>
      </div>
      <input type='range'  min={6} max={50} value={Length} onChange={(e)=>setnewlength(e)}  />
      <label style={{fontSize:'20px'}}>Length:{Length}</label> 
      <input type='checkbox' defaultValue={Numberallowed} onChange={()=>setNumberallowed((prev)=>!prev)}></input>
      <label style={{fontSize:'20px'}}>Include Number</label>
      <input type='checkbox' defaultValue={characterallowed} onChange={()=>setcharacterallowed((prev)=>!prev)}></input>
      <label style={{fontSize:'20px'}}>Include Special character</label>
      </div>
    </>
  )
}

export default App
