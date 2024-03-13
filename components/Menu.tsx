import Link from 'next/link';

export default function Menu() {
    return (
        <div className="fixed top-0 right-0 flex gap-4 p-8 lg:static lg:p-0">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/station">Stations</Link>
        </div>
    );
  }
  