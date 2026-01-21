import { getMonthDays } from "@/lib/date";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
  const now = new Date();
  const days = getMonthDays(now.getFullYear(), now.getMonth());

  return (
    <section className="p-4">
      <h1 className="text-xl font-semibold mb-4">
        {now.toLocaleString("default", { month: "long", year: "numeric" })}
      </h1>

      <CalendarGrid days={days} />
    </section>
  );
}
