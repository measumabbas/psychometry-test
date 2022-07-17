import React, { useState } from 'react'
import './modal.css'
import { AiFillFolderAdd } from 'react-icons/ai'
import { FaCloudUploadAlt } from 'react-icons/fa'
const Modal = () => {
    // const [file, setfile] = useState({selectedFile:null})
    const handleFile =(e)=>{
        let file = e.target.files[0]
        console.log(file.name);
        document.querySelector('.img-span').textContent = file.name;
        
    }
    return (
        <div className='modal-main'>
            <div className="modal">

                <div className="modal-header">
                    <p>Add a new Course</p>
                    <AiFillFolderAdd />
                </div>
                <div className="modal-body">
                    <form>
                        <div className="title-input">

                            <div className="input-item">
                                <label htmlFor="title">Title</label>
                                <input type="text" id='title' />
                            </div>
                            <div className="input-item">
                                <label htmlFor="desc">Description</label>
                                <textarea name="desc" id="desc"></textarea>
                            </div>
                        </div>
                        <div className="image-input">
                        <div className="box">
                            {/* <input type="file" onChange={handleFile} /> */}
					<input onChange={handleFile}   type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" />
					<label htmlFor="file-1"><FaCloudUploadAlt/> <span className='img-span'>Choose an image</span></label>
				</div>
                        </div>

                        <div className="furthur-input">


                            <div className="input-item">
                                <label htmlFor="instructor">Instructor</label>
                                <select name="instructor" id="instructor">
                                    <option>Naeem Hussain</option>
                                    <option>Essa Wali</option>
                                    <option>Rashid Mehmood</option>
                                    <option>Madam Uswa</option>
                                </select>
                            </div>
                            <div className="input-item">

                                <label htmlFor="category">duration</label>

                                <select name="category" id="category">
                                    <option>language</option>
                                    <option>tech</option>
                                    <option>others</option>
                                </select>
                            </div>
                            <div className="input-item">

                                <label htmlFor="duration">duration</label>

                                <select name="duration" id="duration">
                                    <option>2 months</option>
                                    <option>3 months</option>
                                    <option>4 months</option>
                                    <option>6 months</option>
                                </select>
                            </div>



                        </div>
                        <hr />
                        <div className="date-inputs">
                            <div className="input-item">
                                <label htmlFor="last">Last Date</label>
                                <input type="date" id="last" name="last" />
                            </div>
                            <div className="input-item">
                                <label htmlFor="start">Start of classes</label>
                                <input type="date" id="start" name="start" />
                            </div>
                        </div>
                        {/* <div className="incase">
                            <p>In Case of any specific case</p>
                            <div className="incase-inputs">

                                <div className="input-item">
                                    <label htmlFor="input-1">option 1</label>
                                    <input type="text" id="input-1" name="input-1" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="input-2">option 2</label>
                                    <input type="text" id="input-2" name="input-2" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="input-3">option 3</label>
                                    <input type="text" id="input-3" name="input-3" />
                                </div>
                            </div>
                        </div>
                        <div className="remarks">
                            <div className="input-item">
                                <label htmlFor="remarks">Remarks</label>
                                <textarea name="remarks" id="remarks"></textarea>
                            </div>
                        </div> */}

                        <div className="submit-inputs">
                            {/* <input type="reset" value='Reset Fields' style={{ backgroundColor: '#DC143C', padding: '10px' }} /> */}
                            <input type="submit" value='Add Course' style={{ backgroundColor: '#148EBF', padding: '10px',fontSize:'18px',letterSpacing:'1px',textTransform:'uppercase' }} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Modal