import Image from 'next/image';
import React from 'react';
import houseImg from '../../public/Assets/house-1.jpg';

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
        >
          {houseImg && (
            <Image
              src={houseImg}
              alt=""
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h5 className="text-lg font-bold">Title</h5>
            <p className="text-gray-600">description</p>
          </div>
        </div>

        <div
          className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
        >
          {houseImg && (
            <Image
              src={houseImg}
              alt=""
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h5 className="text-lg font-bold">Title</h5>
            <p className="text-gray-600">description</p>
          </div>
        </div>

        <div
          className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
        >
          {houseImg && (
            <Image
              src={houseImg}
              alt=""
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h5 className="text-lg font-bold">Title</h5>
            <p className="text-gray-600">description</p>
          </div>
        </div>

        <div
          className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
        >
          {houseImg && (
            <Image
              src={houseImg}
              alt=""
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h5 className="text-lg font-bold">Title</h5>
            <p className="text-gray-600">description</p>
          </div>
        </div>

        <div
          className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
        >
          {houseImg && (
            <Image
              src={houseImg}
              alt=""
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h5 className="text-lg font-bold">Title</h5>
            <p className="text-gray-600">description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;