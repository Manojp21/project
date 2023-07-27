import React,{useState} from 'react'


export default function TextForm(props) {
 
  //Upper case
  const HandleUpClick =() =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
  }
  //Lower case
  const HandleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success");
  }

  // Clear the text
  const HandleClear =() =>{
    let newText =" ";
    setText(newText)
    props.showAlert("Text Cleared","success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to Speach","success")
  }

  const handleOnChange =(event) =>{
    setText(event.target.value)
  }

  // copy the text
  const handleCopy =()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to Clipboard","success");
  }

// remove extra space

const handleExtraSpace = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces Removed","success");
}


  const [text, setText] = useState('');

  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'#042743' }}>
    <h1 className='mb-3'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
    </div>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleUpClick}>Convert to Uppercase</button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleLoClick}>Convert to Lowercase</button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleClear}>Clear text</button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={speak}>speak</button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Space</button>
 
 </div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743' }}>
<h1>Your text summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Character</p>
<p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0? text:"Nothing to preview!"}</p>
</div>



 </>
  )
}







