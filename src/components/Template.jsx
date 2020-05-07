import React from 'react'
import Regulations from './Regulations'

const Template = (data) => {
    const {title,regulationTitle,content}=data
    return (
        <div className="template-wrapper">
            <h1>
                {title}
            </h1>
            <div className='body-wrapper'>
               <div className='regulation-wrapper'>
                    <h2>{regulationTitle}</h2>
                    <Regulations lang='zh'/>
                   </div> 
                   <div className='content-wrapper'>
                         <h2>
                             {content.title}
                         </h2>
                    <h4>{content.subTitle}</h4>
                    <p>{content.mainPart}</p>
                   </div>
            </div>
            
        </div>
    )
}

export default Template
