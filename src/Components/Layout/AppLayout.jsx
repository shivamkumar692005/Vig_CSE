import { Outlet } from "react-router-dom";
import { Headers } from "../UI/Headers";
import  Footer  from "../UI/Footer";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};


// import { Outlet } from "react-router-dom";
// import { Headers } from "../UI/Headers";
// import  Footer  from "../UI/Footer";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import { useEffect } from "react";


// export const AppLayout = () => {
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("[data-scroll-container]"),
//       smooth: true,
//     });

//     return () => {
//       scroll.destroy();
//     };
//   }, []);
//   return (
//     <>
//       <Headers />
//       <div data-scroll-container>
//       <Outlet />

//       </div>
//       <Footer />
//     </>
//   );
// };
