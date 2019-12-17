// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard'


//shows the control and display

test('shows the control and display', () => {
    const {getByText} = render(<Dashboard/>)
    getByText(/open/i)
    getByText(/close/i)
    getByText(/lock gate/i)
    getByText(/unlocked/i)
})
