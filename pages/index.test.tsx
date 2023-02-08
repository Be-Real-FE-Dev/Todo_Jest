import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '@/pages/index';
import userEvent from '@testing-library/user-event';

describe('Main Page', () => {
  // const user = userEvent.setup();

  // it('fetch todos', async () => {
  //   render(<Home />);

  //   const todos = await waitFor(() => screen.findAllByRole('listitem'), { timeout: 2000 });
  //   expect(todos).toHaveLength(2);
  // });

  it('add todo', async () => {
    const { getByRole, getByTestId, findByRole } = render(<Home />);

    let todos = await screen.findByRole('list');
    const submitBtn = getByRole('button', { name: '제출' });
    const todoInput = getByTestId('todo');

    // console.log(todos.childElementCount);

    expect(todos.childElementCount).toBe(2);
    userEvent.type(todoInput, '새로 추가');
    // console.log(todoInput.textContent);
    // userEvent.click(submitBtn);
    fireEvent.click(submitBtn);
    // expect(todoInput).toHaveValue('새로 추가');
    expect(todos.childElementCount).toBe(2);
    expect(todos.childElementCount).toBe(3);
    // expect(todos).toHaveLength(2);
  });
});
