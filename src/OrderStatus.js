import SideMenu from './SideMenu';
import './App.css';

function OrderStatus({updateScreen}) {
    return <>
    <h2 className="headline">Order Status</h2>
    <SideMenu updateScreen={updateScreen}/>
    <p>
        This is order status.
        This is order status.
        This is order status.
        This is order status.
        This is order status.
        This is order status.
        This is order status.

        </p>
    </>;
}

export default OrderStatus;