// ---------------------------------------------------
// -----------------------Nav item Click--------------

let navclick = document.querySelectorAll(".nav-item");

navclick.forEach(e=>{
    e.addEventListener("click",() =>{
        navclick.forEach(event=>{
            event.classList.remove("active-nav");
        });
        e.classList.add("active-nav");
    })
})
// ---------------------------------------------------
// -----------------------Select Section -------------

let selectSections = document.querySelectorAll(".select");

window.addEventListener('scroll', e => {
    let scrollPoss = this.document.documentElement.scrollTop;
    let indexSection;

    for (let section of selectSections) {
        if (
            scrollPoss >= section.offsetTop - 100 &&
            scrollPoss <= section.offsetTop - 200 + section.offsetHeight
        ) {
            // console.log("scrollPoss = " + scrollPoss + "\nsection.offsetTop = " + section.offsetTop);
            // console.log(section);
            for(let i = 0; i < selectSections.length ; i++){
                if(selectSections[i] == section) 
                indexSection = i;
            }
            console.log(indexSection);
            activateSection(indexSection);
        }
    }
})
function activateSection(indexSection){
    navclick.forEach(event=>{
        event.classList.remove("active-nav");
    });
    navclick[indexSection].classList.add("active-nav");
}


// ---------------------------------------------------
// ----------------------Nav Scroll Top---------------

let navScrollToTop = document.querySelector(".Navigation");

// console.log(navScrollToTop);
window.addEventListener('scroll', e => {
    if(window.scrollY >= 800){
        // console.log("scroll >= 800");
        navScrollToTop.classList.add("fixed-menu");
    }
    else{
        // console.log("scroll < 800");   
        navScrollToTop.classList.remove("fixed-menu");
    }
})


// ---------------------------------------------------
// ----------------------Icon Menu--------------------

let xMenu = document.querySelector(".xMenu");
xMenu.addEventListener("click", () =>{
    xMenu.classList.toggle("change-xMenu");
})


// ---------------------------------------------------
// ----------------------Cordinator-------------------

let questions = document.querySelectorAll(".questions");

questions.forEach(e=>{
    e.addEventListener("click", () =>{
        if(e.classList.contains("active-q"))
        e.classList.remove("active-q");
        else {
            questions.forEach(event=>{
                event.classList.remove("active-q");
            })
            e.classList.add("active-q");
        }
    })
})


// ---------------------------------------------------
// -----------------------Courses---------------------

let navCourses = document.querySelectorAll(".nav-courses ul li");
let sectionCourses = document.querySelectorAll(".section-courses .section");

navCourses.forEach( (e,index) => {
    e.addEventListener("click", () => {
        navCourses.forEach(event=>{
            event.classList.remove("active-course");
        });
        e.classList.add("active-course");
        
        if (e.textContent == 'Show All'){
            sectionCourses.forEach(eSec =>{
                eSec.classList.remove("active-sec-Course");
            })
        }
        else if (e.textContent == 'Webdesign'){
            sectionCourses.forEach(eSec =>{
                eSec.classList.add("active-sec-Course");
            })
            sectionCourses[0].classList.remove("active-sec-Course");
            sectionCourses[2].classList.remove("active-sec-Course");
            sectionCourses[5].classList.remove("active-sec-Course");
        }
        else if (e.textContent == 'Development'){
            sectionCourses.forEach(eSec =>{
                eSec.classList.add("active-sec-Course");
            })
            sectionCourses[1].classList.remove("active-sec-Course");
            sectionCourses[3].classList.remove("active-sec-Course");
            sectionCourses[4].classList.remove("active-sec-Course");
        }
        else{
            sectionCourses.forEach(eSec =>{
                eSec.classList.add("active-sec-Course");
            })
            sectionCourses[2].classList.remove("active-sec-Course");
            sectionCourses[4].classList.remove("active-sec-Course");
            sectionCourses[5].classList.remove("active-sec-Course");
        }
    })
})

// ---------------------------------------------------
// -------------------Counter rate--------------------

const counters = document.querySelectorAll('.count');
const speed = 50;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const inc = Math.trunc(target / speed);
        // console.log(inc);
        if(count < target) {
            counter.innerText = count + inc + "+";
            setTimeout(updateCount, 1);
        }else{
            count.innerText = target + "+";
        }
    };
    updateCount();
});
