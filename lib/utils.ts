import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a timestamp into a readable time string
 * @param timestamp ISO string or date string
 * @returns Formatted time string
 */
export function formatTime(timestamp: string): string {
  // Check if it's a valid date
  const date = new Date(timestamp)
  if (isNaN(date.getTime())) {
    return "Invalid date"
  }

  // For recent dates (today), show only the time
  const now = new Date()
  const isToday = now.toDateString() === date.toDateString()

  if (isToday) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // For dates within the last week, show the day name and time
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  if (date > oneWeekAgo) {
    return (
      date.toLocaleDateString([], { weekday: "short" }) +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    )
  }

  // For older dates, show the full date
  return date.toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
