// User rank system based on like counts
export interface UserRank {
  name: string
  minLikes: number
  maxLikes: number | null
  color: string
  badge: string
}

// Update the USER_RANKS array to include the prison rank
export const USER_RANKS: UserRank[] = [
  {
    name: "prison",
    minLikes: Number.NEGATIVE_INFINITY,
    maxLikes: 0,
    color: "text-gray-800 dark:text-gray-200",
    badge: "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800",
  },
  {
    name: "fuckoff",
    minLikes: 1,
    maxLikes: 9,
    color: "text-red-600 dark:text-red-400",
    badge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  },
  {
    name: "standard",
    minLikes: 10,
    maxLikes: 49,
    color: "text-gray-600 dark:text-gray-400",
    badge: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  },
  {
    name: "legend",
    minLikes: 50,
    maxLikes: 99,
    color: "text-blue-600 dark:text-blue-400",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  {
    name: "supreme",
    minLikes: 100,
    maxLikes: null,
    color: "text-purple-600 dark:text-purple-400",
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
]

export function getUserRank(totalLikes: number): UserRank {
  for (let i = USER_RANKS.length - 1; i >= 0; i--) {
    const rank = USER_RANKS[i]
    if (totalLikes >= rank.minLikes && (rank.maxLikes === null || totalLikes <= rank.maxLikes)) {
      return rank
    }
  }
  return USER_RANKS[0] // fallback to lowest rank
}

export function getNextRank(currentLikes: number): { rank: UserRank; likesNeeded: number } | null {
  const currentRank = getUserRank(currentLikes)
  const currentIndex = USER_RANKS.findIndex((rank) => rank.name === currentRank.name)

  if (currentIndex < USER_RANKS.length - 1) {
    const nextRank = USER_RANKS[currentIndex + 1]
    const likesNeeded = nextRank.minLikes - currentLikes
    return { rank: nextRank, likesNeeded }
  }

  return null // Already at highest rank
}

// Additional utility function for rank calculations
export const getRankByLikes = (likes: number): string => {
  const rank = getUserRank(likes)
  return rank.name
}

// Get rank color for styling
export const getRankColor = (totalLikes: number): string => {
  const rank = getUserRank(totalLikes)
  return rank.color
}

// Get rank badge styling
export const getRankBadge = (totalLikes: number): string => {
  const rank = getUserRank(totalLikes)
  return rank.badge
}
