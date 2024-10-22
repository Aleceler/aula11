// @ts-ignore
import {listenToPersistedEvent} from "@funcef/utils"
// @ts-ignore
import {Button} from "@funcef/components"
const Payment = () => {
    listenToPersistedEvent('@funcef/cart/cartToPayment', (event: any) => {
        const { cart } = event.detail;
        console.log(cart)
    });

    return <>
        <h1>Payment</h1>
        <Button text="Testando botao components" onClick={() => alert("botao do mife components clicado!")} />
    </>
}

export default Payment