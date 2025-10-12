import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import HeaderComponent from './Components/Header';
import HeaderEmployeeComponent from './Components/HeaderEmployee';
import FooterComponent from './Components/Footer';
import BackToTopButton from './Components/TopBtn';

//Pages
  //User Pages
  import HomePage from './Pages/Home';
  import ReservationSlot from './Pages/ReservationSlot';
  import ReservationResult from './Pages/ReservationResult';

  //Employee Pages
  import EmployeeLogInPage from './Pages/EmployeeLogIn';
  import EmployeeHomePage from './Pages/EmployeeHome';
  import EmployeeTableView from './Pages/EmployeeTableView';

//Clone Pages
import HistoryAndCulture from './ClonePages/historyandculture';
import Business from './ClonePages/business';
import VisitingImus from './ClonePages/visitingimus';
import HeroesofImus from './ClonePages/heroesofimus';
import NotablePerson from './ClonePages/notableperson';
import CitizensCharcter from "./ClonePages/citizenscharacter";
import Assistance from './ClonePages/assisstance';
import Services from './ClonePages/services';
import DepartmentsandUnits from './ClonePages/departmentsandunits';
import PastMayors from './ClonePages/pastmayors';
import History from './ClonePages/history';
import BarangayOfficials from './ClonePages/barangayofficials';
import CityCouncil from './ClonePages/citycouncil';
import CityMayor from './ClonePages/citymayor';
import CityProfile from './ClonePages/CityProfile';

//Layout Formats:
  //User Layout
  function UserLayout({ children }) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <HeaderComponent />
          <div style={{flex: 1}}>
            {children}
          </div>
        <FooterComponent />
        <BackToTopButton />
      </div>
    );
  }

  //Employee Layout
  function EmployeeLayout({ children }) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <HeaderEmployeeComponent />
        <div style={{flex: 1}}>
          {children}
        </div>
        <FooterComponent />
        <BackToTopButton />
      </div>
    );
  }

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*USER PAGES*/}
          <Route path='/' element={<UserLayout><HomePage /></UserLayout>} />
          <Route path='/EmployeeLogIn' element={<UserLayout><EmployeeLogInPage /></UserLayout>} />
          <Route path='/ReservationSlot' element={<UserLayout><ReservationSlot /></UserLayout>} />
          <Route path='/ReservationResult' element={<UserLayout><ReservationResult /></UserLayout>} />

          {/*EMPLOYEE PAGES*/}
          <Route path='/EmployeeHome' element={<EmployeeLayout><EmployeeHomePage /></EmployeeLayout>} />
          <Route path='/EmployeeTableView' element={<EmployeeLayout><EmployeeTableView /></EmployeeLayout>} />
          <Route path='/RescheduleResult' element={<EmployeeLayout><ReservationResult /></EmployeeLayout>} />

          {/*CLONE PAGES */}
            {/*BUSINESS */}
            <Route path='/Business' element={<UserLayout><Business /></UserLayout>} />

            {/*TOURISM*/}
            <Route path='/HistoryandCulture' element={<UserLayout><HistoryAndCulture /></UserLayout>} />
            <Route path='/VisitingImus' element={<UserLayout><VisitingImus /></UserLayout>} />
            <Route path='/HeroesofImus' element={<UserLayout><HeroesofImus /></UserLayout>} />
            <Route path='/NotablePerson' element={<UserLayout><NotablePerson /></UserLayout>} />

            {/*SERVICES*/}
            <Route path='/CitizensCharcter' element={<UserLayout><CitizensCharcter /></UserLayout>} />
            <Route path='/Assisstance' element={<UserLayout><Assistance /></UserLayout>} />
            <Route path='/Services' element={<UserLayout><Services /></UserLayout>} />

            {/*ABOUT IMUS*/}
            <Route path='/DepartmentsandUnits' element={<UserLayout><DepartmentsandUnits /></UserLayout>} />
            <Route path='/PastMayors' element={<UserLayout><PastMayors /></UserLayout>} />
            <Route path='/History' element={<UserLayout><History /></UserLayout>} />
            <Route path='/BarangayOfficials' element={<UserLayout><BarangayOfficials /></UserLayout>} />
            <Route path='/CityCouncil' element={<UserLayout><CityCouncil /></UserLayout>} />
            <Route path='/CityMayor' element={<UserLayout><CityMayor /></UserLayout>} />
            <Route path='/CityProfile' element={<UserLayout><CityProfile /></UserLayout>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;