// import { render, screen } from '@testing-library/react';
import App,{avg} from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('expect avg on number', () => {
  expect(avg(1,2,3)).toBe(2);
});
