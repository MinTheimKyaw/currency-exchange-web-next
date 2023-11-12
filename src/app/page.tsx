
import getData from "@/lib/api";
import ExchangeCalculator from "@/components/exchangeCalculator";
import BarChart from "@/components/barChart";
import DonutChart from "@/components/donutChart";

export default async function Home() {
  const data = await getData('latest');
  return (
    <main className="py-4">
      <div className="flex gap-6 items-center justify-center">
        <ExchangeCalculator data={data} />
      </div>
      <div className="py-4 flex gap-6 items-center justify-center">
        <BarChart data={data}/>
      </div>
      <div className="py-4 flex gap-6 items-center justify-center">
        <DonutChart data={data}/>
      </div>
    </main>
  )
}
