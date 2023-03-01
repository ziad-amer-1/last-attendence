import React ,{ useState } from 'react';
import Sidebar from '../components/Sidebar';
import Modal from '@mui/material/Modal'; 
import {FaListAlt ,FaSearch} from "react-icons/fa";
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;


function Filter() {

    const [dates, setDates] = useState([])

    const [openLecDetail, setOpenLecDetail] = useState(false);
    const handleOpenLecDetail = () => setOpenLecDetail(true);
    const handleCloseLecDetail = () => setOpenLecDetail(false);

    const handleSubmitLecDetail = () => {
        // detailLecture();
        handleCloseLecDetail();
    }

    return (
        <Sidebar>
            <div className='attendance'>
                <div className='d-flex mr-l-r'>
                    
                    <div className='filter-head'>
                        <p className='filter-title' >Select level</p>
                        <select >
                            <option className='option'>level 1</option>
                            <option className='option'>level 2</option>
                            <option className='option'>level 3</option>
                            <option className='option'>level 4</option> 
                        </select>
                    </div>
                    <div className='filter-head'>
                        <p className='filter-title'>Select Department</p>
                        <select>
                            <option className='option'>department 1</option>
                            <option className='option'>department 2</option>
                            <option className='option'>department 3</option>
                            <option className='option'>department 4</option>
                        </select>
                    </div>
                    <div className='filter-head'>
                        <p className='filter-title'>Select Subject</p>
                        <select >
                            <option className='option'>subject 1</option>
                            <option className='option'>subject 2</option>
                            <option className='option'>subject 3</option>
                            <option className='option'>subject 4</option>
                        </select>
                    </div>
                    
                    <div className='filter-head mar-tp'>
                        <p style={{paddingLeft:"-22px"}} className='filter-title dat-titl'>Select Date range of lecture </p>
                        <div className='date-input' style={{ margin: 0 }}>
                            < RangePicker
                                onChange={(values) => {
                                
                                setDates(values.map(item=>{
                                    return  moment(item).format('YYYY-DD-MM')
                                }))
                                }}
                            />
                        </div>
                    </div>
                </div>
                <table className='table big-table'>
                    <thead>
                        <tr>
                            <th>Subject Name </th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Attended </th>
                            <th>Absent</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>algorithms</td>
                            <td>Mon,2022 jul 3</td>
                            <td className='total-attend'>400</td>
                            <td className='only-attended'>312</td>
                            <td className='only-absent'>88</td>
                            <td style={{color:"#08708d"}} onClick={()=>handleOpenLecDetail()}><FaListAlt/></td>
                            <Modal className='modal xxlarge-modal' open={openLecDetail } onClose={handleCloseLecDetail} >
                                <div className='modal-info' >
                                    <div className='d-flex modal-header'>
                                        <span ><FaListAlt/></span>
                                        <span> lecture Details</span>
                                    </div>
                                    <div className='search'>
                                        <input type="text" name="search" placeholder="Search with student code" />
                                        <a href="#" className="btn btn-search"><FaSearch/></a>
                                    </div>
                                    <div>
                                        <p className='medium-font'>student name</p>
                                        <p>mostafa nasr daraa</p>
                                    </div>
                                    <div>
                                        <p className='medium-font'>student state</p>
                                        <div className='d-flex'>
                                            <input type="radio"></input>
                                            <label>attend</label>
                                            <input type="radio"></input>
                                            <label>absent</label>
                                        </div>
                                    </div>
                                    <div className='d-flex modal-footer'>
                                        <button className='btn' onClick={handleCloseLecDetail}>Cancel</button>
                                        <button className='btn blue' onClick={()=>handleSubmitLecDetail()}>Update</button>
                                    </div>
                                </div>
                            </Modal>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Sidebar>
    )
}

export default Filter;