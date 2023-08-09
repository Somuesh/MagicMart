import Nav from '../components/navbar';
import Footer from '../components/footer';
import Orders from '../components/orders';
import { useSelector} from 'react-redux'



const OrdersPage = () => {
  const cartItems = useSelector(state=>state.cart.items)
//   const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user)
//   const sorted = [...user.orders].sort((a,b)=>(new Date(b.createdAt)-new Date(a.createdAt)))



  
 

  return (
     <>
     <Nav cartCount={cartItems.length} />
     <h2>My Orders</h2> 
     {user.orders.map(order=><Orders items={order.items} order={order}></Orders>)}
     <Footer />
     </> 
  );
}

export default OrdersPage;