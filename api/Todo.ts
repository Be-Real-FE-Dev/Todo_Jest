import axios from 'axios';

export const fetchTodo = async () => {
  const response = await axios.get(`/api/todo`);

  return response;
};

export const addTodo = async (newTodo: any) => {
  const response = await axios.post(`/api/todo`, newTodo);

  return response;
};
