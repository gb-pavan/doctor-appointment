import { DoctorCardSkeleton } from '@/components/DoctorCardSkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="w-32 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse" />
          <div className="w-64 h-4 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <DoctorCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}