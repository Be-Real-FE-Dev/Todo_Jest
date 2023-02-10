import { whatSsubInstance } from './axios';

export const getIssueList = async () => {
  const response = await whatSsubInstance.get(`/issues?sort=comments&state=all`);
  if (response.status !== 200) throw Error(response.statusText);

  return response.data;
};
