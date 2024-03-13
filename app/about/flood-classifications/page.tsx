import Menu from "@/components/Menu";

export default function FloodClassifications() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      <h1 className="mt-3 text-2xl font-bold">Flood Classifications</h1>
      <p className="mt-3 text-lg text-gray-600">The Bureau uses a three tiered classification scheme that defines flooding as minor, moderate or major at key river height stations. Each classification is defined by the water level that causes certain impacts upstream and downstream of the station. These levels have been determined based on standard descriptions of flood effects (see below), historical data and relevant local information. The classifications are revised from time to time by the Bureau&apos;s partner agencies and affected communities.</p>
      <h2 className="mt-3 text-xl font-bold">Minor flooding</h2>
      <p className="mt-3 text-lg text-gray-600">Causes inconvenience. Low-lying areas next to water courses are inundated. Minor roads may be closed and low-level bridges submerged. In urban areas inundation may affect some backyards and buildings below the floor level as well as bicycle and pedestrian paths. In rural areas removal of stock and equipment may be required.</p>
      <h2 className="mt-3 text-xl font-bold">Moderate flooding</h2>
      <p className="mt-3 text-lg text-gray-600">In addition to the above, the area of inundation is more substantial. Main traffic routes may be affected. Some buildings may be affected above the floor level. Evacuation of flood affected areas may be required. In rural areas removal of stock is required.</p>
      <h2 className="mt-3 text-xl font-bold">Major flooding</h2>
      <p className="mt-3 text-lg text-gray-600">In addition to the above, extensive rural areas and/or urban areas are inundated. Many buildings may be affected above the floor level. Properties and towns are likely to be isolated and major rail and traffic routes closed. Evacuation of flood affected areas may be required. Utility services may be impacted.</p>
      <h2 className="mt-3 text-xl font-bold">Reporting or alert level</h2>
      <p className="mt-3 text-lg text-gray-600">Water level rises to this level may cause the isolation of stock in very low-lying areas. Typically below the minor flood class level, this is the level at which a river alert is issued (where available).</p>
      <h2 className="mt-3 text-xl font-bold">Observed River Height</h2>
      <p className="mt-3 text-lg text-gray-600">Depth of water (in metres) at a river height measuring gauge located along the river. In most cases, a zero reading is the lowest water level that is reached during dry conditions. In many tidal areas, as well as a few inland areas, river levels are expressed in metres above mean sea level or Australian Height Datum (AHD).</p>
      <h2 className="mt-3 text-xl font-bold">Peak River Height</h2>
      <p className="mt-3 text-lg text-gray-600">Highest river height (in metres) observed during a flood event at the specified site on the river.</p>
      <h2 className="mt-3 text-xl font-bold">Predicted River Height</h2>
      <p className="mt-3 text-lg text-gray-600">Height (in metres) to which the river is predicted to rise at the river gauge referred to in the warning. The actual depth of flood water will vary across the floodplain. Knowledge of past flood events, as well as estimates of flood levels from flood studies, are used by local Councils, emergency services and landowners to determine which areas are likely to be flooded from the predicted river height. The accuracy of these predictions will depend on a number of factors, including the type of flood forecasting model and its input data. Predicted river heights are subject to forecasting error and are regularly updated as more information becomes available during a flood event.</p>
    </main>
  );
}
