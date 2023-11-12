import getData from "@/lib/api";
import { ScrollArea } from "@/components/commonUi/scrollArea";
export default async function CurrencyList() {
    const data = await getData("latest");
    
    return (
        <main className="py-4">
            <section className="py-2 px-24 flex flex-col items-center text-center gap-8">
                <h2>{data.info}</h2>
                <ScrollArea className="h-[480px] w-full ">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Currency</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Rate</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {Object.entries(data.rates).map(([currency, rate]) => (
                                <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{currency}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{String(rate)} &nbsp; Kyats</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ScrollArea>
            </section>
        </main>
  )
}
