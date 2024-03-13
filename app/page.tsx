import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Watercourse Station Sensor Data
        </p>
        <Menu />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://wanderstories.space"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="https://wanderstories.space/content/images/2022/12/Wanderstories-logo.png"
              alt="Wanderstories Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full text-center">

        <Link href="/flood-classifications">Flood Classifications</Link>
        <h1 className="text-3xl font-bold">Watercourse Data</h1>
        <p className="mt-3 text-lg text-gray-600">This website shows creeks and river data (temperature, humidity, pressure, and water height). The watercourse sensor data is a collection of river and creek heights in Queensland, Australia.</p>
        <h2 className="mt-3 text-2xl font-bold">WHY</h2>
        <p className="mt-3 text-lg text-gray-600">BOM does a pretty good job at providing all our weather data, such as rainfall, river height, and forecasts, however, it does not provide all watercourse data which leave us white water paddlers guessing.</p>
        <h2 className="mt-3 text-2xl font-bold">HOW</h2>
        <p className="mt-3 text-lg text-gray-600">We have install sensors on the creeks and rivers that BOM does not have gauges on. The data is collected directly from the watercourses every 15 minutes and updated on our servers 4 times a day. The data is collected from various sensors throughout Queensland and used for our recreational use. We also love data and the historical data also can provide valuable information.</p>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://localhost:3000/api/river-heights"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            API{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about realtime watercourse sensor data through our API.
          </p>
        </a>

        <a
          href="https://localhost:3000/river-heights"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            View{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            View our watercourse heights in pretty charts!
          </p>
        </a>

        <a
          href="https://localhost:3000/sensors"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sensors{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about how we collect data.
          </p>
        </a>

        <a
          href="https://github.com/Luen"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contribute{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Want to contribute to this project?
          </p>
        </a>
      </div>
    </main>
  );
}
