import DayCell from "./DayCell";
import { activities } from "@/lib/mockData";
import { formatDateKey } from "@/lib/date";

interface Props {
  days: Date[];
}

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function CalendarGrid({ days }: Props) {
  return (
    <div className="grid grid-cols-7 text-end text-sm font-semibold text-gray-600 mb-2 pt-4">

      {weekDays.map(day => (
        <div key={day} className="text-center bg-blue-600 text-white">{day}</div>
      ))}

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
