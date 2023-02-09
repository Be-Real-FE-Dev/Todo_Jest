import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <div>
        <Link href={'/TodoList'}>TodoList</Link>
      </div>
      <div>
        <Link href={'/IssueList'}>IssueList</Link>
      </div>
    </div>
  );
};

export default index;
