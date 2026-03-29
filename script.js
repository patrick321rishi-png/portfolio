// DARK MODE
document.getElementById("darkModeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// PROFILES
const profiles = {
    rishi: {
    name: "Rishi",
    role: "Web Developer",
    skills: "HTML, CSS, JavaScript",
    education: "MCA",
    about: "Passionate developer",
    resume: "resume/rishi.pdf",
    linkedin: "https://www.linkedin.com/in/rishi-patrick-s-a10284281",
    github: "#"
},

    sanjay: {
        name: "Sanjay",
        role: "UI Designer",
        skills: "Figma, Photoshop",
        education: "MCA",
        about: "Creative designer",
        resume: "resume/sanjay.pdf",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
    },

    charan: {
        name: "Charan",
        role: "Backend Developer",
        skills: "Java, MySQL",
        education: "MCA",
        about: "Backend expert",
        resume: "resume/charan.pdf",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
    },

    anusha: {
        name: "Anusha",
        role: "Frontend Developer",
        skills: "HTML, CSS",
        education: "MCA",
        about: "UI developer",
        resume: "resume/anusha.pdf",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
    },

    punith: {
        name: "Punith",
        role: "Full Stack Developer",
        skills: "MERN",
        education: "MCA",
        about: "Full stack dev",
        resume: "resume/punith.pdf",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
    },

    prajwal: {
        name: "Prajwal",
        role: "Database",
        skills: "SQL",
        education: "MCA",
        about: "Data expert",
        resume: "resume/prajwal.pdf",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
    },

    dhaneshwari: {
        name: "Dhaneshwari",
        role: "Tester",
        skills: "Manual Testing",
        education: "MCA",
        about: "Quality assurance",
        resume: "resume/dhaneshwari.pdf",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
    },

    bhavya: {
        name: "Bhavya",
        role: "Coordinator",
        skills: "Management",
        education: "MCA",
        about: "Team coordinator",
        resume: "resume/bhavya.pdf",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/"
    }
};

// OPEN PROFILE
function openProfile(member) {
    const data = profiles[member];

    document.getElementById("profileData").innerHTML = `
        <h2>${data.name}</h2>
        <p><b>Role:</b> ${data.role}</p>
        <p><b>Skills:</b> ${data.skills}</p>
        <p><b>Education:</b> ${data.education}</p>
        <p><b>About:</b> ${data.about}</p>

        <a href="${data.resume}" download>
            <button class="btn">Download Resume</button>
        </a><br>

        <a href="${data.linkedin}" target="_blank">
            <button class="btn">LinkedIn</button>
        </a>

        <a href="${data.github}" target="_blank">
            <button class="btn">GitHub</button>
        </a>
    `;

    document.getElementById("modal").style.display = "block";
}

// CLOSE MODAL
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// CLICK OUTSIDE CLOSE
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}