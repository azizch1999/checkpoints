import './style.css';
import imageInSrc from './src/imageInSrc.jpg'
function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="titleRed">Chouchen Mohamed Aziz</h1>
    <br />
    <img src="/imageInSrc.jpg" />
    <br />
    <img src="/public/imageInPublic.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
  );
}

export default App;
