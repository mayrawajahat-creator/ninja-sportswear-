import AddDiscount from '@/Components/AddDiscount';
import DsicountsTable from '@/Components/DsicountsTable';
import DashboardPageHeader from '@/Components/DashboardPageHeader';
import DashboardSearch from '@/Components/DashboardSearch';
import React from 'react'

const DashboardDiscounts = () => {
  const discounts = [
    {
      id: "D1001",
      code: "SUMMER25",
      description: "25% off summer collection",
      status: "Active",
      createdAt: "2025-01-12",
      validUntil: "2025-08-31"
    }
  ];

  const breadData = [
    { name: 'Dashboard', href: '/Dashboard' },
    { name: "Discounts", href: `/Dashboard/Discounts` },
  ];

  return (
    <>
      <DashboardPageHeader breadData={breadData} heading={"Discounts"} />
      <div className='w-full bg-base-100 rounded-xl shadow-lg p-4 lg:p-6'>
        <div className="flex flex-row justify-between gap-3 mb-6">
          <div className="w-full md:w-1/2">
            <DashboardSearch placeholder="Search by Code" />
          </div>
          <div className="w-full md:w-auto flex justify-end">
            <AddDiscount />
          </div>
        </div>
        <DsicountsTable discounts={discounts} />
      </div>
    </>
  )
}

export default DashboardDiscounts;
