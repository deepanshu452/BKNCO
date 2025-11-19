// const teamCard = ({ photo, name, designation }) => {
//   return (
//     <div className="flex flex-col items-center p-4">
//       {/* Photo */}
//       <div className="relative w-48 h-52 sm:w-60 sm:h-60 overflow-hidden rounded-[40px] shadow-lg mb-4">
//         <img
//           src={photo}
//           alt={name}
//           className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
//         />
//       </div>

//       {/* Name */}
//       <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 text-center">
//         {name}
//       </h3>

//       {/* Designation */}
//       <p className="text-base sm:text-lg text-gray-600 text-center">
//         {designation}
//       </p>
//     </div>
//   );
// };

// export default teamCard;

const TeamCard = ({ photo, name, designation, alt }) => {
  return (
    // group enables group-hover for children
    <article className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
      {/* image block: majority of the card */}
      <div className="overflow-hidden">
        {/* <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 transform transition-transform duration-350 group-hover:-translate-y-3"> */}
        <div className="relative w-full h-72 sm:h-80 md:h-96 transform transition-transform duration-300 group-hover:-translate-y-3">

          <img
            src={photo}
            alt={alt ?? name}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* content */}
      <div className="px-6 pb-6 pt-2 text-left">
        <h3 className="text-xl md:text-2xl font-serif transition-colors duration-200 group-hover:text-brand-blue">
          {name}
        </h3>

        <p className="text-sm md:text-base text-gray-600 mt-1 transition-colors duration-200 group-hover:text-brand-blue/70">
          {designation}
        </p>
      </div>
    </article>
  );
};

export default TeamCard;
