import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

const getUserProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`);
  return response.data;
};

export { getUserProfile };
