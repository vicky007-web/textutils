import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('');

    const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared","success");
     }
   const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase","success");
   }
   const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","success");
   }
   const handleCopy = ()=> {
    navigator.clipboard.writeText(text);
    props.showAlert("text copied","success");
   }
   const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed ","success");
   }
   



const handleonchange = (event)=>{
    setText(event.target.value)
}
  return (
    <>
    <div className='container' style={{color:props.mode ==="dark"?"white":"#042743"}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode ==="dark"?"#13466e":"white",color:props.mode ==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
  <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Uppercase</button>
  <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to lowercase</button>
  <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra space</button>
  <button disabled={text.length===0} className= "btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
</div>
</div>
<div className='container'style={{color:props.mode ==="dark"?"white":"#042743"}} my-3>
  <h1>Your Text Summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length}Minutes To Read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing To Preview!"}</p>
</div>

</>
  )
}
