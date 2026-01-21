import MapProduct from '../utils/MapProducts';
import graniteData from './data/GranitesData';

export default function Granites() {
  return (
      <div className="border-2 w-full rounded-lg border-dashed pb-1 mb-2 mt-1">
        <h1 className='text-3xl w-full font-bold text-center py-2'>Granites</h1>
        <MapProduct ArrayData={graniteData} />
      </div>
  )
}
