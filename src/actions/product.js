import * as types from '../constants/types'

export const getProducts = () =>
  dispatch =>
    fetch(`products.json`)
      .then(function(response) {
      return response.json();
    }).then(function(response){
        response.products.map((row, index)=>{
            row['isCheck']=  false;
            row['obj']={
            'price':row.price,
            'colors':row.colors,
            'condition':row.condition
            }
        })
        console.log('row',response);
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.products
        })
    })

export const compare = product => ({
    type: types.COMPARE_PRODUCT,
    product
  })

//  response => {
//        dispatch({
//          type: types.FETCH_PRODUCTS,
//          payload: response.products
//        })
//      })
