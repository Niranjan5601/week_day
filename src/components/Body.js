import useGetJobs from "../hooks/useGetJobs";



import '../css/body.css'
import FilterContainer from "./FilterContainer";

const Body = () => {
    useGetJobs();
   return( 
   <div>
    <div><FilterContainer/></div>
    
   </div>
   
   );
};


export default Body;