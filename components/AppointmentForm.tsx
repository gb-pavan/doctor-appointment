'use client';

import { useState } from 'react';
import { Doctor, AppointmentBooking } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SlotPicker } from './SlotPicker';
import { CheckCircle, Calendar, User, Mail } from 'lucide-react';

interface AppointmentFormProps {
  doctor: Doctor;
  onSubmit?: (booking: AppointmentBooking) => void;
}

export function AppointmentForm({ doctor, onSubmit }: AppointmentFormProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !patientName || !email) return;

    setIsSubmitting(true);

    const selectedSlotData = doctor.availableSlots.find(slot => slot.id === selectedSlot);
    if (!selectedSlotData) return;

    const booking: AppointmentBooking = {
      doctorId: doctor.id,
      patientName,
      patientEmail: email,
      date: selectedSlotData.date,
      timeSlot: selectedSlotData.time,
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    onSubmit?.(booking);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Appointment Confirmed!</h3>
            <p className="text-muted-foreground">
              Your appointment with {doctor.name} has been successfully booked.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left space-y-2">
              <div className="flex items-center space-x-2 text-green-800">
                <User className="h-4 w-4" />
                <span className="font-medium">Patient: {patientName}</span>
              </div>
              <div className="flex items-center space-x-2 text-green-800">
                <Calendar className="h-4 w-4" />
                <span>
                  {doctor.availableSlots.find(slot => slot.id === selectedSlot)?.date} at{' '}
                  {doctor.availableSlots.find(slot => slot.id === selectedSlot)?.time}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-green-800">
                <Mail className="h-4 w-4" />
                <span>Confirmation sent to: {email}</span>
              </div>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setSelectedSlot(null);
                setPatientName('');
                setEmail('');
              }}
              variant="outline"
              className="mt-4"
            >
              Book Another Appointment
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span>Book Appointment with {doctor.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <SlotPicker
          slots={doctor.availableSlots}
          selectedSlot={selectedSlot}
          onSlotSelect={setSelectedSlot}
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="patientName">Full Name</Label>
              <Input
                id="patientName"
                type="text"
                placeholder="Enter your full name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={!selectedSlot || !patientName || !email || isSubmitting}
            className="w-full py-3 text-base transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Booking Appointment...</span>
              </div>
            ) : (
              'Confirm Appointment'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}