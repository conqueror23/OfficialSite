import React,{useState} from 'react'

const Writer = () => {
    const [firstInput,setFirstInput] =useState('default first values here');
    const [secondInput,setSecondInput] =useState('default second values here');
    const data =[
        {key:'firstInput',value :firstInput},
        {key:'secondInput',value:secondInput}
    ];

    return (
        <div className="writer-wrapper">
            <input onChange={(e)=>{setFirstInput(e.target.value)}} value={firstInput} />
            <input onChange={(e)=>{setSecondInput(e.target.value)}} value={secondInput}/> 
            <button>Submit and Preview</button>
        </div>
    )
}

export default Writer
