import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar';

describe('Tests NavBar Component', () => {
  it('Should render NavBar Component', () => {
    const tree = renderer.create(<BrowserRouter><NavBar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(' Checks Links and Active links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const list = screen.getByRole('list').childElementCount;
    expect(list).toEqual(3);
    const link = screen.getByText('Missions');
    userEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('class', 'active');
  });
});
