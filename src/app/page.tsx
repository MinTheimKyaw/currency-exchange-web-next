
import getData from "@/lib/api";
import ExchangeCalculator from "@/components/exchangeCalculator";

export default async function Home() {
  const data = await getData('latest');
  return (
    <main className="py-4">
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Currency List</h1>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <ExchangeCalculator data={data} />
      </div>
    </main>
  )
}
