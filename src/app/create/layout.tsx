export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full justify-center">{children}</main>;
}
