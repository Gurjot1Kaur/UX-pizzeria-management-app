import SideMenu from './SideMenu';
import './App.css';


function Inventory({updateScreen}) {
    return <>
    <h2 className="headline">Inventory</h2>
    <SideMenu updateScreen={updateScreen}/>
    <p>
        This is Inventory.
        This is Inventory.
        This is Inventory.
        This is Inventory.
        This is Inventory.
        This is Inventory.
        This is Inventory.
        This is Inventory.
        This is Inventory.

        </p>
    </>;
}

export default Inventory;