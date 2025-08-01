import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserX, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <UserX className="h-16 w-16 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Doctor Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            The doctor you're looking for doesn't exist or may have been removed.
          </p>
          <Link href="/" className="block">
            <Button className="w-full flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Doctors</span>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}