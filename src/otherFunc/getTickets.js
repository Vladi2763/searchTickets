const DATA = require("../tickets.json");

export const getTickets = () => {
  return new Promise((resolve) => {
    return resolve(DATA);
  });
};
