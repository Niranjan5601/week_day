// import { useSelector } from "react-redux";
// import JobCard from "./JobCard";
// import '../css/secondaryContainer.css'

// import { Grid } from "@mui/material";



// const JobContainer = () => {
//     const jobs = useSelector((store) => store.jobs.jobs?.jdList);
//     return (
//         jobs && (
//                     <Grid container spacing={3} style={{marginLeft:'auto',marginRight:'auto'}}  sx={{
//                         boxSizing:'border-box',
//                         display:'flex',
//                         flexFlow:'wrap',
//                         marginTop:'-24px',
//                         width:'calc(100% + 24px)',
//                         marginLeft:'-24px',

//                     }}>
//                         {jobs?.map((job) => (
//                              <JobCard key={job.jdUid} company={job?.companyName} position={job?.jobRole} location={job.location} image={job.logoUrl} description={job?.jobDetailsFromCompany}
//                              salarymin={job?.minJdSalary} salarymax={job?.maxJdSalary} currency={job?.salaryCurrencyCode} minExp={job?.minExp} maxExp={job?.maxExp} link={job?.jdLink}
//                              />
//                         ))}
                       
//                     </Grid>
              

//         )

//     )

// }


// export default JobContainer;