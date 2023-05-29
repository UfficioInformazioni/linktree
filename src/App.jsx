import './App.css';
import logo from './Resources/logo.png';

const App = () => {

  /* PAGE RENDER */
  return (
    <main className='row-content'>
      <div className='bg-container'></div>
      <div className='spike top-left'></div>
      <div className='spike bottom-right'></div>

      <div className='main-content'>
        <div className='centered-banner'>

          <img className='logo-image' src={logo} alt="logo" />
          <h1 className='page-title'>Ufficio Informazioni</h1>
          <h3 className='page-subtitle'>Divulgazione Online? Si può fare!</h3>

          <div className='action-btn-cont'>
            <a className='action-btn' referrerPolicy='no-referrer' href="https://www.twitch.tv/ufficio_informazioni" target='_blank'>Vai al Canale Twitch</a>
            <a className='action-btn' referrerPolicy='no-referrer' href="https://www.youtube.com/@ufficioinformazioni3220" target='_blank'>Guarda i VOD su Youtube</a>
            <a className='action-btn' referrerPolicy='no-referrer' href="https://www.instagram.com/ufficioinformazioni/" target='_blank'>Seguici su Instagram</a>
            <a className='action-btn' referrerPolicy='no-referrer' href="https://www.youtube.com/@ufficioinformazioni3220" target='_blank'>Seguici su YouTube</a>
            <a className='action-btn' referrerPolicy='no-referrer' href="https://t.me/+FOKLuWEMrBNhZDE0" target='_blank'>Entra nel Gruppo Telegram</a>
            <a className='action-btn' referrerPolicy='no-referrer' href="https://t.me/+XX6FANXm1fQxNmE8" target='_blank'>Entra nel Canale Telegram</a>
            <a className='action-btn' referrerPolicy='no-referrer' href="https://discord.gg/bJdy8GmJ74" target='_blank'>Entra nel Canale Discord</a>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
