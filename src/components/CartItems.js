import React from 'react'

const CartItems = ({data}) => {
    console.log(data)
  return (
    <div>
        {
            data.map((item) =>{
                return(
                    <div key={item?.id} >
                        <p>{item?.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CartItems