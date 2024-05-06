import useGetJobs from "../hooks/useGetJobs";



import '../css/body.css'
// import JobContainer from "./JobContainer";
import FilterContainer from "./FilterContainer";

const Body = () => {
    useGetJobs();
   return( 
   <div>
    <div><FilterContainer/></div>
    {/* <div className="grid-container lay-container" ><JobContainer/></div> */}
   </div>
   
   );
};


export default Body;