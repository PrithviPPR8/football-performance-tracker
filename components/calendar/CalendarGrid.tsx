import DayCell from "./DayCell";
import { activities } from "@/lib/mockData";
import { formatDateKey } from "@/lib/date";

interface Props {
  days: Date[];
}

export default function CalendarGrid({ days }: Props) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map(date => {
        const key = formatDateKey(date);
        const dayActivities = activities.filter(a => a.date === key);

        return (
          <DayCell
            key={key}
            day={date.getDate()}
            activities={dayActivities}
          />
        );
      })}
    </div>
  );
}
