document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    var num = parseInt(document.getElementById("num").value)

    if (isNaN(num)) {
        document.getElementById("result").innerText = "Bạn vừa nhập không phải là số"
    } else {
        document.getElementById("result").innerText = `Số bạn vừa nhập là ${num}`
    }
})
