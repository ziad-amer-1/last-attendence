import React, { useEffect , useState , useRef } from 'react'; 
import { ToastContainer} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import {FaSearch,FaPlusCircle,FaTrash,FaPen,FaListAlt ,FaBell} from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import Modal from '@mui/material/Modal'; 
import Sidebar from '../components/Sidebar'; 
import axios from 'axios'; 

function ControlPanel() { 
// -----------------------------------------------------------------------------------------------------------------------------
 const [levels , setLevels] = useState([]);

 const addedLev = new URLSearchParams();
 const updatedLev = new URLSearchParams();

    const getLevels = async() => {
        let response = await axios.get("http://34.247.176.75:5000/api/levels");
        setLevels(response.data.levels);
    };

    useEffect(()=> { getLevels()},[]);

    const [newLevel , setNewLevel] = useState(""); 

    const updateLevel = (e) => {
        setNewLevel(e.target.value) ;
    }

    const addLevel =async () => { 
        addedLev.append('level_name',newLevel)
        await axios.post("http://34.247.176.75:5000/api/levels", addedLev);
        getLevels(); 
        setNewLevel("");
    }

    const refLevel = useRef();

    const editLevel =async (i) => {
        updatedLev.append('level_name',refLevel.current.value)
        await axios.put(`http://34.247.176.75:5000/api/levels?level_id=${i}`, updatedLev);  
        getLevels();  
        setNewLevel("");
    }

    const deleteLevel =async (i) => {
        await axios.delete(`http://34.247.176.75:5000/api/levels?level_id=${i}`);
        getLevels();
    }

    const handleAddLevelEnter=(event)=> {
        if (event.keyCode === 13) {
            handleSubmitAddLevel();
        }
    }

    const handleEditLevelEnter=(event , i)=> {
        if (event.keyCode === 13) {
            handleSubmitEditLevel(i);
        }
    }

    const [openAddLevel, setOpenAddLevel] = useState(false);
    const handleOpenAddLevel = () => setOpenAddLevel(true);
    const handleCloseAddLevel = () => setOpenAddLevel(false);

    const handleSubmitAddLevel = () => {
        addLevel();
        handleCloseAddLevel();
    }

    const [openEditLevel, setOpenEditLevel] = useState("");
    const handleOpenEditLevel = (i) => setOpenEditLevel(i);
    const handleCloseEditLevel = () => setOpenEditLevel("");

    const handleSubmitEditLevel = (i) => {
        editLevel(i);
        handleCloseEditLevel();
    }

    const [openDelLevel, setOpenDelLevel] = useState("");
    const handleOpenDelLevel = (i) => setOpenDelLevel(i);
    const handleCloseDelLevel = () => setOpenDelLevel("");

    const handleSubmitDelLevel = (i) => {
        deleteLevel(i);
        handleCloseDelLevel();
    }
    // -----------------------------------------------------------------------------------------------------------------------------
    return (
        <Sidebar>
            <div>
                <div className='d-flex row height-50'>                   
                    <div className='col-6'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th><a href="#" className="btn btn-plus" onClick={handleOpenAddLevel}><FaPlusCircle/></a></th>
                                    <Modal className='modal xlarge-height' open={openAddLevel} onClose={handleCloseAddLevel}>
                                        <div className='modal-info' >
                                            <div className=' modal-header'>
                                                <span ><FaPlusCircle/></span>
                                                <span>Add level</span>
                                            </div>
                                            <p>Enter level name</p>
                                            <input onChange={updateLevel} autoFocus value={newLevel} onKeyDown={(e) => handleAddLevelEnter(e) } ></input>
                                            <div className='d-flex modal-footer'>
                                                <button className='btn' onClick={handleCloseAddLevel}>Cancel</button>
                                                <button className='btn  green' onClick={handleSubmitAddLevel}>Add</button>
                                            </div>
                                        </div>
                                    </Modal>
                                </tr>
                            </thead>
                            <tbody className='escroll'>
                                {levels.map((level) => (
                                    <tr key={level.id}>
                                        <td>{level.name}</td>
                                        <td>
                                            <a href="#" className="btn btn-edit" onClick={()=>handleOpenEditLevel(level.id)}><FaPen/></a>
                                            <Modal className='modal xlarge-height' open={openEditLevel === level.id} onClose={handleCloseEditLevel} >
                                                <div className='modal-info' >
                                                    <div className=' modal-header'>
                                                        <span ><FaPen/></span>
                                                        <span>Update level</span>
                                                    </div>
                                                    <p>Update this level</p>
                                                    <input defaultValue={level.name} autoFocus onChange={updateLevel} ref={refLevel} onKeyDown={(e) => handleEditLevelEnter(e , level.id) }/>
                                                    <div className='d-flex modal-footer'>
                                                        <button className='btn' onClick={handleCloseEditLevel}>Cancel</button>
                                                        <button className='btn green' onClick={()=>handleSubmitEditLevel(level.id)}>Update</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <a href="#" className="btn btn-del" onClick={()=>handleOpenDelLevel(level.id)}><FaTrash/></a>
                                            <Modal className='modal delete-modal-parent' open={openDelLevel === level.id} onClose={()=>handleCloseDelLevel()} >
                                                <div className='modal-info delete-modal' >
                                                    <i className='modal-del-icon'><FaTrash/></i>
                                                    <p className='large-font'>Are you sure to delete this Level?</p>
                                                    <p className='normal-font'>if you delete level , you can't recover it </p>
                                                    <div className='d-flex modal-footer'>
                                                        <button className='btn' onClick={()=>handleCloseDelLevel()}>Cancel</button>
                                                        <button className='btn red' onClick={()=>handleSubmitDelLevel(level.id)}>Delete</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </td> 
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div> 
                    {/* --------------------------------------------------------------------------------- */}
                    {/* <div className='col-6'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Department</th>
                                    <th><a href="#" className="btn btn-plus" onClick={handleOpenAddDepartment}><FaPlusCircle/></a></th>
                                    <Modal className='modal xlarge-height' open={openAddDepartment} onClose={handleCloseAddDepartment}>
                                        <div className='modal-info' >
                                            <div className='d-flex modal-header'>
                                                <span ><FaPlusCircle/></span>
                                                <span>Add Department</span>
                                            </div>
                                            <p>Enter Department name</p>
                                            <input  autoFocus onChange={updateDepartment}></input>
                                            <div className='d-flex modal-footer'>
                                                <button className='btn' onClick={handleCloseAddDepartment}>Cancel</button>
                                                <button className='btn green' onClick={handleSubmitAddDepartment}>Add</button>
                                            </div>
                                        </div>
                                    </Modal>
                                </tr>
                            </thead>
                            <tbody className='escroll'>
                                {departments.map((department) => (
                                    <tr key={department.id}>
                                        <td>{department.name}</td>
                                        <td>
                                            <a href="#" className="btn btn-edit" onClick={()=>handleOpenEditDepartment(department.id)}><FaPen/></a>
                                            <Modal className='modal xlarge-height' open={openEditDepartment === department.id} onClose={handleCloseEditDepartment} >
                                                <div className='modal-info' >
                                                    <div className='d-flex modal-header'>
                                                        <span ><FaPen/></span>
                                                        <span>Update Department</span>
                                                    </div>
                                                    <p>Department name</p>
                                                    <input  defaultValue={department.dept_name} autoFocus/>
                                                    <p>Select faculty name</p>
                                                    <select onChange={updateLevelFaculty} onKeyDown={(e) => handleAddLevelEnter(e) } >
                                                        
                                                    </select>
                                                    <p>Select Levels</p>
                                                    <div className='d-flex check-parent'>
                                                        {newFilteredLevels.map((level) => (
                                                            <div className='d-flex'key={level.id} >
                                                                <input type="checkbox" value={level.level_name} id={level.level_name} name={level.level_name} ></input>
                                                                <label htmlFor={level.level_name}>{level.level_name}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className='d-flex modal-footer'>
                                                        <button className='btn' onClick={handleCloseEditDepartment}>Cancel</button>
                                                        <button className='btn green' onClick={()=>handleSubmitEditDepartment(department.id)}>Update</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <a href="#" className="btn btn-del" onClick={()=>handleOpenDelDepartment(department.id)}><FaTrash/></a>
                                            <Modal className='modal delete-modal-parent' open={openDelDepartment === department.id} onClose={()=>handleCloseDelDepartment()} >
                                                <div className='modal-info delete-modal' >
                                                    <i className='modal-del-icon'><FaTrash/></i>
                                                    <p className='large-font'>Are you sure to delete this Department?</p>
                                                    <p className='normal-font'>if you delete Department , you can't recover it </p>
                                                    <div className='d-flex modal-footer'>
                                                        <button className='btn' onClick={()=>handleCloseDelDepartment()}>Cancel</button>
                                                        <button className='btn red' onClick={()=>handleSubmitDelDepartment(department.id)}>Delete</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                </div>         
            </div>
        </Sidebar>
    )
}

export default ControlPanel ;
