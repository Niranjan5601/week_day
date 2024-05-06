export const API_OPTIONS = {
    method: "POST",
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
        "limit": 10,
        "offset": 0,
       })
};
   
export  const roleOptions = [
    {
      label: "Engineering",
      options: [
        { value: "backend", label: "Backend" },
        { value: "frontend", label: "Frontend" },
        { value: "ios", label: "Ios" },
        { value: "react native", label: "React Native" },
        { value: "flutter", label: "Flutter" },
        { value: "sre", label: "Sre" },
        { value: "devops", label: "DevOps" },
        { value: "data engineer", label: "Data Engineer" },
        { value: "data science", label: "Data Science" },
        { value: "nlp", label: "Nlp" },
        { value: "computer vision", label: "Computer Vision" },
        { value: "web3", label: "Web3" },
        { value: "computer vision", label: "Deep Learning" },
      ],
    },
    {
      label: "Design",
      options: [
        { value: "designer", label: "Designer" },
        { value: "Design Manager", label: "Design Manager" },
        { value: "Graphic Design", label: "Graphic Design" },
        { value: "Product Design", label: "Product Design" },

      ],
    },
    {
        label: "Product",
        options: [
          { value: "product manager", label: "Product Manager"},
        ],
    },
    {
        label: "Operations",
        options: [
          { value: "operations manager", label: "Operations Manager" },
          { value: "Design Manager", label: "Founders Office/Chied Of Staff" },
         

        ],
      },
      {
        label: "Sales",
        options: [
          { value: "sales development representative", label: "Sales Development Representative" },
          { value: "account executive", label: "Account Executive" },
      

        ],
      },
  ];

  export const minExpOptions=[
   {value:1,label:'1'},
   {value:2,label:'2'},
   {value:3,label:'3'},
   {value:4,label:'4'},
   {value:5,label:'5'},
   {value:6,label:'6'},
   {value:7,label:'7'},
   {value:8,label:'8'},
   {value:9,label:'9'},
   {value:10,label:'10'},
];
  export const salaryOptions=[
    {value:0,label:'0 K'},
    {value:10,label:'10 K'},
    {value:20,label:'20 K'},
    {value:30,label:'30 K'},
    {value:40,label:'40 K'},
    {value:50,label:'50 K'},
    {value:60,label:'60 K'},
    {value:70,label:'70 K'},
];
  export const techOptions=[
    {value:'react',label:'React js'},
    {value:'flutter',label:'Flutter'},
    {value:'python',label:'Python'},
    {value:'django',label:'Django'},
    {value:'mern',label:'MERN'},
  ];
export const remoteOptions=[
    {value:'remote',label:'Remote'},
    {value:'hybrid',label:'Hybrid'},
    {value:'onsite',label:'Onsite'},
];
export const locationOptions=[
    {value:'chennai',label:'Chennai'},
    {value:'bangalore',label:'Bangalore'},
    {value:'hyderabad',label:'Hyderabad'},
    {value:'delhi ncr',label:'Delhi'},
    {value:'mumbai',label:'Mumbai'},
];
  export const customStyles = {
        
    control: (provided) => ({
        ...provided,
        height:50, 
        minHeight: 50, 
        padding: '0 8px', 
        fontWeight: '300',
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: '0 8px',
      }),
      singleValue: (provided) => ({
        ...provided,
        lineHeight: '36px',
      }),
  };