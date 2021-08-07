//importin styling

import React,{useState} from 'react';
import './app.scss'
//componnet
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './MyComp/Header'
import SideBar from './MyComp/SideBar'
import Recommend from './MyComp/Recommend';
import SearchPage from './MyComp/SearchPage';

const youtubeApi = 'AIzaSyCtx8GndVR_NaHkYYx7pa3bYEwl2JTfnEU'


const App = () => {

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <Router>
        <Header handleMenu = {handleMenu}/>
        <Switch>

          <div className='app_page' style ={{ gridTemplateColumns : menu &&  '1fr 4fr'  }}>

            <SideBar menu = {menu}/>

            <Route exact path='/' >
              <Recommend youtubeApi = {youtubeApi}/>
            </Route>

            <Route  path = '/search'  component = {SearchPage}> 
             </Route>

          </div>


        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}






export default App;