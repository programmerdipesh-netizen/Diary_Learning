import React from 'react'

const Summarycard = () => {
  return ( 
    <div> 
        <h1>Performance summary</h1>
                <dl>
            <div className=''>
                <dt>Overall Average</dt>
                <dd>84.75%</dd>
            </div>
            <div className=''>
                <dt>Overall Attendance</dt>
                <dd>92%</dd>
            </div>
            <div className=''>
                <dt>Top Subject</dt>
                <dd>Science</dd>
            </div>
            <div className=''>
                <dt>Need Attention</dt>
                <dd>Social Studies</dd>
            </div>
        </dl>
    </div>
  )
}

export default Summarycard