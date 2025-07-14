
import * as yup from "yup"
export const FormLogin=yup.object().shape({
  name:yup.string().required("Zehmet olmasa ad daxil edin"),
  password: yup.string()
  .min(8, "Password must be at least 8 characters")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .required("Password is required")})

export default FormLogin