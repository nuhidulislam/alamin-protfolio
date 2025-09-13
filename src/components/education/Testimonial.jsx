import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    id: 1,
    name: "Scott Ross",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    feedback:
      "The UX/UI design services from Innovexa Solution transformed our website's user experience. Our customers are delighted with the new interface, and it's reflected in our increased engagement metrics.",
  },
  {
    id: 2,
    name: "Kevin Strauser",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The team at Innovexa Solution was highly professional in delivering a flawless website with responsive design. Their continuous integration and deployment approach made updates and maintenance a breeze.",
  },
  {
    id: 3,
    name: "Teresa Morrison",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "I can't recommend Innovexa Solution enough. Their web development and backend development services streamlined our business operations, leading to increased efficiency and growth.",
  },
  {
    id: 4,
    name: "Eunice Spaulding",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    feedback:
      "Innovexa Solution's thorough requirement analysis set the foundation for our successful project. Their attention to detail and commitment to delivering on time and within budget were truly impressive.",
  },
  {
    id: 5,
    name: "Barry Harris",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    feedback:
      "Working with Innovexa Solution was a game-changer for our online presence. Their deployment process ensured a seamless transition, and we've seen a significant boost in our website's performance.",
  },
  {
    id: 6,
    name: "Walter Chavez",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    feedback:
      "Innovexa Solution exceeded our expectations with their web development expertise. Their attention to detail and dedication to our project ensured a seamless experience from start to finish.",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <section className="w-full text-secondary font-openSans">
        <div className="w-full text-center">
          <p className="text-primary font-semibold tracking-widest uppercase">
            Testimonial
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-4 text-secondary">
            What Clients Says?
          </h2>

          <p className="text-secondary max-w-2xl mx-auto mb-10">
            We take pride in delivering exceptional web solutions, and our
            clients' feedback reflects our commitment to excellence.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-bgsecondary/10 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300 text-center flex flex-col items-center h-full">
                <span className="text-4xl sm:text-5xl text-primary">
                  <FaQuoteLeft />
                </span>
                <p className="italic text-secondary my-4 text-sm sm:text-base">
                  {item.feedback}
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-primary object-cover"
                  />
                  <h4 className="mt-2 font-semibold text-secondary text-sm sm:text-base">
                    {item.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

// import { FaQuoteLeft } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Scott Ross",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//     feedback:
//       "The UX/UI design services from Innovexa Solution transformed our website's user experience. Our customers are delighted with the new interface, and it's reflected in our increased engagement metrics.",
//   },
//   {
//     id: 2,
//     name: "Kevin Strauser",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     feedback:
//       "The team at Innovexa Solution was highly professional in delivering a flawless website with responsive design. Their continuous integration and deployment approach made updates and maintenance a breeze.",
//   },
//   {
//     id: 3,
//     name: "Teresa Morrison",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//     feedback:
//       "I can't recommend Innovexa Solution enough. Their web development and backend development services streamlined our business operations, leading to increased efficiency and growth.",
//   },
//   {
//     id: 4,
//     name: "Eunice Spaulding",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//     feedback:
//       "Innovexa Solution's thorough requirement analysis set the foundation for our successful project. Their attention to detail and commitment to delivering on time and within budget were truly impressive.",
//   },
//   {
//     id: 5,
//     name: "Barry Harris",
//     image: "https://randomuser.me/api/portraits/men/70.jpg",
//     feedback:
//       "Working with Innovexa Solution was a game-changer for our online presence. Their deployment process ensured a seamless transition, and we've seen a significant boost in our website's performance.",
//   },
//   {
//     id: 6,
//     name: "Walter Chavez",
//     image: "https://randomuser.me/api/portraits/women/80.jpg",
//     feedback:
//       "Innovexa Solution exceeded our expectations with their web development expertise. Their attention to detail and dedication to our project ensured a seamless experience from start to finish.",
//   },
// ];

// export default function Testimonial() {
//   return (
//     <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl  mx-auto border-2 border-red-600">
//       <section className=" max-w-7xl mx-auto text-secondary font-openSans">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-primary font-semibold tracking-widest uppercase">
//             Testimonial
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-secondary">
//             What Clients Says?
//           </h2>

//           <p className="text-secondary max-w-2xl mx-auto mb-10">
//             We take pride in delivering exceptional web solutions, and our
//             clients' feedback reflects our commitment to excellence.
//           </p>
//         </div>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 1 },
//             1024: { slidesPerView: 2 },
//           }}
//         >
//           {testimonials.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className="bg-bgsecondary/10 border-2 border-green-600 rounded-2xl p-8 shadow-lg text-center flex flex-col items-center">
//                 <span className="text-6xl text-primary">
//                   <FaQuoteLeft />
//                 </span>
//                 <p className="italic text-secondary my-4">{item.feedback}</p>
//                 <div className="mt-6 flex flex-col items-center">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 rounded-full border-2 border-primary object-cover"
//                   />
//                   <h4 className="mt-2 font-semibold text-secondary">
//                     {item.name}
//                   </h4>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </div>
//   );
// }

// import { motion, useInView } from "framer-motion";
// import { useContext, useEffect, useRef } from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { fadeIn } from "../../motion/motions";
// import MenuContext from "../Menucontext";

// const testimonials = [
//   {
//     id: 1,
//     name: "Scott Ross",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//     feedback:
//       "The UX/UI design services from Innovexa Solution transformed our website's user experience. Our customers are delighted with the new interface, and it's reflected in our increased engagement metrics.",
//   },
//   {
//     id: 2,
//     name: "Kevin Strauser",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     feedback:
//       "The team at Innovexa Solution was highly professional in delivering a flawless website with responsive design. Their continuous integration and deployment approach made updates and maintenance a breeze.",
//   },
//   {
//     id: 3,
//     name: "Teresa Morrison",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//     feedback:
//       "I can't recommend Innovexa Solution enough. Their web development and backend development services streamlined our business operations, leading to increased efficiency and growth.",
//   },
//   {
//     id: 4,
//     name: "Eunice Spaulding",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//     feedback:
//       "Innovexa Solution's thorough requirement analysis set the foundation for our successful project. Their attention to detail and commitment to delivering on time and within budget were truly impressive.",
//   },
//   {
//     id: 5,
//     name: "Barry Harris",
//     image: "https://randomuser.me/api/portraits/men/70.jpg",
//     feedback:
//       "Working with Innovexa Solution was a game-changer for our online presence. Their deployment process ensured a seamless transition, and we've seen a significant boost in our website's performance.",
//   },
//   {
//     id: 6,
//     name: "Walter Chavez",
//     image: "https://randomuser.me/api/portraits/women/80.jpg",
//     feedback:
//       "Innovexa Solution exceeded our expectations with their web development expertise. Their attention to detail and dedication to our project ensured a seamless experience from start to finish.",
//   },
// ];

// export default function Testimonial() {
//   const { setActiveMenu } = useContext(MenuContext);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.5 });

//   useEffect(() => {
//     setActiveMenu("testimonial");
//   }, [isInView, setActiveMenu]);

//   return (
//     <div ref={ref} className="py-16 bg-[#1B3636]">
//       <motion.section
//         variants={fadeIn("up", "tween", 0.1, 0.5)}
//         initial="hidden"
//         whileInView="show"
//         className="max-w-7xl mx-auto px-4 text-secondary font-openSans"
//       >
//         {/* Header */}
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-primary font-semibold tracking-widest uppercase">
//             Testimonial
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-secondary">
//             What Clients Says?
//           </h2>
//           <div className="flex justify-center space-x-2 mb-6">
//             <div className="w-8 h-1 bg-secondary"></div>
//             <div className="w-8 h-1 bg-primary"></div>
//             <div className="w-8 h-1 bg-secondary"></div>
//             <div className="w-8 h-1 bg-primary"></div>
//             <div className="w-8 h-1 bg-secondary"></div>
//           </div>
//           <p className="text-secondary max-w-2xl mx-auto mb-10">
//             We take pride in delivering exceptional web solutions, and our
//             clients' feedback reflects our commitment to excellence.
//           </p>
//         </div>

//         {/* Swiper Testimonials */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1} // Default for mobile & small screens
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 }, // Mobile
//             768: { slidesPerView: 2 }, // Tablet
//             1024: { slidesPerView: 2 }, // Desktop
//           }}
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={item.id}>
//               <motion.div
//                 variants={fadeIn(
//                   index % 2 === 0 ? "left" : "right",
//                   "tween",
//                   0.3,
//                   0.5
//                 )}
//                 initial="hidden"
//                 whileInView="show"
//                 className="bg-bgsecondary/10 rounded-2xl p-8 shadow-lg text-center flex flex-col items-center"
//               >
//                 <span className="text-6xl text-primary">
//                   <FaQuoteLeft />
//                 </span>
//                 <p className="italic text-secondary my-4">{item.feedback}</p>
//                 <div className="mt-6 flex flex-col items-center">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 rounded-full border-2 border-primary object-cover"
//                   />
//                   <h4 className="mt-2 font-semibold text-secondary">
//                     {item.name}
//                   </h4>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.section>
//     </div>
//   );
// }

// import { motion, useInView } from "framer-motion";
// import { useContext, useEffect, useRef } from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { fadeIn } from "../../motion/motions";
// import MenuContext from "../Menucontext";

// const testimonials = [
//   {
//     id: 1,
//     name: "Scott Ross",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//     feedback:
//       "The UX/UI design services from Innovexa Solution transformed our website's user experience. Our customers are delighted with the new interface, and it's reflected in our increased engagement metrics.",
//   },
//   {
//     id: 2,
//     name: "Kevin Strauser",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     feedback:
//       "The team at Innovexa Solution was highly professional in delivering a flawless website with responsive design. Their continuous integration and deployment approach made updates and maintenance a breeze.",
//   },
//   {
//     id: 3,
//     name: "Teresa Morrison",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//     feedback:
//       "I can't recommend Innovexa Solution enough. Their web development and backend development services streamlined our business operations, leading to increased efficiency and growth.",
//   },
//   {
//     id: 4,
//     name: "Eunice Spaulding",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//     feedback:
//       "Innovexa Solution's thorough requirement analysis set the foundation for our successful project. Their attention to detail and commitment to delivering on time and within budget were truly impressive.",
//   },
//   {
//     id: 5,
//     name: "Barry Harris",
//     image: "https://randomuser.me/api/portraits/men/70.jpg",
//     feedback:
//       "Working with Innovexa Solution was a game-changer for our online presence. Their deployment process ensured a seamless transition, and we've seen a significant boost in our website's performance.",
//   },
//   {
//     id: 6,
//     name: "Walter Chavez",
//     image: "https://randomuser.me/api/portraits/women/80.jpg",
//     feedback:
//       "Innovexa Solution exceeded our expectations with their web development expertise. Their attention to detail and dedication to our project ensured a seamless experience from start to finish.",
//   },
// ];

// export default function Testimonial() {
//   const { setActiveMenu } = useContext(MenuContext);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.5 });

//   useEffect(() => {
//     setActiveMenu("testimonial");
//   }, [isInView, setActiveMenu]);

//   return (
//     <div ref={ref} className=" py-16">
//       <motion.section
//         variants={fadeIn("up", "tween", 0.1, 0.5)}
//         initial="hidden"
//         whileInView="show"
//         className="max-w-7xl mx-auto px-4 text-secondary font-openSans"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-primary font-semibold tracking-widest uppercase">
//             Testimonial
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-secondary">
//             What Clients Says?
//           </h2>
//           <div className="flex justify-center space-x-2 mb-6">
//             <div className="w-8 h-1 bg-secondary"></div>
//             <div className="w-8 h-1 bg-primary"></div>
//             <div className="w-8 h-1 bg-secondary"></div>
//             <div className="w-8 h-1 bg-primary"></div>
//             <div className="w-8 h-1 bg-secondary"></div>
//           </div>
//           <p className="text-secondary max-w-2xl mx-auto mb-10">
//             We take pride in delivering exceptional web solutions, and our
//             clients' feedback reflects our commitment to excellence.
//           </p>
//         </div>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 2 },
//           }}
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={item.id}>
//               <motion.div
//                 variants={fadeIn(
//                   index % 2 === 0 ? "left" : "right",
//                   "tween",
//                   0.3,
//                   0.5
//                 )}
//                 initial="hidden"
//                 whileInView="show"
//                 className="bg-bgsecondary/10 rounded-2xl p-8 shadow-lg text-center flex flex-col items-center"
//               >
//                 <span className="text-6xl text-primary">
//                   <FaQuoteLeft />
//                 </span>
//                 <p className="italic text-secondary my-4">{item.feedback}</p>
//                 <div className="mt-6 flex flex-col items-center">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 rounded-full border-2 border-primary object-cover"
//                   />
//                   <h4 className="mt-2 font-semibold text-secondary">
//                     {item.name}
//                   </h4>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.section>
//     </div>
//   );
// }
