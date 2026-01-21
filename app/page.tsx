import Calendar from "@/components/calendar/Calendar";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center py-6">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3xl">
        <Calendar />
      </div>
    </main>
  );
}

