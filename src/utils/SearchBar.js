import { useCallback, useRef, useState } from 'react';
import GranitesData from '../products/data/GranitesData';
import MarblesData from '../products/data/MarblesData';
import ItalianMarblesData from '../products/data/ItalianMarblesData';
import OnyxStonesData from '../products/data/OnyxStonesData';
import SandStonesData from '../products/data/SandStonesData';
import TilesData from '../products/data/TilesData';
import VietnamMarblesData from '../products/data/VietnamMarblesData';
import MapProduct from './MapProducts';

export default function SearchBar({ children }) {
  const [filteredPages, setFilteredPages] = useState(null);
  const searchRef = useRef('');

  const handleSearch = useCallback(() => {
    const searchTerm = searchRef.current.value.trim().toLowerCase();
    if (!searchTerm) {
      setFilteredPages(null);
      return;
    }

    const searchWords = searchTerm.split(/\s+/);

    const matchingGranites = GranitesData.filter((granite) =>
      searchWords.every(word => granite.name.toLowerCase().includes(word))
    );

    const matchingMarbles = MarblesData.filter((marble) =>
      searchWords.every(word => marble.name.toLowerCase().includes(word))
    );

    const matchingItalianMarblesData = ItalianMarblesData.filter((marble) =>
      searchWords.every(word => marble.name.toLowerCase().includes(word))
    );

    const matchingOnyxStonesData = OnyxStonesData.filter((stone) =>
      searchWords.every(word => stone.name.toLowerCase().includes(word))
    );

    const matchingSandStonesData = SandStonesData.filter((stone) =>
      searchWords.every(word => stone.name.toLowerCase().includes(word))
    );

    const matchingTilesData = TilesData.filter((tile) =>
      searchWords.every(word => tile.name.toLowerCase().includes(word))
    );

    const matchingVietnamMarblesData = VietnamMarblesData.filter((marble) =>
      searchWords.every(word => marble.name.toLowerCase().includes(word))
    );

    const matchedResults = [
      matchingGranites,
      matchingMarbles,
      matchingItalianMarblesData,
      matchingOnyxStonesData,
      matchingSandStonesData,
      matchingTilesData,
      matchingVietnamMarblesData,
    ].filter(data => data.length > 0);

    if (matchedResults.length > 0) {
      const matchedPages = matchedResults.map((result, index) => {
        let categoryName = '';

        // Determine the category name based on the filtered data
        if (result === matchingGranites) {
          categoryName = 'Granites';
        } else if (result === matchingMarbles) {
          categoryName = 'Marbles';
        } else if (result === matchingItalianMarblesData) {
          categoryName = 'Italian Marbles';
        } else if (result === matchingOnyxStonesData) {
          categoryName = 'Onyx Stones';
        } else if (result === matchingSandStonesData) {
          categoryName = 'Sand Stones';
        } else if (result === matchingTilesData) {
          categoryName = 'Tiles';
        } else if (result === matchingVietnamMarblesData) {
          categoryName = 'Vietnam Marbles';
        }

        return (
          <div key={index} className='border-2 border-gray-200 border-dashed rounded-lg mt-3'>
            <header className='text-center text-3xl font-bold mb-2'>{`Results For: ${categoryName}`}</header>
            <MapProduct ArrayData={result} />
          </div>
        );
      });

      setFilteredPages([{ page: matchedPages }]);
    } else {
      setFilteredPages([
        {
          page: (
            <div className='border-2 border-gray-200 border-dashed rounded-lg mt-3 flex justify-center'>
              <header className='text-center text-3xl font-bold'>No Results Found!</header>
            </div>
          )
        }
      ]);
    }
  }, []);

  return (
    <>
      <div className="relative mt-[4.8rem]">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-gray-900 rounded-lg"
          placeholder="Search Granites, Marbles..."
          ref={searchRef}
          onChange={handleSearch}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-gray-900 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {filteredPages === null ? (
        children
      ) : (
        filteredPages && (
          filteredPages.map((result, index) => (
            <div key={index}>{result.page}</div>
          ))
        )
      )}
    </>
  );
}
