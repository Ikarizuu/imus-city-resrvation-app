import { Outlet } from 'react-router';
import HeaderEmployeeComponent from './Components/HeaderEmployee';

const UserLayout = () => {
    return (
    <>
        <HeaderEmployeeComponent />
        <main>
            <Outlet />
        </main>
    </>
    );
};

export default UserLayout;