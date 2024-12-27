export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="w-full relative">{children}</section>;
}
