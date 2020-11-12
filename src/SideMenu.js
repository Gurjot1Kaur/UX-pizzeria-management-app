import './App.css';

function SideMenu({updateScreen}) {
    return <div style={{float: "left", margin: "10px"}}>
    <button onClick={() => {updateScreen(0)}}>Logout</button><br/>
    <button onClick={() => {updateScreen(1)}}>Overview</button><br/>
    <button onClick={() => {updateScreen(2)}}>Update order status</button><br/>
    <button onClick={() => {updateScreen(3)}}>Inventory</button><br/>
    </div>;
}

export default SideMenu;