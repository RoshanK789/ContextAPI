import React, { useContext } from 'react';
import { mycontext } from '../App';

const Cart = () => {
    const[data,setData]=useContext(mycontext);
    const totalprice=data.reduce((total,data)=>total+data.price*(data.quantity||1),0);
    const totalquantity=data.reduce((total,data)=>total+(data.quantity || 1),0);
    const Inc=(id,quantity)=>
        {
            setData(curr=>
                {
                    return curr.map((element)=>
                    {
                        if(element.id===id)
                            {
                                if(element.quantity>=element.stock)
                                    {
                                        alert("Stock quantity is 0");
                                    }
                                    else{
                                        return{...element,quantity:(element.quantity+1 ||quantity+1)}
                                    }
                                
                            }
                            return element
                    })
                }
            )
        }
        const Dec=(id,quantity)=>
            {
                if(quantity>1)
                    {
                        setData(curr=>
                            {
                                return curr.map((element)=>
                                {
                                    if(element.id===id)
                                        {
                                            return{...element,quantity:(element.quantity-1 ||quantity-1)}
                                        }
                                        return element
                                })
                            }
                        )
                    }
                
            }
    const removeproduct=(ele)=>
        {
            setData((item)=>item.filter((element,index)=>element.id!==ele.id))
        }
    return (
        <div>
            <h2 className='text-center head p-3'>Carty</h2>
            {data.map((ele,index)=>
            {
                return(
                    <div key={index}>
                        <div className='container'>
                            <div className='row border my-3'>
                                <div className='col-lg-3 '>
                                    {ele.images.map((e,i)=>
                                    {
                                        return(
                                            <div key={i}>
                                                <img className='center' src={e} />
                                            </div>
                                        )

                                        
                                    })}
                                </div>
                                <div className='col-lg-5  '>
                                    <h4 className='px-5 pt-3 '>{ele.title}</h4>
                                    <p className='px-5 text-muted'><b>{ele.category}</b></p>
                                    <p className='px-5'>{ele.description}</p>
                                </div>
                                <div className='col-lg-2 '>
                                    <div className='align'>
                                        <button className="border mx-lg-2 text-center mx-auto"  onClick={()=>Dec(ele.id,ele.quantity ||1 )} id="btn">-</button>{ele.quantity||1}<button id="btn" className="border mx-lg-2 mx-auto"onClick={()=>Inc(ele.id,ele.quantity ||1 )} >+</button>
                                        {/*<button id="btn" className="border mx-2"onClick={()=>Inc(ele.id,ele.quantity ||1 )} >+</button>{ele.quantity||1}<button className="border mx-2"  onClick={()=>Dec(ele.id,ele.quantity ||1 )} id="btn">-</button>*/}
                                    </div>
                                    <div>
                                       <p className='text-center my-3 border'>Stocks :{(ele.stock)-(ele.quantity||1)}</p>
                                        <p className='my-lg-3 text-center'><b>Price : {ele.price}*{ele.quantity||1 } = {ele.price*ele.quantity || ele.price}</b></p>
                                    </div>
                                    
                                    
                                </div>
                                <div className='col-lg-2 d-flex '>
                                <button className="btn align-content-center" id="Remove" onClick={()=>removeproduct(ele)}><i class="ri-shopping-cart-fill"></i>Remove</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
                
            })}
            <div className='container  my-3 ss p-3'>
            <div className='row'>
                
                <table>
                    <tbody>
                        <tr>
                            <td colspan="5" className='border-bottom' >
                                Total Quantity : 
                            </td>
                            <td className='border-bottom' >
                                {totalquantity}
                            </td>
                        </tr>
                        <tr>
                            <td  colspan="5" className='border-bottom'>
                                Sub Total :
                            </td>
                            <td className='border-bottom' >
                            {totalprice}
                            </td>
                        </tr>
                        <tr>
                            <td  colspan="5" className='border-bottom'>
                                Shipping Fee : 
                            </td>
                            <td className='border-bottom' >
                            Free
                            </td>
                        </tr>
                        <tr>
                            <td  colspan="5" className='border-bottom'>
                                Total Price : 
                            </td>
                            <td className='border-bottom' >
                            {totalprice}
                            </td>
                        </tr>

                    </tbody>
                </table>
                </div>
           </div>
            </div>

        
    );
};

export default Cart;