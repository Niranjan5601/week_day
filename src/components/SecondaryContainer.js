import { useSelector } from "react-redux";
import JobCard from "./JobCardDummy";
import '../css/secondaryContainer.css'
import JobCardDummy from "./JobCardDummy";
import { Grid } from "@mui/material";



const SecondaryContainer = () => {
    const jobs = useSelector((store) => store.jobs.jobs?.jdList);
    return (
        jobs && (
           

                    <Grid container spacing={3} style={{marginLeft:'auto',marginRight:'auto'}}  sx={{
                        boxSizing:'border-box',
                        display:'flex',
                        flexFlow:'wrap',
                        marginTop:'-24px',
                        width:'calc(100% + 24px)',
                        marginLeft:'-24px',

                    }}>
                        {jobs?.map((job) => (
                             <JobCardDummy/>
                        ))}
                       
                    </Grid>
              

        )

    )

}


export default SecondaryContainer;