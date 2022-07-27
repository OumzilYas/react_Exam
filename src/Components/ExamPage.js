import React, {useState, useEffect} from 'react'
import './style.css'; 
import {generateWeigthsEelements, 
    generateRanges, 
    generatePartOfLineElements, 
    generateHandSignalsElements,
    generateRclElements
} from '../generate_Exam/examGenerator'
const ExamPage = (props) => {
    var uuid = require('uuid');
    const [examQuestions, setExamQuestions] = useState([])
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
        if(props.name=== "RCL"){
            setExamQuestions( generateRclElements(props.name))
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
        }if(props.name=== "RCL"){
            setExamQuestions( generateRclElements(props.name))
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