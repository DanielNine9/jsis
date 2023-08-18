let tiMenu = false
let overlayGlobal = false
const mMenu = document.querySelector(".m-menu")
const banner = document.querySelector(".banner")
const closeMenu = document.querySelectorAll(".ti-close")
const overlay = document.querySelector(".overlay")
const controls = document.querySelectorAll(".control")
const box = document.querySelectorAll(".box")
const viewClose = document.querySelector(".close-view")
const viewBtn = document.querySelectorAll(".view-btn")
const overlayGlo = document.querySelector(".overlayglo")
const viewDetail = document.querySelector(".view-detail")
const PCMenu = document.querySelector(".PCMenu")
const topHTML = document.querySelector(".top")
const scale = document.querySelector(".scale")
const imgs = document.querySelectorAll("img")
const plus = document.querySelectorAll(".ti-plus")
const homes = document.querySelectorAll(".home")
const bookNow = document.querySelector(".booknow")
const anchor = document.querySelectorAll("a")
const btn = document.querySelectorAll("button")
const desc = document.querySelector(".desc")
const map = document.querySelector(".map")
const dbd = document.querySelector(".desc")
const descBtn = document.querySelector(".descBtn")
const mapBtn = document.querySelector(".mapBtn")
const photosBtn = document.querySelector(".photosBtn")
const progBtn = document.querySelector(".progBtn")
const photos = ["https://saigon-travel.com/wp-content/uploads/2019/02/20-tour-dl-tq.jpg", "https://s3.cloud.cmctelecom.vn/tinhte1/2018/08/4374729_bk-tu-cam-thanh.jpg", "https://visana.vn/wp-content/uploads/2017/02/10fc5516-c38d-4dbb-8f8b-58449a31bb4a2.jpg", "https://pystravel.vn/uploads/posts/albums/3131/7e285eae8606fceea234e8fd4c6fa034.jpg"]
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const photoHTML = document.querySelector(".photos")
const boxPhotos = document.querySelector(".box-photos")
const boxSendNow = document.querySelector(".box-send-now")
const closeSendNow = document.querySelector(".btn-send-now")
const SendNow = document.querySelector(".send-now")
const booked = document.querySelector(".booked")
let products = 0
let photo = 0
let userSuccess = false
let indexBanner = 1

setInterval(() => {
    if (indexBanner > 1) { banner.classList.remove(`bg-[url('./img/${indexBanner - 1}.jpg')]`) }
    banner.classList.add(`bg-[url('./img/${indexBanner}.jpg')]`)
    ++indexBanner
    if (indexBanner > 20) {
        indexBanner = 1
    }
}, 3000)


console.log(banner)



window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        PCMenu.classList.remove("top-[-100%]")
        PCMenu.classList.add("top-0")
        PCMenu.classList.add("lg:flex")
        topHTML.classList.remove("hidden")
    } else {
        PCMenu.classList.add("top-[-100%]")
        PCMenu.classList.remove("top-0")
        topHTML.classList.add("hidden")
    }
})

// top.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// })

controls.forEach(e => {
    e.addEventListener("click", () => {
        if (!tiMenu) {
            console.log(mMenu)
            overlay.classList.remove("hidden")
            mMenu.classList.remove("right-[-100%]")
            mMenu.classList.add("right-0")
            tiMenu = true
        }
    })
})



overlay.addEventListener("click", () => {
    console.log("vao day ne")
    if (tiMenu) {
        mMenu.classList.remove("right-0")
        mMenu.classList.add("right-[-100%]")
        overlay.classList.add("hidden")
        tiMenu = false
    }
})

closeMenu.forEach(e => {
    e.addEventListener("click", () => {
        if (tiMenu) {
            mMenu.classList.remove("right-0")
            mMenu.classList.add("right-[-100%]")
            overlay.classList.add("hidden")
            tiMenu = false
        }
    })
})

box.forEach((e) => {
    const text = e.querySelector(".text")
    const btn = e.querySelector("button")
    const bgoverlay = e.querySelector(".bgoverlay")
    e.addEventListener("mouseover", () => {
        bgoverlay.classList.add("bg-black/40")
        text.classList.add("hidden")
        btn.classList.remove("hidden")
    })
    e.addEventListener("mouseleave", () => {
        bgoverlay.classList.remove("bg-black/40")
        text.classList.remove("hidden")
        btn.classList.add("hidden")

    })
})


// view detail

viewBtn.forEach((e) => {
    e.addEventListener("click", () => {
        const img = viewDetail.querySelector("img")
        const h1 = viewDetail.querySelector("h1")
        const p = viewDetail.querySelector("p")
        if (overlayGlo.classList.contains("hidden")) {
            if (e.value === "europe") {
                h1.textContent = "Europe"
                p.textContent = "Europe is a beatiful country"
                img.src = "https://tophinhanhdep.com/wp-content/uploads/2021/10/Europe-4k-Wallpapers.jpg"
            } else if (e.value === "thailand") {
                h1.textContent = "ThaiLand"
                p.textContent = "ThaiLand is a beatiful country"
                img.src = "https://img.freepik.com/free-photo/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.jpg?w=2000"
            }
            else if (e.value === "vietnam") {
                h1.textContent = "Vietnam"
                p.textContent = "Vietnam is a beatiful country"
                img.src = "https://forevertravel.com.my/wp-content/uploads/image-2.jpg"
            }
            else if (e.value === "china") {
                h1.textContent = "China"
                p.textContent = "China is a beatiful country"
                img.src = "https://www.summittravel.com.vn/upload/img/products/08042021/van-ly-truong-thanh.jpg"
            }
            else if (e.value === "america") {
                h1.textContent = "America"
                p.textContent = "America is a beatiful country"
                img.src = "https://visaf.vn/wp-content/uploads/2019/03/tuong-nu-than-tu-do.jpg"
            }
            else if (e.value === "india") {
                h1.textContent = "India"
                p.textContent = "India is a beatiful country"
                img.src = "https://wiki-travel.com.vn/Uploads/picture/Thaophuongnguyen-161822011832-%C4%90%E1%BB%81n-Taj-Mahal.jpeg"
            }


        }
        overlayGlo.classList.remove("hidden")
        viewDetail.classList.remove("top-[-110%]")
        viewDetail.classList.add("lg:top-[50%]")
        viewDetail.classList.add("top-0")
    })
})

viewClose.addEventListener("click", () => {
    if (!overlayGlo.classList.contains("hidden")) {
        overlayGlo.classList.add("hidden")
    }
    if (overlayGlo.classList.contains("hidden")) {
        viewDetail.classList.add("top-[-110%]")
        viewDetail.classList.remove("lg:top-[50%]")
    }
})

overlayGlo.addEventListener("click", () => {
    if (!overlayGlo.classList.contains("hidden")) {
        overlayGlo.classList.add("hidden")
        viewDetail.classList.add("top-[-110%]")
        if (!scale.classList.contains("hidden")) {
            scale.classList.add("hidden")
        }
        viewDetail.classList.remove("lg:top-[50%]")
        overlayGlobal = false
    }
})

imgs.forEach(e => {
    e.addEventListener("click", () => {
        if (overlayGlo.classList.contains("hidden")) {
            overlayGlo.classList.remove("hidden")

        }
        scale.classList.remove("hidden")
        scale.querySelector("img").src = e.src
    })

})



scale.querySelector(".ti-close").addEventListener("click", () => {
    overlayGlo.classList.add("hidden")
    scale.classList.add("hidden")
    overlayGlobal = false
})

plus.forEach(e => {
    e.addEventListener("click", () => {
        console.log(e.parentElement.querySelector(".text"))
        console.log(e.parentElement.parentElement)
        if (e.classList.contains("ti-plus")) {
            console.log("vao day")
            e.parentElement.parentElement.querySelector(".text").textContent = "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur "
            e.classList.remove("ti-plus")
            e.classList.add("ti-minus")
        }
        else if (e.classList.contains("ti-minus")) {
            e.parentElement.parentElement.querySelector(".text").textContent = ""
            e.classList.add("ti-plus")
            e.classList.remove("ti-minus")
        }
    })
})

homes.forEach(e => {
    e.addEventListener("click", () => {
        console.log("hello worldd")
        if (!bookNow.classList.contains("hidden"))
            bookNow.classList.add("hidden")
        if (!viewDetail.classList.contains("top-[-110%]")) {
            overlayGlo.classList.add("hidden")
            viewDetail.classList.add("top-[-110%]")
            viewDetail.classList.remove("lg:top-[50%]")
            overlayGlobal = false
        }
    })
})

anchor.forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault()
    })
    console.log(a.textContent)
    if (a.textContent === 'HOTEL') {
        a.addEventListener("click", () => window.location = "test.html")

    }
})

btn.forEach(e => {
    const booknow = e.textContent.toLowerCase().replace(/\s+/g, '')
    if (booknow === "booknow" || booknow === "details") {
        e.addEventListener("click", () => {
            bookNow.classList.remove("hidden")
        })

    }
})

descBtn.addEventListener("click", () => {
    if (!mapBtn.classList.contains("hidden")) {
        if (!map.classList.contains("hidden")) {
            map.classList.add('hidden')
        }
        mapBtn.classList.remove("bg-red-500")
        mapBtn.classList.remove("text-white")
        mapBtn.classList.add("text-gray-400")
    }
    if (!photosBtn.classList.contains("hidden")) {
        photosBtn.classList.remove("bg-red-500")
        photosBtn.classList.remove("text-white")
        photosBtn.classList.add("text-gray-400")
    }
    if (!progBtn.classList.contains("hidden")) {
        progBtn.classList.remove("bg-red-500")
        progBtn.classList.remove("text-white")
        progBtn.classList.add("text-gray-400")
    }
    if (desc.classList.contains("hidden")) { desc.classList.remove('hidden') }
    descBtn.classList.add("bg-red-500")
    descBtn.classList.add("text-white")
})


mapBtn.addEventListener("click", () => {
    if (!descBtn.classList.contains("hidden")) {
        if (!desc.classList.contains("hidden")) {
            console.log("hohohoho")
            desc.classList.add('hidden')
        }
        descBtn.classList.remove("bg-red-500")
        descBtn.classList.remove("text-white")
        descBtn.classList.add("text-gray-400")
    }
    if (!photosBtn.classList.contains("hidden")) {
        photosBtn.classList.remove("bg-red-500")
        photosBtn.classList.remove("text-white")
        photosBtn.classList.add("text-gray-400")
    }
    if (!progBtn.classList.contains("hidden")) {
        progBtn.classList.remove("bg-red-500")
        progBtn.classList.remove("text-white")
        progBtn.classList.add("text-gray-400")
    }
    if (map.classList.contains("hidden")) {
        map.classList.remove('hidden')
    }
    mapBtn.classList.add("bg-red-500")
    mapBtn.classList.add("text-white")
})




photosBtn.addEventListener("click", () => {
    if (!mapBtn.classList.contains("hidden")) {
        if (!map.classList.contains("hidden")) {
            map.classList.add('hidden')
        }
        mapBtn.classList.remove("bg-red-500")
        mapBtn.classList.remove("text-white")
        mapBtn.classList.add("text-gray-400")
    }
    if (!descBtn.classList.contains("hidden")) {
        if (!desc.classList.contains("hidden")) {
            console.log("hohohoho")
            desc.classList.add('hidden')
        }
        descBtn.classList.remove("bg-red-500")
        descBtn.classList.remove("text-white")
        descBtn.classList.add("text-gray-400")
    }
    if (!progBtn.classList.contains("hidden")) {
        progBtn.classList.remove("bg-red-500")
        progBtn.classList.remove("text-white")
        progBtn.classList.add("text-gray-400")
    }
    if (boxPhotos.classList.contains("hidden")) {
        boxPhotos.classList.remove('hidden')
    }

    photosBtn.classList.add("bg-red-500")
    photosBtn.classList.add("text-white")
})
progBtn.addEventListener("click", () => {
    if (!mapBtn.classList.contains("hidden")) {
        mapBtn.classList.remove("bg-red-500")
        mapBtn.classList.remove("text-white")
        mapBtn.classList.add("text-gray-400")
    }
    if (!photosBtn.classList.contains("hidden")) {
        photosBtn.classList.remove("bg-red-500")
        photosBtn.classList.remove("text-white")
        photosBtn.classList.add("text-gray-400")
    }
    if (!descBtn.classList.contains("hidden")) {
        descBtn.classList.remove("bg-red-500")
        descBtn.classList.remove("text-white")
        descBtn.classList.add("text-gray-400")
    }
    progBtn.classList.add("bg-red-500")
    progBtn.classList.add("text-white")
})

right.addEventListener("click", () => {
    photo++
    if (photo >= photos.length) photo = 0
    photoHTML.src = photos[photo]
})

left.addEventListener("click", () => {
    photo--
    if (photo < 0) photo = photos.length - 1
    photoHTML.src = photos[photo]
})











// Form Send Now
const checkPhone = (phone) => {
    try {
        if ((phone.length !== 10 || isNaN(phone))) {
            return false
        }
        return true
    } catch (e) {
        return false
    }
}

const phone = boxSendNow.querySelector(".phoneNumber")
const textPhone = phone.parentElement.querySelector("span")
boxSendNow.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(phone.value)
    const result = checkPhone(phone.value)
    if (!result) {
        phone.classList.add("border-red-500")
        return textPhone.textContent = "Phone isn't correct"
    }
    ++products
    const span = booked.querySelector("span")
    span.textContent = products
    span.classList.add("p-3")
    console.log(products)
    SendNow.classList.remove("hidden")
})

phone.addEventListener("input", () => {
    phone.classList.remove("border-red-500")
    textPhone.textContent = ""
})

console.log(booked.querySelector("span"))




// send now


closeSendNow.addEventListener("click", () => {
    if (!SendNow.classList.contains("hidden")) {
        console.log("vao dayyy new")
        SendNow.classList.add("hidden")
    }
})

SendNow.addEventListener("click", () => {
    if (!SendNow.classList.contains("hidden")) {
        console.log("vao send now")
        SendNow.classList.add("hidden")
    }
})

setTimeout(() => {
    document.querySelector(".event").classList.remove("hidden");
}, 3000);

document.querySelector(".out").addEventListener("click", () => {
    document.querySelector(".event").classList.add("hidden");
});

document.querySelector(".next").addEventListener("click", () => {
    document.querySelector(".event").classList.add("hidden");
    window.location.href = './test.html'
});



