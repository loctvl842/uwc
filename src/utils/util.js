import dayjs from "dayjs";

const DEFAULT_MONTH = dayjs().month();

export const getMonth = (month = DEFAULT_MONTH) => {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
};

export const fetchData = async (url) => {
  try {
    const data = await fetch(`${process.env.REACT_APP_ENDPOINT_SERVER}${url}`);
    return data.json();
  } catch (err) {
    console.error(err);
  }
};
