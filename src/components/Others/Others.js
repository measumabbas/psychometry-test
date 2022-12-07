import React from 'react'
import './others.css'
import { Link } from 'react-router-dom'
const Others = () => {
  return (
    <div>
      <h1>Submitted Responses</h1>
      <div>
             <table className="table">
                 <thead>
                     <tr>
                         <th>Name</th>
                         <th>Test Type</th>
                         <th>CNIC</th>
                         <th>actions</th>
 
                     </tr>
                 </thead>
                 <tbody>
                
              <tr>
                   <td>Measum Abbas</td>
                   <td>Aplitude test</td>
                   <td>715012223445</td>
                   <td className='td'>
                     <Link to={`/dashboard/other/${977858}`}>
                     <button style={{cursor:'pointer',backgroundColor:'#148EBF'}}>view details</button>
                     </Link>
                   </td>
               </tr>
              <tr>
                   <td>Hasnain Abbas</td>
                   <td>Aplitude test</td>
                   <td>715012223445</td>
                   <td className='td'>
                     <Link to={`/dashboard/other/${977858}`}>
                     <button style={{cursor:'pointer',backgroundColor:'#148EBF'}}>view details</button>
                     </Link>
                   </td>
               </tr>
              <tr>
                   <td>Ammar Ali</td>
                   <td>Personality test</td>
                   <td>715012223445</td>
                   <td className='td'>
                     <Link to={`/dashboard/other/${977858}`}>
                     <button style={{cursor:'pointer',backgroundColor:'#148EBF'}}>view details</button>
                     </Link>
                   </td>
               </tr>
              <tr>
                   <td>Zultaif Hassan</td>
                   <td>Mental Health test</td>
                   <td>715012223445</td>
                   <td className='td'>
                     <Link to={`/dashboard/other/${977858}`}>
                     <button style={{cursor:'pointer',backgroundColor:'#148EBF'}}>view details</button>
                     </Link>
                   </td>
               </tr>
              <tr>
                   <td>Shajjeh Hassan</td>
                   <td>Industarial/Business test</td>
                   <td>715012223445</td>
                   <td className='td'>
                     <Link to={`/dashboard/other/${977858}`}>
                     <button style={{cursor:'pointer',backgroundColor:'#148EBF'}}>view details</button>
                     </Link>
                   </td>
               </tr>
                
                    
                 
                     
                     
                 </tbody>
             </table>
         </div>
    </div>
  )
}

export default Others