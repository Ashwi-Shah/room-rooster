// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const DetailPage = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setProperty(data);
//         } else {
//           console.error("Failed to fetch property details");
//         }
//       } catch (error) {
//         console.error("Error fetching property details:", error);
//       }
//     };

//     fetchProperty();
//   }, [id]);

//   if (!property) {
//     return <div className="p-4 text-center text-red-600">Property not found</div>;
//   }

//   return (
//     <div className="pt-[125px] px-4">
//       <div className="max-w-4xl mx-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-[#596E79] mb-7">
//         <div className="relative mb-4">
//           <h1 className="text-2xl font-bold text-[#F0ECE4]">₹{property.price} /month</h1>
//           <h2 className="text-xl font-semibold text-[#F0ECE4] absolute top-0 right-0">{property.name}</h2>
//           <p className="text-[#FOECE3]">{property.location}</p>
//         </div>
//         <div className="flex gap-4">
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {property.images && property.images.length > 0 ? (
//               property.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Property image ${index + 1}`}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               ))
//             ) : (
//               <img
//                 src="default-image-url.jpg"
//                 alt="Default property"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             )}
//           </div>
//           <div className="flex-2 flex flex-col justify-between">
//             <div className="mb-4">
//               <div className="flex justify-between mb-2 bg-gray-200 p-2 rounded-lg">
//                 <div className="flex items-center">
//                   <i className="fas fa-ruler-combined mr-2"></i>
//                   <p><strong>Carpet Area:</strong> {property.sqft} Sqft</p>
//                 </div>
//                 <div className="flex items-center">
//                   <i className="fas fa-bed mr-2"></i>
//                   <p><strong>Bed:</strong> {property.bed}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <i className="fas fa-bath mr-2"></i>
//                   <p><strong>Bath:</strong> {property.bath}</p>
//                 </div>
//               </div>
//               <p className="text-[#F0ECE4] my-3">
//                 <i className="fa-solid fa-phone mr-2"></i><strong>Contact:</strong> {property.phoneNumber}
//               </p>
//               <p className="text-[#F0ECE4] my-3">
//                 <i className="fas fa-user mr-2"></i><strong>Owner:</strong> {property.ownername}
//               </p>
//               <p className="text-[#F0ECE4] my-3">
//                 <i className="fas fa-couch mr-2"></i><strong>Furnished Status:</strong> {property.FurnishedStatus}
//               </p>
//               <p className="text-[#F0ECE4] my-3">
//                 <i className="fas fa-home mr-2"></i><strong>Preferred For:</strong> {property.PreferredFor}
//               </p>
//               <p className="text-[#F0ECE4] my-3">
//                 <i className="fas fa-building mr-2"></i><strong>Age of Construction:</strong> {property.ageofconstruction}
//               </p>
//               <p className="text-[#F0ECE4] my-3">
//                 <i className="fas fa-info-circle mr-2"></i><strong>Additional Info:</strong> {property.info}
//               </p>
//               <p className="text-[#F0ECE4] my-3">
//                 <i className="fas fa-info-circle mr-2"></i><strong>Address:</strong> {property.description}
//               </p>
//             </div>
//             <div className="flex justify-end gap-2">
//               <button className="bg-[#F0ECE4] text-[#596E79] py-2 px-4 rounded hover:bg-gray-200">Contact Owner</button>
//               <button className="bg-[#F0ECE4] text-[#596E79] py-2 px-4 rounded hover:bg-gray-200">Make an Offer</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
        } else {
          console.error("Failed to fetch property details");
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div className="p-4 text-center text-red-600">Property not found</div>;
  }

  return (
    <div className="pt-[125px] px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{property.name}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">Price: ₹{property.price} /month</p>
          <p className="text-lg">Location: {property.location}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Phone Number: {property.phoneNumber}</p>
          <p className="text-lg">Square Footage: {property.sqft} sqft</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Beds: {property.bed}</p>
          <p className="text-lg">Baths: {property.bath}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Property Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Owner Name: {property.ownername}</p>
          <p className="text-lg">Furnished Status: {property.FurnishedStatus}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Preferred for: {property.Perferredfor}</p>
          <p className="text-lg">Age of Construction: {property.ageofconstruction}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Additional Info: {property.info}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Availability: {property.Availability}</p>
          <p className="text-lg">Deposit: ₹{property.deposit}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
