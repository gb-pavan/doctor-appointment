'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Doctor } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface BookingWidgetProps {
  doctor: Doctor;
}

export function BookingWidget({ doctor }: BookingWidgetProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM',
    '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM',
    '2:30 PM', '3:00 PM', '3:30 PM'
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(''); // Reset selected slot when date changes
    setIsCalendarOpen(false);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedSlot) {
      setIsBooked(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsBooked(false);
        setSelectedDate(undefined);
        setSelectedSlot('');
      }, 3000);
    }
  };

  if (isBooked) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Successfully Booked!</h3>
              <p className="text-sm text-muted-foreground">
                Your appointment has been confirmed for {selectedDate && format(selectedDate, 'PPP')} at {selectedSlot}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Book an Appointment</CardTitle>
        <p className="text-sm text-muted-foreground">Step 1: Select Date & Time</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Date</label>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, 'M/d/yyyy') : 'Select Date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Time Selection - Only show if date is selected */}
        {selectedDate && (
          <div className="space-y-3">
            <label className="text-sm font-medium">Select Time</label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={selectedSlot === slot ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => handleSlotSelect(slot)}
                >
                  {slot}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Fee */}
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Consultation Fee:</span>
            <span className="font-bold">$120.00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => {
              setSelectedDate(undefined);
              setSelectedSlot('');
            }}
          >
            Cancel
          </Button>
          <Button 
            className="flex-1"
            disabled={!selectedDate || !selectedSlot}
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}