import React, { useEffect, useState } from 'react'

function TextChanger() {
  const texts = ["Hi, I'm Adnan Ali"];
  const [currentText, setCurrentText] = useState("");
  const [endValue,setEndValue] = useState(true);
  const [isForword,setIsForword] = useState(true);
  const [index, setIndex] =useState(0);

  useEffect(()=> {
     const interValId = setInterval(()=>{
      setCurrentText(texts[index].substring(0, endValue));
      if(isForword){
         setEndValue((prev) => prev + 1)
      }
      else{
        setEndValue((prev) => prev - 1)
      }
      if (endValue > texts[index].length+10) {
        setIsForword(false)
      }
      if (endValue < 2.1) {
        setIsForword(true)
        setIndex((prev)=>prev&texts.length)
      }
     }, 50);

     return ()=>clearInterval(interValId)
  }, [endValue, isForword, index, texts]);
  return (
    <div className='transition ease duration-300 '>{currentText}</div>
  )
}

export default TextChanger