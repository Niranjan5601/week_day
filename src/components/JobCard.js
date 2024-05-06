import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";

import '../css/jobCard.css'

const JobCard = ({ company, position, location, salarymin, salarymax, description, image, currency, minExp, maxExp,link }) => {

    let salaryText;
    let expRequirement;

    if(salarymin === null && salarymax === null){
        salaryText = `Not Specified`;
    }
    else if(salarymin!==null && salarymax===null){
        salaryText = ` ${salarymin} K ${currency}`;
    }
    else if(salarymax!==null && salarymin===null){
        salaryText = ` ${salarymax} K ${currency}`;
    }
    else{
        salaryText = ` ${salarymin} - ${salarymax} K ${currency}`;
    }



    if(minExp === null && maxExp === null){
        expRequirement = ` Experience Not Specified`;
    }
    else if(minExp!==null && maxExp===null){
        expRequirement = ` ${minExp} years`;
    }
    else if(maxExp!==null && minExp===null){
        expRequirement = ` ${maxExp} years`;
    }
    else{
        expRequirement = ` ${minExp} - ${maxExp} years`;
    }

    return (
        <Grid item xs={12} md={6} lg={4} className="card-body-grid-parent">
            <Card className="card" sx={{
                color: 'rgba(0,0,0,0.87)',
                transition: 'box-shadow 300ms cubic-bezier(0.4,0,0.2,1)0ms',
                overflow: 'hidden',
                maxWidth: '360px',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important',


            }}>
                <p className="funding-info funding-info-dummy"></p>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    padding: '5px 0px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        padding: '5px 10px',
                        flexWrap: 'wrap',
                        gap: '5px',
                        width: '100%',
                        flex: '1 1 0%',
                    }}>
                        <Box sx={{
                            padding: '4px 6px',
                            boxShadow: 'rgba(6, 6, 6, 0.05) 0px 2px 6px 0px',
                            borderRadius: '10px',
                            border: '1px solid rgb(230, 230, 230)'

                        }}>
                            <Typography sx={{
                                margin: '0px',
                                fontFamily: "'Lexend', sans-serif",
                                fontWeight: 400,
                                lineHeight: '1.5',
                                fontSize: '9px'
                            }}>
                                ⏳ Posted
                                12 days ago
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <CardContent sx={{ width: '100%', flex: '1 1  0%', padding: '8px 16px' }}>
                    <Box sx={{ display: 'flex', gap: '0.5rem', }}>
                        <Box component={"img"} sx={{
                            height: '2.5rem',
                        }} alt="logo" src={image}></Box>
                        <div>
                            <div className="info-container">
                                <Box component={'h3'}>{company}</Box>
                                <h2>{position}</h2>
                            </div>
                            <p className="cards-sub-text">{location}</p>
                        </div>


                    </Box>
                    <Typography className="card-salary" sx={{
                        color: 'rgb(77, 89, 106)',
                        fontFamily: "'Lexend', sans-serif",
                        lineHeight: '1.43',
                    }}>
                        Estimated Salary:{
                           salaryText
                        }
                        <span className="dummy">  ✅</span>
                        <br></br>
                    </Typography>
                    <div className="jd-link-container">
                        <div className="hard-lang-container"></div>
                    </div>
                    <Box sx={{
                        height: '250px',
                        overflow: 'hidden',
                        maskImage: 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))',
                    }}>
                        <Box>
                            <Typography sx={{
                                margin: '0px',
                                fontSize: '1rem',
                                fontFamily: "'Lexend', sans-serif",
                                lineHeight: '1.5',
                                fontWeight: '500'
                            }}>About Company:</Typography>
                            <Box sx={{
                                whiteSpace: 'pre-wrap',
                                fontSize: '14px',
                            }}>
                                {description}
                            </Box>
                            <Typography sx={{
                                margin: '0px',
                                fontSize: '1rem',
                                fontFamily: "'Lexend', sans-serif",
                                lineHeight: '1.5',
                                fontWeight: '500'

                            }}>About Role:</Typography>
                            <Box sx={{
                                whiteSpace: 'pre-wrap',
                                fontSize: '14px',
                            }}>
                                The Company... (content truncated for brevity)
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        textAlign: 'center',
                        marginBottom: '0.5rem',
                        position: 'relative',
                        top: '-20px'

                    }}>
                        <Typography component={'a'} sx={{
                            color: '#4943da',
                            margin: '0px',
                            fontFamily: "'Lexend', sans-serif",
                            lineHeight: '1.5',
                        }} >Show More</Typography>
                    </Box>
                    <div className="info-container poc-info-container">
                        <h3 style={{ marginTop: '10px' }}>Minimum Experience</h3>
                        <h2>
                            {expRequirement}
                        </h2>
                    </div>
                </CardContent>
                <Box className="status-container" >
                    <Box sx={{
                        WebkitBoxPack: 'justify',
                        justifyContent: 'space-between',
                        display: 'flex',
                        gap: '0.5rem',
                        width: '100%',
                    }}>
                        <Button href={link} id="custom-button" sx={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: '16px'
                        }} style={{
                            width: '100%',
                            backgroundColor: 'rgb(85, 239, 196)',
                            color: 'rgb(0,0,0)',
                            fontWeight: '500',
                            padding: '8px 18px'
                        }}>
                            ⚡ Easy Apply
                        </Button>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
}


export default JobCard;