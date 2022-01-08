import React, {useState}  from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to upper case","Success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lower case","Success");
    }

    const handleClearClick = () =>{
        let newText = ' ';
        setText(newText);
        props.showAlert(" Text has been cleared","Success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text has been copied","Success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","Success");
    }

    const [text,setText] = useState('');
    // video 12
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className ="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className ="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className ="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className ="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className ="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button className ="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
       </div>
       
       <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
           <h1>Your text summary</h1>
           <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
           <p>{0.008 *text.split(" ").length} minutes to read</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter something to preview"}</p>
       </div>
       </>
    )
}