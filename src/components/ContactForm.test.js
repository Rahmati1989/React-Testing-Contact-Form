
import React from 'react'
import {fireEvent, render, screen, getByTestId} from "@testing-library/react";
import ContactForm from './ContactForm'

test('renders ContactForm', () =>{
    (<ContactForm />)
})

test('fill out the form and submit it',async () =>{
    render(<ContactForm />)
    // Default value of the form
    const firstNameInput= screen.getByTestId("Edd");
    const lastNameInput = screen.getByTestId("Burke")
    const emailInput = screen.getByTestId("email")
   // Fill the form with my information 
    fireEvent.change(firstNameInput,{target:{value:'Rafi'}})
    fireEvent.change(lastNameInput,{target:{value:'Rahmati'}})
    fireEvent.change(emailInput,{target:{value:'RahmatiRafi1989@gmail.com'}})
    //Check the form has these value or not 
    expect(firstNameInput).toHaveValue('Rafi')
    expect(lastNameInput).toHaveValue('Rahmati')
    expect(emailInput).toHaveValue('RahmatiRafi1989@gmail.com')
    //For submition 
    const button = screen.getByTestId("button")
    fireEvent.click(button);

    //Check the form has my name or not and does'nt care about the Case
    const newUser = await screen.findByText(/rafi/i)
    expect(newUser).toBeTruthy();


})
