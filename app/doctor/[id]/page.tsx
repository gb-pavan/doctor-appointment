import { notFound } from 'next/navigation';
import { doctors } from '@/lib/data';
import { DoctorProfile } from './DoctorProfile';

interface DoctorPageProps {
  params: {
    id: string;
  };
}

export default function DoctorPage({ params }: DoctorPageProps) {
  const doctor = doctors.find(d => d.id === params.id);

  if (!doctor) {
    notFound();
  }

  return <DoctorProfile doctor={doctor} />;
}