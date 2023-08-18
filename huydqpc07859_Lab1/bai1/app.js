const input = document.getElementById("num");
const result = document.getElementById("result")

document.querySelector("form").addEventListener("submit", (e) => {
    result.innerText = ""
    e.preventDefault();
    var num = Number(input.value)

    if (isNaN(num)) {
        document.querySelector("span").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector("span").classList.add("error-text")
        input.classList.add("error-input")
    } else {
        result.innerText = `Căn bậc 2 của số ${num} là ${Math.sqrt(num).toFixed(2)}`
    }
})


document.getElementById("num").addEventListener("input", () => {
    document.querySelector("span").innerText = ""
    document.querySelector("span").classList.remove("error-text")
    input.classList.remove("error-input")
})

input.addEventListener("blur", () => {
    var num = Number(input.value)
    if (isNaN(num)) {
        result.innerText = ""
        document.querySelector("span").innerText = "Bạn vừa nhập không phải là số"
        document.querySelector("span").classList.add("error-text")
        input.classList.add("error-input")
    }
})
