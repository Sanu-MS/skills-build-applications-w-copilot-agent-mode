import { Schema, model } from 'mongoose'

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    durationMinutes: { type: Number, required: true, min: 1 },
    instructions: [{ type: String, required: true }],
  },
  { timestamps: true },
)

export const Workout = model('Workout', workoutSchema)