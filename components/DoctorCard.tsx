'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Doctor } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, User } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const getAvailabilityColor = (status: Doctor['availability']) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500';
      case 'Busy':
        return 'bg-yellow-500';
      case 'Offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getAvailabilityBadgeColor = (status: Doctor['availability']) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Busy':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Offline':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const availableSlots = doctor.availableSlots.filter(slot => slot.available).length;

  return (
    <Link href={`/doctor/${doctor.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-border/50 hover:border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-20 h-20 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div 
                className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${getAvailabilityColor(doctor.availability)}`}
                title={doctor.availability}
              />
            </div>

            <div className="space-y-2 w-full">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {doctor.name}
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                {doctor.specialization}
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{doctor.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{doctor.experience}y exp</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-full">
              <Badge 
                variant="secondary" 
                className={`justify-center py-1 px-3 ${getAvailabilityBadgeColor(doctor.availability)}`}
              >
                {doctor.availability}
              </Badge>
              
              {doctor.availability !== 'Offline' && (
                <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{availableSlots} slots available</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}