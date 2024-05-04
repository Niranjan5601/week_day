import useGetJobs from "../hooks/useGetJobs";



const Body = () => {
    useGetJobs();
   return( 
   <div>
    <div>Filter Sec</div>
    <div>jobs</div>
   </div>
   
   );
};


export default Body;