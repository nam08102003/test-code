export const checkEmpty = (value) => {
  if (value.trim() === "") {
    return "Trường này không được để trống";
  }
  return;
};

export const checkHaveNumber = (value) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const numberRegex = /\d/;
  if (value.match(numberRegex) || specialChars.test(value)) {
    console.log(123);
    return "Trường này không được chứa số hoặc kí tự đặc biệt";
  }
  return;
};

export const checkEmailValid = (value) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.match(regex)) {
    return "Email không hợp lệ";
  }
  return;
};

export const checkPhoneValid = (value) => {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!value.match(regex)) {
    return "Phone không hợp lệ";
  }
  return;
};
