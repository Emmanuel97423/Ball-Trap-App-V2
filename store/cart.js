


//State
export const state = () => ({
  items: []
})
//Mutations
export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  add(state, item) {
   
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

  addToCartByComponent(state, item) {
        const record = state.items.find(i => i._id === item._id)
    console.log(item)
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
 
  cartTotal( getters){
    return getters.items.reduce((total, item)=> total + item.price * item.orderQuantity, 0)
  },
  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.orderQuantity,
      0
    )
  }
}