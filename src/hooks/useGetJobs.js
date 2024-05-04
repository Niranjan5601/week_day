import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addJobs } from "../utils/jobsSlice";


const useGetJobs = () =>{
    const dispatch = useDispatch();
    const jobs = useSelector(store => store.jobs.jobs);
    const getJobs = async() => {
        const data = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addJobs(jsonData))
    }

    useEffect(() => {
        !jobs&&getJobs();
    },[])
}

export default useGetJobs;