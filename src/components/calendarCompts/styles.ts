// Стили для ячеек таблицы
const tableCeilStyles = {
  padding: "5px",
  borderRight: "1px solid var(--mui-palette-TableCell-border)",
  borderLeft: "1px solid var(--mui-palette-TableCell-border)",
  cursor: "pointer",
  height: "51px",
  verticalAlign: "top",
  boxSizing: "border-box",
  width: "90px",
  userSelect: "none",
};
const tableHeadStyles = {
  backgroundColor: "light-dark( #d9ffca, #336f35)",
  padding: "16px 32px",
  borderBottomWidth: "3px",
  userSelect: "none",
};
const defaultTCeilStyles = {
  backgroundColor: "light-dark( #cfceff, #41406f)",
  ...tableCeilStyles,
};
const baseTCeilStyles = {
  backgroundColor: "light-dark( #ededed, #696969)",
  ...tableCeilStyles,
};
const currentTCeilStyles = {
  backgroundColor: "light-dark( #fffa90, #758100)",
  ...tableCeilStyles,
  borderLeft: "3px solid #ff5e5e",
};
const trainTCeilStyles = {
  backgroundColor: "light-dark( #68ddb0, #48876f)",
  ...tableCeilStyles,
};
const cancelTCeilStyles = {
  backgroundColor: "light-dark( #ffa6a6, #9f3939)",
  ...tableCeilStyles,
};
const ceilGetStyles = (i: Date, today: Date, status: string) => {
  if (
    i.getDate() === today.getDate() &&
    i.getMonth() === today.getMonth() &&
    i.getFullYear() === today.getFullYear()
  ) {
    return currentTCeilStyles;
  } else if (status === "тренировка") {
    return trainTCeilStyles;
  } else if (status === "отменена") {
    return cancelTCeilStyles;
  } else {
    return i.getMonth() !== today.getMonth()
      ? baseTCeilStyles
      : defaultTCeilStyles;
  }
};

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const dayDescBoxStyles = {
  width: "631px",
  padding: "20px",
  boxShadow: "0 0 2px 1px #c5c5c5",
  minHeight: "136px",
  display: "flex",
  justifyContent: "space-between",
  mt: 1,
};

export {
  tableCeilStyles,
  tableHeadStyles,
  flexCenter,
  dayDescBoxStyles,
  ceilGetStyles,
};
