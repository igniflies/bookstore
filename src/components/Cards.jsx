import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-4'>
    <div className="card bg-base-100 py-3 w-92 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex  justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" cursor-pointer px-2 py-1 rounded-full badge badge-outline hover:bg-pink-500 duraion-200 hover:text-white ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards