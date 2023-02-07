import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import TodoList from '@/components/TodoList/index';
import TodoItem from '@/components/TodoItem';

type Todo = {
  id: string;
  value: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', value: 'test입력값', completed: true },
    { id: '2', value: 'test입력값2', completed: false },
  ]);

  const changeHanlder = (e: React.ChangeEvent) => {
    // 여기서 completed 변경
  };

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Todo</title>
      </Head>
      <Wrapper>
        <h1>Todo</h1>
        <InputGroup onSubmit={submitHanlder}>
          <InputText type="text" placeholder="할 일을 입력하세요" maxLength={20} onChange={changeHanlder} />
          <SubmitBtn type="submit">제출</SubmitBtn>
        </InputGroup>
        <div>
          <TodoList todos={todos} onChange={changeHanlder} />
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
