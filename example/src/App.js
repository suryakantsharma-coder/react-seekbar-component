import React, { useState } from 'react'

import SeekBar, { ExampleComponent } from 'react-seekbar-component'
import 'react-seekbar-component/dist/index.css'

const App = () => {

  const [value, setValue] = useState(0)

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: 'black', color: 'white' }}>
      <h1>{value}</h1>
      <SeekBar
        getNumber={setValue}
        width="60%"
        backgroundColor="gray"
        fillColor="red"
        fillSecondaryColor="blue"
        headColor="white"
        headShadow="white"
        headShadowSize={6}
        progress={89}
      />
    </div>
  )
}

export default App
