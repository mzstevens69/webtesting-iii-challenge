// Test away!
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'

// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

test('displays if gate is open/closed and if it is locked/unlocked', () => {
    const {getByText} = render(<Display/>)   
    getByText(/locked/i)
    getByText(/unlocked/i)
    getByText(/open/i)
    
    
})
test('displays Closed if the closed prop is true and Open if otherwise', () => {
    const {getByText} = render(<Display closed={true} />);
    getByText('Closed')

})
test('displays Locked if the locked prop is true and Unlocked', () => {
    const {getByText} = render(<Display locked={true} />);
    getByText('Locked')

})
test(' when locked or closed use the red-led class', () => {
    const {getByText} = render(<Display locked={true} closed={true}/>)
    const closed = getByText(/closed/i);
    const locked = getByText(/locked/i);
    expect(closed).toHaveClass('red-led')
    expect(locked).toHaveClass('red-led')
})
test(' when unlocked or open use the green-led class', () => {
    const {getByText} = render(<Display locked={false} closed={false}/>)
    const open = getByText(/open/i);
    const unlocked = getByText(/unlocked/i);
    expect(open).toHaveClass('green-led')
    expect(unlocked).toHaveClass('green-led')
})