import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../../components/missions/Missions';

test('renders rockets component snapshot', () => {
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Missions />
            </BrowserRouter>
        </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
});
