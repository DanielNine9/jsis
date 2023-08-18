function validateForm() {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById("country");
  const check = document.getElementById("check").checked;

  const firstnameError = document.getElementById("firstnameError");
  const lastnameError = document.getElementById("lastnameError");
  const emailError = document.getElementById("emailError");
  const genderError = document.getElementById("genderError");
  const countryError = document.getElementById("countryError");
  const checkError = document.getElementById("checkError");

  // Reset errors
  firstnameError.textContent = "";
  lastnameError.textContent = "";
  emailError.textContent = "";
  genderError.textContent = "";
  countryError.textContent = "";
  checkError.textContent = "";

  // Validate First Name
  if (firstname.value === "") {
    firstnameError.textContent = "First Name is required.";
  }

  // Validate Last Name
  if (lastname.value === "") {
    lastnameError.textContent = "Last Name is required.";
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Invalid Email format.";
  }

  // Validate Gender
  if (!gender) {
    genderError.textContent = "Gender is required.";
  }

  // Validate Country
  if (country.value === "") {
    countryError.textContent = "Country is required.";
  }

  // Validate Checkbox
  if (!check) {
    checkError.textContent = "You must accept the terms and conditions.";
  }
  const a = {};
  // Check if there are any errors
  if (
    firstnameError.textContent !== "" ||
    lastnameError.textContent !== "" ||
    emailError.textContent !== "" ||
    genderError.textContent !== "" ||
    countryError.textContent !== "" ||
    checkError.textContent !== ""
  ) {
    return false;
  } else {
    // Form submitted successfully
    const userInfo = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      gender: gender.value,
      country: country.value
    };
    displayUserInfo(userInfo); // Gọi hàm để hiển thị thông tin người dùng
    return true;
  }
}

function resetForm() {
  // (giữ nguyên phần JavaScript cũ)
}

function displayUserInfo(userInfo) {
  // Lấy phần tử div để hiển thị thông tin người dùng
  const userInfoDiv = document.getElementById("userInfo");

  // Tạo nội dung thông tin người dùng để hiển thị
  const userInfoHTML = `
    <h2>User Information</h2>
    <p><strong>First Name:</strong> ${userInfo.firstname}</p>
    <p><strong>Last Name:</strong> ${userInfo.lastname}</p>
    <p><strong>Email:</strong> ${userInfo.email}</p>
    <p><strong>Gender:</strong> ${userInfo.gender}</p>
    <p><strong>Country:</strong> ${userInfo.country}</p>
  `;

  // Gán nội dung vào phần tử div
  userInfoDiv.innerHTML = userInfoHTML;
}


function resetForm() {
  firstnameError.textContent = "";
  lastnameError.textContent = "";
  emailError.textContent = "";
  genderError.textContent = "";
  countryError.textContent = "";
  checkError.textContent = "";
  document.getElementById("myForm").reset();
}
























