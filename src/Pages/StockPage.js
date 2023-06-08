import React, { useState } from 'react'
import AddStockpage from './AddStockpage';
import CategoryPage from '../Stocks/CategoryPage';
function StockPage({ setStocksPayment, selectedItemsStock, setSelectedItemsStock, totalPriceStock, setTotalPriceStock })
{
    const [view, setView] = useState(false);

    const handleView = () =>
    {
        setView(!view);
    }

    return (
        <div className='w-full h-full py-[6rem] px-5'>

            {view ? <AddStockpage handleView={handleView} /> :
                <CategoryPage
                    handleView={handleView}
                    setStocksPayment={setStocksPayment}
                    selectedItemsStock={selectedItemsStock} setSelectedItemsStock={setSelectedItemsStock}
                    totalPriceStock={totalPriceStock}
                    setTotalPriceStock={setTotalPriceStock}
                />}


        </div>
    )
}

export default StockPage
