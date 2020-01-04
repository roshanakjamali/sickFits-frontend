import OrdersList from "../components/OrdersList";

import PleaseSignin from "../components/PleaseSignin";

const Orders = props => (
  <div>
    <PleaseSignin>
      <OrdersList />
    </PleaseSignin>
  </div>
);

export default Orders;
