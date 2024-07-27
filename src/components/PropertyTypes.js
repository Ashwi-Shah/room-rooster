// // import React, { useEffect, useRef } from 'react';
// // import villaImg from '../assets/img/villa.png';
// // import apartmentImg from '../assets/img/house.png';
// // import flatImg from '../assets/img/flat.png';
// // import cottageImg from '../assets/img/cottage.png';
// // import 'tailwindcss/tailwind.css';

// // const PropertyTypes = () => {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add('animate-backInUp');
// //             // Clean up: remove the animation class after it completes
// //             entry.target.addEventListener('animationend', () => {
// //               entry.target.classList.remove('animate-backInUp');
// //             }, { once: true });
// //           }
// //         });
// //       },
// //       { threshold: 0.7 }
// //     );

// //     if (containerRef.current) {
// //       observer.observe(containerRef.current);
// //     }

// //     return () => {
// //       if (containerRef.current) {
// //         observer.unobserve(containerRef.current);
// //       }
// //     };
// //   }, []);

// //   const propertyTypes = [
// //     { name: 'Villa', img: villaImg, count: 123 },
// //     { name: 'Apartment', img: apartmentImg, count: 456 },
// //     { name: 'Flat', img: flatImg, count: 789 },
// //     { name: 'Cottage', img: cottageImg, count: 101 }
// //   ];

// //   return (
// //     <div className="property-type-container mx-auto px-0 py-8" ref={containerRef}>
// //       <div className="text-center mb-8">
// //         <h1 className="text-[#596E79] font-bold text-4xl mb-6 animate-backInUp">Property Types</h1>
// //         <p className="text-[#596E79] font-semibold text-lg mb-8 animate-backInUp">
// //           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
// //         </p>
// //       </div>
// //       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4">
// //         {propertyTypes.map((property, index) => (
// //           <div
// //             className="bg-[#e9e5db] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[275px]"
// //             key={index}
// //           >
// //             <div className="bg-[#F0ECE3] border border-dashed border-[#596E79] flex flex-col items-center p-6 rounded-lg min-h-[300px] flex-grow hover:bg-[#6e8895]">
// //               <div className="relative flex justify-center items-center w-full mb-4">
// //                 {/* Outer container with border */}
// //                 <div className="xl:w-32 xl:h-32 3xl:w-28 3xl:h-28 4xl:w-32 4xl:h-32 w-32 h-32 border border-dashed border-[#596E79] rounded-full flex items-center justify-center">
// //                   {/* Inner image container */}
// //                   <img className="w-20 h-20 xl:w-20 xl:h-20 3xl:w-20 3xl:h-20 4xl:w-20 4xl:h-20 object-cover" src={property.img} alt={`${property.name} icon`} />
// //                 </div>
// //               </div>
// //               <div className="flex flex-col justify-end flex-grow text-center">
// //                 <h6 className="text-[#596E79] font-bold font-custom-cursive text-2xl xl:text-2xl 3xl:text-2xl 4xl:text-2xl mb-2">{property.name}</h6>
// //                 <span className="text-[#596E79] font-custom-cursive text-lg xl:text-lg 4xl:text-lg">{property.count} Properties</span>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PropertyTypes;

// import React, { useEffect, useRef } from 'react';
// import villaImg from '../assets/img/villa.png';
// import apartmentImg from '../assets/img/house.png';
// import flatImg from '../assets/img/flat.png';
// import cottageImg from '../assets/img/cottage.png';
// import 'tailwindcss/tailwind.css';

// const PropertyTypes = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-backInUp');
//             // Clean up: remove the animation class after it completes
//             entry.target.addEventListener('animationend', () => {
//               entry.target.classList.remove('animate-backInUp');
//             }, { once: true });
//           }
//         });
//       },
//       { threshold: 0.7 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   const propertyTypes = [
//     { name: 'Villa', img: villaImg, count: 123 },
//     { name: 'Apartment', img: apartmentImg, count: 456 },
//     { name: 'Flat', img: flatImg, count: 789 },
//     { name: 'Cottage', img: cottageImg, count: 101 }
//   ];

//   return (
//     <div className="property-type-container mx-auto px-0 py-8" ref={containerRef}>
//       <div className="text-center mb-8">
//         <h1 className="text-[#596E79] font-bold text-4xl mb-6 animate-backInUp">Property Types</h1>
//         <p className="text-[#596E79] font-semibold text-lg mb-8 animate-backInUp">
//           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
//         </p>
//       </div>
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4">
//         {propertyTypes.map((property, index) => (
//           <div
//             className="bg-[#e9e5db] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[275px] group"
//             key={index}
//           >
//             <div className="bg-[#F0ECE3] flex flex-col items-center p-6 rounded-lg min-h-[300px] flex-grow group-hover:bg-[#81939c] hover:cursor-pointer">
//               <div className="relative flex justify-center items-center w-full mb-4">
//                 {/* Outer container with border */}
//                 <div className="xl:w-32 xl:h-32 3xl:w-28 3xl:h-28 4xl:w-32 4xl:h-32 w-32 h-32 border border-dashed border-[#596E79] rounded-full flex items-center justify-center bg-[#F0ECE3]">
//                   {/* Inner image container */}
//                   <img className="w-20 h-20 xl:w-20 xl:h-20 3xl:w-20 3xl:h-20 4xl:w-20 4xl:h-20 object-cover" src={property.img} alt={`${property.name} icon`} />
//                 </div>
//               </div>
//               <div className="flex flex-col justify-end flex-grow text-center group-hover:text-white">
//                 <h6 className="text-[#596E79] font-bold font-custom-cursive text-2xl xl:text-2xl 3xl:text-2xl 4xl:text-2xl mb-2 group-hover:text-white">{property.name}</h6>
//                 <span className="text-[#596E79] font-custom-cursive text-lg xl:text-lg 4xl:text-lg group-hover:text-white">{property.count} Properties</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyTypes;
import React, { useEffect, useRef } from 'react';
import villaImg from '../assets/img/villa.png';
import apartmentImg from '../assets/img/house.png';
import flatImg from '../assets/img/flat.png';
import cottageImg from '../assets/img/cottage.png';
import 'tailwindcss/tailwind.css';
import 'animate.css'; // Import animate.css


const PropertyTypes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__backInUp', 'animate__slow');
            // Clean up: remove the animation class after it completes
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove('animate__animated', 'animate__backInUp', 'animate__slow');
            }, { once: true });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const propertyTypes = [
    { name: 'Villa', img: villaImg, count: 123 },
    { name: 'Apartment', img: apartmentImg, count: 456 },
    { name: 'Flat', img: flatImg, count: 789 },
    { name: 'Cottage', img: cottageImg, count: 101 }
  ];

  return (
    <div className="property-type-container mx-auto px-0 py-8" ref={containerRef}>
      <div className="text-center mb-8">
        <h1 className="text-[#596E79] font-bold text-4xl mb-6 animate__animated animate__backInUp animate__slow">Property Types</h1>
        <p className="text-[#596E79] font-semibold text-lg mb-8 animate__animated animate__backInUp animate__slow">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4">
        {propertyTypes.map((property, index) => (
          <div
            className="bg-[#e9e5db] p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between min-h-[275px] group animate__animated animate__backInUp animate__slow"
            key={index}
          >
            <div className="bg-[#F0ECE3] flex flex-col items-center p-6 rounded-lg min-h-[300px] flex-grow group-hover:bg-[#81939c] hover:cursor-pointer">
              <div className="relative flex justify-center items-center w-full mb-4">
                {/* Outer container with border */}
                <div className="xl:w-32 xl:h-32 3xl:w-28 3xl:h-28 4xl:w-32 4xl:h-32 w-32 h-32 border border-dashed border-[#596E79] rounded-full flex items-center justify-center bg-[#F0ECE3]">
                  {/* Inner image container */}
                  <img className="w-20 h-20 xl:w-20 xl:h-20 3xl:w-20 3xl:h-20 4xl:w-20 4xl:h-20 object-cover" src={property.img} alt={`${property.name} icon`} />
                </div>
              </div>
              <div className="flex flex-col justify-end flex-grow text-center group-hover:text-white">
                <h6 className="text-[#596E79] font-bold font-custom-cursive text-2xl xl:text-2xl 3xl:text-2xl 4xl:text-2xl mb-2 group-hover:text-white">{property.name}</h6>
                <span className="text-[#596E79] font-custom-cursive text-lg xl:text-lg 4xl:text-lg group-hover:text-white">{property.count} Properties</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypes;
