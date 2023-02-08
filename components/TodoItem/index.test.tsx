import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import TodoItem from '@/components/TodoItem';

describe('<TodoItem/> test', () => {
  const Wrap = () => {
    const [isChecked, setIsChecked] = useState(false);
    return <TodoItem id={'test'} value={'test입력값'} checked={isChecked} onChange={() => setIsChecked(!isChecked)} />;
  };
  const { container, getByText } = render(<Wrap />);

  it('check todo', async () => {
    const checkbox = container.querySelector('#test') as HTMLInputElement;
    const checkboxInput = screen.getByTestId('test1');
    const checkBoxLabel = getByText('test입력값');

    expect(checkbox.checked).toBe(false);
    expect(checkboxInput).not.toBeChecked();
    expect(checkBoxLabel).toHaveStyle('text-decoration: none');

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
    expect(checkboxInput).toBeChecked();
    expect(checkBoxLabel).toHaveStyle('text-decoration: line-through');
  });
});
