const precioOriginal = 120;
const descuento = 18;
/* 
const cupones = [
    "bigote",
    "tabibito",
    "motocicleta"
]
 */
const cupones = [
    {"name":"bigote","discount":15},
    {"name":"tabibito","discount":25},
    {"name":"motocicleta","discount":5}
]



const calcularPrecioConDescuento = (precio,descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}



function onClickPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    // const inputDiscount = document.getElementById("inputDiscount");
    const coupons = document.getElementById("coupons");

    const isCouponValueValid = function (coupon) {
        return coupon.name === coupons.value;
    };

    const userCoupon = cupones.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + coupons.value + " no es válido");
    }else{
        const priceValue = inputPrice.value;
        const discountValue = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

        const resultTag = document.getElementById("Result")
        resultTag.innerHTML = "El precio con Descuento es $"+precioConDescuento
    }

    // let discountValue = 0
    // switch (coupons.value) {
    //     case cupones[0]:
    //         discountValue = 15
    //         break;
    //     case cupones[1]:
    //         discountValue = 25
    //         break;
    //     case cupones[2]:
    //         discountValue = 5
    //         break;
    
    //     default:
    //         break;
    // }

}


/* 
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */







