"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { formatter } from "../utils/number.utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

type CashInputProps = {
  denomination: number;
}

const CashInput = ({ denomination }: CashInputProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const count = useMemo(() => {
    const count = parseInt(searchParams.get("P" + denomination) ?? "0");
    if (isNaN(count)) {
      return 0;
    }
    return count;
  }, [denomination, searchParams]);

  const newSearchParams: Record<string, string> = useMemo(() => {
    const tempRecord: Record<string, string> = {};
    for (const [key, value] of searchParams) {
      if (key !== "P" + denomination) {
        tempRecord[key] = value;
      }
    }
    return tempRecord;
  }, [denomination, searchParams]);

  const pathName = usePathname();

  const addToCountLink = useMemo(() => {
    newSearchParams["P" + denomination] = (count + 1).toString();
    return {
      pathname: pathName,
      query: new URLSearchParams(newSearchParams).toString(),
    }
  }, [count, denomination, newSearchParams, pathName]);

  const takeFromCountLink = useMemo(() => {
    newSearchParams["P" + denomination] = (count - 1).toString();
    return {
      pathname: pathName,
      query: new URLSearchParams(newSearchParams).toString(),
    }
  }, [count, denomination, newSearchParams, pathName]);

  return <div>
    <label htmlFor={`cash-input-${denomination}`} className="block text-sm font-semibold leading-6">
      {formatter.format(denomination)}
    </label>
    <div className="flex">
      <span className="isolate inline-flex rounded-md shadow-sm flex-3">
        <Link
          scroll={false}
          href={takeFromCountLink}
          className="relative inline-flex items-center rounded-l-md bg-white dark:bg-slate-600 px-2 py-2 text-gray-400 dark:text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-slate-500 focus:z-10"
        >
          <span className="sr-only">Elvevés</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        <input
          value={count}
          onChange={(e) => {
            let value = parseInt(e.target.value);
            
            if (isNaN(value)) {
              value = 0;
            }

            newSearchParams["P" + denomination] = (value).toString();

            const url = `${pathName}?${new URLSearchParams(newSearchParams).toString()}`

            router.push(url, { scroll: false });
          }}
          type="number"
          name={`cash-input-${denomination}`}
          id={`cash-input-${denomination}`}
          className="block max-w-[50px] rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center sm:text-sm sm:leading-6 focus-visible:ring-0 focus-visible:outline-0"
          placeholder="2"
        />
        <Link
          scroll={false}
          href={addToCountLink}
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white dark:bg-slate-600 px-2 py-2 text-gray-400 dark:text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-slate-500 focus:z-10"
        >
          <span className="sr-only">Hozzáadás</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </Link>

      </span>
      <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white ml-3 flex-1 min-w-[70px]">
        {formatter.format(count * denomination)}
      </div>
    </div>
  </div>
}

export default CashInput
