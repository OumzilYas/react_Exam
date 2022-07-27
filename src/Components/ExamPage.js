import React, {useState, useEffect} from 'react'
import ExamQuestion from './ExamQuestion';
import './style.css'; 

import {generateWeigthsEelements, generateRanges, generatePartOfLineElements, generateHandSignalsElements} from '../generate_Exam/examGenerator'
const ExamPage = (props) => {
    var uuid = require('uuid');
    const [examQuestions, setExamQuestions] = useState([])
    function generateWeigths(){
        let weights=[]
        for(let i=0; i<20; i++){
            let weight = {
                lbs : 0,
                kg : 0,
                ton : 0
            }
            const rkg = Math.floor(Math.random() * (1000 - 600 + 1)) + 600
            const rlbs = rkg / 0.453592 
            weight={lbs: rlbs.toFixed(0), kg: rkg}
            weights.push(<ExamQuestion key={i} weight={weight} order={i+1} inputName={"inputsNumber"+i} qstType={props.name} />)
        }
        return weights
    }
    // function generateRanges(){
    //     let Ranges=[]
    //     let groves = ["AT 750B","RT 755","TM 1150"]
    //     let qstKeys = ["length","top height","angle","radius","hook elevation"]
    //     for(let i=0; i<20; i++){
    //         let Range = {
    //             data1 : "",
    //             data2 : "",
    //             grove : "",
    //             key : "",
    //             dataNum1 :0,
    //             dataNum2 : 0,
    //             answer: 88
    //         }
    //         const rgrove = groves[ Math.floor(Math.random() * groves.length) ]
    //         const rkey = qstKeys[Math.floor(Math.random() * qstKeys.length)]
    //         switch(rkey) {
    //             case "length":
    //                 Range.data1 = "Radius"
    //                 Math.floor(Math.random() * 2) ? Range.data2 = "top height" : Range.data2 = "angle"
    //               break;
    //             case "top height":
    //                 Range.data1 = "Radius"
    //                 Math.floor(Math.random() * 2) ? Range.data2 = "length" : Range.data2 = "angle"
    //             break;
    //             case "angle":
    //                 Range.data1 = "Radius"
    //                 Math.floor(Math.random() * 2) ? Range.data2 = "top height" : Range.data2 = "length"
    //             break;
    //             case "radius":
    //                 Range.data1 = "Angle"
    //                 Math.floor(Math.random() * 2) ? Range.data2 = "top height" : Range.data2 = "length"
    //             break;
    //             case "hook elevation":
    //                 Range.data1 = "Radius"
    //                 Math.floor(Math.random() * 2) ? Range.data2 = "length" : Range.data2 = "angle"
    //               break;
    //             default:
                  
    //           }
    //         const rdataNum1 = Math.floor(Math.random() * (70 - 10 + 1)) + 10
    //         const rdataNum2 = Math.floor(Math.random() * (70 - 10 + 1)) + 10
            

    //         Range={...Range, grove: rgrove, key: rkey, dataNum1:rdataNum1, dataNum2:rdataNum2}
    //         Ranges.push(<ExamQuestion key={i} range={Range} order={i+1} inputName={"inputsNumber"+i} qstType={props.name}/>)
    //     }
    //     return Ranges
    // }
    function generate(){
        if(props.name=== "Convert Weights"){
            // setExamQuestions( generateWeigths())
            setExamQuestions( generateWeigthsEelements(props.name))
        
        }if(props.name=== "Range"){
            setExamQuestions( generateRanges(props.name))

        }if(props.name=== "Part of line"){
            setExamQuestions( generatePartOfLineElements(props.name))
        }
        if(props.name=== "Hand Signals"){
            setExamQuestions( generateHandSignalsElements(props.name))
        }
        
    }
    useEffect(()=>{
        if(props.name=== "Convert Weights"){
            // setExamQuestions( generateWeigths())
            setExamQuestions( generateWeigthsEelements(props.name))
        
        }
        if(props.name=== "Range"){
            // setExamQuestions( generateRanges())
            setExamQuestions( generateRanges(props.name))
        
        }if(props.name=== "Part of line"){
            setExamQuestions( generatePartOfLineElements(props.name))
        }
        if(props.name=== "Hand Signals"){
            setExamQuestions( generateHandSignalsElements(props.name))
            // generateHandSignalsElements(props.name)
        }
        
    },[])
    
    return (
        <main className='exam-page container' >
            <h2>
                {props.name}
            </h2>

            <div>
                <div className="exam-question-container">
                    
                    {examQuestions}
                    
                </div>
            </div>

            
            <div className="button-wrap-2 button" onClick={generate}>
                <a className="circle">Generate</a>
                <div className="outer-circle"></div>
            </div>
        </main>
      
    )
  }
  export default ExamPage;