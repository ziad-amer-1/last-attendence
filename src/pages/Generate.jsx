import React from 'react';
import Sidebar from '../components/Sidebar';
import qr2 from '../images/qr2.png';
import {Link} from 'react-router-dom';

function Generate() {

    // const [students , setStudents] = useState([]);

    // useEffect( async() => {
    //   let response = await axios.get("http://localhost:8000/students")
    //   setStudents(response.data)
    // },[]); 

    return (

        <Sidebar>
            <div className=' generate '>
                <div className='row quoar'>
                    <div className='col-6'>
                        <form className='gen-form'>
                            <label>Select level</label>
                            <select>
                                <option value="algorithms">algorithms</option>
                                <option value="data structure">data structure</option>
                                <option value="operating systems">operating systems</option>
                            </select>
                            <label>Select department</label>
                            <select>
                                <option value="algorithms">algorithms</option>
                                <option value="data structure">data structure</option>
                                <option value="operating systems">operating systems</option>
                            </select>
                            <label>Select subject</label>
                            <select>
                                <option value="algorithms">algorithms</option>
                                <option value="data structure">data structure</option>
                                <option value="operating systems">operating systems</option>
                            </select>
                            
                            <Link to="/creatQr">
                                <button className='gen-btn'>Generate QR code</button>
                            </Link>
                        </form>
                    </div>
                    <div className='col-6'>
                        <div>
                            <img className='gen-img' src={qr2} alt='qr2'/>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>    
    )
}

export default Generate;
