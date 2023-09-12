export const primaryColor = () => {
  try {
    if (localStorage.theme == "dark") {
      return "rgb(32, 39, 55)";
    } else {
      return "rgb(246, 249, 255)";
    }
  } catch (error) {
    return "rgb(32, 39, 55)";
  }
};
export const secondaryColor = () => {
  try {
    if (localStorage.theme == "dark") {
      return "rgb(38, 46, 64)";
    } else {
      return "white";
    }
  } catch (error) {
    return "rgb(38, 46, 64)";
  }
};

export const primaryTextColor = () => {
  {
    try {
      if (localStorage.theme == "dark") {
        return "white";
      } else {
        return "black";
      }
    } catch (error) {
      return "white";
    }
  }
};
export const secondaryTextColor = () => "rgb(156, 163, 175)";
