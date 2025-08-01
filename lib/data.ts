import { Doctor } from '@/types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    bio: 'Experienced cardiologist with over 15 years of practice. Specializes in preventive cardiology and heart disease management.',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Available',
    rating: 4.9,
    experience: 15,
    availableSlots: [
      { id: '1', time: '09:00 AM', date: '2025-01-15', available: true },
      { id: '2', time: '10:30 AM', date: '2025-01-15', available: true },
      { id: '3', time: '02:00 PM', date: '2025-01-15', available: false },
      { id: '4', time: '03:30 PM', date: '2025-01-15', available: true },
      { id: '5', time: '09:00 AM', date: '2025-01-16', available: true },
      { id: '6', time: '11:00 AM', date: '2025-01-16', available: true },
    ]
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Dermatologist',
    bio: 'Board-certified dermatologist focusing on skin cancer prevention, cosmetic procedures, and general dermatology.',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Available',
    rating: 4.8,
    experience: 12,
    availableSlots: [
      { id: '7', time: '08:30 AM', date: '2025-01-15', available: true },
      { id: '8', time: '10:00 AM', date: '2025-01-15', available: true },
      { id: '9', time: '01:30 PM', date: '2025-01-15', available: true },
      { id: '10', time: '04:00 PM', date: '2025-01-15', available: false },
    ]
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Pediatrician',
    bio: 'Caring pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence.',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Busy',
    rating: 4.9,
    experience: 8,
    availableSlots: [
      { id: '11', time: '09:30 AM', date: '2025-01-16', available: true },
      { id: '12', time: '11:30 AM', date: '2025-01-16', available: true },
      { id: '13', time: '02:30 PM', date: '2025-01-16', available: true },
    ]
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialization: 'Neurologist',
    bio: 'Specialized neurologist with expertise in treating neurological disorders, migraines, and cognitive health.',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Available',
    rating: 4.7,
    experience: 20,
    availableSlots: [
      { id: '14', time: '10:00 AM', date: '2025-01-15', available: true },
      { id: '15', time: '01:00 PM', date: '2025-01-15', available: true },
      { id: '16', time: '03:00 PM', date: '2025-01-15', available: true },
      { id: '17', time: '09:00 AM', date: '2025-01-17', available: true },
    ]
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialization: 'Orthopedic Surgeon',
    bio: 'Expert orthopedic surgeon specializing in joint replacement, sports medicine, and trauma surgery.',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Offline',
    rating: 4.8,
    experience: 18,
    availableSlots: [
      { id: '18', time: '08:00 AM', date: '2025-01-18', available: true },
      { id: '19', time: '10:30 AM', date: '2025-01-18', available: true },
      { id: '20', time: '02:00 PM', date: '2025-01-18', available: true },
    ]
  },
  {
    id: '6',
    name: 'Dr. David Martinez',
    specialization: 'General Practitioner',
    bio: 'Experienced family medicine physician providing comprehensive primary care for patients of all ages.',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: 'Available',
    rating: 4.6,
    experience: 10,
    availableSlots: [
      { id: '21', time: '09:00 AM', date: '2025-01-15', available: true },
      { id: '22', time: '11:00 AM', date: '2025-01-15', available: true },
      { id: '23', time: '02:30 PM', date: '2025-01-15', available: true },
      { id: '24', time: '04:30 PM', date: '2025-01-15', available: true },
    ]
  }
];