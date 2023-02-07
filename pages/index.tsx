import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';

type Todo = {
  id: number;
  value: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, value: 'test입력값', completed: true },
    { id: 2, value: 'test입력값2', completed: false },
  ]);

  const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <h1>Todo</h1>
      <InputGroup onSubmit={submitHanlder}>
        <InputText type="text" placeholder="할 일을 입력하세요" maxLength={20} onChange={changeHanlder} />
        <SubmitBtn type="submit">제출</SubmitBtn>
      </InputGroup>
      <div>
        <TodoList>
          {todos.length > 0 &&
            todos.map(({ id, value, completed }: Todo) => (
              <TodoItem key={id} checked={completed}>
                <input type="checkbox" checked={completed} /> <label>{value}</label> <DeleteBtn>🗑️</DeleteBtn>
              </TodoItem>
            ))}
        </TodoList>
      </div>
    </Wrapper>
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

const TodoList = styled.ul`
  width: 50%;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const TodoItem = styled.li<{ checked: boolean }>`
  padding: 8px 16px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  input[type='checkbox'] {
    margin-right: 8px;
  }

  label {
    width: calc(100% - 40px);
    text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
    text-align: left;
  }
`;

const DeleteBtn = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
`;
