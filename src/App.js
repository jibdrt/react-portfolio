import './App.css';
import Profile from './components/profile';
import Projects from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css';
//
AOS.init();


<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
</style>

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Profile />
        <div className='p-10'>
          <Projects />
        </div>
      </header>
    </div>
  );
}

export default App;
