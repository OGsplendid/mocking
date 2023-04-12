import fetchData from './http';

export default function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  return JSON.parse(response);
}
