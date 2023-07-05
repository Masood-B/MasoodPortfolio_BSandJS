// About section 
let about = document.querySelector("section#about .row:last-child");
let aboutContents = [
    "Im a guy who is 21 year at age. I live in Mitchell's Plain where i attended Meadowridge Primary School and went to Spine Road High School during my young days. I went to Cape Peninsula University of Technology for 3 years but never got to finished it. Now im following a dream that i had as a kid, to have influence over the game world I want to make.",
    "I'm the type of person who's motivated and driven to be a great person someday. I'm not afraid to take a risk to learn new stuff. I always like to interact with people that would help me become a better version of myself. I love reading books, learning new technology, doing exercises and playing games. Also, I really do enjoy spend time with myself. To clear unwanted thought that might affect me."
]

// Loop through the content 
aboutContents.forEach((content, i)=>{
about.innerHTML += `<p class='lead'>${i+1} ${content}</p>`
});

// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: 'I am currently studying coding at Life Choice Academy',
        place: 'Life Choice Academy',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: '2020-2022',
        description: 'I went to university to study Biotechnology and dropped out',
        place: 'Cape Peninsula University of Technology',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2019,
        description: 'I went to go learn at iStudent Academy and gotten a certificate for I.T Engineering 1 day workshop',
        place: 'iStudent Academy',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2019,
        description: 'I matriculated from high school with a bachelor pass',
        place: 'Tshwane University of Technology',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2017,
        description: 'My homeroom teacher rewarded me with certificates for working hard every term',
        place: 'Spine Road High',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 6,
        year: 2015,
        description: 'During the start of my High School, I attended a Numeric Math Programme and was giving multiple certificates',
        place: 'Spine Road High',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2014,
        description: 'During Primary School i was given a chess player certificate',
        place: 'Meadowridge Primary School',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})

// Skills
let skills = [
    {
    id: 1,
    pic:"https://i.postimg.cc/xdjQYvb5/icons8-html5-100.png",
    namme:"",
    title:"HTLM5",
    },
    {
    id: 2,
    pic:"https://i.postimg.cc/76fyJq9T/icons8-css3-100.png",
    namme:"",
    title:"CSS3",
    },
    {
    id: 3,
    pic:"https://i.postimg.cc/c1tSs46p/icons8-github-100.png",
    namme:"",
    title:"Github",
    },
    {
    id: 4,
    pic:"https://i.postimg.cc/HkpR7pss/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-sta.png",
    namme:"",
    title:"Netlify",
    },
    {
    id: 5,
    pic:"https://i.postimg.cc/d32NLfby/icons8-bootstrap-144.png",
    namme:"",
    title:"Bootstrap",
    },
    {
    id: 6,
    pic:"https://i.postimg.cc/NjMbcLjT/icons8-javascript-144.png",
    namme:"",
    title:"JavaScript",
    }
]

let divSkills = document.querySelector(".skills");
skills.forEach((talent)=> {
    divSkills.innerHTML += `
    <div class= "cards-wrapper">
    <div class="images">
    <img src="${talent.pic}" alt="${talent.namme}" loading="lazy">
    <h2>${talent.title}</h2>
    </div>
    </div>
    `
})
