import Cookies from 'js-cookie';

export function incrementCartsByTeamMember(cartsCookieValue, productsId) {
  // Find if the teamMemberId matches any of the array elements
  const idInArray = cartsCookieValue.some(
    (productCarts) => productCarts.productsId === productsId,
  );

  // If the array doesn't contain an element with the teamMemberId,
  // then add a new array element at the end
  if (!idInArray) {
    return [
      ...cartsCookieValue,
      {
        productsId: productsId,
        carts: 1,
      },
    ];
  }

  // If the array does contain an element matching the
  // teamMemberId, increase the number of visits in that
  // element by 1
  return cartsCookieValue.map((productCarts) => {
    if (productsId === productCarts.productsId) {
      productCarts.carts = productCarts.carts + 1;
    }
    return productCarts;
  });
}

export function setVisitsCookieClientSide(newCart) {
  Cookies.set('cart', newCart);
}

//get the cookie
// parse the cookie
//update the parsed cookie
//set teh cookie with the new vaue
