import React from 'react'
import { marks } from '../constants/Marks'

const MarksTable = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Term 1</th>
                <th>Term 2</th>
                <th>Mid</th>
                <th>Final</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            {marks.map((row)=>{
                return(
                    <tr key={row.Subject}>
                        <td>{row.Subject}</td>
                        <td>{row.term1}</td>
                        <td>{row.term2}</td>
                        <td>{row.mid}</td>
                        <td>{row.final}</td>
                        <td>{row.grade}</td>
                    </tr>
                    
                )
            })}
        </tbody>
    </table>
  )
}

export default MarksTable
