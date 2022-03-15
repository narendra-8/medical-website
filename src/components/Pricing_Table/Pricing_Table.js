import './pricing_table.css'
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default  function Price_Table () {

        return (
            <div className="body_container" >

                <div className="main_container">

                        <div className="container_contents" >
                            <div className='price'>
                                <div> FREE</div>
                                <div>< span>$0</span>/month</div>                                
                            </div>
                            <h1><hr></hr> </h1>
                            <div> <span> <DoneIcon/></span> Single User</div>
                            <div> <span> <DoneIcon/></span> 5GB Storage</div>
                            <div> <span> <DoneIcon/></span>Unlimited Public Projects</div>
                            <div> <span> <DoneIcon/></span>Community Access</div>
                            <div> <span> <CloseIcon/></span>Unlimited Private Projects</div>
                            <div> <span> <CloseIcon/></span>Dedicated Phone Support</div>
                            <div> <span> <CloseIcon/></span>Free Subdomain</div>
                            <div> <span> <CloseIcon/></span> Monthly Status Reports</div>
                            <div className='btn' >
                                <div ><Button  variant="contained">BUTTON</Button></div>
                             </div>
                            
                        </div>
                        <div className="container_contents" >
                            <div className='price'>
                                <div> PLUS</div>
                                <div>< span>$9</span>/month</div>                                
                            </div>
                            <h1><hr></hr> </h1>
                            <div><span> <DoneIcon/></span>5 Users</div>
                            <div><span> <DoneIcon/></span>50GB Storage</div>
                            <div><span> <DoneIcon/></span>Unlimited Public Projects</div>
                            <div><span> <DoneIcon/></span>Community Access</div>
                            <div><span> <DoneIcon/></span>Unlimited Private Projects</div>
                            <div><span> <DoneIcon/></span>Dedicated Phone Support</div>
                            <div><span> <DoneIcon/></span>Free Subdomain</div>
                            <div ><span> <CloseIcon/></span> Monthly Status Reports</div>
                            <div className='btn'><Button variant="contained">BUTTON</Button></div>
                        </div>
                        <div className="container_contents" >
                            <div className='price'>
                                <div> PRO</div>
                                <div>< span>$49</span>/month</div>                                
                            </div>
                             <h1><hr/></h1> 
                            <div><span> <DoneIcon/></span> Unlimited Users</div>
                            <div><span> <DoneIcon/></span>150GB Storag</div>
                            <div><span> <DoneIcon/></span>Unlimited Public Projects</div>
                            <div><span> <DoneIcon/></span>Community Access</div>
                            <div><span> <DoneIcon/></span>Unlimited Private Projects</div>
                            <div><span> <DoneIcon/></span>Dedicated Phone Support</div>
                            <div><span> <DoneIcon/></span>Free Subdomain</div>
                            <div><span> <DoneIcon/></span>Monthly Status Reports</div>
                            <div className='btn'><Button variant="contained">BUTTON</Button></div>
                        </div>

                </div>

            </div>
            
            
        )
}