import { useState } from 'react';
import './App.css';

import mask1 from './img/masks/mask1.png';
import mask2 from './img/masks/mask2.png';
import mask3 from './img/masks/mask3.png';
import mask4 from './img/masks/mask4.png';
import mask5 from './img/masks/mask5.png';
import mask6 from './img/masks/mask6.png';
import mask7 from './img/masks/mask7.png';
import mask8 from './img/masks/mask8.png';
import _ from 'lodash';

function importAll(r: any) {
	let images: Array<string> = [];
  //@ts-ignore
  r.keys().forEach((item: string) => { images.push(r(item).default); });
	return images
}

const images = importAll(require.context('./img/images', false, /\.(png|jpe?g|svg)$/));
console.log(images)

//const allImages = _.shuffle([bild1, bild2, bild3, bild4, bild5, bild6, bild7, bild8, bild9, bild10, bild11, bild12, bild13, bild14, bild15, bild16, bild17, bild18, bild19, bild20, bild21, bild22, bild23, bild24, bild25, bild26])
const allImages = _.shuffle(images)

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
          {`Picture ${bild + 1}/${allImages.length}`}
        </p>
        <div className="ratespiel" style={{ position: "relative", width: "65%" }} onClick={revealTile}>
          <img src={allImages[bild]} alt="" style={{
            maxWidth: "100%",
            maxHeight: "1600px",
            position: "relative"
          }} />
          {masks.map(m => <img src={m} alt="" key={m} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />)}
        </div>
        <p>
          {masks.length > 0 ? `${masks.length} pieces left` : allImages[bild]?.split('/')[3].split('.')[0].split('_').map(x => _.capitalize(x)).join(" ")}
        </p>
      </header>
    </div>
  );
}

export default App;
