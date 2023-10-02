"use client";

import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { formatter } from "../utils/number.utils";
import { ClipboardDocumentIcon } from "@heroicons/react/20/solid";

type TotalType = "all" | "bill" | "coin";

type TotalComponentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLDivElement> & {
  type: TotalType;
  label: string;
}

const TotalComponent = ({type, label, ...props}: TotalComponentProps) => {
  const searchParams = useSearchParams();

  const value = useMemo(() => {
    const P20000 = parseInt(searchParams.get("P20000") ?? "0");
    const P10000 = parseInt(searchParams.get("P10000") ?? "0");
    const P5000 = parseInt(searchParams.get("P5000") ?? "0");
    const P2000 = parseInt(searchParams.get("P2000") ?? "0");
    const P1000 = parseInt(searchParams.get("P1000") ?? "0");
    const P500 = parseInt(searchParams.get("P500") ?? "0");
    const P200 = parseInt(searchParams.get("P200") ?? "0");
    const P100 = parseInt(searchParams.get("P100") ?? "0");
    const P50 = parseInt(searchParams.get("P50") ?? "0");
    const P20 = parseInt(searchParams.get("P20") ?? "0");
    const P10 = parseInt(searchParams.get("P10") ?? "0");
    const P5 = parseInt(searchParams.get("P5") ?? "0");

    switch (type) {
      case "all":
        return P20000 * 20000 + P10000 * 10000 + P5000 * 5000 + P2000 * 2000 + P1000 * 1000 + P500 * 500 + P200 * 200 + P100 * 100 + P50 * 50 + P20 * 20 + P10 * 10 + P5 * 5;
      case "bill":
        return P20000 * 20000 + P10000 * 10000 + P5000 * 5000 + P2000 * 2000 + P1000 * 1000 + P500 * 500;
      case "coin":
        return P200 * 200 + P100 * 100 + P50 * 50 + P20 * 20 + P10 * 10 + P5 * 5;
      default:
        return 0;
    }
  }, [searchParams, type]);

  const formattedValue = useMemo(() => formatter.format(value), [value]);

  return <div {...props}>
    <div className="mr-1">
      <p>{label}</p>
      <p>{formattedValue}</p>
    </div>
    <button
      onClick={() => navigator.clipboard.writeText(formattedValue)}
      type="button"
      className="rounded-full p-1 text-white shadow-sm hover:gray-100 dark:hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-fit w-fit"
      >
        <ClipboardDocumentIcon className="h-5 w-5" aria-hidden="true" />
      </button>
  </div>
}

export default TotalComponent;
