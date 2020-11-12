import SideMenu from './SideMenu';
import './App.css';

function Dashboard({updateScreen}) {
    return <>
    <h2 className="headline">Dashboard</h2>
    <SideMenu updateScreen={updateScreen}/>
    <p>
        <div>
       <div>Open Orders</div>
       <div>02</div>
       </div>
    </p>
    </>;
}

export default Dashboard;