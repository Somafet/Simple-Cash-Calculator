import Link from 'next/link';
import CashInput from './components/CashInput'
import HeroHeader from './components/HeroHeader'
import TotalComponent from './components/TotalComponent';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl flex min-h-screen px-12 flex-col md:p-24 lg:px-8 py-12">
      <HeroHeader />
      <div className="flex items-center justify-between">
        <TotalComponent type="all" label="Teljes összeg:" className="items-center flex max-w-7xl text-base font-semibold leading-6 text-gray-900 dark:text-white py-4" />
        <Link
          href="/">
          <button
            type="button"
            className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 h-fit"
          >
            Alaphelyzet
          </button>
        </Link>
      </div>
      <div className="isolate grid max-w-xl grid-cols-1 xs:grid-cols-2 gap-8 sm:max-w-2xl md:max-w-4xl xl:mx-0 xl:max-w-none">
        <div className="rounded-3xl ring-2 ring-indigo-400 hover:ring-4">
          <div className="border-indigo-400 border-b-2 px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Papír pénz</h3>
          </div>
          <div className="py-4 px-4 space-y-6">
            <TotalComponent type="bill" label="Összesen:" className="items-center flex text-base font-semibold leading-6 text-gray-900 dark:text-white" />
            <CashInput denomination={20000} />
            <CashInput denomination={10000} />
            <CashInput denomination={5000} />
            <CashInput denomination={2000} />
            <CashInput denomination={1000} />
            <CashInput denomination={500} />
          </div>
        </div>
        <div className="rounded-3xl ring-2 ring-indigo-400 hover:ring-4">
          <div className="border-indigo-400 border-b-2 px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Fém pénz</h3>
          </div>
          <div className="py-4 px-4 space-y-6">
            <TotalComponent type="coin" label="Összesen:" className="items-center flex text-base font-semibold leading-6 text-gray-900 dark:text-white" />
            <CashInput denomination={200} />
            <CashInput denomination={100} />
            <CashInput denomination={50} />
            <CashInput denomination={20} />
            <CashInput denomination={10} />
            <CashInput denomination={5} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <TotalComponent type="all" label="Teljes összeg:" className="items-center flex max-w-7xl text-base font-semibold leading-6 text-gray-900 dark:text-white py-4" />
        <Link
          scroll={false}
          href="/">
          <button
            type="button"
            className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 h-fit"
          >
            Alaphelyzet
          </button>
        </Link>
      </div>
    </main>
  )
}
