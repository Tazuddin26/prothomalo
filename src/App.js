import './App.css';
import Advbar from './Advbar';
import Topbar from './Topbar';
import Menubar from './Menubar';
import Newsbar from './Newsbar';
import Timebar from './Timebar';
import { Route, Routes } from 'react-router-dom';
import Newspage from './Newspage';
function App() {
  return (
    <div className="App w-full h-full">
      <Topbar />
      <Timebar />
      <Menubar />
      <Advbar />
      <Routes>
        <Route path="/" element={<Newsbar />} />
        <Route path="/:id" element={<Newspage />} />
      </Routes>
    </div>
  )
};
export default App;







