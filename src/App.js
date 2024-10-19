import './App.css';
import AppN from './app/AppN';
import AppUser from './app/AppUser';
import UseCookie from './lib/UseCookie';

function App() {
  const [user, setUser] = UseCookie('user')
  
  return (
    <div className="App">
      {
        user?.user
        ?
        <AppUser />
        :
        <AppN />
      }
    
    </div>
  );
}

export default App;
