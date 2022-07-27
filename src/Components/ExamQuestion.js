import React from 'react'
import ExamResult from './ExamResult'
const ExamQuestion = (props) => {
    var uuid = require('uuid');
    let examResultData= []
    let randomIndex = Math.floor(Math.random() * 4)
    if(props.weight){
        let holder = []
        switch (props.weight.answerKey) {
            case "KG":
                if(props.weight.key === "LBS"){
                    holder[0] = {value: (props.weight.number / 2).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number / 2.4).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number / 2.1).toFixed(0) , unit: props.weight.answerKey} 

                }else { // KEY = TON
                    holder[0] = {value: (props.weight.number * 100) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number * 10000) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number * 2200) , unit: props.weight.answerKey} 
                }
                break;
            case "LBS":
                if(props.weight.key === "KG"){
                    holder[0] = {value: (props.weight.number * 2).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number * 2.4).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number * 2.1).toFixed(0) , unit: props.weight.answerKey} 

                }else { // KEY = TON
                    holder[0] = {value: (props.weight.number * 2000).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number * 2400).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number * 2100).toFixed(0) , unit: props.weight.answerKey} 
                }
                break;
            case "TON":
                if(props.weight.key === "LBS"){
                    holder[0] = {value: (props.weight.number / 2000).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number / 2400).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number / 2100).toFixed(0) , unit: props.weight.answerKey} 

                }else { // KEY = KG
                    holder[0] = {value: (props.weight.number / 100 ).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number / 1000 ).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number / 2200 ).toFixed(0) , unit: props.weight.answerKey} 
                }
                break;
        
            default:
                break;
        }
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.weight.answer, unit: props.weight.answerKey }
            else {
                let popORshift = Math.floor(Math.random() * 2)
                if(popORshift) examResultData[i] = holder.pop()
                else examResultData[i] = holder.shift()
            }
        }
    }
    if(props.range){
        let unit = ""
        props.range.key === "angle" ? unit = "°" : unit = "M"
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.range.answer, unit: unit}
            else {
                let randomGap = Math.floor(Math.random() * (200 - 100 + 1)) + 100
                let plusORminus = Math.floor(Math.random() * 2)
                if(plusORminus) examResultData[i] = {value: props.range.answer + randomGap, unit: unit}
                else examResultData[i] = {value: props.range.answer - randomGap, unit: unit}
            }
        }
    }
    if(props.POL){
        var rngFrom = [...props.POL.fakeAnswers]
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.POL.answer, unit: "line"}
            else {
                let popORshift = Math.floor(Math.random() * 2)
                if(popORshift) examResultData[i] = {value: rngFrom.pop(), unit: "line"}
                else examResultData[i] = {value: rngFrom.shift(), unit: "line"}
            }
        }
    }
    if(props.handSignal){
        var rngFrom = [...props.handSignal.fakeAnswers]
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.handSignal.answer, unit: ""}
            else {
                let popORshift = Math.floor(Math.random() * 2)
                if(popORshift) examResultData[i] = {value: rngFrom.pop(), unit: ""}
                else examResultData[i] = {value: rngFrom.shift(), unit: ""}
            }
        }
    }
    
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        // setFormData(prevFormData => {
        //     return {
        //         ...prevFormData,
        //         [name]: type === "checkbox" ? checked : value
        //     }
        // })
    }

    return (
        <div className='exam-question'>
            <div className='exam-question-line'>
                {   props.weight &&
                    <div><span>{props.order}.</span> How many {props.weight.answerKey} is <span >({props.weight.number})</span> {props.weight.key} . Do any calculations in this space.</div>
                }
                {
                    props.range &&
                    <div>
                        <div><span>{props.order}.</span> Using the grove <span >({props.range.grove})</span> Range Diagram.</div>
                        <div className='exam-question-data'>
                            <div>{props.range.data1} = {props.range.dataNum1} {props.range.data1 === "Angle" ? "°" : "M"} </div>
                            <div>{props.range.data2} = {props.range.dataNum2} {props.range.data2 === "angle" ? "°" : "M"}</div>
                        </div>
                        
                        <div className='exam-question-mainQst'><span>What is the {props.range.key}?</span></div>
                    </div>
                }
                {   props.POL &&
                    <div><span>{props.order}.</span> Using the grove <span >({props.POL.grove})</span>load chart . how many parts of line are needed to lift <span >({`${props.POL.weight} ${props.POL.unit}`})</span> .</div>
                }
                {   props.handSignal &&
                    <div>
                        <div><span>{props.order}.</span> What does this sign mean?.</div>
                        <div>
                            <img src={props.handSignal.img} className="exam-question-handSignal-img" />
                        </div>
                    </div>
                }
            </div>
            <div className='exam-question-results'>
                <ExamResult data={examResultData[0]} order="A" handleChange={handleChange} name={props.inputName} id={uuid.v1()} checked={props.checked} />
                <ExamResult data={examResultData[1]} order="B" handleChange={handleChange} name={props.inputName} id={uuid.v1()} checked={props.checked}  />
                <ExamResult data={examResultData[2]} order="C" handleChange={handleChange} name={props.inputName} id={uuid.v1()} checked={props.checked}  />
                <ExamResult data={examResultData[3]} order="D" handleChange={handleChange} name={props.inputName} id={uuid.v1()} checked={props.checked}  />

            </div>

    </div>
      
    )
  }
  export default ExamQuestion;