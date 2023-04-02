import { useState } from "react";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import {
  checkEmpty,
  checkHaveNumber,
  checkEmailValid,
  checkPhoneValid,
} from "../utils/validation";
import Textarea from "../components/elements/Textarea";

function Home() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleClick = () => {
    // Set errors fullname if have
    setErrors((prev) => {
      return {
        ...prev,
        fullName: checkEmpty(fullName) || checkHaveNumber(fullName),
      };
    });

    // Set errors email if have
    setErrors((prev) => {
      return {
        ...prev,
        email: checkEmpty(email) || checkEmailValid(email),
      };
    });

    // Set errors phone if have
    setErrors((prev) => {
      return {
        ...prev,
        phone: checkEmpty(phone) || checkPhoneValid(phone),
      };
    });

    // Set errors message if have
    setErrors((prev) => {
      return {
        ...prev,
        message: checkEmpty(message),
      };
    });

    // Validate Fullname
    // if (checkEmpty(fullName)) {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       fullName: checkEmpty(fullName),
    //     };
    //   });
    // } else if (checkHaveNumber(fullName)) {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       fullName: checkHaveNumber(fullName),
    //     };
    //   });
    // } else {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       fullName: "",
    //     };
    //   });
    // }

    // // Validate Email
    // if (checkEmpty(email)) {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       email: checkEmpty(email),
    //     };
    //   });
    // } else if (checkEmailValid(email)) {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       email: checkEmailValid(email),
    //     };
    //   });
    // } else {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       email: "",
    //     };
    //   });
    // }

    // // Validate Phone
    // if (checkEmpty(phone)) {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       phone: checkEmpty(phone),
    //     };
    //   });
    // }
    // else {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       phone: "",
    //     };
    //   });
    // }

    // // Validate Message
    // if (checkEmpty(message)) {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       message: checkEmpty(message),
    //     };
    //   });
    // } else {
    //   setErrors((prev) => {
    //     return {
    //       ...prev,
    //       message: "",
    //     };
    //   });
    // }
  };
  return (
    <div className="home-page">
      <form style={{ maxWidth: "400px", margin: "50px auto" }}>
        <Input
          type="text"
          className="input-fullname"
          placeholder="Họ và tên"
          name="fullname"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          errors={errors?.fullName}
        />
        <Input
          type="text"
          className="input-email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errors={errors?.email}
        />
        <Input
          type="text"
          className="input-phone"
          placeholder="Số điện thoại"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          errors={errors?.phone}
        />
        <Textarea
          col={50}
          row={6}
          placeholder="Lời nhắn"
          className="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          errors={errors?.message}
        />
        <Button
          type="button"
          value="Send"
          className="btn-submit"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default Home;
