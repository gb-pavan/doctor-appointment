'use client';

import { TimeSlot } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

interface SlotPickerProps {
  slots: TimeSlot[];
  selectedSlot: string | null;
  onSlotSelect: (slotId: string) => void;
}

export function SlotPicker({ slots, selectedSlot, onSlotSelect }: SlotPickerProps) {
  // Group slots by date
  const slotsByDate = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, TimeSlot[]>);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const availableSlots = slots.filter(slot => slot.available);

  if (availableSlots.length === 0) {
    return (
      <div className="text-center py-8">
        <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-muted-foreground mb-2">No Available Slots</h3>
        <p className="text-muted-foreground">Please check back later or contact the office directly.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span className="text-sm">Select your preferred time slot</span>
      </div>
      
      {Object.entries(slotsByDate).map(([date, dateSlots]) => {
        const availableDateSlots = dateSlots.filter(slot => slot.available);
        
        if (availableDateSlots.length === 0) return null;
        
        return (
          <div key={date} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h4 className="font-medium text-foreground">{formatDate(date)}</h4>
              <Badge variant="secondary" className="text-xs">
                {availableDateSlots.length} available
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {availableDateSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={selectedSlot === slot.id ? "default" : "outline"}
                  onClick={() => onSlotSelect(slot.id)}
                  className={`transition-all duration-200 ${
                    selectedSlot === slot.id 
                      ? 'ring-2 ring-primary ring-offset-2 shadow-md transform scale-105' 
                      : 'hover:shadow-md hover:scale-105'
                  }`}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}