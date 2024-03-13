import Link from 'next/link';
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      <h1 className="mt-3 text-2xl font-bold">The Data</h1>
      <p className="mt-3 text-lg text-gray-600">The rainfall and river data shown in these products includes real-time operational data from automated telemetry systems and has not been quality controlled.</p>
      <h2 className="mt-3 text-2xl font-bold">Water Height Charts</h2>
      <p className="mt-3 text-lg text-gray-600">Water height charts provide a graphical view of recent observations at a station. The data has been collected in real time by the station reporting the data on its own by radio transmission. The graph brings together all the data received over the last 4-7 days (this varies according to how quick the river behaviour is). The data is extracted from the database and filtered to remove some bad data. This filtering of bad data is not comprehensive.</p>
      <p className="mt-3 text-lg text-gray-600">The watercourse station pages also show some details of the station at the top of the page. They also show, where available the flood class levels. These are explained in detail in <Link href="/flood-classifications">Flood Classifications</Link>. These levels provide a general understanding of the impact of expected flooding and the flood risk faced.</p>
      <h2 className="mt-3 text-2xl font-bold">River Height Series</h2>
      <p className="mt-3 text-lg text-gray-600">The River height series table provides a tabular view of recent observations at a station. The data has been collected in real time by the station reporting the data on its own by radio transmission. This plot brings together all the data received over the last 4-7 days (this varies according to how quick the river behaviour is). The data is extracted from the database and filtered to remove some bad data. This filtering of bad data is not comprehensive.</p>
      <p className="mt-3 text-lg text-gray-600">The watercourse station pages also show some details of the station at the top of the page. They also show, where available the flood class levels. These are explained in detail in <Link href="/flood-classifications">Flood Classifications</Link>. These levels provide a general understanding of the impact of expected flooding and the flood risk faced.</p>
      <h2 className="mt-3 text-2xl font-bold">River Height API</h2>
      <p className="mt-3 text-lg text-gray-600">The River height api provides a json response of recent observations at a station. The data has been collected in real time by the station reporting the data on its own by radio transmission. This plot brings together all the data received over the last 4-7 days (this varies according to how quick the river behaviour is). The data is extracted from the database and filtered to remove some bad data. This filtering of bad data is not comprehensive.</p>
      <p className="mt-3 text-lg text-gray-600">The watercourse station pages also show some details of the station at the top of the page. They also show, where available the flood class levels. These are explained in detail in <Link href="/flood-classifications">Flood Classifications</Link>. These levels provide a general understanding of the impact of expected flooding and the flood risk faced.</p>
      <h2 className="mt-3 text-2xl font-bold">Latest River Heights</h2>
      <p className="mt-3 text-lg text-gray-600">The Latest River Heights is a table of river height observations for selected locations. Each table shows the data for a collection of river basins. The States and the Northern Territory are divided up to several such collections for easy viewing. They show the latest available river height observation and the time the observation was made.</p>
      <p className="mt-3 text-lg text-gray-600">River heights are measured at selected locations throughout Australia. This information will help understand how a river is rising and falling, and which sites are exceeding flood threshold levels or other key heights such as a bridge or a causeway (culvert). Especially during floods, this gives some understanding of how high the water is above such crossings. The Flood Class is a classification of impacts from possible flooding. These are explained in detail in Flood Classifications. These levels provide a general understanding of the impact of expected flooding and the flood risk faced. Generally, Flood Warnings are issued when the river heights exceed the minor flood level.</p>
      <h2 className="mt-3 text-2xl font-bold">River Height Data Collection</h2>
      <p className="mt-3 text-lg text-gray-600">River height data collection has been going on for over a hundred years. River height data are obtained from different types of observing stations around Australia. They include manual reading of staff gauge, automatic recording stations which communicate to a base either via radio or the telephone lines. This data is used for a variety of purposes, including flood warning, water resources and also for recreational use.</p>
    </main>
  );
}
