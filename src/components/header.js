import React,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/header.css';
function HeaderComp() {
    const [toggle, setToggle]=useState(true);
    return (
        <div>
            <div className="Header_Container">
                <div className="Header_Contents">
                    <div className="Logo">
                        <img src="https://50nx67a44a-flywheel.netdna-ssl.com/wp-content/uploads/2015/12/Microsoft-Logo-PNG.png" alt="Microsoft Learn"/>
                    </div>
                    <div className="Nav_Links">
                        <div className="Home link">Home</div>
                        <div className="About_Us link">About Us</div>
                        <div className="Contact_Us link">Contact Us</div>
                    </div>
                    <div className="Collapse" onClick={()=>setToggle(!toggle)}>
                        <MenuIcon/>
                    </div>
                </div>
            </div>
            <div className={`Collapse_View ${toggle&&'Hide_View'}`}>
                <ul className="List">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>   
        </div>
    )
}

export default HeaderComp;
