import { useContext } from "react";

import Modal from "./UI/Modal";
import CartContext from "./store/CartContext";
import Input from "./UI/input";
import { UserProgressContext } from "./store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

function Checkout() {
  const cartCtx = useContext(CartContext)
  const userProgress = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price,0)

  function handleClose() {
    userProgress.hideCheckout()
  }

  function handleSubmit(event) {
    event.preventDefault()

    const fd = new FormData(event.target)
    const costumerData = Object.fromEntries(fd.entries)
  }

  return(
    <Modal open={userProgress.progress === "checkout"} onClose={handleClose}>
      <form action="" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

      <Input label="Full Name" type='text' id="full-name"/>
      <Input label="E-Mail Address" type='email' id="email"/>
      <Input label="Street" type='text' id="street"/>
      <div className="control-row">
        <Input label="Postal Code" type='text' id="postal-codde"/>
        <Input label="City" type='text' id="city"/>
      </div>

      <p className="modal-actions">
        <Button onClick={handleClose} type='button' textOnly >Close</Button>
        <Button>Submit Order</Button>
      </p>
      </form>
    </Modal>
  )
}

export default Checkout