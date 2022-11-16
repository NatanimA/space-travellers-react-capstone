import React from 'react';
import renderer from 'react-test-renderer';
import MissionItem from '../components/missions/Missions'
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Tests The Mission Section container", () => {
    it("Should render Missions Component", () => {
        render(<MissionItem />)
        const button = screen.getByTestId('toggle-join');
        userEvent.click(button);
        expect(button.style.display).toBe('none');
    })
})