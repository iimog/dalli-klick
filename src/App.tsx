import { useState } from 'react';
import './App.css';
import bild1 from './img/images/bad_reichenhall_94_26.jpg';
import bild2 from './img/images/berlin_84_36.jpg';
import bild3 from './img/images/bodenseetour_jga_83_18.jpg';
import bild4 from './img/images/daenemark_93_16.jpg';
import bild5 from './img/images/elba_2003_20.jpg';
import bild6 from './img/images/fasching_83_08.jpg';
import bild7 from './img/images/himmelberg_bayerischer_wald_motorrad_83_03.jpg';
import bild8 from './img/images/himmelberg_bayerischer_wald_motorrad_83_28.jpg';
import bild9 from './img/images/himmelberg_bayerischer_wald_motorrad_83_33.jpg';
import bild10 from './img/images/himmelberg_bayerischer_wald_motorrad_83_34.jpg';
import bild11 from './img/images/hochzeit_1986_13.jpg';
import bild12 from './img/images/kummunion_nicki_83_24.jpg';
import bild13 from './img/images/lueneburger_heide_84_25.jpg';
import bild14 from './img/images/mallorca_1988_38.jpg';
import bild15 from './img/images/sardinien_2001_06.jpg';
import bild16 from './img/images/tuerkei_97_18.jpg';
import bild17 from './img/images/tuerkei_botanik_04_19.jpg';
import bild18 from './img/images/tunesien_83_43.jpg';
import bild19 from './img/images/ungarn_84_36.jpg';
import bild20 from './img/images/ungarn_98_35.jpg';
import bild21 from './img/images/usa_99_22.jpg';
import bild22 from './img/images/usa_99_42.jpg';
import bild23 from './img/images/winter_82_13.jpg';
import bild24 from './img/images/winter_83_20.jpg';
import bild25 from './img/images/winter_83_32.jpg';
import bild26 from './img/images/winter_83_38.jpg';

import mask1 from './img/masks/mask1.png';
import mask2 from './img/masks/mask2.png';
import mask3 from './img/masks/mask3.png';
import mask4 from './img/masks/mask4.png';
import mask5 from './img/masks/mask5.png';
import mask6 from './img/masks/mask6.png';
import mask7 from './img/masks/mask7.png';
import mask8 from './img/masks/mask8.png';
import _ from 'lodash';

const allImages = _.shuffle([bild1, bild2, bild3, bild4, bild5, bild6, bild7, bild8, bild9, bild10, bild11, bild12, bild13, bild14, bild15, bild16, bild17, bild18, bild19, bild20, bild21, bild22, bild23, bild24, bild25, bild26])

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
          {masks.length > 0 ? `Noch ${masks.length} Teile` : _.initial(allImages[bild]?.split('/')[3].split('.')[0].split('_')).map(x => _.capitalize(x)).join(" ")}
        </p>
      </header>
    </div>
  );
}

export default App;
