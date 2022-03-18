import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import CustomForm from "../features/CustomForm";
import userEvent from '@testing-library/user-event'

describe('Custom Form test suite', () => {
    test('should first render component', async () => { 
        //render component first
        render(<CustomForm />);

        //find elements present in dom
        expect(await screen.findByText('Login')).toBeInTheDocument(); // check Login text present
        expect(await screen.findByTestId('LoginButton')).toBeDisabled(); // check login button disable by default

        //when you asserting but that time element is not present means getBy returns error.
        //but queryBy doesn't throw error. so ..
        // ex:  expect(screen.findByText('Login1')).toBeNull();  expect(screen.queryByText('Login1')).toBeNull(); 
        //So every time you are asserting that an element isn't there, use queryBy. Otherwise default to getBy

        //The findBy search variant is used for asynchronous elements which will be there eventually

        // fire event only triggers the change event. so it only triggers onchange only one time and sets value in it.
        // fireEvent.change(screen.getByPlaceholderText('email'), {
        //     target: {value: 'ram'}
        // });

        // fireEvent.change(screen.getByPlaceholderText('password'), {
        //     target: {value: '123'}
        // });

        //but user event triggers change event and also keyDown, keyPress, and keyUp events.
        // so on each key press this change will be triggerd.
        userEvent.type(screen.getByPlaceholderText('email'), 'ram');
        userEvent.type(screen.getByPlaceholderText('password'), '123');

        expect(await screen.findByTestId('LoginButton')).toBeEnabled(); // check login button enabled when user enters both
     })
})