import React, { useState } from 'react'
import AddStockpage from './AddLogistiPage';
import CategoryPage from '../Logistics/CategoryPage';
function LogisticsPage({ setLogisticPayment, selectedItemsLogistic, setSelectedItemsLogistic, totalPriceLogistic, setTotalPriceLogistic })
{
    const [view, setView] = useState(false);

    const handleView = () =>
    {
        setView(!view);
    }

    return (
        <div className='w-full h-full py-[6rem] px-5'>

            {view ? <AddStockpage handleView={handleView} /> : <CategoryPage handleView={handleView} setLogisticPayment={setLogisticPayment} selectedItemsLogistic={selectedItemsLogistic}
                setSelectedItemsLogistic={setSelectedItemsLogistic}
                totalPriceLogistic={totalPriceLogistic}
                setTotalPriceLogistic={setTotalPriceLogistic} />}


        </div>
    )
}

export default LogisticsPage
