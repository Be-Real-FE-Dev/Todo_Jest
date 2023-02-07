import { ChangeEvent } from 'react';
import styled from 'styled-components';

type TProps = {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent) => void;
};

const TodoItem = ({ id, value, checked, onChange }: TProps) => {
  return (
    <Li checked={checked}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} data-testid="test1" />
      <label htmlFor={id}>{value}</label> <DeleteBtn>🗑️</DeleteBtn>
    </Li>
  );
};

export default TodoItem;

const Li = styled.li<{ checked: boolean }>`
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
