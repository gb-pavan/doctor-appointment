export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  bio: string;
  image: string;
  availability: 'Available' | 'Busy' | 'Offline';
  rating: number;
  experience: number;
  availableSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
}

export interface AppointmentBooking {
  doctorId: string;
  patientName: string;
  patientEmail: string;
  date: string;
  timeSlot: string;
}