import type { MessageType, UserType } from "./types"

export const initialUsers: UserType[] = [
  {
    id: "user-1",
    name: "Emma Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    role: "Agent Owner",
    stats: {
      messages: 128,
      reactions: 56,
    },
  },
  {
    id: "user-2",
    name: "ITEM AI",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    stats: {
      messages: 87,
      reactions: 32,
    },
  },
  {
    id: "user-3",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    stats: {
      messages: 65,
      reactions: 41,
    },
  },
  {
    id: "user-4",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    lastActive: "Yesterday at 15:30",
    stats: {
      messages: 42,
      reactions: 18,
    },
  },
  {
    id: "user-5",
    name: "Lisa Wang",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    lastActive: "3 days ago",
    stats: {
      messages: 29,
      reactions: 15,
    },
  },
  {
    id: "user-6",
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    lastActive: "5 minutes ago",
    role: "Admin",
    stats: {
      messages: 156,
      reactions: 89,
    },
  },
]

export const initialMessages: MessageType[] = [
  {
    id: "msg-2",
    content: "大家好！我是Emma的开发者，很高兴看到大家对这个Agent感兴趣。",
    sender: {
      id: "user-1",
      name: "Emma Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      isOnline: true,
    },
    timestamp: "2023-11-10T09:05:00",
    reactions: [
      { type: "👋", count: 5 },
      { type: "❤️", count: 3 },
    ],
  },
  {
    id: "msg-3",
    content: "📢 新版本 V3 已发布！点击 <button>Test Run</button> 链接立即体验新功能，欢迎提出你的反馈建议。",
    sender: {
      id: "user-2",
      name: "ITEM AI",
      avatar: "/placeholder.svg?height=40&width=40",
      isOnline: true,
    },
    timestamp: "2023-11-10T09:10:00",
    reactions: [
      { type: "🔥", count: 4 },
      { type: "👍", count: 2 },
    ],
  },
  {
    id: "msg-4",
    content: "请问新版本什么时候上线？我们团队已经迫不及待想用起来了。",
    sender: {
      id: "user-3",
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      isOnline: true,
    },
    timestamp: "2023-11-10T09:15:00",
    reactions: [{ type: "👍", count: 3 }],
  },
  {
    id: "msg-5",
    content:
      '新版本预计下周三正式发布，目前正在进行最后的稳定性测试。欢迎大家提前体验测试版，点击右下角的"Test Run"按钮即可。',
    sender: {
      id: "user-1",
      name: "Emma Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      isOnline: true,
    },
    timestamp: "2023-11-10T09:20:00",
    reactions: [
      { type: "🎉", count: 8 },
      { type: "👍", count: 5 },
    ],
  },
  {
    id: "msg-6",
    content: "我们团队已经在使用测试版了，UI交互比上一版本流畅多了，特别是在处理多轮对话时。",
    sender: {
      id: "user-6",
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      isOnline: false,
    },
    timestamp: "2023-11-10T09:25:00",
    reactions: [{ type: "👍", count: 4 }],
  },
]
