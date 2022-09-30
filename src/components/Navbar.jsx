import React, { useState } from "react";
import Chinastate from "./Chinastate";
import Indianstates from "./Indianstates";
import Mahadist from "./Mahadist";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [visi,setVisi]=useState(false)
    const [dist,setDist]=useState(false)
    const [rajasthan,setRajasthan]=useState(false)
    const [up,setUp]=useState(false)
    const [henan,setHenan]=useState(false)
    const [beijing,setBeijing]=useState(false)
    const [gansu,setGansu]=useState(false)

    
        

    return (
        <React.Fragment>
            <h1 id='hh'> Country Details </h1>
        <div class="sidebar">
            <h2 className="nav"> Logo</h2>
            <div>
                <h3 className="nav"> Select country </h3>
                <label className="lab">
                    <input
                        name="country"
                        type="Radio"
                        onClick={() => setVisible(true) && setVisi(false) && setVisible(!visible) }
                    />
                    <span> India </span>
                </label>
                <label className="lab">
                    <input name="country" type="Radio" onClick={()=>setVisi(true) && setVisible(false)} /> <span> China </span>
                </label>
            </div>
            {
                visible && 
                <div id="stat">
                    <h3 className="nav"> Select State </h3>
                    <label className="lab">
                        <input  name="state" id="stat" type="Radio" onClick={()=>setDist(true)} /> <span> Maharashtra </span>{" "}
                    </label>
                    <label className="lab">
                        <input name="state" id="stat" type="Radio" onClick={()=>setUp(true)} /> <span> U.P </span>
                    </label>
                    <label className="lab">
                        <input name="state" id="stat" type="Radio" onClick={()=>setRajasthan(true)} /> <span> Rajastan </span>
                    </label>
                </div> 
                   }

            
            
             
             { visi && 
                <div className="st">
             <h3 className="nav"> Select State </h3>
                    <label className="lab">
                        <input name="state" type="Radio" onClick={()=>setHenan(true) }  /> <span> Henan </span>{" "}
                    </label>
                    <label className="lab">
                        <input name="state" type="Radio" onClick={()=>setBeijing(true)} /> <span> Beijing </span>
                    </label>
                    <label className="lab">
                        <input name="state" type="Radio" onClick={()=>setGansu(true)} /> <span> Gansu </span>
                    </label>
             </div> }
             

              {
                dist && 
                <div>
                <h3 className="nav"> Select District</h3>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Hingoli </span>{" "}
                </label>
                <label className="state">
                    {" "}
                    <input name="state" type="Radio" /> <span> Nanded </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Pune </span>{" "}
                </label>
            </div>
              }
              {
                up && 
                <div>
                <h3 className="nav"> Select District</h3>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Agra </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Prayagraj </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Aligarh </span>{" "}
                </label>
            </div>
              }
              {
                rajasthan && 
                <div>
                <h3 className="nav"> Select District</h3>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Jaypur </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Jodhpur </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Ajmer </span>{" "}
                </label>
            </div>
              }
              {
                henan && 
                <div>
                <h3 className="nav"> Select District</h3>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Hui </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Shihi </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Jinshui </span>{" "}
                </label>
            </div>
              }
              {
                gansu && 
                <div>
                <h3 className="nav"> Select District</h3>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Shusui </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> suzuie </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Dunhuang </span>{" "}
                </label>
            </div>
              }
              {
                beijing && 
                <div>
                <h3 className="nav"> Select District</h3>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span>Xicheng </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> Dongcheng </span>{" "}
                </label>
                <label className="lab">
                    {" "}
                    <input name="state" type="Radio" /> <span> fengtai </span>{" "}
                </label>
            </div>
              }
        </div>
        { 
         visi &&
       <div class="content"> <Chinastate/> </div>
}    
        {   visible &&
         <div id="stat" class="content">  <Indianstates/> </div> 
            
        }
        { dist &&
        <div id="st" class="content"> <Mahadist/> </div>
        } 
  </React.Fragment>
  
    );
};

export default Navbar;
