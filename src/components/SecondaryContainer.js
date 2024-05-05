import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import '../css/secondaryContainer.css'



const SecondaryContainer = () => {
    const jobs = useSelector((store) => store.jobs.jobs?.jdList);
    return (
        jobs && (
            <div className="grid1 grid">
                <div className="grid2">

                    <div  className="grid3 grid">
                        {jobs?.map((job) => (
                            <JobCard />
                        ))}
                    </div>
                </div>
            </div>

        )

    )

}


export default SecondaryContainer;