export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-charcoal-200 border-t-primary-600 animate-spin" />
        </div>
        <p className="text-charcoal-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
