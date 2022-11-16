// eslint-disable-next-line
import renderer from 'react-test-renderer';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line
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
    expect(list).toEqual(4);
    const link = screen.getByText('Missions');
    userEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('class', 'active');
  });
});
