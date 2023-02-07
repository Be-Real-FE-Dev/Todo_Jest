import { render } from '@testing-library/react';
import MyApp from './pages/_app.tsx';

const customRender = (ui, options) => render(ui, { wrapper: MyApp, ...options });

export * from '@testing-library/react';

export { customRender as render };
