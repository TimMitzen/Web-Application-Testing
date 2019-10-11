import React from 'react';
import * as rtl from '@testing-library/react';
import  '@testing-library/jest-dom';
import Baseball from'./baseballPlayer'

afterEach(rtl.cleanup)

test('Render Baseball', ()=> {
   const wrapper = rtl.render(<Baseball/>)
   wrapper.getByText(/strikes/i)
   })

test('Render Balls', ()=> {
   const wrapper = rtl.render(<Baseball/>)
   wrapper.getByText(/balls/i)
})

test("Render Outs", ()=>{
   const wrapper = rtl.render(<Baseball/>)
   wrapper.getByText(/out/i) 
})

test('Render Foul', ()=>{
   const wrapper = rtl.render(<BaseBall/>)
   wrapper.getByText(/foul/i)
})

// test('Balls', ()=>{
//    rtl.findAllByText(/ball/i)

// })

// test('Render strike count')


