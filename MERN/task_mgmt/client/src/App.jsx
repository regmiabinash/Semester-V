
import './App.css'
import RegisterPage from './pages/register.page.jsx';
import LoginPage from './pages/login.page.jsx';
import {BrowserRouter,Routes,Route} from 'react-router'
import HomePage from './pages/home.page.jsx';
import NotFoundPage from './pages/notfound.page.jsx';
import { Toaster} from 'react-hot-toast';



function App() {

  return (
    
    <main className='h-screen min-w-full tracking-wider'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          {/* dynamic route */}
          <Route path="product/:id" element={<div>Product Page</div>}/>


          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster/>

    </main>
    
    
       
  )}

export default App;

// { ""; ""}
// xml
// user = {name:'abc'}
// <user>
// <name>abc</name>
// </user>


