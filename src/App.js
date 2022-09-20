import './App.css';

import {
  SketchPicker
} from 'react-color'
import { useState } from 'react';

const defaultColor = {
  rgb: {
    r: 10,
    g: 200,
    b: 100,
    a: 0.3,
  },
  color: 'rgba(10, 200, 100, 0.3)'
}

function RGBAToHexA(r, g, b, a) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  if (a.length == 1)
    a = "0" + a;

  return "#" + r + g + b + a;
}


function App() {
  const [currentColor, setCurrentColor] = useState(defaultColor.rgb);
  const [appColor, setAppColor] = useState(defaultColor.color)
  const handleChangeComplete = (data) => {

    setCurrentColor(data.hsl)
    const { r, g, b, a } = data.rgb;
    setAppColor(RGBAToHexA(r, g, b, a))
  }

  return (
    <div className="App" style={{ backgroundColor: appColor }}>
      <div>
        <SketchPicker
          color={currentColor}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </div>
  );
}

export default App;
