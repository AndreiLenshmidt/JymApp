// Стили для ячеек таблицы
const tableCeil = {
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
const defaultTCeil = {
  backgroundColor: "light-dark( #cfceff, #41406f)",
  ...tableCeil,
};
const baseTCeil = {
  backgroundColor: "light-dark( #ededed, #696969)",
  ...tableCeil,
};
const currentTCeil = {
  backgroundColor: "light-dark( #fffa90, #758100)",
  ...tableCeil,
  borderLeft: "3px solid #ff5e5e",
};
const trainTCeil = {
  backgroundColor: "light-dark( #68ddb0, #48876f)",
  ...tableCeil,
};
const cancelTCeil = {
  backgroundColor: "light-dark( #ffa6a6, #9f3939)",
  ...tableCeil,
};
const ceilGetStyles = (i: Date, today: Date, status: string) => {
  if (
    i.getDate() === today.getDate() &&
    i.getMonth() === today.getMonth() &&
    i.getFullYear() === today.getFullYear()
  ) {
    return currentTCeil;
  } else if (status === "тренировка") {
    return trainTCeil;
  } else if (status === "отменена") {
    return cancelTCeil;
  } else {
    return i.getMonth() !== today.getMonth() ? baseTCeil : defaultTCeil;
  }
};

export {
  tableCeil,
  defaultTCeil,
  baseTCeil,
  currentTCeil,
  trainTCeil,
  cancelTCeil,
  ceilGetStyles,
};
