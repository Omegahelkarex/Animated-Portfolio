import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar/>

        
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
             transition={{duaration:0.5}}
             >
                Piyush Chattrejee</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/piyush.chatterjee.39794?mibextid=ZbWKwL"><img src="/facebook.png"/></a>
                <a href="https://instagram.com/omega.helkarex_?igshid=OGQ5ZDc2ODk2ZA=="><img src="/instagram.png"/></a>
                <a href="https://x.com/omega_helkarex?t=hXSs3HL0TLV6g_CfWs6dfg&s=09"><img src="twitter.png"/></a>
                <a href="https://github.com/Omegahelkarex"><img src="github1.png"/></a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
