import hero from './hero.png';
import technologies from './technologies.png';
import social from './social.png';
import clock from './clock.png';
import desk from './desk.png';
import workshop from './workshop.png';
import snacks from './snacks.png';
import wfh from './wfh.png';
import brain from './brain.png';


const images = [
  {id: 'hero', src:hero, alt:'People and a computer'},
  {id: 'technologies', src:technologies, alt:'Programming languajes'},
  {id: 'social', src:social, alt:'Developer guy'},
  {id: 'clock', src:clock, alt:'clock'},
  {id: 'desk', src:desk, alt:'desk'},
  {id: 'workshop', src:workshop, alt:'workshop'},
  {id: 'snacks', src:snacks, alt:'snacks'},
  {id: 'wfh', src:wfh, alt:'laptop'},
  {id: 'brain', src:brain, alt:'brain'}
];

function imagesLoader(){
  return images;
}

export default imagesLoader;