
import { Box, Grid, TextField } from '@mui/material';
import '../css/filterContainer.css'
import Select from 'react-select';
import { customStyles, locationOptions, minExpOptions, remoteOptions, roleOptions, salaryOptions, techOptions } from '../utils/constants';
import JobCard from './JobCard';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const FilterContainer = () => {
    const jobs = useSelector((store) => store.jobs.jobs?.jdList);
    const [filteredJobs, setFilteredJobs] = useState(jobs);
    const [filters, setFilters] = useState({
        roles: [],
        minExp: null,
        locations: [],
        remoteOptions: [],
        techStack: [],
        minBasePay: null,
        searchCompany: '',
    });
    const applyFilters = () => {
        if(jobs === null) return(<div>Loading</div>);

        let filteredData = jobs;

        // Apply filters
        filteredData = filteredData.filter((job) => {
            // Filter by roles
            if (filters.roles.length > 0 && !filters.roles.some(role => job.jobRole.includes(role.value))) {
                return false;
            }

            // Filter by minExp
            if (filters.minExp && job.minExp < filters.minExp) {
                return false;
            }

            // Filter by locations
            if (filters.locations.length > 0 && !filters.locations.some(location => job.location === location.value)) {
                return false;
            }

            // Filter by remote/on-site
            if (filters.remoteOptions.length > 0 && !filters.remoteOptions.some(remote => job.location.toLowerCase().includes(remote.value.toLowerCase()))) {
                return false;
            }

            // Filter by techStack
            // if (filters.techStack.length > 0 && !filters.techStack.some(tech => job.location.toLowerCase().includes(tech.value.toLowerCase()))) {
            //     return false;
            // }

            // Filter by minBasePay
            if (filters.minBasePay && job.minJdSalary < filters.minBasePay) {
                return false;
            }

            // Filter by searchCompany
            if (filters.searchCompany && !job.companyName.toLowerCase().includes(filters.searchCompany.toLowerCase())) {
                return false;
            }

            return true;
        });
        console.log(filteredData);
        setFilteredJobs(filteredData);
    };
    useEffect(() => {
        applyFilters();
    }, [jobs, filters]);

    const handleChange = (selectedOption, actionMeta) => {
        switch (actionMeta.name) {
            case 'roles':
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    roles: selectedOption,
                }));
                break;
            case 'minExp':
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    minExp: selectedOption ? selectedOption.value : null,
                }));
                break;
            case 'locations':
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    locations: selectedOption,
                }));
                break;
            case 'remoteOptions':
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    remoteOptions: selectedOption,
                }));
                break;
            case 'techStack':
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    techStack: selectedOption,
                }));
                break;
            case 'minBasePay':
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    minBasePay: selectedOption ? selectedOption.value : null,
                }));
                break;
            case 'searchCompany':
                setFilters((prevFilters) => ({
                    ...prevFilters,
                    searchCompany: selectedOption ? selectedOption.value : '',
                }));
                break;
            default:
                break;
        }
    }

    return(
        <>
        <Box>
            <div className="filter-container">
                <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Select isMulti name='roles' placeholder={'Roles'} onChange={(selectedOption,actionMeta)=>handleChange(selectedOption,actionMeta)} styles={customStyles} options={roleOptions}/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Select isClearable={true} name='minExp' onChange={(selectedOption,actionMeta)=>handleChange(selectedOption,actionMeta)} placeholder={'Min Experience'} styles={customStyles} options={minExpOptions}/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Select isMulti name='locations' onChange={(selectedOption,actionMeta)=>handleChange(selectedOption,actionMeta)} placeholder={'Location'} styles={customStyles} options={locationOptions}/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Select isMulti name='remoteOptions' onChange={(selectedOption,actionMeta)=>handleChange(selectedOption,actionMeta)} placeholder={'Remote/on-site'} styles={customStyles} options={remoteOptions}/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Select isMulti name='techStack' onChange={(selectedOption,actionMeta)=>handleChange(selectedOption,actionMeta)} placeholder={'Tech Stack'} styles={customStyles} options={techOptions}/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Select isClearable={true} name='minBasePay' onChange={(selectedOption,actionMeta)=>handleChange(selectedOption,actionMeta)}  placeholder={'Min Base Pay'} styles={customStyles} options={salaryOptions}/>
                </Box>
                <Box className='search-box' sx={{display:'flex',flexDirection:'column'}}>
                        <TextField sx={{
                             "& .MuiOutlinedInput-root": {
                               
                                fontFamily: "'Lexend', sans-serif",
                                fontWeight: "400",
                                fontSize:'1rem',
                                lineHeight:'1.4375rem',
                                color:'rgba(0,0,0,0.87)',
                                boxSizing:'border-box',
                                cursor:'text',
                                display:'inline-flex',
                                alignItems:'center',
                                position:'relative',
                                borderRadius:'4px',                              
                              }, 

                        }} placeholder='Search Company' onChange={handleChange}  />
                </Box>
            </div>
        </Box>
        <Grid container spacing={3} style={{marginLeft:'auto',marginRight:'auto'}}  sx={{
                        boxSizing:'border-box',
                        display:'flex',
                        flexFlow:'wrap',
                        marginTop:'-24px',
                        width:'calc(100% + 24px)',
                        marginLeft:'-24px',

                    }}>
                        {jobs?.map((job) => (
                             <JobCard key={job.jdUid} company={job?.companyName} position={job?.jobRole} location={job.location} image={job.logoUrl} description={job?.jobDetailsFromCompany}
                             salarymin={job?.minJdSalary} salarymax={job?.maxJdSalary} currency={job?.salaryCurrencyCode} minExp={job?.minExp} maxExp={job?.maxExp} link={job?.jdLink}
                             />
                        ))}
                       
                    </Grid>
        </>
        
    );
}


export default FilterContainer;