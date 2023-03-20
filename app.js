let dablokva = 4
let sliderSect = document.querySelector(".slider-sect")
let AboutUs = document.querySelector("#About-Us")
let plans = document.querySelector(".plans")
let ourServis = document.querySelector(".our-servis")
let pirveli = document.querySelector(".pirveli")
let meore = document.querySelector(".meore")
let mesame = document.querySelector(".mesame")
let btnserv1 = document.querySelectorAll("#services-1")
let plescentre = document.querySelector(".pirveli-plescentre")
let OurLatestBlogone = document.querySelector(".Our_Latest_Blog_one")
let OurLatestBlogTwo = document.querySelector(".Our_Latest_Blog_two")
let OurLatestBlogThree = document.querySelector(".Our_Latest_Blog_three")
let home = document.querySelectorAll("#Home")
let ContactUsOn = document.querySelector("#Contact-Us-on")
let ContactUs1 = document.querySelector(".Contact-Us-1")
let ContactUs2 = document.querySelector(".Contact-Us-2")
let projectiko = document.querySelectorAll("#projectiko")
let OurProjact = document.querySelector(".Our-Projact")
let nav = document.querySelector("Nav")
let footer = document.querySelector("footer")
let loginbtn = document.querySelector("#login")
let login = document.querySelector(".login")
let body = document.querySelector("body")
let inputiko1 = document.querySelector(".inputiko1")
let inputiko2 = document.querySelector(".inputiko2")
let btniko = document.querySelector(".btniko")
let listItem = document.querySelector(".list-item")


btniko.addEventListener('click', function () {
    if (inputiko1.value !== "test@gmail.com" && inputiko2.value !== "password") {
        alert("")

    }
    else {
        sliderSect.style.display = "flex"
        AboutUs.style.display = "flex"
        plans.style.display = "flex"
        pirveli.style.display = "flex"
        meore.style.display = "flex"
        mesame.style.display = "flex"
        OurLatestBlogone.style.display = "flex"
        OurLatestBlogTwo.style.display = "none"
        OurLatestBlogThree.style.display = "none"
        ContactUs1.style.display = "none"
        ContactUs2.style.display = "none"
        OurProjact.style.display = "none"
        login.style.display = "none"
        plescentre.style.display = "flex"
        nav.style.display = "flex"
        footer.style.display = "flex"
        body.style.backgroundColor = "rgb(255, 255, 255)"
        dablokva = 0
    }
})
btnserv1.forEach(btns => {
    btns.addEventListener('click', function () {
        if (dablokva == 4) {
            sliderSect.style.display = "none"
            AboutUs.style.display = "none"
            plans.style.display = "none"
            pirveli.style.display = "none"
            meore.style.display = "none"
            mesame.style.display = "none"
            OurLatestBlogone.style.display = "none"
            OurLatestBlogTwo.style.display = "none"
            OurLatestBlogThree.style.display = "none"
            ContactUs1.style.display = "none"
            ContactUs2.style.display = "none"
            OurProjact.style.display = "none"
            plescentre.style.display = "none"
            nav.style.display = "none"
            footer.style.display = "none"
            login.style.display = "block"
            body.style.backgroundColor = "rgb(255, 192, 1)"
        }
        else {
            sliderSect.style.display = "none"
            AboutUs.style.display = "none"
            plans.style.display = "none"
            pirveli.style.display = "none"
            meore.style.display = "none"
            mesame.style.display = "none"
            OurLatestBlogone.style.display = "flex"
            OurLatestBlogTwo.style.display = "flex"
            OurLatestBlogThree.style.display = "flex"
            OurProjact.style.display = "none"
        }

    })
})
ContactUsOn.addEventListener('click', function () {
    if (dablokva == 4) {
        sliderSect.style.display = "none"
        AboutUs.style.display = "none"
        plans.style.display = "none"
        pirveli.style.display = "none"
        meore.style.display = "none"
        mesame.style.display = "none"
        OurLatestBlogone.style.display = "none"
        OurLatestBlogTwo.style.display = "none"
        OurLatestBlogThree.style.display = "none"
        ContactUs1.style.display = "none"
        ContactUs2.style.display = "none"
        OurProjact.style.display = "none"
        plescentre.style.display = "none"
        nav.style.display = "none"
        footer.style.display = "none"
        login.style.display = "block"
        body.style.backgroundColor = "rgb(255, 192, 1)"
    }
    else {
        sliderSect.style.display = "none"
        AboutUs.style.display = "none"
        plans.style.display = "none"
        pirveli.style.display = "none"
        meore.style.display = "none"
        mesame.style.display = "none"
        plescentre.style.display = "none"
        OurLatestBlogone.style.display = "none"
        OurLatestBlogTwo.style.display = "none"
        OurLatestBlogThree.style.display = "none"
        ContactUs1.style.display = "flex"
        ContactUs2.style.display = "flex"
        OurProjact.style.display = "none"
    }

})
projectiko.forEach(btns => {
    btns.addEventListener('click', function () {
        if (dablokva == 4) {
            sliderSect.style.display = "none"
            AboutUs.style.display = "none"
            plans.style.display = "none"
            pirveli.style.display = "none"
            meore.style.display = "none"
            mesame.style.display = "none"
            OurLatestBlogone.style.display = "none"
            OurLatestBlogTwo.style.display = "none"
            OurLatestBlogThree.style.display = "none"
            ContactUs1.style.display = "none"
            ContactUs2.style.display = "none"
            OurProjact.style.display = "none"
            plescentre.style.display = "none"
            nav.style.display = "none"
            footer.style.display = "none"
            login.style.display = "block"
            body.style.backgroundColor = "rgb(255, 192, 1)"
        }
        else {
            sliderSect.style.display = "none"
            AboutUs.style.display = "none"
            plans.style.display = "none"
            pirveli.style.display = "none"
            meore.style.display = "none"
            mesame.style.display = "none"
            OurLatestBlogone.style.display = "none"
            OurLatestBlogTwo.style.display = "none"
            OurLatestBlogThree.style.display = "none"
            ContactUs1.style.display = "none"
            ContactUs2.style.display = "none"
            OurProjact.style.display = "flex"
        }

    })
})
home.forEach(home => {
    home.addEventListener('click', function () {
        sliderSect.style.display = "flex"
        AboutUs.style.display = "flex"
        plans.style.display = "flex"
        pirveli.style.display = "flex"
        meore.style.display = "flex"
        mesame.style.display = "flex"
        OurLatestBlogone.style.display = "flex"
        OurLatestBlogTwo.style.display = "none"
        OurLatestBlogThree.style.display = "none"
        ContactUs1.style.display = "none"
        ContactUs2.style.display = "none"
        OurProjact.style.display = "none"
        plescentre.style.display = "flex"
    })
});
loginbtn.addEventListener('click', function () {
    sliderSect.style.display = "none"
    AboutUs.style.display = "none"
    plans.style.display = "none"
    pirveli.style.display = "none"
    meore.style.display = "none"
    mesame.style.display = "none"
    OurLatestBlogone.style.display = "none"
    OurLatestBlogTwo.style.display = "none"
    OurLatestBlogThree.style.display = "none"
    ContactUs1.style.display = "none"
    ContactUs2.style.display = "none"
    OurProjact.style.display = "none"
    plescentre.style.display = "none"
    nav.style.display = "none"
    footer.style.display = "none"
    login.style.display = "block"
    body.style.backgroundColor = "rgb(255, 192, 1)"
})

