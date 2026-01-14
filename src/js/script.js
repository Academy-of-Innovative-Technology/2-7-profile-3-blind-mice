var profile = {
    bio: {
        first: "Enjin",
        title: "Leader of team Akuta; Cleaners",
        about: "I am a motivated and dependable individual with strong communication and teamwork skills. I take pride in being organized, responsible, and willing to learn. I work well in fast-paced environments and am committed to contributing positively to any team I am part of. Cleaners are responsible for handling Trash Beasts, creatures born from discarded objects filled with human resentment and hatred. Enjin’s work requires him to enter extremely hostile environments, fight these monsters, and prevent them from spreading destruction. This makes the job physically demanding and life-threatening, especially since Trash Beasts can adapt, overwhelm, or kill unprepared Cleaners. Cleaners deal with the consequences of society’s neglect—literally cleaning up what the upper world throws away, including objects and people deemed “worthless.”"
    },

    social: [
        { facebook: "Enjin.Umbreaker@" },
        { X: "828-358-2922" },
        { youtube: "Enji_Cleans" },
        { linkedIn: "CleanerEnjin" }
    ],

    career: {
        company: "Ground, East Ward, Cleaners HQ",
        title: "Leader of team Akuta",
        role: "Cleaner"
    },

  skills: [
        { title: "Speed", level: 70 },
        { title: "Strength", level: 90 },
        { title: "Tuition", level: 100 }
    ],
education: [
    { title: "Education", description: "None, but has been trained by the Cleaner Master" },
    { title: "Career Start", description: "After being trained by the Cleaner Master, Enjin was sent to the East Ward to lead team Akuta" },
    { title: "Experience", description: "Over 10 years of experience in cleaning and fighting Trash Beasts" }
]
};




document.querySelector("#profileName").innerText = profile.bio.first;
document.querySelector("#profileTitle").innerText = profile.bio.title;
document.querySelector("#profileEmail").innerText = profile.social[0].facebook;
document.querySelector("#profilePhone").innerText = profile.social[1].X;
document.querySelector("#profileLocation").innerText = profile.career.company;

document.querySelector("#profileImage").src = "https://ella.janitorai.com/bot-avatars/KU34fefGAyV8DHnzrefgY.webp?width=400";


document.querySelector("#facebookLink").href = "https://facebook.com/" + profile.social[0].facebook;
document.querySelector("#twitterLink").href  = "https://x.com/" + profile.social[1].X;
document.querySelector("#youtubeLink").href  = "https://youtube.com/" + profile.social[2].youtube;
document.querySelector("#linkedinLink").href = "https://linkedin.com/in/" + profile.social[3].linkedIn;


document.querySelector("#facebookLink").title = profile.social[0].facebook;
document.querySelector("#twitterLink").title = profile.social[1].X;
document.querySelector("#youtubeLink").title = profile.social[2].youtube;
document.querySelector("#linkedinLink").title = profile.social[3].linkedIn;



document.querySelector(".container p").innerText = profile.bio.about;
document.querySelector("#description").innerText = profile.education[0].description;
document.querySelector("#description-b").innerText = profile.education[1].description
document.querySelector("#description-c").innerText = profile.education[2].description



var skillContainer = document.querySelector("#skillsProgressBars");


profile.skills.forEach(skill => {
    skillContainer.insertAdjacentHTML("beforeend", `
        <div class="progress-text">
            <div class="row">
                <div class="col-6 fw-bold">${skill.title}</div>
                <div class="col-6 text-end">${skill.level}%</div>
            </div>
        </div>
        <div class="custom-progress progress rounded-3 mb-4">
            <div class="animated custom-bar progress-bar" 
                 style="width:${skill.level}%" 
                 aria-valuemax="100" 
                 aria-valuemin="0" 
                 aria-valuenow="${skill.level}" 
                 role="progressbar"></div>
        </div>
    `);
});
