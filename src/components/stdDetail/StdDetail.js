import React from 'react'
import { useParams,Link } from 'react-router-dom'
const StdDetail = () => {

    const {course}  = useParams();
    const courses = ['Web Development','Graphic Design','Chinese Language']
    let val = false
    if(courses.includes(course)){
      val=true
    }else{
      val=false
    }
  return (
    

    <div>
      {
        val?(
          <>
          <h2>Students applied for course {course} are </h2>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>CNIC</th>
                        <th>actions</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Measum Abbas</td>
                        <td>maisumabbas.charbu@gmail.com</td>
                        <td>7150110931005</td>
                        <td className='td'>
                          <Link to={`/dashboard/${course}/6462452435`}>
                          <button style={{cursor:'pointer',backgroundColor:'#148EBF'}}>view details</button>
                          </Link>
                          <button>delete</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
          </>
        ):
        (
          <>
          <h2>Invalid Route</h2>
          </>
        )
      }
        
    </div>
  )
}

export default StdDetail