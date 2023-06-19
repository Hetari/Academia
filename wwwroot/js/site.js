const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");



toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    document.querySelector("#user-collapse").classList.remove("show")
    document.querySelector("#class-collapse").classList.remove("show")
    document.querySelector("#course-collapse").classList.remove("show")
    document.querySelector("#student-collapse").classList.remove("show")
    document.querySelector("#employee-collapse").classList.remove("show")
    document.querySelector("#fee-collapse").classList.remove("show")
    document.querySelector("#salary-collapse").classList.remove("show")
    document.querySelector("#attendance-collapse").classList.remove("show")
    document.querySelector("#exam-collapse").classList.remove("show")
    document.querySelector("#report-collapse").classList.remove("show")
    document.querySelector("#setting-collapse").classList.remove("show")

})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Dark mode";
    } else {
        modeText.innerText = "Light mode";
    }
});

var myLink = document.querySelector('a[href="#"]');
myLink.addEventListener('click', function (e) {
    e.preventDefault();
});



/**
 * Home js below:
 * */
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let current_active = 1
update_para()

next.addEventListener('click', () => {
    current_active++

    if (current_active > circles.length) {
        current_active = circles.length
    }
    update()
    update_para()
})

prev.addEventListener('click', () => {
    current_active--
    if (current_active < 1) {
        current_active = 1
    }
    update()
    update_para()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < current_active) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 99.9 + '%'

    if (current_active === 1) {
        prev.disabled = true
    }
    else if (current_active === circles.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
}

function update_para() {
    let title = document.getElementById("title")
    let para = document.getElementById("para")

    if (current_active === 1) {
        title.innerHTML = "Welcome to`<span>`ESKOOLY`</ span>`"
        para.innerHTML = "Simplify administration. Please follow the steps to completa creating account."
    }
    else if (current_active === 2) {
        title.innerHTML = "Softwer Requraments"
        para.innerHTML = "You will need 'SQL Server' installed in your device and 'C#'. You can install them when you click 'next' button."
    }
    else if (current_active === 3) {
        title.innerHTML = "System Setup"
        para.innerHTML = ""
    }
}

/**************************/
/*
 * Login js below:
 * */
