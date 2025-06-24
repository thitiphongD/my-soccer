import { getUserRank, USER_RANKS, type UserRank } from "./ranks";

// Prison-specific utilities
export interface PrisonStatus {
  isPrisoner: boolean
  reason: string
  canEscape: boolean
  releaseCondition?: string
  estimatedDays?: number
}

export interface PrisonExpiry {
  hasExpiry: boolean
  date?: string
  daysLeft?: number
  isExpired?: boolean
}

// Mock prison data - in a real app, this would come from the database
const PRISON_USERS = new Set(["user-trouble-maker", "user-banned", "user-lisa-garcia", "3", "4", "5"])

const PRISON_REASONS = new Map([
  ["user-trouble-maker", "Manually set by administrator"],
  ["user-banned", "Manually set by administrator"],
  ["user-lisa-garcia", "No positive community engagement"],
  ["3", "Manually set by administrator"],
  ["4", "Manually set by administrator"],
  ["5", "No positive community engagement"],
])

// Mock prison expiry dates (in real app, this would be in database)
const PRISON_EXPIRY = new Map([
  ["user-trouble-maker", new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)], // 7 days from now
  ["user-banned", new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)], // 30 days from now
  ["3", new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)], // 14 days from now
  ["4", new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)], // 21 days from now
])

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getEffectiveRank(user: any): UserRank {
  const totalLikes = user.totalLikes || 0
  const isPrisoner = user.isPrisoner || isPrisonUser(user.id)

  // If manually set as prisoner, always return prison rank regardless of likes
  if (isPrisoner) {
    return USER_RANKS.find((rank) => rank.name === "prison") || USER_RANKS[0]
  }

  // Otherwise use normal rank calculation
  return getUserRank(totalLikes)
}

export function isPrisonUser(userId: string): boolean {
  return PRISON_USERS.has(userId)
}

export function getPrisonReason(userId: string): string {
  return PRISON_REASONS.get(userId) || "Unknown reason"
}

export function getPrisonExpiryDate(userId: string): Date | null {
  return PRISON_EXPIRY.get(userId) || null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPrisonExpiry(user: any): PrisonExpiry {
  const userId = user.id
  const expiryDate = getPrisonExpiryDate(userId)

  if (!expiryDate) {
    return { hasExpiry: false }
  }

  const now = new Date()
  const diffTime = expiryDate.getTime() - now.getTime()
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const isExpired = diffTime <= 0

  return {
    hasExpiry: true,
    date: expiryDate.toLocaleDateString(),
    daysLeft: Math.max(0, daysLeft),
    isExpired,
  }
}

export function getDaysUntilRelease(userId: string): number | null {
  const expiryDate = getPrisonExpiryDate(userId)
  if (!expiryDate) return null

  const now = new Date()
  const diffTime = expiryDate.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays > 0 ? diffDays : 0
}

export function getPrisonStatus(userId: string, totalLikes: number): PrisonStatus {
  const isManuallyPrisoner = isPrisonUser(userId)
  const isAutomaticallyPrisoner = totalLikes <= 0
  const daysUntilRelease = getDaysUntilRelease(userId)

  if (isManuallyPrisoner) {
    const hasExpiry = daysUntilRelease !== null
    return {
      isPrisoner: true,
      reason: getPrisonReason(userId),
      canEscape: hasExpiry, // Can escape if there's an expiry date
      releaseCondition: hasExpiry
        ? `Automatic release in ${daysUntilRelease} days`
        : "Contact administrator for release",
      estimatedDays: daysUntilRelease || undefined,
    }
  }

  if (isAutomaticallyPrisoner) {
    const likesNeeded = Math.abs(totalLikes) + 1
    return {
      isPrisoner: true,
      reason: totalLikes < 0 ? "Negative community rating" : "No positive community engagement",
      canEscape: true, // Can escape by getting positive likes
      releaseCondition:
        totalLikes < 0 ? `Get ${likesNeeded} more likes to escape prison` : "Get at least 1 like to escape prison",
      estimatedDays: Math.ceil(likesNeeded / 2), // Estimate 2 likes per day
    }
  }

  return {
    isPrisoner: false,
    reason: "",
    canEscape: false,
  }
}

export function shouldShowPrisonWarning(userId: string, totalLikes: number): boolean {
  const status = getPrisonStatus(userId, totalLikes)
  return status.isPrisoner
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPrisonWarning(user: any): string | null {
  const userId = user.id
  const totalLikes = user.totalLikes || 0
  const isPrisoner = user.isPrisoner || isPrisonUser(userId)

  if (!isPrisoner && totalLikes > 0) {
    return null
  }

  const status = getPrisonStatus(userId, totalLikes)

  if (!status.isPrisoner) {
    return null
  }

  if (isPrisonUser(userId)) {
    const expiry = getPrisonExpiry(user)
    if (expiry.hasExpiry && !expiry.isExpired) {
      return `Your account has been restricted by administrators until ${expiry.date}. ${expiry.daysLeft} days remaining.`
    }
    return `Your account has been restricted by administrators. Reason: ${status.reason}`
  }

  if (totalLikes < 0) {
    const likesNeeded = Math.abs(totalLikes) + 1
    return `You have a negative community rating (${totalLikes} likes). Get ${likesNeeded} more likes to escape prison rank.`
  }

  if (totalLikes === 0) {
    return "You have no positive community engagement. Get at least 1 like to escape prison rank."
  }

  return "You are currently in prison rank."
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getPrisonLoginAlert(user: any): {
  show: boolean
  title: string
  message: string
  type: "warning" | "error"
} {
  const userId = user.id
  const totalLikes = user.totalLikes || 0
  const status = getPrisonStatus(userId, totalLikes)

  if (!status.isPrisoner) {
    return { show: false, title: "", message: "", type: "warning" }
  }

  const isManual = isPrisonUser(userId)
  const expiry = getPrisonExpiry(user)

  if (isManual && expiry.hasExpiry && !expiry.isExpired) {
    return {
      show: true,
      title: "🔒 Account Restricted",
      message: `Your account is currently restricted until ${expiry.date}. ${expiry.daysLeft} days remaining. Reason: ${status.reason}`,
      type: "error",
    }
  }

  if (isManual) {
    return {
      show: true,
      title: "🔒 Account Restricted",
      message: `Your account has been restricted by an administrator. Please contact support for assistance. Reason: ${status.reason}`,
      type: "error",
    }
  }

  if (totalLikes < 0) {
    const likesNeeded = Math.abs(totalLikes) + 1
    return {
      show: true,
      title: "⚠️ Prison Rank Status",
      message: `You're currently in prison rank due to negative community rating (${totalLikes} likes). Get ${likesNeeded} more likes to escape prison and restore your account privileges.`,
      type: "warning",
    }
  }

  return {
    show: true,
    title: "⚠️ Prison Rank Status",
    message: `You're currently in prison rank due to no positive community engagement. Get at least 1 like on your posts or comments to escape prison and unlock full account features.`,
    type: "warning",
  }
}

// Admin functions for managing prison status
export function addToPrison(userId: string, reason = "Manually set by administrator", days?: number): void {
  PRISON_USERS.add(userId)
  PRISON_REASONS.set(userId, reason)

  if (days) {
    const expiryDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
    PRISON_EXPIRY.set(userId, expiryDate)
  }
}

export function releaseFromPrison(userId: string): void {
  PRISON_USERS.delete(userId)
  PRISON_REASONS.delete(userId)
  PRISON_EXPIRY.delete(userId)
}
