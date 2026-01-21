import { Activity } from "@/types/activity";

interface DayCellProps {
  day: number;
  activities: Activity[];
}

export default function DayCell({ day, activities }: DayCellProps) {
  const hasMatch = activities.some(a => a.type === "match");
  const hasPractice = activities.some(a => a.type === "practice");

  const goals = activities
    .filter(a => a.type === "match")
    .reduce((sum, a) => sum + (a.goals ?? 0), 0);

  return (
    <div className="relative border border-gray-300 rounded-md p-2 h-24 bg-white hover:bg-gray-50 transition cursor-pointer">
      {/* Day number */}
      <div className="text-sm font-semibold text-gray-800">
        {day}
      </div>

      {/* Dots */}
      <div className="flex gap-1 mt-1">
        {hasMatch && <span className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
        {hasPractice && <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />}
      </div>

      {/* Goals */}
      {goals > 0 && (
        <div className="absolute bottom-2 left-2 text-xs font-medium text-blue-700">
          {goals} ⚽
        </div>
      )}
    </div>
  );
}
