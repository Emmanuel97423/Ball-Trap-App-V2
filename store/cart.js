


//State
export const state = () => ({
  items: [],
  orderQuantity: ""
})
//Mutations
export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  add(state, item) {

    const record = state.items.find(i => i._id === item._id)
    console.log('record:', record)

    if (!record) {
      state.items.push({
        orderQuantity: state.orderQuantity,
        ...item,
      })

    }
    else if (record.quantity < record.orderQuantity) {
      console.log('Stock insuffisant')

    }
    else {
      record.orderQuantity += state.orderQuantity
    };


  },
  // inc(state, item) {
  //   console.log(item)
  //   const record = state.items.find(i => i._id === item._id)
  //   record.orderQuantity = item.orderQuantity

  // },
  orderQuantity(state, orderQuantity) {
    console.log('orderQuantity:', orderQuantity)
    state.orderQuantity = orderQuantity
  },

  addToCartByComponent(state, item) {
    const record = state.items.find(i => i._id === item._id)

    if (!record) {
      state.items.push({
        orderQuantity: 1,

        ...item
      })
    } else {
      record.orderQuantity++
    }
  },

  remove(state, item) {
    const record = state.items.find(i => i._id === item._id)
    console.log('record:', record)

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
      (accumulator, item) => accumulator + item.price * item.orderQuantity,
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
    return getters.items.reduce((total, item) => total + item.price * item.orderQuantity, 0)
  },
  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.orderQuantity,
      0
    )
  },

}