import MapProduct from "../utils/MapProducts";
import marblesData from "./data/MarblesData";

export default function OnyxStones() {
  return (
    <div className="border-2 rounded-lg border-dashed pb-1 mb-2 mt-1">
      <h1 className='text-3xl font-bold text-center py-2'>Onyx Stones</h1>
      <MapProduct ArrayData={marblesData} />
    </div>
  )
}
