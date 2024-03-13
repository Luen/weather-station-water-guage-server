import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      <h1 className="mt-3 text-2xl font-bold">Station Name: Crystal</h1>
    </main>
  );
}
