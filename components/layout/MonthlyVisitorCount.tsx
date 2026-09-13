"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MonthlyVisitorCount() {
  const pathname = usePathname();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (pathname.startsWith("/icl-admin-portal")) return;

    let active = true;
    void fetch("/api/visitors", { method: "POST", cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) return null;
        const body: unknown = await response.json();
        const value = (body as { count?: unknown }).count;
        return typeof value === "number" && Number.isSafeInteger(value) && value >= 0 ? value : null;
      })
      .then((value) => {
        if (active && value !== null) setCount(value);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, [pathname]);

  if (count === null) return null;

  return <p className="mt-2">{count.toLocaleString()} visitors this month</p>;
}
