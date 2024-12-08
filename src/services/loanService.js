import axios from 'axios';

const API_URL = 'http://localhost:3000/api/loans';

const getLoans = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createLoan = async (loanData) => {
  const response = await axios.post(API_URL, loanData);
  return response.data;
};

export { getLoans, createLoan };
