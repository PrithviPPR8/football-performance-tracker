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
    <div className="relative border rounded-md p-1 h-20">
      {/* Day number */}
      <div className="text-sm font-medium">{day}</div>

      {/* Dots */}
      <div className="flex gap-1 mt-1">
        {hasMatch && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
        {hasPractice && <span className="w-2 h-2 bg-green-500 rounded-full" />}
      </div>

      {/* Goals */}
      {goals > 0 && (
        <div className="absolute bottom-1 right-1 text-xs font-semibold text-blue-600">
          {goals} ⚽
        </div>
      )}
    </div>
  );
}
