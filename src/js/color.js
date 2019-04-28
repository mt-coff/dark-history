export const calcTextColor = color => {
  switch (color) {
    case "main-color":
    case "blue":
    case "dark":
      return "light";
    case "accent-color":
    case "light":
    default:
      return "dark";
  }
};
