import { BiUser } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import LoginIputProps from "@/types/logininput";
import { ErrorMessage, useField } from "formik";
import styles from "./styles.module.scss";

const LoginInput = ({ icon, placeholder, ...props }: LoginIputProps) => {
  const [field, meta] = useField(props);

  return (
    <div
      className={`${styles.input} ${
        meta.touched && meta.error ? styles.error : ""
      }`}
    >
      {icon === "user" ? (
        <BiUser />
      ) : icon === "email" ? (
        <SiMinutemailer />
      ) : icon === "password" ? (
        <IoKeyOutline />
      ) : (
        ""
      )}
      <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className={styles.error__popup}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
};

export default LoginInput;
