import React from 'react'
const ExamResult = (props) => {
    return (
            <div className='exam-question-result'>
                <input type="radio" id={props.id} name={props.name}  />
                <label htmlFor={props.id} ><span>{props.order}.</span> {props.data.value} {props.data.unit}</label>
            </div>
      
    )
  }
  export default ExamResult;