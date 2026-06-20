import 'dotenv/config'

import mongoose from 'mongoose'

import { connectDatabase } from '../config/database'
import { Activity } from '../models/activity'
import { LeaderboardEntry } from '../models/leaderboard-entry'
import { Team } from '../models/team'
import { User } from '../models/user'
import { Workout } from '../models/workout'

// Seed the octofit_db database with test data
async function seedDatabase() {
  await connectDatabase()

  await Promise.all([
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Team.deleteMany({}),
    User.deleteMany({}),
    Workout.deleteMany({}),
  ])

  const users = await User.insertMany([
    {
      email: 'ava.patel@octofit.dev',
      name: 'Ava Patel',
      passwordHash: 'hash-ava-patel',
      role: 'coach',
    },
    {
      email: 'noah.chen@octofit.dev',
      name: 'Noah Chen',
      passwordHash: 'hash-noah-chen',
      role: 'member',
    },
    {
      email: 'sofia.hernandez@octofit.dev',
      name: 'Sofia Hernandez',
      passwordHash: 'hash-sofia-hernandez',
      role: 'member',
    },
    {
      email: 'liam.brooks@octofit.dev',
      name: 'Liam Brooks',
      passwordHash: 'hash-liam-brooks',
      role: 'admin',
    },
  ])

  const teams = await Team.insertMany([
    {
      name: 'North Stars',
      captainId: users[0]._id,
      memberIds: [users[1]._id, users[2]._id],
    },
    {
      name: 'Summit Sprint',
      captainId: users[3]._id,
      memberIds: [users[3]._id],
    },
  ])

  await User.updateMany(
    { _id: { $in: [users[1]._id, users[2]._id] } },
    { $set: { teamId: teams[0]._id } },
  )

  await User.updateOne({ _id: users[0]._id }, { $set: { teamId: teams[0]._id } })
  await User.updateOne({ _id: users[3]._id }, { $set: { teamId: teams[1]._id } })

  const workouts = await Workout.insertMany([
    {
      name: 'Morning Mobility Flow',
      focusArea: 'Flexibility',
      difficulty: 'beginner',
      durationMinutes: 20,
      instructions: [
        'Neck circles for 30 seconds.',
        'Cat-cow stretches for 2 minutes.',
        'Hip openers and hamstring stretches for 5 minutes.',
      ],
    },
    {
      name: 'Team Cardio Circuit',
      focusArea: 'Cardio',
      difficulty: 'intermediate',
      durationMinutes: 30,
      instructions: [
        'Warm up with light jogging for 5 minutes.',
        'Complete 4 rounds of jump squats, mountain climbers, and burpees.',
        'Finish with a 5-minute cooldown walk.',
      ],
    },
    {
      name: 'Strength Builder',
      focusArea: 'Strength',
      difficulty: 'advanced',
      durationMinutes: 45,
      instructions: [
        'Perform barbell squats, deadlifts, and bench press.',
        'Use controlled tempo on each rep.',
        'Rest 90 seconds between sets.',
      ],
    },
  ])

  await Activity.insertMany([
    {
      userId: users[1]._id,
      type: 'Run',
      durationMinutes: 42,
      caloriesBurned: 410,
      performedAt: new Date('2026-06-18T07:15:00.000Z'),
    },
    {
      userId: users[2]._id,
      type: 'Cycling',
      durationMinutes: 55,
      caloriesBurned: 520,
      performedAt: new Date('2026-06-18T18:30:00.000Z'),
    },
    {
      userId: users[0]._id,
      type: 'Yoga',
      durationMinutes: 35,
      caloriesBurned: 180,
      performedAt: new Date('2026-06-19T06:45:00.000Z'),
    },
    {
      userId: users[3]._id,
      type: 'HIIT',
      durationMinutes: 28,
      caloriesBurned: 390,
      performedAt: new Date('2026-06-19T19:00:00.000Z'),
    },
  ])

  await LeaderboardEntry.insertMany([
    {
      userId: users[3]._id,
      points: 1820,
      rank: 1,
      weekStart: new Date('2026-06-16T00:00:00.000Z'),
    },
    {
      userId: users[0]._id,
      points: 1740,
      rank: 2,
      weekStart: new Date('2026-06-16T00:00:00.000Z'),
    },
    {
      userId: users[1]._id,
      points: 1650,
      rank: 3,
      weekStart: new Date('2026-06-16T00:00:00.000Z'),
    },
    {
      userId: users[2]._id,
      points: 1510,
      rank: 4,
      weekStart: new Date('2026-06-16T00:00:00.000Z'),
    },
  ])

  console.log('Seed the octofit_db database with test data')
  console.log(`Seeded collections: users=${users.length}, teams=${teams.length}, workouts=${workouts.length}, activities=4, leaderboard=4`)
}

seedDatabase()
  .then(async () => {
    await mongoose.disconnect()
  })
  .catch(async (error: unknown) => {
    console.error('Failed to seed octofit_db database', error)
    await mongoose.disconnect()
    process.exit(1)
  })
