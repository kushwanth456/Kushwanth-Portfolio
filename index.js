var content = document.getElementById("content")


async function profile() {
    let fetchjson = await fetch("data.json");
    let data = await fetchjson.json();
    console.log(data);
    function createBars(rating) {
        let barsHTML = '';
        for (let i = 1; i <= 5; i++) {
            barsHTML += i <= rating
                ? '<span class="bar filled"></span>'
                : '<span class="bar"></span>';
        }
        return barsHTML;
    }
    var profiledata = '';
    profiledata += `
    <div class="about">
                <h2>Summary</h4><br>
                    <p class="white">${data.summary}</p>
            </div>
            <br>
            <h2>What I Do</h2>
            <div class="Whatid0">
                <div class="containerwid1">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <h3>Web Design</h3><br>
                        <p class="white">Skilled in creating responsive, user-friendly web interfaces using HTML and CSS, with a strong focus on UX and accessibility.</p>
                </div>
                <div class="containerwid2">
                    <i class="fa-solid fa-code"></i>
                    <h3>Web Development</h5><br>
                        <p class="white">Skilled in developing responsive,web apps using HTML,CSS,JavaScript, and REST APIs. Proficient in Java, Spring Boot,and PostgreSQL.</p>
                </div>
                <div class="containerwid3">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <h3>designing</h5><br>
                        <p class="white">skilled in creating visually appealing logos, thumbnails, and product graphics. My work crafts unique visuals that represent brands and attract attention, marketing impact.</p>
                </div>
                <div class="containerwid4">
                    <i class="fa-solid fa-splotch"></i>
                    <h3>Content Creation</h5><br>
                        <p class="white">I create engaging content—posts, graphics, videos, and social media materials—tailored to the target audience to help brands communicate effectively and grow online.</p>
                </div>
                <div class="skill">
                    <h3>Skills</h3>
                   
                    <div class="rating">
                        <p class="white">HTML5</p>
                        <div class="bars">${createBars(data.skills.frontend[0].rating)}</div>
                    </div>
                    <div class="rating">
                        <p class="white">Css</p>
                        <div class="bars">${createBars(data.skills.frontend[1].rating)}</div>
                    </div>
                    <div class="rating">
                        <p class="white">JavaScript</p>
                        <div class="bars">${createBars(data.skills.frontend[2].rating)}</div>
                    </div>
                    <div class="rating">
                        <p class="white">Java</p>
                        <div class="bars">${createBars(data.skills.backend[0].rating)}</div>
                    </div>
                    <div class="rating">
                        <p class="white">Spring Boot</p>
                        <div class="bars">${createBars(data.skills.backend[2].rating)}</div>
                    </div>
                    <div class="rating">
                        <p class="white">Rest API</p>
                        <div class="bars">${createBars(data.skills.concepts[1].rating)}</div>
                    </div>
                    <div class="rating">
                        <p class="white">Oracle Sql</p>
                        <div class="bars">${createBars(data.skills.databases[0].rating)}</div>
                    </div>
                </div>
            </div>
    `
    content.innerHTML = profiledata
}

async function resume() {
    let fetchjson = await fetch("data.json");
    let data = await fetchjson.json();
    console.log(data);
    async function loadSkills() {
        const response = await fetch("data.json");
        const data = await response.json();

        function createBars(rating) {
            let bars = "";
            for (let i = 0; i < 5; i++) {
                bars += `<span class="bar ${i < rating ? 'filled' : ''}"></span>`;
            }
            return bars;
        }

        function generateSkills() {
            const skillSections = [
                data.skills.frontend,
                data.skills.backend,
                data.skills.databases,
                data.skills.concepts,
                data.skills.tools
            ];

            // Flatten all skill arrays into one
            const allSkills = skillSections.flat();

            // Split skills into two halves
            const middleIndex = Math.ceil(allSkills.length / 2);
            const firstHalf = allSkills.slice(0, middleIndex);
            const secondHalf = allSkills.slice(middleIndex);

            // Function to create rating blocks
            const renderSkills = (skills) => skills.map(skill => `
        <div class="rating">
            <p class="white">${skill.skill}</p>
            <div class="bars">${createBars(skill.rating)}</div>
        </div>
    `).join("");

            // Inject HTML
            const resumeSkillsContainer = document.querySelector(".ResumeSkills");
            resumeSkillsContainer.innerHTML = `
        <div class="skills">
                <div style="background-color: rgb(11, 13, 32);">${renderSkills(firstHalf)}</div>
                <div style="background-color: rgb(11, 13, 32);">${renderSkills(secondHalf)}</div>
        </div>
    `;
        }


        generateSkills();
    }


    // Call it when the page loads
    loadSkills();
    var profiledata = '';
    profiledata += `
    
            <div class="Resume">
                <div class="edulogo">
                    <i class="fa-solid fa-user-graduate"
                        style="background-color: rgb(20, 23, 48); padding: 10px; border-radius: 50%;"></i>
                        <h1>Education</h1>
                </div>

                <div class="edupath">
                    <div class="vert-line"></div>
                    <div class="dot dot1"></div>
                    <div class="dot dot2"></div>
                    <div class="dot dot3"></div>
                </div>

                <div class="eduedu">
                    <div class="edu-entry">
                        <h3>${data.education[0].institution}</h3>
                        <span class="year">${data.education[0].year}</span>
                        <p class="white">${data.education[0].degree}</p>
                    </div>
                    <div class="edu-entry">
                        <h3>${data.education[1].institution}</h3>
                        <span class="year">${data.education[1].year}</span>
                        <p class="white">${data.education[1].inter}</p>
                    </div>
                    <div class="edu-entry">
                        <h3>${data.education[2].institution}</h3>
                        <span class="year">${data.education[2].year}</span>
                        <p>${data.education[2].School}</p>
                    </div>
                    
                </div>
                <!-- Experience Icon -->
                <div class="explogo">
                    <i class="fa-solid fa-briefcase"
                        style="background-color: rgb(20, 23, 48); padding: 10px; border-radius: 50%;"></i>
                        <h1>Experience</h1>
                </div>

                <!-- Experience Path -->
                <div class="exppath">
                    <div class="vert-line"></div>
                    <div class="dot dot4"></div>
                    <div class="dot dot5"></div>
                </div>

                <!-- Experience Content -->
                <div class="expexp">
                    <div class="exp-entry">
                        <h3>${data.experience[0].title} at ${data.experience[0].company}</h3>

                        <span class="year">${data.experience[0].duration}</span>
                        <ul>
                        <p><li>${data.experience[0].description[0]}</li>
                        <li>${data.experience[0].description[1]}</li></p>
                        </ul>
                    </div>
                    <div class="exp-entry">
                        <h3>${data.experience[1].title} at ${data.experience[1].company}</h3>
                        <span class="year">${data.experience[1].duration}</span>
                        <ul>
                        <p><li>${data.experience[1].description[0]}</li></p>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div style="background-color: rgb(14, 17, 39);">
            <h1 style="background-color: rgb(14, 17, 39);">Skills</h1><br>
            <div class="ResumeSkills">
                <div id="frontend"></div>
                <div id="backend">
                </div>
                <div id="database"></div>
                <div id="concepts"></div>
                <div id="tools"></div>
            </div>
            </div>
    `;
    content.innerHTML = profiledata;
}

async function projects() {
    let fetchjson = await fetch("data.json");
    let data = await fetchjson.json();
    console.log(data);
    var profiledata = '';
    let cardsHTML = '';
    for (let i = 0; i < data.projects.length; i++) {
        cardsHTML += `
            <div class="project-Card">
                <img src="./projectimages/${data.projects[i].img}" alt="">
                <a href="${data.projects[i].link}"><i class="fa-solid fa-eye"></i></a>
                <h3 class="heading">${data.projects[i].title}</h3>
            </div>
        `;
    }
    const finalHTML = `
        <div class="project-layout">
            ${cardsHTML}
        </div>
    `;
    content.innerHTML = finalHTML
}
function contact() {
    var contactdata = '';
    contactdata += `
        <h1>Contact</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="6a84106c-5e4f-4ede-be6f-f0856ed9df9d">
                <div class="contact">

                    <div class="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124079.74569101623!2d79.34410081166992!3d13.627805720325417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1748026216602!5m2!1sen!2sin"
                            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="name">
                        <input type="text" placeholder="Enter Your Name">
                        <label for="">FullName</label>
                    </div>
                    <div class="email">
    <input type="email" placeholder="Enter Your Email">
    <label for="">Email</label>
</div>

    <textarea name="text" placeholder="Message"></textarea>

    <button>Submit</button>

                </div>
            </form>
    `;
    content.innerHTML = contactdata
}
profile();
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const section = this.getAttribute("con");
        console.log(section);
        console.log(section.toLowerCase());
        switch (section.toLowerCase()) {
            case "profile":
                profile();
                break;
            case "resume":
                resume();
                break;
            case "projects":
                projects();
                break;
            case "blog":
                blog();
                break;
            case "contact":
                contact();
                break;
            default:
                console.warn("No function defined for:", section);
        }
    });
});
let on = true;
let down = document.querySelector(".down")
let icon = document.getElementById("icon")
down.addEventListener("click", e => {
    e.preventDefault();

    const navHideElement = document.querySelector(".nav-hide");
    if (on) {
        navHideElement.style.display = "block";
        icon.className = "fa-solid fa-angle-up";
        down.style.top = "300px";
        on = false;
    } else {
        navHideElement.style.display = "none";
        icon.className = "fa-solid fa-angle-down";
        down.style.top = "110px";
        on = true;
    }
});
