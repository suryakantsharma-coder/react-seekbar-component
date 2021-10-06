# react-seekbar-component

> react-seekbar-component

[![NPM](https://img.shields.io/npm/v/react-seekbar-component.svg)](https://www.npmjs.com/package/react-seekbar-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-seekbar-component
```

## Usage

```jsx
import React, { useState } from 'react'
import SeekBar, { ExampleComponent } from 'react-seekbar-component'
import 'react-seekbar-component/dist/index.css'

const App = () => {

  const [value, setValue] = useState(0)

  return (
    <div>
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
```

## License

MIT © [suryakantsharma-coder](https://github.com/suryakantsharma-coder)
