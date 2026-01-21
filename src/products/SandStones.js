import React from 'react'
import MapProduct from '../utils/MapProducts'
import marblesData from './data/MarblesData'

export default function SandStones() {
  return (
    <div className="border-2 rounded-lg border-dashed pb-1 mb-2 mt-1">
      <h1 className='text-3xl font-bold text-center py-2'>Sand Stones</h1>
      <MapProduct ArrayData={marblesData} />
    </div>
)
}
