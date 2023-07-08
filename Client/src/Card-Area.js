import React from "react";
import './Card.css';
// import Carousel from "react-elastic-carousel";
// import Carousal from "@itseasy21/react-elastic-carousel";
import AreaChart from './AreaChart'




const CardArea = (props)=>
{
    return(
        <div className="card-container">
            <div className="chart-container">
                {/* <img src = {props.imageUrl} alt='Random Image'></img> */}
                <AreaChart/>
            </div>
             <div className="card-contents">
               {/* <div className="card-title">
                   <h3>Hello This is the many-many graph</h3>
                </div>
                <div className="card-body">
                   <p>{props.body}</p>
                </div> */}
            </div>
             
            {/* <div className="btn">
                <button>
                    <a>
                        View More
                    </a>
                </button>
            </div> */}


        </div>

    );


}

export default CardArea;