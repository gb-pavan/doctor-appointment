import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IAppointment extends Document {
  doctorId: string;
  patientName: string;
  patientEmail: string;
  date: Date;
  timeSlot: string;
  createdAt: Date;
}

const AppointmentSchema: Schema<IAppointment> = new Schema({
  doctorId: { type: String, required: true },
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Appointment: Model<IAppointment> =
  mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
