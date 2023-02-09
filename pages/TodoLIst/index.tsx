import Head from 'next/head';
import { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from '@/components/TodoList/index';
import TodoItem from '@/components/TodoItem';

type Todo = {
  id: string;
  value: string;
  completed: boolean;
};

export default function Home() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', value: 'test입력값', completed: true },
    { id: '2', value: 'test입력값2', completed: false },
  ]);

  const getTodos = (): Promise<Todo[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve([
          { id: '1', value: 'test입력값', completed: true },
          { id: '2', value: 'test입력값2', completed: false },
        ]);
      }, 1000);
    });
  };

  // useEffect(() => {
  //   getTodos().then(data => setTodos(data));
  // }, []);

  const changeHanlder = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTodo(value);
  };

  const updateHanlder = (e: ChangeEvent) => {
    const { id } = e.target as HTMLInputElement;

    setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([{ id: Math.random().toString(), value: todo, completed: false }, ...todos]);
  };

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
          <TodoList todos={todos} onChange={updateHanlder} />
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
