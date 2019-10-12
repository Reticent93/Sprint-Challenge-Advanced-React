import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'


afterEach(rtl.cleanup)

test('Render the app', () => {
   const stuff = rtl.render(<App />)
   expect(axios.get).toHaveBeenCalledWith(url)
   stuff.debug()
})