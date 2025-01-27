import { useSelector } from 'react-redux'

import StyledOrderReceived from './style'
import DotButton from '../dotbutton.jsx/index'
import OrderProcess from './OrderProcess/index'
import OrderInfo from './OrderInfo/index'
import Receipt from './Receipt/index'

function OrderReceived() {
  const store = useSelector(state => state.basket.store)

  return (
    <StyledOrderReceived>
      <div className="page">
        <div className="frame" id="background">
          <div className="table" id="table">
            테이블주문접수
          </div>
          <p className="food">{store.name}</p>
          <DotButton></DotButton>
          <OrderProcess></OrderProcess>
          <OrderInfo></OrderInfo>
          <Receipt></Receipt>
        </div>
      </div>
    </StyledOrderReceived>
  )
}

export default OrderReceived
