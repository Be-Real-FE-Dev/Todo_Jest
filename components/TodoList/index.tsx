import { ChangeEvent } from 'react';
import styled from 'styled-components';
import TodoItem from '@/components/TodoItem';

type TProps = {
  todos: Todo[];
  onChange: (e: ChangeEvent) => void;
};

type Todo = {
  id: string;
  value: string;
  completed: boolean;
};

const TodoList = ({ todos, onChange }: TProps) => {
  return (
    <List>
      {todos.length > 0 &&
        todos.map(({ id, value, completed }: Todo) => (
          <TodoItem key={id} id={id} value={value} checked={completed} onChange={onChange} />
        ))}
    </List>
  );
};

export default TodoList;

const List = styled.ul`
  width: 50%;
  list-style: none;
  flex-flow: column nowrap;
  display: flex;
  gap: 10px;
`;
