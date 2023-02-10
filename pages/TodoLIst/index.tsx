import Head from 'next/head';
import { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from '@/components/TodoList/index';
import TodoItem from '@/components/TodoItem';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addTodo, fetchTodo } from 'api/Todo';
import axios from 'axios';
import { log } from 'console';

interface Todo {
  id: string;
  value: string;
  completed: boolean;
}

export default function Home() {
  const [todo, setTodo] = useState('');
  const queryClient = useQueryClient();

  const {
    data: fetchedTodos,
    isLoading: isLoadingfetchedTodos,
    isFetching,
    refetch,
  } = useQuery('todo', fetchTodo, { refetchOnMount: 'always' });

  const { mutate, isLoading, isError, error, isSuccess } = useMutation('addTodo', addTodo, {
    // onMutate: async (newTodo: Todo) => {
    //   console.log(123123123, newTodo);
    //   const test = await queryClient.cancelQueries('todo');
    //   console.log(test);
    //   // Snapshot the previous value
    //   const previousTodos = queryClient.getQueryData('todo');

    //   console.log(previousTodos);

    //   // Optimistically update to the new value
    //   queryClient.setQueryData('todo', () => [...previousTodos.data.result, newTodo]);

    //   // Return a context object with the snapshotted value
    //   return { previousTodos };
    // },
    onSuccess: () => {
      // refetch();
      queryClient.invalidateQueries('todo');
    },
  });

  const changeHanlder = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTodo(value);
  };

  const updateHanlder = (e: ChangeEvent) => {
    const { id } = e.target as HTMLInputElement;

    // setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ id: Math.random().toString(), value: todo, completed: false });
  };

  console.log(fetchedTodos?.data.result);

  if (isFetching && !fetchedTodos?.data.result) return <div> ...loading</div>;

  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <Wrapper>
        <h1>Todo</h1>
        <InputGroup onSubmit={submitHanlder}>
          <InputText
            data-testid="todo"
            type="text"
            value={todo}
            placeholder="할 일을 입력하세요"
            maxLength={20}
            onChange={changeHanlder}
          />
          <SubmitBtn type="submit">제출</SubmitBtn>
        </InputGroup>
        <div>
          {isFetching && <div> ...loading</div>}
          <TodoList todos={fetchedTodos?.data.result} onChange={() => {}} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 30px;
`;

const InputGroup = styled.form`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  margin: 20px 0 30px;
`;

const InputText = styled.input`
  width: 300px;
  height: 46px;
  padding: 13px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 15px;

  &::placeholder {
    color: #cdcdcd;
  }
`;

const SubmitBtn = styled.button`
  width: 80px;
  height: 46px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background: #ffc041;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: coral;
  }
`;
