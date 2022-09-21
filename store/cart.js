


//State
export const state = () => ({
  items: [],
  response: ""
  // orderQuantity: "",
  // cartProductQuantity: ""
})

//Actions
export const actions = {
  addToCart({ commit, state }, product) {
    const record = state.items.find(i => i._id === product._id)
    if (!record) {
      state.items.push({
        orderQuantity: state.orderQuantity,
        ...product,
      })

    }
    else if (record.stock <= record.orderQuantity) {
      console.log('record.orderQuantity:', record.orderQuantity)
      console.log('record.stock:', record.stock)
      console.log('Stock insuffisant')
      return false
    }
    else {
      console.log('record.orderQuantity:', record.orderQuantity)
      console.log('record.stock:', record.stock)
      record.orderQuantity += state.orderQuantity
      return true
    };
  }
}
//Mutations
export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  async add(state, productPayload) {
    state.response = null;
    const record = state.items.find(i => i._id === productPayload.product._id)
    // console.log("🚀 ~ file: cart.js ~ line 19 ~ add ~ record", record)
    if (!record) {
      state.items.push({
        orderQuantity: productPayload.orderQuantity,
        ...productPayload.product,
      })

    }

    else if ((record.orderQuantity + productPayload.orderQuantity) > record.stock) {
      console.log('record.orderQuantity:', record.orderQuantity)
      console.log('record.stock:', record.stock)
      console.log('productPayload.orderQuantity:', productPayload.orderQuantity)
      console.log('Stock insuffisant');
      state.response = "La quantité selectionnée est supérieure au stock"
      // return "Stock insuffisant"
    } else if ((record.orderQuantity + productPayload.orderQuantity) <= record.stock) {
      console.log('record.orderQuantity:', record.orderQuantity)
      console.log('record.stock:', record.stock)
      console.log('productPayload.orderQuantity:', productPayload.orderQuantity)
      record.orderQuantity += productPayload.orderQuantity
    } else {
      console.log("Error condition")
      console.log('record.stock:', record.stock)
      console.log('record.orderQuantity + productPayload.orderQuantity:', record.orderQuantity + productPayload.orderQuantity)
    };


  },

  ADD_TO_CART(state, product) {
    state.items.push(product)
  },
  // inc(state, item) {
  //   console.log(item)
  //   const record = state.items.find(i => i._id === item._id)
  //   record.orderQuantity = item.orderQuantity

  // },
  // orderQuantity(state, orderQuantity) {
  //   console.log('orderQuantity:', orderQuantity)
  //   state.orderQuantity = orderQuantity
  // },

  // addToCartByComponent(state, item) {
  //   const record = state.items.find(i => i._id === item._id)

  //   if (!record) {
  //     state.items.push({
  //       orderQuantity: 1,

  //       ...item
  //     })
  //   } else {
  //     record.orderQuantity++
  //   }
  // },

  remove(state, item) {
    const record = state.items.find(i => i._id === item._id)

    if (record.orderQuantity > 1) {
      record.orderQuantity--
    } else {
      const index = state.items.findIndex(i => i._id === item._id)
      state.items.splice(index, 1)
    }

  },
  emptyList(state) {
    state.items = []

  },


}
//Getters

export const getters = {
  items: state => {
    return state.items
  },
  price: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.pvTtc * item.orderQuantity,

      0
    )
  },
  //   subTotal: (state) => {  
  //     return  state.items.forEach(item =>{
  //       let total = 0 
  //       // console.log(item.orderQuantity)
  //       // console.log(item.price)
  //       total += item.price * item.orderQuantity 
  //        console.log(total)
  //       return total
  //     })

  // },

  cartTotal(getters) {
    return getters.items.reduce((total, item) => total + item.pvTtc * item.orderQuantity, 0)
  },
  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.orderQuantity,
      0
    )
  },

}