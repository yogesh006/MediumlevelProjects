import React, { useState } from 'react'

const sections = [
    {
      title: 'Section 1',
      content: 'This is the content of section 1.',
    },
    {
      title: 'Section 2',
      content: 'This is the content of section 2.',
    },
    {
      title: 'Section 3',
      content: 'This is the content of section 3.',
    },
  ];

function Accordion() {

    const[activeIndex, setActiveIndex]=useState(null)  //Both will work. use null instead of false to provide useful meaning related to clarity, intent, and potential issues with how different values are interpreted in React.


    const handleSectionClick = (index)=>{

//         If activeIndex is equal to index (the current section is open): set activeIndex to null (close the section).
// If activeIndex is not equal to index (the current section is not open): set activeIndex to index (open the section).
        setActiveIndex(activeIndex===index? null:index)
    }

  return (
    <div>
        Accordion:
        <div>
            {sections.map((section, index)=>(
               <div key={index}>
                    <div onClick={()=> handleSectionClick(index)}

                            style={{cursor:'pointer',
                                backgroundColor:activeIndex===index?'grey':'blue',
                                padding:'10px',
                                borderBottom:'1px solid red'
                            }}
                        >
                        <h3>{section.title}</h3>
                    </div>

                    {activeIndex===index && (
                        <div 
                            style={{
                                padding:'10px',
                                backgroundColor:'lightcoral',
                                border:'1px solid #ccc'
                            }}
                        >
                            <p>{section.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Accordion