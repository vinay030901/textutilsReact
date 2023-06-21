import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        setText("");
        props.showAlert("Text cleared", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById("textarea");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard", "success");
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h1>{props.heading}</h1>

                <div className="form-group mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }} value={text} onChange={handleChange} id="textarea" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>

            </div>
            <div className="containter my-3" style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in text area to preview it here"}</p>
            </div>
        </>
    )
}
