import React from 'react';

export default function Model({ message }) {

  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center bg-blur p-2 sm:ml-64 mt mt-[4.8rem]">
          <dialog className="bg-white rounded-lg shadow-md w-5/6 md:w-1/2" open>
            <div className="font-semibold px-6 mb-2 pt-4">
              {message ? message : 'Added To Cart!'}
            </div>
            <div className="p-1">
              <div className="flex justify-end">
                <button
                  className="cancel text-black border border-black px-2 py-1rounded mr-4 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button className="confirm bg-black text-white border border-white px-4 py-1 rounded hover:bg-blue-500 hover:border-blue-500">
                  Confirm
                </button>
              </div>
            </div>
          </dialog>
        </div>
    </>
  );
}
