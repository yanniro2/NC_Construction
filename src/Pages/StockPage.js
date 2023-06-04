import React, { useState } from 'react'
import AddStockpage from './AddStockpage';
import CategoryPage from '../Stocks/CategoryPage';
function StockPage()
{
    const [view, setView] = useState(false);

    const handleView = () =>
    {
        setView(!view);
    }

    return (
        <div className='w-full h-full py-[6rem] px-5'>

            {view ? <AddStockpage handleView={handleView} /> : <CategoryPage handleView={handleView} />}


        </div>
    )
}

export default StockPage
