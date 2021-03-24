
import './App.css';
import ProfilPhoto from './Componente/Profil/ProfilPhoto'
import FullName from './Componente/Profil/FullName'
import Address from './Componente/Profil/Address'

function App() {
  return (
    <div className="card">
    <div className="App" >
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
    </div>
  );
}

export default App;
