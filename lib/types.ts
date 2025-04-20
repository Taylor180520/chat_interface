export interface UserType {
  id: string
  name: string
  avatar: string
  isOnline: boolean
  role?: string
  lastActive?: string
  stats?: {
    messages: number
    reactions: number
  }
}

export interface ReactionType {
  type: string
  count: number
  users?: UserType[] // Add users who reacted
}

export interface MessageType {
  id: string
  content: string
  sender: UserType
  timestamp: string
  replyTo?: MessageType | null
  reactions: ReactionType[]
  isPinned?: boolean
  isSystem?: boolean
  isImportant?: boolean
}
