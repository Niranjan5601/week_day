

import '../css/jobCard.css';



const JobCard = () => {

    // const jobs = {jdUid(pin):"cfff35ac-053c-11ef-83d3-06301d0a7178-92010"
    // jdLink(pin):"https://weekday.works"
    // jobDetailsFromCompany(pin):""
    // maxJdSalary(pin):61
    // minJdSalary(pin):null
    // salaryCurrencyCode(pin):"USD"
    // location(pin):"delhi ncr"
    // minExp(pin):3
    // maxExp(pin):6
    // jobRole(pin):"frontend"
    // companyName(pin):"Dropbox"
    // logoUrl(pin):"https://logo.clearbit.com/dropbox.com"}
    // return (
    //     <div className="overall-container">
    //         <div className='all-info'>
    //             <div className="image-company-container">

    //                 <img src="https://logo.clearbit.com/dropbox.com" alt='logo'></img>

    //                 <div>
    //                     <div className='company-info'>
    //                         <h3>Dropbox</h3>
    //                         <h2>Frontend</h2>
    //                     </div>
    //                     <p className='location'>Delhi Ncr</p>
    //                 </div>

    //             </div>
    //             <p className='salary'>Estimated Salary: ₹5.5 - 10 LPA </p>
    //         </div>
    //     </div>
    // )
return(
    <div class="card">
    <p class="funding-info funding-info-dummy"></p>
    <div class="box1">
        <div class="box2">
            <div class="box3">
                <p class="date">⏳ Posted a month ago</p>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="box-company-details">
            <img class="logo" src="https://logo.clearbit.com/dropbox.com" alt="logo"></img>
            <div>
                <div class="info-container">
                    <h3 class="company-name">Granicus</h3>
                    <h2>Systems Engineer III - Linux</h2>
                </div>
                <p class="location">Bengaluru</p>
            </div>
        </div>
        <p class="salary">Estimated Salary: ₹5.5 - 10 LPA<span class="warning">⚠️</span></p>
        <div class="jd-link-container">
            <div class="hard-lang-container"></div>
        </div>
        <div class="box4">
            <div class="box5">
                <p class="section-heading">About Company:</p>
                <div class="about-company">Granicus connects governments with the people they serve by providing the first and only civic engagement platform for the public sector. Over 5,500 federal, state, and local government agencies and more than 300 million citizen subscribers power an unmatched Subscriber Network that turns government missions into quantifiable results. With comprehensive cloud-based solutions for communications, government website design, meeting and agenda management software, records management, and digital services, Granicus empowers stronger relationships between government and residents across the U.S., U.K., Australia, New Zealand, and Canada. By simplifying interactions with residents, while disseminating critical information, Granicus brings governments closer to the people they serve—driving meaningful change for communities around the globe.</div>
                <p class="section-heading">About Role:</p>
                <div class="about-role">The Company... (content truncated for brevity)</div>
            </div>
        </div>
        <div class="show-more"><a href='#'>Show more</a></div>
        <div class="info-container poc-info-container">
            <h3>Minimum Experience</h3>
            <h2>1 years</h2>
        </div>
    </div>
    <div class="status-container">
        <div class="box6">
            <button tabIndex={0} type='button' class="apply-button">⚡ Easy Apply</button>
        </div>
    </div>
</div>
)

}

export default JobCard;








