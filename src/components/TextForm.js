import React, { useState } from 'react'


// Here importing state from react
let wordLength = 0,characterLength=0;
export default function TextForm(props) {
    
    
    
    // by below statements text is set to Start Here and later can be changed using setText.
    const [text, setText] = useState("Start Here ")
    // text = "kjbgwef"; // wrong way to set text
    // setText("jdgfwwe")// Correct way to set Text but at wrong place, will throw error.

    // countWords is the function to count the words in a text
    const countWords = () => {
        let cnt = 0;
        let ch_cnt =0;
        if (text === "") {
            wordLength = 0;
        }
        else {
            for (let i in text) {
                if (text[i] === " " && (text[(i - 1)] !== " ")) {
                    cnt++;
                }
                if (text[i] !== " " ) {
                    ch_cnt++;
                }
                
            }

           wordLength = cnt;
           characterLength = ch_cnt;
        }
    }
    countWords();
    
    
    const Convert_to_Uppercase = () => {
        //on getting a click event changing the text to UpperCase using text.toUpperCase function.
        setText(text.toUpperCase());
        // Correct way to set Text, setText is used for changing the text inside Brackets. 
        // it can be called only inside a function only.
        props.showAlert("Text have been converted to uppercase")
    }
    //receiving attributes as 'e' parameter here from textarea.
    const handleOnChange = (e) => {
        
        //using e.target.value to set the value in textarea  
        setText(e.target.value)
        countWords();
    }
    const Convert_to_lowercase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text have been converted to lowercase")
        
    }
    
    const Copy = () => {
        const c = document.getElementById("mybox");
        c.select();
        navigator.clipboard.writeText(c.value);
        props.showAlert("Text copied to clipboard")

    }
    const Remove_Extra_Spaces = () => {
        // here text.split is breakig down the string from spaces, /[ ]+/ this represents the regex (regular expressions) which means to get the character set of spaces. and text.split will break the string from spaces 
        let newText = text.split(/[ ]+/)
        // inserting only one space between the string
        setText(newText.join(" "))
        props.showAlert("Extra spaces Removed")

    }
    
    const reset = () => {
       
        setText("");
        props.showAlert("Text Field Resetted")
        
    }
    
    

    return (
        <>
            <div>
                <h1 className={`${props.theme==='th-white'?'dark':'whiteText'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className={`form-label ${props.theme==='th-white'?'dark':'whiteText'}`}> Case Converter</label>
                    {/* Using onChange event to check any change in textarea and passing handleOnChange function if any change happens.
                    it is necessary to use onChange event here for using state change in textarea.               
                 */}
                    <textarea className={`form-control`} id="mybox" value={text}  onChange={handleOnChange} rows="10"></textarea>
                </div>
                {/* //Using onClick to get the click event and calling handleOnClick function on firing of event                            */}
                <button className={`btn ${props.theme} mx-5`} onClick={Convert_to_Uppercase}>Convert to Uppercase</button>
                <button className={`btn ${props.theme} mx-5`} onClick={reset}>Reset</button>
                <button className={`btn ${props.theme} mx-5`} onClick={Convert_to_lowercase}>Convert to Lowercase</button>
                <button className={`btn ${props.theme} mx-5`} onClick={Copy}>Copy</button>
                <button className={`btn ${props.theme} mx-5`} onClick={Remove_Extra_Spaces}>Remove Extra Spaces</button>

            </div>

            {/* ------------------------SUMMARY----------------------------------- */}

            <div className={`wordinfo my-1`} >
                <h2 className={`${props.theme==='th-white'?'dark':'whiteText'}`}>Summary</h2>
                <p className={`${props.theme==='th-white'?'darkText':'whiteText'}`}>{`${wordLength} words and ${characterLength} characters`}</p>
                <p className={`${props.theme==='th-white'?'darkText':'whiteText'}`}>{0.008 * text.split(" ").length} minutes to read</p>
                <h2 className={`${props.theme==='th-white'?'darkText':'whiteText'}`}>Preview</h2>
                <p className={`${props.theme==='th-white'?'darkText':'whiteText'}`}>{text.length === 0 ? "Enter text above to preview" : text}</p>
            </div>
           
            
        </>
    )
}
