import useGetJobs from "../hooks/useGetJobs";
import JobCard from "./JobCard";
import SecondaryContainer from "./SecondaryContainer";

import '../css/body.css'

const Body = () => {
    useGetJobs();
   return( 
   <div>
    <div>Filter Sec</div>
    <div className="grid-container lay-container" ><SecondaryContainer/></div>
   </div>
   
   );
};


export default Body;