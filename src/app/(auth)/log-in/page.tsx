// import { Header, logInSection } from "@/app/components";
// import LogInSection from "@/app/components/_molecules/logInSection/LogInSection";
// import React from "react";

// export default function page() {
//   return (
//     <div className="min-h-screen px-[4.26%] md:px-[13.54%] lg:p-[20px] bg-[#F2F3F7]">
//       <Header />
//       <LogInSection />
//     </div>
//   );
// }




import { Header, LogInSection } from "@/app/components/__organism";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <LogInSection />
    </>
  );
}
