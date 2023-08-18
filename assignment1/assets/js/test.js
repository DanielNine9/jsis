import { hotels } from "./data.js"


let total = 0
const location = document.getElementById("location")
const main = document.querySelector(".main")
const btnMainHeader = document.querySelectorAll(".btn-main-header")
const auth = document.querySelector(".auth")
const viewBtns = document.querySelectorAll(".btn-view")
const viewDetails = document.querySelector('.viewdetails')
const overlayView = document.querySelector(".overlayview")
const booknow = document.querySelector('.booknow')
const number = document.querySelector(".number")
const authUser = document.querySelector('.authUser')

let userBoolean = false
let listBuy = []
let datas = hotels


const handleTotal = () => {
    total = 0
    const list = listBuy.map(e => {
        const detail = e.name.split('0')
        return hotels.find(hotel => hotel.location === detail[0] && hotel.id === '0' + detail[1])
    })

    console.log(list)
    console.log('truoc ' + total)
    listBuy.forEach((e, i) => {
        console.log("e.num" + e.number)
        console.log("list[i]" + list[i].price)
        total += Number(e.number) * Number(list[i].price)
    })
    console.log("sau" + total)

    cartDetails.querySelector('.total').textContent = total
}


overlayView.addEventListener("click", () => {
    if (!overlayView.classList.contains("hidden")) overlayView.classList.add("hidden")

    if (!viewDetails.classList.contains("hidden")) {
        viewDetails.classList.add("hidden")
    }
    if (!cartDetails.classList.contains("hidden")) {
        cartDetails.classList.add("hidden")
    }

})

viewDetails.querySelector(".ti-close").onclick = () => {
    if (!overlayView.classList.contains("hidden")) overlayView.classList.add("hidden")

    if (!viewDetails.classList.contains("hidden")) {
        viewDetails.classList.add("hidden")
    }
}

window.addEventListener('load', function () {
    setTimeout(() => {
        render(main, getAllDatas())
    }, 1000);
});

const handleView = () => {
    console.log(overlayView)
    if (overlayView.classList.contains("hidden")) {
        overlayView.classList.remove("hidden")
    }
    if (viewDetails.classList.contains("hidden")) {
        viewDetails.classList.remove("hidden")
    }
}



const product = (e) => {
    const id = e.location + e.id
    return `
    <div class="flex flex-col rounded-sm shadow w-full">
        <div class="relative w-full h-[222px] overflow-hidden">
            <img class="w-full h-full object-cover hover:scale-110 duration-1000 cursor-pointer " src=${e.img} alt="${e.name}">
            <span
            class="top-0 inline-block absolute right-0 py-2 px-3 bg-indigo-500 text-white z-20">${e.rating}</span>
        </div >
        <div class="p-4">
        <div >
        <h2 class=" text-black w-full text-2xl">${e.name.length > 20 ? e.name.substring(0, 20) + "..." : e.name}</h2>
        <p class="text-xl h-[100px] pt-2 text-gray-400">${e.desc.length > 65 ? e.desc.substring(0, 65) + "..." : e.desc}</p>
       
    </div>
    <div class="text-right">
    <button value=${id} class="btn-view py-2 px-4 text-white bg-indigo-500 cursor-pointer hover:opacity-50 duration-300 rounded-lg mt-2">View details</button>
        </div>
       
    </div>
</div>
`
}

const getAllDatas = (value) => {
    datas = hotels
    return hotels.map(e => product(e)).join('')
}

const getDataLocation = (value) => {
    datas = hotels.filter(e => e.location === value.value)
    return datas.map(e => product(e)).join('')
}

const render = (key, value) => {
    key.innerHTML = value
    document.querySelectorAll('.btn-view')?.forEach(btn => btn.addEventListener('click', (e) => {
        const value = btn.value.split('0')
        const hotel = hotels.find(e => e.id === '0' + value[1] && e.location === value[0])
        viewDetails.querySelector('.desc').textContent = hotel.desc
        viewDetails.querySelector('.price').textContent = hotel.price
        viewDetails.querySelector('.name').textContent = hotel.name
        viewDetails.querySelector('.rating').textContent = hotel.rating
        viewDetails.querySelector('.imgdetail').src = hotel.img
        viewDetails.querySelectorAll(".img-view").forEach((e, i) => e.src = hotel.imgs[i])
        viewDetails.querySelector('.booknow').value = hotel.location + hotel.id
        const valueBtn = listBuy.find(e => e.name === btn.value)
        if (valueBtn) {
            booknow.textContent = "+" + valueBtn.number + " Book now"
        } else {
            booknow.textContent = "Book now"

        }
        updateNumber()
        handleView()
    }))

}



location.addEventListener("change", () => {
    if (location.value === '') return render(main, getAllDatas())
    render(main, getDataLocation(location))
})

btnMainHeader.forEach(btn => {
    btn.addEventListener("click", (e) => {
        btnMainHeader.forEach(btn => {
            btn.classList.remove("bg-indigo-500")
            btn.classList.remove("text-white")
        })
        if (btn.value === e.target.value) {
            console.log(datas)
            const data = datas.filter(e => e.transportation === btn.value).map(e => product(e)).join('')

            render(main, data)


            btn.classList.add("bg-indigo-500")
            btn.classList.add("text-white")
        }
    })
})

booknow.onclick = (e) => {
    const list = listBuy.find(el => el.name === e.target.value)
    if (list) {
        ++list.number
        booknow.textContent = "+" + list.number + " Book now"
    } else {
        booknow.textContent = "+1 Book now"
        listBuy.push({ name: e.target.value, number: 1 })
    }
    updateNumber()
}

const updateNumber = () => {
    if (number.classList.contains('hidden')) {
        number.classList.remove("hidden")
    }
    number.textContent = listBuy.length === 0 ? '' : listBuy.reduce((acc, e) => acc + Number(e.number), 0)

    if (number.classList.contains('hidden') && listBuy.length !== 0)
        number.classList.remove('hidden')

    if (number.textContent === '0' || number.textContent === '') {
        number.classList.add('hidden')
    }
}

const sure = document.querySelector('.sure')


const renderProduct = () => {
    const product = listBuy.filter(e => e.number !== '0')?.map(e => {
        const detail = e.name.split('0')
        return hotels.filter(e => e.location === detail[0] && e.id === "0" + detail[1]).map(p => productDetail(p, e.number)).join('')
    })
    if (userBoolean) {
        cartDetails.querySelector('.total').textContent = total * 0.9 + "(Giảm 10%)"
    } else {
        cartDetails.querySelector('.total').textContent = total + "(Đăng nhập để được giảm 10%)"
    }
    cartContain.innerHTML = product?.length === 0 ? `<h1 class="text-2xl text-center text-indigo-400 m-auto flex flex-col gap-36">Giỏ hàng hiện tại trống <i class="ti-package text-[200px]"/></h1>` : product
    updateNumber()
    cartContain.querySelectorAll(".plus")?.forEach(plus =>
        plus.addEventListener('click', (e) => {
            const product = e.target.classList.value.split(" ")[0]
            updatePlus(e, product)
        }))
    cartContain.querySelectorAll(".minus").forEach(minus => minus.addEventListener('click', (e) => {
        const product = e.target.classList.value.split(" ")[0]
        updateMinus(e, product)
    }
    ))
    cartContain.querySelectorAll(".close")?.forEach(btn => {
        btn.addEventListener('click', (close) => {
            console.log(overlayView.classList.contains('hidden'))
            if (overlayView.classList.contains("hidden")) {
                overlayView.classList.remove('hidden')
            }
            if (sure.classList.contains('hidden')) {
                sure.classList.remove('hidden')
            }

            sure.querySelector('.ok').addEventListener('click', () => {

                const e = close.target.querySelector('.close-all')
                listBuy = listBuy.filter(item =>
                    item.name !== e.value)
                console.log(listBuy)
                sure.classList.add('hidden')
                renderProduct()
                updateNumber()
                handleTotal()

            })

            sure.querySelector('.cancel').addEventListener('click', () => {

                if (!sure.classList.contains('hidden')) {
                    sure.classList.add('hidden')
                }
            })
        })

    })
}

const updatePlus = (e, target) => {
    let num = Number(e.target.value)
    const hotel = listBuy.find(e => e.name === target)
    const index = listBuy.findIndex(e => e === hotel)
    console.log(num)
    listBuy[index].number = String(++num)
    console.log(listBuy)
    handleTotal()
    renderProduct()
    updateNumber()

}

const updateMinus = (e, target) => {
    let num = Number(e.target.value)
    if (num === 0) return
    const hotel = listBuy.find(e => e.name === target)
    const index = listBuy.findIndex(e => e === hotel)
    console.log(num)
    listBuy[index].number = String(--num)
    handleTotal()
    renderProduct()
    updateNumber()
}



const productDetail = (e, num) => {
    return `  <div class="flex flex-col lg:flex-row gap-4 border border-gray-300 rounded-[2px] shadow overflow-hidden">
    <div class="min-w-[400px] max-w-[400px] min-h-[300px] max-h-[300px]">
        <img class="w-full h-full bg-cover" src="${e.img}" alt="">
    </div>
    <div class="flex flex-col  gap-2 p-2">
        <div class="flex justify-between">
            <h1 class="text-2xl">${e.name}</h1>
            <p class="text-xl">Rating:  <span class="text-red-500">${e.rating}</span></p>
        </div>
        <p class="text-xl text-gray-500 min-h-[140px] max-h-[140px] overflow-y-scroll">${e.desc}</p>
        <p class="text-xl">Price: <span class="text-red-500">${String(Number(e.price) * num)} $</span></p>
        <div class="flex gap-4 items-center text-xl">
            <p class="text-gray-400">Điều chỉnh số lượng:</p>
            <button value="${num}" class="${e.location + e.id} minus cursor-pointer hover:text-gray-400 text-black border px-2 border-gray-400">-</button>
            <p>${num}</p>
            <button value="${num}" class="${e.location + e.id} plus cursor-pointer hover:text-gray-400 text-black border px-2 border-gray-400">+</button>
        </div>
    </div>
    <div class="text-2xl close flex items-center hover:bg-red-500 cursor-pointer hover:text-white bg-gray-200 px-3">
        <button value="${e.location + e.id}" class="ti-close close-all text-sm"></button> 
    </div>
</div>`
}

const cartDetails = document.querySelector(".cartdetails")
const carts = document.querySelectorAll(".cart")
const cartContain = document.querySelector(".cart-contain")
const closeDetail = cartDetails.querySelector(".ti-close")

closeDetail.addEventListener("click", () => {
    if (!overlayView.classList.contains("hidden")) {
        overlayView.classList.add("hidden")
    }
    if (!cartDetails.classList.contains("hidden")) {
        cartDetails.classList.add("hidden")
    }
})
carts.forEach(cart =>
    cart.addEventListener("click", () => {

        handleTotal()
        if (!viewDetails.classList.contains('hidden')) {
            viewDetails.classList.add('hidden')
        }
        if (overlayView.classList.contains("hidden")) {
            overlayView.classList.remove("hidden")
        }

        renderProduct()

        if (cartDetails.classList.contains("hidden")) {
            cartDetails.classList.remove("hidden")
        }
    })

)

const option = document.querySelector('.option')
const payall = document.querySelector('.payall')
option.querySelectorAll('button').forEach(e => {
    if (e.value === 'pay') {
        e.addEventListener('click', () => {
            if (listBuy.length === 0) {
                alert("Your cart is empty")
                return
            }
            if (payall?.classList.contains('hidden')) {
                payall.classList.remove('hidden')
            }
            payall.querySelector('button').addEventListener('click', () => {
                if (!payall.classList.contains('hidden')) {
                    payall.classList.add('hidden')
                    total = 0
                    renderProduct()

                }
            })
            listBuy = []

            renderProduct()
            updateNumber()
            payall.querySelector(".total").textContent = total
        })

    }


    if (e.value === 'delete') {
        e.addEventListener('click', () => {
            if (listBuy.length === 0) {
                alert("Your cart is empty")
                return
            }
            if (sure.classList.contains('hidden')) {
                sure.classList.remove('hidden')
            }
            sure.querySelector('.ok').addEventListener('click', () => {

                sure.classList.add('hidden')

                listBuy = []
                handleTotal()
                renderProduct()
                updateNumber()

            })

            sure.querySelector('.cancel').addEventListener('click', () => {

                if (!sure.classList.contains('hidden')) {
                    sure.classList.add('hidden')
                }
            })
        })
    }
})














// // Auth

const ul = document.querySelector("ul")

import { user } from "./data.js"
const formLogin = document.getElementById("login")
const username = formLogin.querySelector("#username")
const password = formLogin.querySelector("#password")
const textUser = username.parentElement.querySelector("span")
const textPass = password.parentElement.querySelector("span")
const overlayAuth = document.querySelector(".overlayauth")
const userSuccess = localStorage.getItem('userSuccess')



// Login
const userInfo = document.querySelector('.userinfo')

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const userLocal = JSON.parse(localStorage.getItem("user")) ?? [];



    if (!username.value || !password.value) {
        if (!username.value) {
            username.classList.add("border-red-500")
            username.parentElement.querySelector("span").textContent = "Vui lòng nhập tài khoản"
        }
        if (!password.value) {
            password.classList.add("border-red-500")
            textPass.textContent = "Vui lòng nhập mật khẩu"
        }
        return
    }
    let resultUser = user.find(user => user.username === username.value)
    if (!resultUser) {
        if (!resultUser) {
            let resultUser = userLocal.find(user => user.username === username.value)
            if (!resultUser) {
                username.classList.add("border-red-500")
                textUser.textContent = "Username isn't correct"
            } else {
                if (resultUser.password === password.value) {

                } else {
                    password.classList.add("border-red-500")
                    textPass.textContent = "Password isn't correct"
                }
            }
        }
        // if (!resultPass) {
        //     let resultPass = userLocal.find(user => user.password === password.value)
        //     console.log(resultPass)
        //     if (!resultPass) {
        //         password.classList.add("border-red-500")
        //         textPass.textContent = "Password isn't correct"
        //     }
        // }
    } else {
        let resultPass = resultUser.password == password.value
        if (resultUser.password === password.value) {

        } else {
            password.classList.add("border-red-500")
            textPass.textContent = "Password isn't correct"
        }
    }
    if (textUser.textContent || textPass.textContent) {
        return
    }
    overlayAuth.classList.add("hidden")
    formLogin.classList.add("hidden")
    localStorage.setItem('userSuccess', true);
    userBoolean = true
    const wrapAuth = document.querySelector('.wrap-auth').classList.add('hidden')
    if (userBoolean === true) {
        userInfo.innerHTML = `
        <img class="w-[36px] h-[36px] object-cover rounded-full shadow"
                            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg" alt="">
                        <div class="hover:opacity-70 cursor-pointer flex items-center gap-2">
                            <span class="text-white font-thin flex items-center">${username.value}</span>
                            <i class="text-white text-[12px] translate-y-[10%] ti-angle-down"></i>
                        </div>
        `
    }

})


username.addEventListener("input", () => {
    username.classList.remove("border-red-500")
    textUser.textContent = ""
})
password.addEventListener("input", () => {
    password.classList.remove("border-red-500")
    textPass.textContent = ""
})


const register = document.querySelector("#register")
const newUser = register.querySelector("#newusername")
const newPass = register.querySelector("#newpassword")
const confirm = register.querySelector("#confirm")
const textNewUser = newUser.parentElement.querySelector("span")
const textNewPass = newPass.parentElement.querySelector("span")
const textConfirm = confirm.parentElement.querySelector("span")
const signIn = document.querySelector(".signin")
const signUp = document.querySelector(".signup")


// Register
register.addEventListener("submit", e => {
    e.preventDefault()
    const userLocal = JSON.parse(localStorage.getItem("user")) ?? [];
    const result = user.find(user => user.username === newUser.value)
    console.log(newPass.value.length)
    if (newPass.value.length < 8) {
        textNewPass.textContent = "Password must be more than 8 characters"
    }
    if (newPass.value !== confirm.value) {
        textConfirm.textContent = "Confirm Password isn't correct"
    }
    if (result) {
        newUser.classList.add("border-red-500")
        textNewUser.textContent = "Tài khoản đã tồn tại"
    } else {
        const result = userLocal.find(user => user.username === newUser.value)
        if (result) {
            newUser.classList.add("border-red-500")
            textNewUser.textContent = "Tài khoản đã tồn tại"
        }
    }

    // if (textConfirm.textContent || textNewPass.textContent) {
    //     return
    // }


    if (!newUser.value || !newPass.value || !confirm.value) {
        if (!newUser.value) {
            newUser.classList.add("border-red-500")
            textNewUser.textContent = "Vui lòng nhập tài khoản"
        }
        if (!newPass.value) {
            newPass.classList.add("border-red-500")
            textNewPass.textContent = "Vui lòng nhập mật khẩu"
        }
        if (!confirm.value) {
            confirm.classList.add("border-red-500")
            textConfirm.textContent = "Vui lòng nhập mật khẩu"
        }


    }
    console.log(textNewPass.textContent)
    if (textNewUser.textContent) {
        newUser.focus()
        console.log(newUser)
        return
    }

    if (textNewPass.textContent) {
        newPass.focus()
        return
    }

    if (textConfirm.textContent) {
        confirm.focus()
        return
    }

    localStorage.setItem('user', JSON.stringify([...userLocal, {
        "username": `${newUser.value}`,
        "password": `${newPass.value}`
    }]));
    console.log("vaodayyyy")
    username.value = ""
    password.value = ""
    register.classList.add("hidden")
    formLogin.classList.remove("hidden")
})

username.addEventListener("input", () => {
    username.classList.remove("border-red-500")
    textNewUser.textContent = ""
})
password.addEventListener("input", () => {
    password.classList.remove("border-red-500")
    textNewPass.textContent = ""
})
newUser.addEventListener("input", () => {
    newUser.classList.remove("border-red-500")
    textNewUser.textContent = ""
})
newPass.addEventListener("input", () => {
    newPass.classList.remove("border-red-500")
    textNewPass.textContent = ""
})
confirm.addEventListener("input", () => {
    confirm.classList.remove("border-red-500")
    textConfirm.textContent = ""
})


if (userSuccess) {
    overlayAuth.classList.add('hidden')
    formLogin.classList.add('hidden')
} else {
    overlayAuth.classList.remove('hidden')
    formLogin.classList.remove('hidden')
}


// Sign in, Sign up
signIn.addEventListener("click", (e) => {
    e.preventDefault()
    if (textUser.textContent) {
        textUser.textContent = ""
        username.classList.remove("border-red-500")
    }
    if (textPass.textContent) {
        textPass.textContent = ""
        password.classList.remove("border-red-500")
    }
    newUser.value = ""
    newPass.value = ""
    confirm.value = ""

    formLogin.classList.remove("hidden")
    register.classList.add("hidden")
})
signUp.addEventListener("click", (e) => {
    e.preventDefault()
    if (textNewUser.textContent) {
        textNewUser.textContent = ""
        newUser.classList.remove("border-red-500")
    }
    if (textNewPass.textContent) {
        textNewPass.textContent = ""
        newPass.classList.remove("border-red-500")
    }
    if (textConfirm.textContent) {
        textConfirm.textContent = ""
        confirm.classList.remove("border-red-500")
    }
    username.value = ""
    password.value = ""

    formLogin.classList.add("hidden")
    register.classList.remove("hidden")
})


const cancels = document.querySelectorAll(".cancle")
cancels.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.preventDefault()
        if (!register.classList.contains("hidden")) {
            register.classList.add("hidden")
        }
        if (!formLogin.classList.contains("hidden")) {
            formLogin.classList.add("hidden")
        }
        if (!overlayAuth.classList.contains('hidden')) {
            overlayAuth.classList.add('hidden')
        }

    })
})

const loginBtn = document.querySelector('.loginbtn')
const registerBtn = document.querySelector('.registerbtn')


loginBtn.addEventListener("click", (e) => {

    if (formLogin.classList.contains('hidden')) {
        overlayAuth.classList.remove("hidden")
        formLogin.classList.remove('hidden')
    }
})
registerBtn.addEventListener('click', () => {
    if (register.classList.contains('hidden')) {
        overlayAuth.classList.remove("hidden")
        register.classList.remove('hidden')
    }
})


