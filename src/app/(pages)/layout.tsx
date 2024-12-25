import { SideBar } from "../components/__organism";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full">
      <section className="w-full h-full min-h-screen  grid grid-cols-1 lg:grid-cols-[20.83%_1fr]">
        <div className="max-h-[52px] md:max-h-[74px]  lg:w-full lg:min-h-full h-screen  bg-[#201F24] lg:rounded-t-xl lg:rounded-tl-none lg:rounded-r-3xl order-last lg:order-none">
          <SideBar />
        </div>
        {children}
      </section>
    </section>
  );
}
