import React , { useEffect, useState }from 'react';
import Sidebar from '../components/Sidebar';
import {CircularProgressbarWithChildren ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {QRCodeSVG} from 'qrcode.react';

function CreateQr() {
    const [num, setNum] = useState(45);
 
    useEffect(() => {
      setTimeout(() => {
        if (num > 0) {
          setNum(num - 1);
        }else{setNum("time out");}
      }, 1100);
    }, [num]);
   


    return (
        <Sidebar>
            <div className=' generate '>
                <div className='row '>
                    <div className='col-5 ' >
                        <div>
                            <CircularProgressbarWithChildren value={num === 45 ? 100 : 0} styles={buildStyles({pathTransitionDuration: 52 , strokeLinecap: 'butt' , transitionTimingFunction:' linear'})}>
                                <div style={{ textAlign : 'center'}}>
                                    <strong style={{ fontSize: num === "time out" ? 40 : 60 ,color: num === "time out" ? 'red' : '#1c343b', marginLeft:'3px' }}> {num} </strong> 
                                    <p style={{ fontSize: 40,color: '#1c343b',display : num === "time out" ? "none" :"block" }}>sec</p> 
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div>
                            <p>Subject name</p>
                            <span>algorithms</span>
                            <p>Lecture NO.</p>
                            <span>2</span>
                        </div>
                    </div>
                    <div className='col-7'>
                        {/* <img className='qr-img' style={{ display : num === "time out" ? "none" :"block" }} src={Finalqr} alt='myqr'/> */}
                        <div className='qr-img' style={{ display : num === "time out" ? "none" :"flex" }}>
                            <QRCodeSVG value="this is your qrcode" />
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>    
    )
}

export default CreateQr;
