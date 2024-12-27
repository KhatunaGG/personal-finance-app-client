// export default function PagesLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return <section className="w-full relative">{children}</section>;
// }



import { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Context from "../context/Context"; // Ensure Context is used here as well

const ps = Public_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Authentication Pages",
  description: "Authentication pages, e.g., log-in, sign-up",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${ps.className} antialiased`}>
      <div className="w-full relative bg-green-400">{children}</div>
      </body>
    </html>
  );
}
