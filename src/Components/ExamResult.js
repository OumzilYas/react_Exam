import React from 'react'
const ExamResult = (props) => {
    let result = "hihi"
    if (props.name) {
        result = <div className='exam-question-result'>
                    <input type="radio" id={props.id} name={props.name}  />
                    <label htmlFor={props.id} ><span>{props.order}.</span> {props.data.value} {props.data.unit}</label>
                </div>
    } else {
        const rows = props.data.map((weight,i) => (
            <tr key={i}>
                <td className="tg-0lax tg-left" colSpan="2">{weight}</td>
                <td className="tg-0lax tg-right"></td>
            </tr>
        ))
        result = <table className="tg">
                    <thead>
                        {rows}
                    </thead>
                </table>
    }
    return (
            
       <div>
        {
            result
        }
       </div>
      
    )
  }
  export default ExamResult;