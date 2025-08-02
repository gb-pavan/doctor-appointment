import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Appointment } from '@/lib/models/Appointment';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { doctorId, patientName, patientEmail, date, timeSlot } = body;
    console.log('Received appointment data:', { doctorId, patientName, patientEmail, date, timeSlot });

    if (!doctorId || !patientName || !patientEmail || !date || !timeSlot) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const appointment = await Appointment.create({
      doctorId,
      patientName,
      patientEmail,
      date: new Date(date),
      timeSlot,
    });

    return NextResponse.json({ success: true, appointment }, { status: 201 });
  } catch (error) {
    console.error('Appointment creation error:', error);
    let message = 'Failed to create appointment';
    if (error instanceof Error) message = error.message;
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
