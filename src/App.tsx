import { useState } from 'react';
import './App.css';
import bild1 from './img/images/bernd_83.jpg';
import bild2 from './img/images/mama_83.jpg';
import bild3 from './img/images/mama_84.jpg';
import bild4 from './img/images/nicki_83.jpg';
import bild5 from './img/images/papa_tunesien_83.jpg';
import bild6 from './img/images/carlos_83.jpg';
import mask1 from './img/masks/mask1.png';
import mask2 from './img/masks/mask2.png';
import mask3 from './img/masks/mask3.png';
import mask4 from './img/masks/mask4.png';
import mask5 from './img/masks/mask5.png';
import mask6 from './img/masks/mask6.png';
import mask7 from './img/masks/mask7.png';
import mask8 from './img/masks/mask8.png';
import _ from 'lodash';

const allImages = _.shuffle([bild1, bild2, bild3, bild4, bild5, bild6])

function App() {
  const allMasks = [mask1, mask2, mask3, mask4, mask5, mask6, mask7, mask8]
  const [masks, setMasks] = useState(allMasks)
  const [bild, setBild] = useState(0)

  const revealTile = () => {
    if (masks.length > 0) {
      const tileToReveal = Math.floor(Math.random() * masks.length)
      const maskClone = masks.slice()
      maskClone.splice(tileToReveal, 1)
      setMasks(maskClone)
    } else {
      setMasks(allMasks)
      setBild((bild + 1) % allImages.length)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {`Bild ${bild + 1}/${allImages.length}`}
        </p>
        <div className="ratespiel" style={{ position: "relative", width: "80%" }} onClick={revealTile}>
          <img src={allImages[bild]} style={{
            maxWidth: "100%",
            maxHeight: "800px",
            position: "relative"
          }} />
          {masks.map(m => <img src={m} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />)}
        </div>
        <p>
          {masks.length > 0 ? `Noch ${masks.length} Teile` : allImages[bild]?.split('/')[3].split('.')[0].replaceAll("_", " ")}
        </p>
      </header>
    </div>
  );
}

export default App;
