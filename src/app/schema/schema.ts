import * as Yup from "yup";

export enum CategoryEnum {
  Entertainment = "Entertainment",
  Bills = "Bills",
  Groceries = "Groceries",
  "Dining Out" = "Dining Out",
  "Personal Care" = "Personal Care",
  Education = "Education",
  Lifestyle = "Lifestyle",
  Shopping = "Shopping",
  General = "General",
}

export enum ColorEnum {
  GREEN = "Green",
  YELLOW = "Yellow",
  CYAN = "Cyan",
  NAVY = "Navy",
  RED = "Red",
  PURPLE = "Purple",
  TURQUOISE = "Turquoise",
  BROWN = "Brown",
  MAGENTA = "Magenta",
  BLUE = "Blue",
  GREY = "Grey",
  ARMY = "Army",
  PINK = "Pink",
  YELLOWGREEN = "Yellowgreen",
  ORANGE = "Orange",
}

export const schema = Yup.object().shape({
  category: Yup.mixed<CategoryEnum>()
    .oneOf(Object.values(CategoryEnum))
    .required("Select category"),
  amount: Yup.number()
    .typeError("Enter a valid amount")
    .required("Amount is required"),
  color: Yup.mixed<ColorEnum>()
    .oneOf(Object.values(ColorEnum))
    .required("Choose color"),
});
