import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import Home from './Components/Home';
import NewsDetail from './Components/NewsDetail';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/news/:slug' element={<NewsDetail/>} />
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
