import React from 'react';
import * as rtl from '@testing-library/react';
import  '@testing-library/jest-dom';
import Baseball from'./baseballPlayer'
import { EXPECTED_COLOR } from 'jest-matcher-utils';

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

test('Render Score', ()=>{
   const wrapper = rtl.render(<Baseball/>)
   wrapper.getByText(/score/i)
})



test('Check for strikes', ()=>{
   const wrapper =rtl.render(<Baseball />)
   const strikes = wrapper.getByTestId('strike')
   const strikebtn = wrapper.getByTestId('strike-btn')
   expect(strikes.textContent).toBe('Strikes 0')
   rtl.fireEvent.click(strikebtn)
   expect(strikes.textContent).toBe('Strikes 1')
   rtl.fireEvent.click(strikebtn)
   expect(strikes.textContent).toBe('Strikes 2',alert(/next team up/i))
   rtl.fireEvent.click(strikebtn)

})

test('Check for balls', ()=>{
   const wrapper = rtl.render(<Baseball/>)
   const balls = wrapper.getByTestId('balls')
   const ballbtn = wrapper.getByTestId('ball-btn')
   expect(balls.textContent).toBe('Balls 0')
   rtl.fireEvent.click(ballbtn)
   expect(balls.textContent).toBe('Balls 1')
   rtl.fireEvent.click(ballbtn)
   expect(balls.textContent).toBe('Balls 2')
   rtl.fireEvent.click(ballbtn)
   expect(balls.textContent).toBe('Balls 3', alert(/take your base/i))
})




// test('Balls', ()=>{
//    rtl.findAllByText(/ball/i)

// })

// test('Render strike count')


