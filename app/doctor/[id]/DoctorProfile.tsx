'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Doctor } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookingWidget } from '@/components/BookingWidget';
import { 
  ArrowLeft, 
  Star, 
  User, 
  Calendar, 
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  CheckCircle
} from 'lucide-react';

interface DoctorProfileProps {
  doctor: Doctor;
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {

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
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Busy':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Offline':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const availableSlots = doctor.availableSlots.filter(slot => slot.available).length;


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2 hover:bg-white/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Doctors</span>
            </Button>
          </Link>
        </div>

        {/* Doctor Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary/10 to-teal-500/10 p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div 
                    className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white ${getAvailabilityColor(doctor.availability)}`}
                    title={doctor.availability}
                  />
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {doctor.name}
                    </h1>
                    <p className="text-xl text-primary font-semibold mb-4">
                      {doctor.specialization}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-muted-foreground">(4.8/5.0)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{doctor.experience} years experience</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{availableSlots} slots available</span>
                    </div>
                  </div>

                  <Badge 
                    variant="secondary" 
                    className={`text-sm px-4 py-2 ${getAvailabilityBadgeColor(doctor.availability)}`}
                  >
                    {doctor.availability}
                  </Badge>
                </div>

                <div className="flex flex-col space-y-4">
                  {/* Office Hours Card */}
                  <Card className="w-64">
                    <CardContent className="p-4">
                      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Office Hours</span>
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="font-medium">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-medium">9:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-medium text-red-600">Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>About Dr. {doctor.name.split(' ')[1]}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {doctor.bio}
                </p>
              </CardContent>
            </Card>

            {/* Qualifications */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Qualifications & Expertise</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Board Certified</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">{doctor.experience}+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium">Specialist in {doctor.specialization}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                    <span className="text-sm font-medium">Top Rated Provider</span>
                  </div>
                </div>
              </CardContent>
            </Card>

           
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Medical Center, Suite 301</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">contact@medicalcenter.com</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}

             {/* Booking Widget */}
            {doctor.availability !== 'Offline' && (
              <div className="flex justify-center">
                <div className="w-full">
                  <BookingWidget doctor={doctor} />
                </div>
              </div>
            )}


            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{doctor.rating}</div>
                    <div className="text-xs text-blue-600">Patient Rating</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{availableSlots}</div>
                    <div className="text-xs text-green-600">Available Slots</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{doctor.experience}+</div>
                    <div className="text-xs text-purple-600">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}