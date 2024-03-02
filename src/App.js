import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import Home from './Components/Home';
import NewsDetail from './Components/NewsDetail';
import SearchFind from './Components/SearchFind';
import Sports from './Components/Sports';
import Technology from './Components/Technology';
import Health from './Components/Health';
import Economy from './Components/Economy';
import Europe from './Components/Europe';
import Asia from './Components/Asia';
import America from './Components/America';
import Africa from './Components/Africa';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/news/:slug' element={<NewsDetail/>} />
        <Route exact path='/search' element={<SearchFind/>}/>
        <Route exact path='/sports' element={<Sports/>}/>
        <Route exact path='/technology' element={<Technology/>}/>
        <Route exact path='/health' element={<Health/>}/>
        <Route exact path='/economy' element={<Economy/>}/>
        <Route exact path='/europe' element={<Europe/>}/>
        <Route exact path='/asia' element={<Asia/>}/>
        <Route exact path='/america' element={<America/>}/>
        <Route exact path='/africa' element={<Africa/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
