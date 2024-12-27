// import type { Metadata } from "next";
// import "./globals.css";
// import Context from "./context/Context";
// import { Public_Sans, Barlow, Work_Sans } from "next/font/google";

// const ps = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });
// const barlow = Barlow({ subsets: ["latin"], weight: ["400"] });
// const ws = Work_Sans({ subsets: ["latin"], weight: ["700"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${ps.className} antialiased`}>
//         <Context>{children}</Context>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import "./globals.css";
// import Context from "./context/Context";
// import { Public_Sans, Barlow, Work_Sans } from "next/font/google";
// import { SideBar } from "./components/__organism";

// const ps = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });
// const barlow = Barlow({ subsets: ["latin"], weight: ["400"] });
// const ws = Work_Sans({ subsets: ["latin"], weight: ["700"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${ps.className} antialiased`}>
//         <section className="w-full h-full min-h-screen  grid grid-cols-1 lg:grid-cols-[20.83%_1fr]">
//           {/* <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none">
//             <SideBar />
//           </div> */}

//           <Context>{children}</Context>
//         </section>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import Context from "./context/Context";
import { Public_Sans } from "next/font/google";
import { SideBar } from "./components/__organism";
// import { SideBar } from "./components/__organism";

const ps = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });
// const barlow = Barlow({ subsets: ["latin"], weight: ["400"] });
// const ws = Work_Sans({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ps.className} antialiased`}>
        <section className="w-full h-full">
          <section className="w-full h-full min-h-screen  grid grid-cols-1 lg:grid-cols-[20.83%_1fr]">
            <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none">
              <SideBar />
            </div>

            <Context>{children}</Context>
          </section>
        </section>
      </body>
    </html>
  );
}
