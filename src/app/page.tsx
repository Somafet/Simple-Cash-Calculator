import CashInput from './components/CashInput'
import HeroHeader from './components/HeroHeader'
import { formatter } from './utils/number.utils';

type CashInputProps = {
  searchParams: {
    P20000?: string;
    P10000?: string;
    P5000?: string;
    P2000?: string;
    P1000?: string;
    P500?: string;
    P200?: string;
    P100?: string;
    P50?: string;
    P20?: string;
    P10?: string;
    P5?: string;
  }
}

export default function Home({ searchParams: { P20000 = "0", P10000 = "0", P5000 = "0", P2000 = "0", P1000 = "0", P500 = "0", P200 = "0", P100 = "0", P50 = "0", P20 = "0", P10 = "0", P5 = "0" } }: CashInputProps) {
  
  const totalSum = 20000 * parseInt(P20000) + 10000 * parseInt(P10000) + 5000 * parseInt(P5000) + 2000 * parseInt(P2000) + 1000 * parseInt(P1000) + 500 * parseInt(P500) + 200 * parseInt(P200) + 100 * parseInt(P100) + 50 * parseInt(P50) + 20 * parseInt(P20) + 10 * parseInt(P10) + 5 * parseInt(P5);

  const billSum = 20000 * parseInt(P20000) + 10000 * parseInt(P10000) + 5000 * parseInt(P5000) + 2000 * parseInt(P2000) + 1000 * parseInt(P1000) + 500 * parseInt(P500);

  const coinSum = 200 * parseInt(P200) + 100 * parseInt(P100) + 50 * parseInt(P50) + 20 * parseInt(P20) + 10 * parseInt(P10) + 5 * parseInt(P5);

  return (
    <main className="flex min-h-screen px-12 flex-col md:p-24 lg:px-8 py-12">
      <HeroHeader />
      <p className="max-w-7xl text-base font-semibold leading-6 text-gray-900 dark:text-white py-4">Teljes Összeg: {formatter.format(totalSum)}</p>
      <div className="isolate grid max-w-xl grid-cols-1 xs:grid-cols-2 gap-8 sm:max-w-2xl md:max-w-4xl xl:mx-0 xl:max-w-none">
        <div className="rounded-3xl ring-1 ring-gray-200">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Papír pénz</h3>
          </div>
          <div className="py-4 px-4 space-y-6">
            <p className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Összesen: {formatter.format(billSum)}</p>
            <CashInput denomination={20000} count={P20000} />
            <CashInput denomination={10000} count={P10000} />
            <CashInput denomination={5000} count={P5000} />
            <CashInput denomination={2000} count={P2000} />
            <CashInput denomination={1000} count={P1000} />
            <CashInput denomination={500} count={P500} />
          </div>
        </div>
        <div className="rounded-3xl ring-1 ring-gray-200">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Fém pénz</h3>
          </div>
          <div className="py-4 px-4 space-y-6">
            <p className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Összesen: {formatter.format(coinSum)}</p>
            <CashInput denomination={200} count={P200} />
            <CashInput denomination={100} count={P100} />
            <CashInput denomination={50} count={P50} />
            <CashInput denomination={20} count={P20} />
            <CashInput denomination={10} count={P10} />
            <CashInput denomination={5}  count={P5} />
          </div>
        </div>
        <p className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Teljes Összeg: {formatter.format(totalSum)}</p>
      </div>
    </main>
  )
}
