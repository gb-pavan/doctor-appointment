import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function DoctorCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Skeleton className="w-20 h-20 rounded-full" />
          <div className="space-y-2 w-full">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-4 w-24 mx-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-3 w-28" />
        </div>
      </CardContent>
    </Card>
  );
}