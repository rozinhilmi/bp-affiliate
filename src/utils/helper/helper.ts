export const convertToHumanDate = (timeStamp: string | number) => {
  if (typeof timeStamp == "string") {
    return (
      new Date(parseInt(timeStamp)).toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) || "-"
    );
  } else {
    return (
      new Date(timeStamp).toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) || "-"
    );
  }
};

export const convertToBillNumber = (num: number | string) => {
  if (typeof num == "string") {
    return `Rp. ${parseInt(num, 10).toLocaleString()},-` || "-";
  } else {
    return `Rp. ${num.toLocaleString()},-` || "-";
  }
};
