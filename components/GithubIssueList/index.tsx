import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getIssueList } from 'api/Issue';

function GithubIssueList() {
  const { isLoading, error, data, isFetching } = useQuery('issueList', getIssueList);

  if (isLoading) return 'Loading...';

  console.log(data);

  return (
    <div>
      {data.map((item: any) => (
        <li>{item.body} </li>
      ))}
    </div>
  );
}

export default GithubIssueList;
