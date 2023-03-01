import {FaSearch,FaPlusCircle,FaTrash,FaPen,FaListAlt ,FaBell} from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import React , { useEffect , useState }from 'react';
import Modal from '@mui/material/Modal';
import Sidebar from '../components/Sidebar';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

function Student() {
    
    const [students , setStudents] = useState([]);

    useEffect( async() => {
      let response = await axios.get("http://localhost:8000/students")
      setStudents(response.data)
    },[]);


    const [studentValue , setStudentValue] = useState('');
    const [studentDataSource , setStudentDataSource] = useState(students);
    const [studentTableFilter , setStudentTableFilter] = useState([]);

    const studentFilterData = (e) => {
        if(e.target.value != ""){
            setStudentValue(e.target.value);
            const studentFilterTable = studentDataSource.filter(o=>Object.keys(o).some(k=>String(o[k])
            .toLowerCase().includes(e.target.value.toLowerCase())));
            setStudentTableFilter([...studentFilterTable]);
        }else{
            setStudentValue(e.target.value);
            setStudentDataSource([...studentDataSource]);
        }
    }

    const [openDelStudent, setOpenDelStudent] = useState("");
    const handleOpenDelStudent = (i) => setOpenDelStudent(i);
    const handleCloseDelStudent = () => setOpenDelStudent("");

    const handleSubmitDelStudent = () => {
        // deleteStudent();
        handleCloseDelStudent();
    }

    const [openEditStudent, setOpenEditStudent] = useState("");
    const handleOpenEditStudent = (i) => setOpenEditStudent(i);
    const handleCloseEditStudent = () => setOpenEditStudent("");

    const handleSubmitEditStudent = () => {
        // editStudent();
        handleCloseEditStudent();
    }
    const [openDetailStudent, setOpenDetailStudent] = useState("");
    const handleOpenDetailStudent = (i) => setOpenDetailStudent(i);
    const handleCloseDetailStudent = () => setOpenDetailStudent("");

    const handleSubmitDetailStudent = () => {
        // detailStudent();
        handleCloseDetailStudent();
    }

    const [openAddStudent, setOpenAddStudent] = useState(false);
    const handleOpenAddStudent = () => setOpenAddStudent(true);
    const handleCloseAddStudent = () => setOpenAddStudent(false);

    const handleSubmitAddStudent = () => {
        // addStudent();
        handleCloseAddStudent();
    }
 
    return (
        <Sidebar>
            <div className='attendance sm-attendance'>
                <div className='attendance-head'>
                    <div className='search'>
                        <input type="text" name="search" placeholder="Search on student name" />
                        <a href="#" className="btn btn-search"><FaSearch/></a>
                    </div>
                    {/* <div className='attendance-data'>
                        
                        <a className="btn btn-notif"><FaBell/><p className='notif-num'>675</p></a>
                    </div> */}
                </div>

                <table className='table '>
                            <thead >
                                <tr className="sp-bt" >
                                    <th>Student</th>
                                    <th>Student email</th>
                                    <th className="btn btn-plus" onClick={()=>handleOpenAddStudent()}><FaPlusCircle/></th>
                                    <Modal className='modal xlarge-height' open={openAddStudent} onClose={handleCloseAddStudent}>
                                            <div className='modal-info' >
                                                <div className='d-flex modal-header'>
                                                    <span ><FaPlusCircle/></span>
                                                    <span>Add Student</span>
                                                </div>
                                                <p>Enter Student name</p>
                                                <input></input>
                                                <p>Enter Student password</p>
                                                <input></input>
                                                <p>Student university email</p>
                                                <input></input>
                                                <p>Enter Student code</p>
                                                <input></input>
                                                <p>Select Student faculty</p>
                                                <select></select>
                                                <div className='d-flex modal-footer'>
                                                    <button className='btn' onClick={handleCloseAddStudent}>Cancel</button>
                                                    <button className='btn green' onClick={handleSubmitAddStudent}>Add</button>
                                                </div>
                                            </div>
                                    </Modal>
                                </tr>
                            </thead>
                            <tbody >
                                {students.map((student,index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>
                                            <a href="#" className="btn btn-detail" onClick={()=>handleOpenDetailStudent(index)}><FaListAlt/></a>
                                            <Modal className='modal xxlarge-modal' open={openDetailStudent === index} onClose={handleCloseDetailStudent} >
                                                <div className='modal-info' >
                                                    <div className='d-flex modal-header'>
                                                        <span ><FaListAlt/></span>
                                                        <span> Student Details</span>
                                                    </div>
                                                    <div className='big-modal-header'>
                                                        <div>
                                                            <p className='medium-font'> Student name</p>
                                                            <p>student 1</p>
                                                            <p className='medium-font'> Level</p>
                                                            <p>Level 1</p>
                                                        </div>
                                                        <div>
                                                            <p className='medium-font'> User name</p>
                                                            <p>student 1</p>
                                                            <p className='medium-font'> Department name</p>
                                                            <p>computer science</p>
                                                        </div>
                                                        <div>
                                                            <p className='medium-font'> Password</p>
                                                            <p>MTG76543</p>
                                                            <p className='medium-font'> University Email</p>
                                                            <p>mohamed@sct.com</p>
                                                        </div>
                                                    </div>
                                                    <table className='modal-table'>
                                                        <thead>
                                                            <tr>
                                                                <th>subject name</th>
                                                                <th>subject code</th>
                                                                <th>doctor code</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>subject 1</td>
                                                                <td>gfd9876</td>
                                                                <td>doctor 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>subject 1</td>
                                                                <td>gfd9876</td>
                                                                <td>doctor 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>subject 1</td>
                                                                <td>gfd9876</td>
                                                                <td>doctor 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>subject 1</td>
                                                                <td>gfd9876</td>
                                                                <td>doctor 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>subject 1</td>
                                                                <td>gfd9876</td>
                                                                <td>doctor 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>subject 1</td>
                                                                <td>gfd9876</td>
                                                                <td>doctor 1</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className='d-flex modal-footer'>
                                                        <button className='btn' onClick={handleCloseDetailStudent}>Cancel</button>
                                                        <button className='btn blue' onClick={()=>{handleSubmitDetailStudent();handleOpenEditStudent(index);}}>Update</button>
                                                        <button className='btn red' onClick={()=>{handleSubmitDetailStudent();handleOpenDelStudent(index);}}>Delete</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <a href="#" className="btn btn-edit" onClick={()=>handleOpenEditStudent(index)}><FaPen/></a>
                                            <Modal className='modal xxxlarge-modal' open={openEditStudent === index} onClose={handleCloseEditStudent} >
                                                <div className='modal-info' >
                                                    <div className='d-flex modal-header'>
                                                        <span ><FaPen/></span>
                                                        <span>update Student</span>
                                                    </div>
                                                    <div className='big-modal-header'>
                                                        <div>
                                                            <p className='medium-font'> Student name</p>
                                                            <input  defaultValue={student} />
                                                            <p className='medium-font'> Level</p>
                                                            <select >
                                                                <option className='option'>level 1</option>
                                                                <option className='option'>level 2</option>
                                                                <option className='option'>level 3</option>
                                                                <option className='option'>level 4</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <p className='medium-font'> User name</p>
                                                            <input  defaultValue={student} />
                                                            <p className='medium-font'> Department name</p>
                                                            <select >
                                                                <option className='option'>department 1</option>
                                                                <option className='option'>department 2</option>
                                                                <option className='option'>department 3</option>
                                                                <option className='option'>department 4</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <p className='medium-font'> Password</p>
                                                            <input className='pad-bot'defaultValue={student} />
                                                            <p className='medium-font'> University Email</p>
                                                            <p className='black-text'>mohamed@sct.com</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className='d-flex modal-footer'>
                                                        <button className='btn' onClick={handleCloseEditStudent}>Cancel</button>
                                                        <button className='btn blue' onClick={()=>handleSubmitEditStudent()}>Update</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <a href="#" className="btn btn-del" onClick={()=>handleOpenDelStudent(index)}><FaTrash/></a>
                                            <Modal className='modal delete-modal-parent' open={openDelStudent === index} onClose={()=>handleCloseDelStudent()} >
                                                <div className='modal-info delete-modal' >
                                                    <i className='modal-del-icon'><FaTrash/></i>
                                                    <p className='large-font'>Are you sure to delete this Level?</p>
                                                    <p className='normal-font'>if you delete level , you can't recover it </p>
                                                    <div className='d-flex modal-footer'>
                                                        <button className='btn' onClick={()=>handleCloseDelStudent()}>cancel</button>
                                                        <button className='btn red' onClick={()=>handleSubmitDelStudent()}>delete</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </td>
                                    </tr>
                                ))
                                // :studentDataSource.map((student,index) => (
                                //     <tr key={index}>
                                //         <td>{student.name}</td>
                                //         <td>
                                //             <a href="#" className="btn btn-detail" onClick={()=>handleOpenDetailStudent(index)}><FaListAlt/></a>
                                //             <Modal className='modal xxlarge-modal' open={openDetailStudent === index} onClose={handleCloseDetailStudent} >
                                //                 <div className='modal-info' >
                                //                     <div className='d-flex modal-header'>
                                //                         <span ><FaListAlt/></span>
                                //                         <span> Student Details</span>
                                //                     </div>
                                //                     <div className='big-modal-header'>
                                //                         <div>
                                //                             <p className='medium-font'> Student name</p>
                                //                             <p>student 1</p>
                                //                             <p className='medium-font'> Level</p>
                                //                             <p>Level 1</p>
                                //                         </div>
                                //                         <div>
                                //                             <p className='medium-font'> User name</p>
                                //                             <p>student 1</p>
                                //                             <p className='medium-font'> Department name</p>
                                //                             <p>computer science</p>
                                //                         </div>
                                //                         <div>
                                //                             <p className='medium-font'> Password</p>
                                //                             <p>MTG76543</p>
                                //                             <p className='medium-font'> University Email</p>
                                //                             <p>mohamed@sct.com</p>
                                //                         </div>
                                //                     </div>
                                //                     <table className='modal-table'>
                                //                         <thead>
                                //                             <tr>
                                //                                 <th>subject name</th>
                                //                                 <th>subject code</th>
                                //                                 <th>doctor code</th>
                                //                             </tr>
                                //                         </thead>
                                //                         <tbody>
                                //                             <tr>
                                //                                 <td>subject 1</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td>doctor 1</td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 1</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td>doctor 1</td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 1</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td>doctor 1</td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 1</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td>doctor 1</td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 1</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td>doctor 1</td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 1</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td>doctor 1</td>
                                //                             </tr>
                                //                         </tbody>
                                //                     </table>
                                //                     <div className='d-flex modal-footer'>
                                //                         <button className='btn' onClick={handleCloseDetailStudent}>Cancel</button>
                                //                         <button className='btn blue' onClick={()=>{handleSubmitDetailStudent();handleOpenEditStudent(index);}}>Update</button>
                                //                         <button className='btn red' onClick={()=>{handleSubmitDetailStudent();handleOpenDelStudent(index);}}>Delete</button>
                                //                     </div>
                                //                 </div>
                                //             </Modal>
                                //             <a href="#" className="btn btn-edit" onClick={()=>handleOpenEditStudent(index)}><FaPen/></a>
                                //             <Modal className='modal xxxlarge-modal' open={openEditStudent === index} onClose={handleCloseEditStudent} >
                                //                 <div className='modal-info' >
                                //                     <div className='d-flex modal-header'>
                                //                         <span ><FaPen/></span>
                                //                         <span>update Student</span>
                                //                     </div>
                                //                     <div className='big-modal-header'>
                                //                         <div>
                                //                             <p className='medium-font'> Student name</p>
                                //                             <input  defaultValue={student} />
                                //                             <p className='medium-font'> Level</p>
                                //                             <select>
                                //                                 <option className='option'>level 1</option>
                                //                                 <option className='option'>level 2</option>
                                //                                 <option className='option'>level 3</option>
                                //                                 <option className='option'>level 4</option>
                                //                             </select>
                                //                         </div>
                                //                         <div>
                                //                             <p className='medium-font'> User name</p>
                                //                             <input  defaultValue={student} />
                                //                             <p className='medium-font'> Department name</p>
                                //                             <select >
                                //                                 <option className='option'>department 1</option>
                                //                                 <option className='option'>department 2</option>
                                //                                 <option className='option'>department 3</option>
                                //                                 <option className='option'>department 4</option>
                                //                             </select>
                                //                         </div>
                                //                         <div>
                                //                             <p className='medium-font'> Password</p>
                                //                             <input className='pad-bot' defaultValue={student} />
                                //                             <p className='medium-font'> University Email</p>
                                //                             <p className='black-text'>mohamed@sct.com</p>
                                //                         </div>
                                //                     </div>
                                //                     <button className='btn green add-sub' onClick={()=>handleOpenAddNewSubject(index)}>+ Add Subject</button>
                                //                     <Modal className='modal xxlarge-modal' open={openAddNewSubject === index} onClose={handleCloseAddNewSubject} >
                                //                         <div className='modal-info' >
                                //                             <div className='d-flex modal-header'>
                                //                                 <span ><FaPen/></span>
                                //                                 <span>update Student</span>
                                //                             </div>
                                //                             <div className='big-modal-header'>
                                //                                 <div className='select-sub'>
                                //                                     <p>Select Subject</p>
                                //                                     <select >
                                //                                         <option className='option'>subject 1</option>
                                //                                         <option className='option'>subject 2</option>
                                //                                         <option className='option'>subject 3</option>
                                //                                         <option className='option'>subject 4</option>
                                //                                     </select>
                                //                                 </div>
                                //                                 <button className='btn green add-sub'>Add</button>
                                //                             </div>
                                //                             <table className='modal-table'>
                                //                                 <thead>
                                //                                     <tr>
                                //                                         <th>subject name</th>
                                //                                         <th>subject code</th>
                                //                                         <th>doctor code</th>
                                //                                     </tr>
                                //                                 </thead>
                                //                                 <tbody>
                                //                                     <tr>
                                //                                         <td>subject 1</td>
                                //                                         <td>gfd9876</td>
                                //                                         <td>doctor 1</td>
                                //                                     </tr>
                                //                                     <tr>
                                //                                         <td>subject 1</td>
                                //                                         <td>gfd9876</td>
                                //                                         <td>doctor 1</td>
                                //                                     </tr>
                                //                                     <tr>
                                //                                         <td>subject 1</td>
                                //                                         <td>gfd9876</td>
                                //                                         <td>doctor 1</td>
                                //                                     </tr>
                                //                                     <tr>
                                //                                         <td>subject 1</td>
                                //                                         <td>gfd9876</td>
                                //                                         <td>doctor 1</td>
                                //                                     </tr>
                                //                                     <tr>
                                //                                         <td>subject 1</td>
                                //                                         <td>gfd9876</td>
                                //                                         <td>doctor 1</td>
                                //                                     </tr>
                                //                                 </tbody>
                                //                             </table>
                                //                             <div className='d-flex modal-footer'>
                                //                                 <button className='btn' onClick={handleCloseAddNewSubject}>Cancel</button>
                                //                                 <button className='btn blue' onClick={()=>handleSubmitAddNewSubject()}>Done</button>
                                //                             </div>
                                //                         </div>
                                //                     </Modal>
                                //                     <table className='modal-table'>
                                //                         <thead>
                                //                             <tr>
                                //                                 <th>subject name</th>
                                //                                 <th className='cell-mar'>subject code</th>
                                //                                 <th className='cell-mar'>doctor code</th>
                                //                             </tr>
                                //                         </thead>
                                //                         <tbody>
                                //                             <tr>
                                //                                 <td>subject 1</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td className='cell-del'>
                                //                                     <span className='black-text'>doctor 1</span>
                                //                                     <a className='red del-sub-icon' href='#'><FaTrash/></a> 
                                //                                 </td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 2</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td className='cell-del'>
                                //                                     <span className='black-text'>doctor 2</span>
                                //                                     <a className='red del-sub-icon' href='#'><FaTrash/></a> 
                                //                                 </td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 3</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td className='cell-del'>
                                //                                     <span className='black-text'>doctor 3</span>
                                //                                     <a className='red del-sub-icon' href='#'><FaTrash/></a> 
                                //                                 </td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 4</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td className='cell-del'>
                                //                                     <span className='black-text'>doctor 4</span>
                                //                                     <a className='red del-sub-icon' href='#'><FaTrash/></a> 
                                //                                 </td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 5</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td className='cell-del'>
                                //                                     <span className='black-text'>doctor 5</span>
                                //                                     <a className='red del-sub-icon' href='#'><FaTrash/></a> 
                                //                                 </td>
                                //                             </tr>
                                //                             <tr>
                                //                                 <td>subject 6</td>
                                //                                 <td>gfd9876</td>
                                //                                 <td className='cell-del'>
                                //                                     <span className='black-text'>doctor 6</span>
                                //                                     <a className='red del-sub-icon' href='#'><FaTrash/></a> 
                                //                                 </td>
                                //                             </tr>
                                //                         </tbody>
                                //                     </table>
                                //                     <div className='d-flex modal-footer'>
                                //                         <button className='btn' onClick={handleCloseEditStudent}>Cancel</button>
                                //                         <button className='btn blue' onClick={()=>handleSubmitEditStudent()}>Update</button>
                                //                     </div>
                                //                 </div>
                                //             </Modal>
                                //             <a href="#" className="btn btn-del" onClick={()=>handleOpenDelStudent(index)}><FaTrash/></a>
                                //             <Modal className='modal delete-modal-parent' open={openDelStudent === index} onClose={()=>handleCloseDelStudent()} >
                                //                 <div className='modal-info delete-modal' >
                                //                     <i className='modal-del-icon'><FaTrash/></i>
                                //                     <p className='large-font'>Are you sure to delete this Level?</p>
                                //                     <p className='normal-font'>if you delete level , you can't recover it </p>
                                //                     <div className='d-flex modal-footer'>
                                //                         <button className='btn' onClick={()=>handleCloseDelStudent()}>cancel</button>
                                //                         <button className='btn red' onClick={()=>handleSubmitDelStudent()}>delete</button>
                                //                     </div>
                                //                 </div>
                                //             </Modal>
                                //         </td>
                                //     </tr>
                                // ))
                                }
                            </tbody>
                        </table>
                {/* <table className='table'>
                    <thead >
                        <tr className='error'>
                            <th>student</th>
                            <th>university email</th>
                            <th>details</th>
                            <th className='err'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student , index) =>(
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.univ_mail}</td>
                                        <td><a href="#" className="btn btn-detail " ><FaListAlt/></a></td>
                                        
                                        <td className='action'>
                                            <span  className='conf'>Accept</span>
                                            
                                            <span className='conf'>Decline</span>
                                            
                                        </td>
                                    </tr> 
                                )   
                            )
                        } 
                    </tbody>
                </table>
                <div className='pagination-right'><Pagination count={100} variant="outlined" /></div> */}
                <div className='pagination-right'><Pagination count={100} variant="outlined" /></div>
            </div>
        </Sidebar>
    )
}

export default Student;