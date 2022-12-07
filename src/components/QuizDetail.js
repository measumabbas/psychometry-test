import React from 'react'
import profile from '../images/profile.jpg'
const QuizDetail = () => {
    return (
        <div>
            <div>

                <div className="details-container">
                    <div className="details-content">
                        <div className="personal">
                            <h1>Response Details</h1>

                            <div className="about">
                                <table className="table">

                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>Measum Abbas</td>
                                        </tr>
                                        <tr>
                                            <td>Father's Name</td>
                                            <td>Muhammad Yaqoob</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>masam@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>CNIC</td>
                                            <td>71501-1093100-5</td>
                                        </tr>
                                        <tr>
                                            <td>Whats App Number</td>
                                            <td>123456789</td>
                                        </tr>
                                        <tr>
                                            <td>Gender </td>
                                            <td>Male</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="qualification">
                            <h2 style={{marginTop:'30px'}}>Answers</h2>
                            <table className="table">

                                <tbody>
                                    <tr>
                                        <td style={{ width: '50%' }}>Nothing can be done to stop people from making the
                                            attempt once they have made up their minds to kill
                                            themselves</td>
                                        <td>True</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>If assessed by a psychiatrist, everyone who suicides would
                                            be diagnosed as depressed</td>
                                        <td>Don't Know</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>Seeing a psychiatrist or psychologist can help prevent
                                            someone from suicide</td>
                                        <td>False</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>Most people who suicide are psychotic</td>
                                        <td>True</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>Only experts can help people who want to suicide</td>
                                        <td>False</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>There is a strong relationship between alcoholism and
                                            suicide</td>
                                        <td>True</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>People who talk about suicide rarely kill themselves</td>
                                        <td>Don't Know</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>People who want to attempt suicide can change their
                                            mind quickly</td>
                                            <td>Don't Know</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>Talking about suicide always increases the risk of suicide s</td>
                                        <td>False</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50%' }}>A person who has made a past suicide attempt is more
                                            likely to attempt suicide again than someone who has
                                            never attempted</td>
                                        <td>True</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuizDetail