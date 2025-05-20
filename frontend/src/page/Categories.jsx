// import React from "react";

// // Podcast category component for students
// const Categories = () => {
//   return (
//     <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
//         Discover Podcasts for Students
//       </h1>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
//         {/* Knowledge Category */}
//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
//           <img
//             src="https://th.bing.com/th/id/OIP.rs2H4n-79X4kefxNh23QegHaE1?w=246&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
           
//             alt="Study Tips"
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-2xl font-semibold">Knowledge & Learning</h2>
//           <p className="text-gray-200 mt-2">
//             Get ahead in your studies with podcasts on effective study techniques, academic tips, and more!
//           </p>
//         </div>

//         {/* Relaxation Category */}
//         <div className="bg-green-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
//           <img
//             src="https://play-lh.googleusercontent.com/kW30Uphu57n8zRIpq2drjWq38xUn-Dg_IKQ638OW4_L_PXRvjdrw_bvRdH2IEqMcQG4"            alt="Relaxation"
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-2xl font-semibold">Relaxation & Chill</h2>
//           <p className="text-gray-200 mt-2">
//             Unwind after a long day with podcasts designed to help you relax, meditate, and recharge.
//           </p>
//         </div>

//         {/* Motivation Category */}
//         <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
//           <img
//             src="https://th.bing.com/th/id/OIP.z01NsJ8x-xVExxy_4FoZCgHaEM?w=312&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
//             alt="Motivation"
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-2xl font-semibold">Motivation & Inspiration</h2>
//           <p className="text-gray-200 mt-2">
//             Get motivated with podcasts that provide encouragement, goal-setting tips, and life hacks.
//           </p>
//         </div>

//         {/* Mental Health Category */}
//         <div className="bg-purple-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
//           <img
//             src="https://th.bing.com/th/id/OIP.s4DV8nqjcu4Qid9B1S-NEgHaGl?w=200&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
//             alt="Mental Health"
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-2xl font-semibold">Mental Health & Well-being</h2>
//           <p className="text-gray-200 mt-2">
//             Learn how to manage stress, cope with pressure, and stay mentally healthy during your academic journey.
//           </p>
//         </div>

//         {/* Additional Category: Student Life */}
//         <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
//           <img
//             src="https://th.bing.com/th/id/OIP.UeYgxVzaMGOvDoi5ZYC9dwHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
//             alt="Student Life"
//             className="w-full h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-2xl font-semibold">Student Life</h2>
//           <p className="text-gray-200 mt-2">
//             Explore podcasts about student experiences, college tips, and building friendships.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Categories;

import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Discover Podcasts for Students
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Knowledge Category */}
        <Link to="/knowledge-learning"> {/* Link added here */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="https://th.bing.com/th/id/OIP.rs2H4n-79X4kefxNh23QegHaE1?w=246&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="Study Tips"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Knowledge & Learning</h2>
            <p className="text-gray-200 mt-2">
              Get ahead in your studies with podcasts on effective study techniques, academic tips, and more!
            </p>
          </div>
        </Link>

        {/* Relaxation Category */}
        <Link to="/relax-chill"> {/* Link added here */}
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="https://play-lh.googleusercontent.com/kW30Uphu57n8zRIpq2drjWq38xUn-Dg_IKQ638OW4_L_PXRvjdrw_bvRdH2IEqMcQG4"
              alt="Relaxation"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Relaxation & Chill</h2>
            <p className="text-gray-200 mt-2">
              Unwind after a long day with podcasts designed to help you relax, meditate, and recharge.
            </p>
          </div>
        </Link>

        {/* Motivation Category */}
        <Link to="/motivation-inspiration"> {/* Link added here */}
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="https://th.bing.com/th/id/OIP.z01NsJ8x-xVExxy_4FoZCgHaEM?w=312&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="Motivation"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Motivation & Inspiration</h2>
            <p className="text-gray-200 mt-2">
              Get motivated with podcasts that provide encouragement, goal-setting tips, and life hacks.
            </p>
          </div>
        </Link>

        {/* Mental Health Category */}
        <Link to="/mental-health-wellbeing"> {/* Link added here */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="https://th.bing.com/th/id/OIP.s4DV8nqjcu4Qid9B1S-NEgHaGl?w=200&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="Mental Health"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Mental Health & Well-being</h2>
            <p className="text-gray-200 mt-2">
              Learn how to manage stress, cope with pressure, and stay mentally healthy during your academic journey.
            </p>
          </div>
        </Link>

        {/* Student Life Category */}
        <Link to="/student-life"> {/* Link added here */}
          <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <img
              src="https://th.bing.com/th/id/OIP.UeYgxVzaMGOvDoi5ZYC9dwHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="Student Life"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Student Life</h2>
            <p className="text-gray-200 mt-2">
              Explore podcasts about student experiences, college tips, and building friendships.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Categories;

