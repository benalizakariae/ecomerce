const INITIAL_STATE={
    cart: []
}
export default function carteReducer( state = INITIAL_STATE, action){
    switch (action.type){
        case "ADDITEM":
            const indexItemAdd = state.cart.findIndex(obj=> obj.id 
                === action. payload.id)
      if(indexItemAdd !== -1){
        const updateQuantity ={
            ...state.cart[indexItemAdd],
            quantity: state.cart[indexItemAdd].quantity+
            action.payload.quantity
        }
        const newarr =[...state.cart]
        newarr.splice(indexItemAdd,1,updateQuantity)
        console.log(newarr);
        return{
            cart:newarr
        }
      }
      else {
        const newarr=[...state.cart]
        newarr.push(action.payload)
        console.log(newarr)
        return{
            cart:newarr
        }
      }
        case "UPDATEITEM":
            const indexItemUpdat=state.cart.findIndex(obj=>obj.id
                === action.payload.id)
                const newarr =[...state.cart]
        newarr.splice(indexItemUpdat,1,action.payload)
        return{
            cart:newarr
        }
    }
    return state;
}