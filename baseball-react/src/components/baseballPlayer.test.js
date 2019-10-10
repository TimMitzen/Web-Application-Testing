import React from 'react';
import * as rtl from '@testing-library/react';
import  '@testing-library/jest-dom';
import Baseball from'./baseballPlayer'
afterEach(rtl.cleanup)

test('Render Baseball', ()=> {
   const wrapper = rtl.render(<Baseball/>)
   wrapper.getByText(/strikes/i)
   })

test('')

// test('Balls', ()=>{
//    rtl.findAllByText(/ball/i)

// })

// test('Render strike count')


