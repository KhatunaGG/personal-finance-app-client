import * as yup from "yup";
export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email cannot be empty")
    .email("Looks like this is not an email"),
  password: yup
    .string()
    .required("Password cannot be empty")
    .matches(
      /^(?=[A-Za-z0-9]*$)[A-Za-z0-9]{4,20}$/,
      "Letters and Numbers only"
    ),
});
