'use client';

import { useState, useMemo } from 'react';
import { doctors } from '@/lib/data';
import { DoctorCard } from '@/components/DoctorCard';
import { SearchInput } from '@/components/SearchInput';
import { Stethoscope, Users, Calendar, Heart } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = useMemo(() => {
    if (!searchQuery) return doctors;
    
    return doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const stats = [
    { icon: Users, label: 'Expert Doctors', value: '50+' },
    { icon: Calendar, label: 'Appointments', value: '1000+' },
    { icon: Heart, label: 'Happy Patients', value: '5000+' },
    { icon: Stethoscope, label: 'Specializations', value: '15+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Stethoscope className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Find Your Perfect
            <span className="text-primary block">Healthcare Provider</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Book appointments with trusted healthcare professionals in your area. 
            Quality care, convenient scheduling, all in one place.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-12">
          <SearchInput
            onSearch={setSearchQuery}
            placeholder="Search doctors by name or specialization..."
          />
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {searchQuery ? 'Search Results' : 'Available Doctors'}
            </h2>
            <p className="text-muted-foreground">
              {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Stethoscope className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No doctors found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse all available doctors.
            </p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Help Finding the Right Doctor?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our healthcare coordinators are here to help you find the perfect match for your needs.
            Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-555-0123"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call (555) 0123
            </a>
            <a
              href="mailto:support@healthcare.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}