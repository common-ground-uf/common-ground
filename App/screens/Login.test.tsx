// import {describe, expect, test} from '@jest/globals';
import { Login } from './Login';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Login screen', () => {
  test('Login request', async () => {

    // test user creds
    const email = 'testuser@gmail.com';
    const password = 'admin';
    let hasErr = false;
    
    // get elements
    const screen = render(<Login navigation={{
        navigate: undefined,
    }}  />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    //get only button on page
    const loginButton = screen.getAllByRole('button')[0];
    if(loginButton === undefined) {
        hasErr = true;
    }

    try{
        // fill in form
        await waitFor(() => {
            fireEvent.changeText(emailInput, email);
            fireEvent.changeText(passwordInput, password);
        });

        //click submit button
        // await waitFor(() => {
        //     fireEvent.press(loginButton);
        // });
    }catch(e){
        console.log(e);
        hasErr = true;
    }

    expect(hasErr).toBe(false);

  });
});