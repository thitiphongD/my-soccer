// Mock data to simulate database
export interface User {
  id: string;
  email: string;
  name: string | null;
  password: string;
  role: "USER" | "ADMIN";
  totalLikes: number; // Add likes tracking
  isPrisoner: boolean; // Add prison status
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string | null;
  path: string;
}

export interface BoardList {
  id: string;
  name: string;
  description: string;
  topic_count: number;
  answer_count: number;
  answer_current: {
    id: string;
    date: Date;
    author: string;
  };
  path: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  categoryId: string | null;
  images?: string[];
  likes: number; // Add likes to posts
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  likes: number; // Add likes to comments
  createdAt: Date;
  updatedAt: Date;
}

export interface Like {
  id: string;
  userId: string;
  postId?: string;
  commentId?: string;
  createdAt: Date;
}

// Expanded mock users with like counts
const mockUsers: User[] = [
  {
    id: "admin1",
    email: "admin@example.com",
    name: "Admin User",
    password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6hsxq/3Haa", // admin123
    role: "ADMIN",
    totalLikes: 150, // supreme rank
    isPrisoner: false,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "admin2",
    email: "sarah.admin@example.com",
    name: "Sarah Wilson",
    password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6hsxq/3Haa", // admin123
    role: "ADMIN",
    totalLikes: 85, // legend rank
    isPrisoner: false,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "user1",
    email: "user@example.com",
    name: "John Doe",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 75, // legend rank
    isPrisoner: false,
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "user2",
    email: "jane@example.com",
    name: "Jane Smith",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 35, // standard rank
    isPrisoner: false,
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: "user3",
    email: "mike@example.com",
    name: "Mike Johnson",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 25, // standard rank
    isPrisoner: false,
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
  },
  {
    id: "user4",
    email: "alice.cooper@example.com",
    name: "Alice Cooper",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 120, // supreme rank
    isPrisoner: false,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "user5",
    email: "bob.martin@example.com",
    name: "Bob Martin",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 8, // fuckoff rank
    isPrisoner: false,
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06"),
  },
  {
    id: "user6",
    email: "emma.davis@example.com",
    name: "Emma Davis",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 45, // standard rank
    isPrisoner: false,
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-07"),
  },
  {
    id: "user7",
    email: "david.brown@example.com",
    name: "David Brown",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 65, // legend rank
    isPrisoner: false,
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08"),
  },
  {
    id: "user8",
    email: "lisa.garcia@example.com",
    name: "Lisa Garcia",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 0, // prison rank
    isPrisoner: false,
    createdAt: new Date("2024-01-09"),
    updatedAt: new Date("2024-01-09"),
  },
  {
    id: "user9",
    email: "troublemaker@example.com",
    name: "Trouble Maker",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: -5, // prison rank (negative likes)
    isPrisoner: true, // manually set as prisoner
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "user10",
    email: "banned.user@example.com",
    name: "Banned User",
    password: "$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", // user123
    role: "USER",
    totalLikes: 15, // would be standard, but manually set as prisoner
    isPrisoner: true,
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-11"),
  },
];

export const mockCategories: Category[] = [
  {
    id: "cat1",
    name: "ผลบอลย้อนหลัง",
    description: "ผลบอลย้อนหลัง",
    path: "/history-score",
  },
  {
    id: "cat2",
    name: "โปรแกรมถ่ายทอดสด",
    description: "โปรแกรมถ่ายทอดสด",
    path: "/live-stream",
  },
  {
    id: "cat3",
    name: "โปรแกรมถ่ายบอลล่วงหน้า",
    description: "โปรแกรมถ่ายบอลล่วงหน้า",
    path: "/live-stream-next",
  },
  {
    id: "cat4",
    name: "สรุปผลย้อนหลัง",
    description: "สรุปผลย้อนหลัง",
    path: "/history-score-summary",
  },
  {
    id: "cat5",
    name: "คอลัมป์+สกู๊ป",
    description: "คอลัมป์+สกู๊ป",
    path: "/forum",
  },
  {
    id: "cat6",
    name: "เว็บบอร์ด",
    description: "เว็บบอร์ด",
    path: "/board",
  },
  {
    id: "cat7",
    name: "ประวัติ soccersex",
    description: "ประวัติ soccersex",
    path: "/history-soccersex",
  },
  {
    id: "cat8",
    name: "ติดต่อโฆษณา",
    description: "ติดต่อโฆษณา",
    path: "/contact-ad",
  },
];

export const mockBoardList: BoardList[] = [
  {
    id: "board1",
    name: "ข่าวประจำวัน",
    description: "อ่านและแสดงความเห็นกับข่าวประจำวัน",
    topic_count: 10,
    answer_count: 25,
    answer_current: {
      id: "answer1",
      date: new Date("2025-06-20T10:30:00Z"),
      author: "ประยุทธ์ จันทร์โอชา",
    },
    path: "/board/today-news",
  },
  {
    id: "board2",
    name: "บอลนอก",
    description: "แลกเปลี่ยนและแสดงความคิดเห็น วิพากษ์ประเด็นร้อน ชอนไชเรื่องกังขาเฉพาะเรื่องบอลเท่านั้น",
    topic_count: 8,
    answer_count: 18,
    answer_current: {
      id: "answer2",
      date: new Date("2025-06-21T08:45:00Z"),
      author: "ทักษิณ ชินวัตร",
    },
    path: "/board/global-news",
  },
  {
    id: "board3",
    name: "บอลไทย+เอเชีย",
    description: "พูดคุยถึงเรื่องข่าวสารบอลไทยและเชีย สำหรับผู้คลั่งไคล้บอลไทยและเอเชียเข้าสายเลือด",
    topic_count: 8,
    answer_count: 18,
    answer_current: {
      id: "answer3",
      date: new Date("2025-06-22T09:15:00Z"),
      author: "สุริยา สุริยะกุล",
    },
    path: "/board/domestic-news",
  },
  {
    id: "board4",
    name: "บอร์ดวาไรตี้",
    description: "นำเสนอสาระน่ารู้ต่างๆที่ไม่เกี่ยวข้องกับฟุตบอลแต่ต้องไม่หมิ่นเบื้องสูงหรือทำลายชื่อเสียงบุคคลใดๆ",
    topic_count: 8,
    answer_count: 18,
    answer_current: {
      id: "answer4",
      date: new Date("2025-06-23T10:30:00Z"),
      author: "สุริยา สุริยะกุล",
    },
    path: "/board/future-news",
  },
  {
    id: "board5",
    name: "บอร์ดฝากร้าน",
    description: "เป็นบอร์ดที่ให้สมาชิกโปรโมทสินค้าและบริการของตัวเองไม่ว่าจะเป็นหน้าร้าน facebook, IG, tiktok และอื่นๆหรือรับสมัครงาน,หาดี้,รับซื้อสินค้าที่ต้องการแต่ทุกๆอย่างต้องไม่ผิดกฏหมายเช่นการพนัน, ยาเสพติด, ของละเมิดลิขสิทธิ์หรือของเถื่อนที่กฏหมายไม่อนุญาต",
    topic_count: 8,
    answer_count: 18,
    answer_current: {
      id: "answer5",
      date: new Date("2025-06-24T10:30:00Z"),
      author: "สุริยา สุริยะกุล",
    },
    path: "/board/store",
  },
];

// Posts with like counts
export const mockPosts: Post[] = [
  {
    id: "post1",
    title: "Welcome to our Web Board!",
    content:
      "This is the first post on our new web board platform. Feel free to explore and create your own posts!",
    authorId: "admin1",
    categoryId: "cat4",
    images: ["/placeholder.svg?height=400&width=600"],
    likes: 25,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "post2",
    title: "Best practices for React development",
    content:
      "Here are some best practices I've learned over the years:\n\n1. Use functional components with hooks\n2. Keep components small and focused\n3. Use TypeScript for better type safety\n4. Implement proper error boundaries\n5. Optimize performance with React.memo when needed\n\nWhat are your favorite React tips?",
    authorId: "user1",
    categoryId: "cat2",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=250&width=400",
    ],
    likes: 42,
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06"),
  },
  {
    id: "post3",
    title: "Need help with Next.js routing",
    content:
      "I'm having trouble understanding the new App Router in Next.js 13+. Can someone explain the difference between page.tsx and layout.tsx files?",
    authorId: "user2",
    categoryId: "cat3",
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-07"),
    images: [],
    likes: 18,
  },
  {
    id: "post4",
    title: "JavaScript vs TypeScript: Which to choose?",
    content:
      "I'm starting a new project and wondering whether to use JavaScript or TypeScript. What are the pros and cons of each?",
    authorId: "user3",
    categoryId: "cat5",
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08"),
    images: [],
    likes: 31,
  },
  {
    id: "post5",
    title: "Favorite VS Code extensions for web development",
    content:
      "What are your must-have VS Code extensions for web development? Here are mine:\n\n- ES7+ React/Redux/React-Native snippets\n- Prettier\n- ESLint\n- Auto Rename Tag\n- Bracket Pair Colorizer\n\nShare yours!",
    authorId: "user1",
    categoryId: "cat2",
    createdAt: new Date("2024-01-09"),
    updatedAt: new Date("2024-01-09"),
    images: [],
    likes: 38,
  },
  {
    id: "post6",
    title: "How to stay motivated while learning to code?",
    content:
      "I've been learning web development for a few months now, but sometimes I feel overwhelmed. Any tips on staying motivated and not giving up?",
    authorId: "user2",
    categoryId: "cat1",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    images: [],
    likes: 22,
  },
  {
    id: "post7",
    title: "Modern CSS Grid vs Flexbox",
    content:
      "When should you use CSS Grid vs Flexbox? I've been struggling to understand when to use which layout method. Here's what I've learned so far...",
    authorId: "user4",
    categoryId: "cat6",
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-11"),
    images: ["/placeholder.svg?height=350&width=550"],
    likes: 55,
  },
  {
    id: "post8",
    title: "Building a REST API with Node.js",
    content:
      "Step-by-step guide to building a RESTful API using Node.js and Express. We'll cover routing, middleware, error handling, and database integration.",
    authorId: "user5",
    categoryId: "cat5",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    images: [],
    likes: 3,
  },
  {
    id: "post9",
    title: "UI/UX Design Trends for 2024",
    content:
      "What design trends are you seeing this year? I've noticed a lot more minimalist designs and interesting use of gradients. What's your take?",
    authorId: "user6",
    categoryId: "cat6",
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
    images: [
      "/placeholder.svg?height=300&width=600",
      "/placeholder.svg?height=400&width=500",
    ],
    likes: 29,
  },
  {
    id: "post10",
    title: "Database optimization tips",
    content:
      "Sharing some database optimization techniques I've learned. These have helped improve query performance significantly in my projects.",
    authorId: "user7",
    categoryId: "cat2",
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14"),
    images: [],
    likes: 47,
  },
];

// Comments with like counts
const mockComments: Comment[] = [
  {
    id: "comment1",
    content: "Great post! Looking forward to more content.",
    authorId: "user1",
    postId: "post1",
    likes: 8,
    createdAt: new Date("2024-01-05T10:00:00"),
    updatedAt: new Date("2024-01-05T10:00:00"),
  },
  {
    id: "comment2",
    content:
      "Thanks for sharing these tips! The React.memo tip is especially useful.",
    authorId: "user2",
    postId: "post2",
    likes: 12,
    createdAt: new Date("2024-01-06T14:30:00"),
    updatedAt: new Date("2024-01-06T14:30:00"),
  },
  {
    id: "comment3",
    content:
      "I agree with all of these points. TypeScript has been a game-changer for my projects.",
    authorId: "user3",
    postId: "post2",
    likes: 15,
    createdAt: new Date("2024-01-06T16:45:00"),
    updatedAt: new Date("2024-01-06T16:45:00"),
  },
  {
    id: "comment4",
    content:
      "The App Router can be confusing at first. page.tsx defines the UI for a route, while layout.tsx defines shared UI for multiple routes. Layout wraps around pages.",
    authorId: "admin1",
    postId: "post3",
    likes: 25,
    createdAt: new Date("2024-01-07T09:15:00"),
    updatedAt: new Date("2024-01-07T09:15:00"),
  },
  {
    id: "comment5",
    content:
      "I'd recommend starting with TypeScript if you're building a larger application. The initial learning curve is worth it for the long-term benefits.",
    authorId: "user1",
    postId: "post4",
    likes: 18,
    createdAt: new Date("2024-01-08T11:20:00"),
    updatedAt: new Date("2024-01-08T11:20:00"),
  },
  {
    id: "comment6",
    content:
      "Great list! I'd also add GitLens and Thunder Client to that list.",
    authorId: "user3",
    postId: "post5",
    likes: 9,
    createdAt: new Date("2024-01-09T13:45:00"),
    updatedAt: new Date("2024-01-09T13:45:00"),
  },
  {
    id: "comment7",
    content:
      "Set small, achievable goals and celebrate your wins! Also, don't compare your progress to others - everyone learns at their own pace.",
    authorId: "admin1",
    postId: "post6",
    likes: 22,
    createdAt: new Date("2024-01-10T08:30:00"),
    updatedAt: new Date("2024-01-10T08:30:00"),
  },
  {
    id: "comment8",
    content:
      "Building projects is the best way to stay motivated. Start with something simple and gradually add features.",
    authorId: "user1",
    postId: "post6",
    likes: 16,
    createdAt: new Date("2024-01-10T12:15:00"),
    updatedAt: new Date("2024-01-10T12:15:00"),
  },
  {
    id: "comment9",
    content:
      "CSS Grid is perfect for 2D layouts, while Flexbox excels at 1D layouts. Great explanation!",
    authorId: "user5",
    postId: "post7",
    likes: 2,
    createdAt: new Date("2024-01-11T15:20:00"),
    updatedAt: new Date("2024-01-11T15:20:00"),
  },
  {
    id: "comment10",
    content:
      "This is exactly what I needed! Do you have any recommendations for authentication middleware?",
    authorId: "user6",
    postId: "post8",
    likes: 7,
    createdAt: new Date("2024-01-12T10:45:00"),
    updatedAt: new Date("2024-01-12T10:45:00"),
  },
  {
    id: "comment11",
    content:
      "Love the minimalist trend! Clean designs are so much easier to navigate.",
    authorId: "user4",
    postId: "post9",
    likes: 11,
    createdAt: new Date("2024-01-13T16:30:00"),
    updatedAt: new Date("2024-01-13T16:30:00"),
  },
  {
    id: "comment12",
    content:
      "Indexing strategies are crucial! Have you tried using query execution plans to identify bottlenecks?",
    authorId: "user8",
    postId: "post10",
    likes: 1,
    createdAt: new Date("2024-01-14T11:15:00"),
    updatedAt: new Date("2024-01-14T11:15:00"),
  },
  {
    id: "comment13",
    content: "Thanks for the welcome! Excited to be part of this community.",
    authorId: "user4",
    postId: "post1",
    likes: 14,
    createdAt: new Date("2024-01-05T14:20:00"),
    updatedAt: new Date("2024-01-05T14:20:00"),
  },
  {
    id: "comment14",
    content:
      "Another great extension is Live Server for quick development previews.",
    authorId: "user7",
    postId: "post5",
    likes: 13,
    createdAt: new Date("2024-01-09T18:10:00"),
    updatedAt: new Date("2024-01-09T18:10:00"),
  },
  {
    id: "comment15",
    content:
      "Join coding communities and find accountability partners. It really helps!",
    authorId: "user8",
    postId: "post6",
    likes: 0,
    createdAt: new Date("2024-01-10T20:30:00"),
    updatedAt: new Date("2024-01-10T20:30:00"),
  },
];

// Mock likes data with realistic user interactions
const mockLikes: Like[] = [
  // User1 likes
  {
    id: "like1",
    userId: "user1",
    postId: "post1",
    createdAt: new Date("2024-01-05T11:00:00"),
  },
  {
    id: "like2",
    userId: "user1",
    postId: "post3",
    createdAt: new Date("2024-01-07T10:00:00"),
  },
  {
    id: "like3",
    userId: "user1",
    postId: "post7",
    createdAt: new Date("2024-01-11T16:00:00"),
  },
  {
    id: "like4",
    userId: "user1",
    commentId: "comment4",
    createdAt: new Date("2024-01-07T10:00:00"),
  },
  {
    id: "like5",
    userId: "user1",
    commentId: "comment7",
    createdAt: new Date("2024-01-10T09:00:00"),
  },

  // User2 likes
  {
    id: "like6",
    userId: "user2",
    postId: "post2",
    createdAt: new Date("2024-01-06T15:00:00"),
  },
  {
    id: "like7",
    userId: "user2",
    postId: "post4",
    createdAt: new Date("2024-01-08T12:00:00"),
  },
  {
    id: "like8",
    userId: "user2",
    postId: "post5",
    createdAt: new Date("2024-01-09T14:00:00"),
  },
  {
    id: "like9",
    userId: "user2",
    commentId: "comment1",
    createdAt: new Date("2024-01-05T11:00:00"),
  },
  {
    id: "like10",
    userId: "user2",
    commentId: "comment3",
    createdAt: new Date("2024-01-06T17:00:00"),
  },
  {
    id: "like11",
    userId: "user2",
    commentId: "comment5",
    createdAt: new Date("2024-01-08T12:00:00"),
  },

  // User3 likes
  {
    id: "like12",
    userId: "user3",
    postId: "post1",
    createdAt: new Date("2024-01-05T12:00:00"),
  },
  {
    id: "like13",
    userId: "user3",
    postId: "post6",
    createdAt: new Date("2024-01-10T13:00:00"),
  },
  {
    id: "like14",
    userId: "user3",
    postId: "post9",
    createdAt: new Date("2024-01-13T17:00:00"),
  },
  {
    id: "like15",
    userId: "user3",
    commentId: "comment2",
    createdAt: new Date("2024-01-06T15:00:00"),
  },
  {
    id: "like16",
    userId: "user3",
    commentId: "comment6",
    createdAt: new Date("2024-01-09T14:00:00"),
  },

  // Admin1 likes
  {
    id: "like17",
    userId: "admin1",
    postId: "post2",
    createdAt: new Date("2024-01-06T16:00:00"),
  },
  {
    id: "like18",
    userId: "admin1",
    postId: "post5",
    createdAt: new Date("2024-01-09T15:00:00"),
  },
  {
    id: "like19",
    userId: "admin1",
    postId: "post7",
    createdAt: new Date("2024-01-11T17:00:00"),
  },
  {
    id: "like20",
    userId: "admin1",
    postId: "post10",
    createdAt: new Date("2024-01-14T12:00:00"),
  },
  {
    id: "like21",
    userId: "admin1",
    commentId: "comment3",
    createdAt: new Date("2024-01-06T17:00:00"),
  },
  {
    id: "like22",
    userId: "admin1",
    commentId: "comment8",
    createdAt: new Date("2024-01-10T13:00:00"),
  },

  // User4 likes
  {
    id: "like23",
    userId: "user4",
    postId: "post1",
    createdAt: new Date("2024-01-05T15:00:00"),
  },
  {
    id: "like24",
    userId: "user4",
    postId: "post8",
    createdAt: new Date("2024-01-12T11:00:00"),
  },
  {
    id: "like25",
    userId: "user4",
    commentId: "comment9",
    createdAt: new Date("2024-01-11T16:00:00"),
  },
  {
    id: "like26",
    userId: "user4",
    commentId: "comment11",
    createdAt: new Date("2024-01-13T17:00:00"),
  },

  // User5 likes
  {
    id: "like27",
    userId: "user5",
    postId: "post4",
    createdAt: new Date("2024-01-08T13:00:00"),
  },
  {
    id: "like28",
    userId: "user5",
    commentId: "comment10",
    createdAt: new Date("2024-01-12T11:00:00"),
  },

  // User6 likes
  {
    id: "like29",
    userId: "user6",
    postId: "post3",
    createdAt: new Date("2024-01-07T11:00:00"),
  },
  {
    id: "like30",
    userId: "user6",
    postId: "post6",
    createdAt: new Date("2024-01-10T14:00:00"),
  },
  {
    id: "like31",
    userId: "user6",
    commentId: "comment12",
    createdAt: new Date("2024-01-14T12:00:00"),
  },

  // User7 likes
  {
    id: "like32",
    userId: "user7",
    postId: "post2",
    createdAt: new Date("2024-01-06T17:00:00"),
  },
  {
    id: "like33",
    userId: "user7",
    postId: "post9",
    createdAt: new Date("2024-01-13T18:00:00"),
  },
  {
    id: "like34",
    userId: "user7",
    commentId: "comment14",
    createdAt: new Date("2024-01-09T19:00:00"),
  },

  // User8 likes
  {
    id: "like35",
    userId: "user8",
    postId: "post1",
    createdAt: new Date("2024-01-05T16:00:00"),
  },
  {
    id: "like36",
    userId: "user8",
    commentId: "comment15",
    createdAt: new Date("2024-01-10T21:00:00"),
  },
];

// Helper function to calculate user total likes
function calculateUserTotalLikes(userId: string): number {
  const postLikes = mockPosts
    .filter((post) => post.authorId === userId)
    .reduce((sum, post) => sum + post.likes, 0);

  const commentLikes = mockComments
    .filter((comment) => comment.authorId === userId)
    .reduce((sum, comment) => sum + comment.likes, 0);

  return postLikes + commentLikes;
}

// Update user total likes based on their content
mockUsers.forEach((user) => {
  user.totalLikes = calculateUserTotalLikes(user.id);
});

// Mock Prisma-like API with likes functionality
export const prisma = {
  user: {
    findUnique: async ({
      where,
    }: {
      where: { email?: string; id?: string };
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (where.email) {
        return mockUsers.find((user) => user.email === where.email) || null;
      }
      if (where.id) {
        return mockUsers.find((user) => user.id === where.id) || null;
      }
      return null;
    },
    findMany: async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return mockUsers.map(({ ...user }) => user); // Don't return passwords
    },
    create: async ({
      data,
    }: {
      data: Omit<User, "id" | "createdAt" | "updatedAt">;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const newUser: User = {
        ...data,
        id: `user${Date.now()}`,
        totalLikes: 0,
        isPrisoner: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockUsers.push(newUser);
      return newUser;
    },
    update: async ({
      where,
      data,
    }: {
      where: { id: string };
      data: Partial<User>;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const userIndex = mockUsers.findIndex((user) => user.id === where.id);
      if (userIndex === -1) throw new Error("User not found");

      mockUsers[userIndex] = {
        ...mockUsers[userIndex],
        ...data,
        updatedAt: new Date(),
      };
      return mockUsers[userIndex];
    },
    delete: async ({ where }: { where: { id: string } }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const userIndex = mockUsers.findIndex((user) => user.id === where.id);
      if (userIndex === -1) throw new Error("User not found");

      const deletedUser = mockUsers.splice(userIndex, 1)[0];
      return deletedUser;
    },
  },
  category: {
    findMany: async ({
      include,
    }: { include?: { _count?: { select?: { posts?: boolean } } } } = {}) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return mockCategories.map((category) => ({
        ...category,
        ...(include?._count?.select?.posts && {
          _count: {
            posts: mockPosts.filter((post) => post.categoryId === category.id)
              .length,
          },
        }),
      }));
    },
    create: async ({
      data,
    }: {
      data: Omit<Category, "id" | "createdAt" | "updatedAt">;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const newCategory: Category = {
        ...data,
        id: `cat${Date.now()}`,
      };
      mockCategories.push(newCategory);
      return newCategory;
    },
    update: async ({
      where,
      data,
    }: {
      where: { id: string };
      data: Partial<Category>;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const categoryIndex = mockCategories.findIndex(
        (cat) => cat.id === where.id
      );
      if (categoryIndex === -1) throw new Error("Category not found");

      mockCategories[categoryIndex] = {
        ...mockCategories[categoryIndex],
        ...data,
      };
      return mockCategories[categoryIndex];
    },
    delete: async ({ where }: { where: { id: string } }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const categoryIndex = mockCategories.findIndex(
        (cat) => cat.id === where.id
      );
      if (categoryIndex === -1) throw new Error("Category not found");

      const deletedCategory = mockCategories.splice(categoryIndex, 1)[0];
      return deletedCategory;
    },
  },
  post: {
    findMany: async ({
      where,
      include,
      orderBy,
    }: {
      where?: { categoryId?: string; authorId?: string };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      orderBy?: any;
    } = {}) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      let posts = mockPosts;

      if (where?.categoryId) {
        posts = posts.filter((post) => post.categoryId === where.categoryId);
      }
      if (where?.authorId) {
        posts = posts.filter((post) => post.authorId === where.authorId);
      }

      if (orderBy?.createdAt === "desc") {
        posts = [...posts].sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
      }

      return posts.map((post) => ({
        ...post,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === post.authorId),
        }),
        ...(include?.category && {
          category: mockCategories.find((cat) => cat.id === post.categoryId),
        }),
        ...(include?._count?.select?.comments && {
          _count: {
            comments: mockComments.filter(
              (comment) => comment.postId === post.id
            ).length,
          },
        }),
      }));
    },
    findUnique: async ({
      where,
      include,
    }: {
      where: { id: string };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const post = mockPosts.find((p) => p.id === where.id);
      if (!post) return null;

      return {
        ...post,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === post.authorId),
        }),
        ...(include?.category && {
          category: mockCategories.find((cat) => cat.id === post.categoryId),
        }),
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: async ({
      data,
      include,
    }: {
      data: Omit<Post, "id" | "createdAt" | "updatedAt">;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const newPost: Post = {
        ...data,
        id: `post${Date.now()}`,
        images: data.images || [],
        likes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPosts.push(newPost);

      return {
        ...newPost,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === newPost.authorId),
        }),
        ...(include?.category && {
          category: mockCategories.find((cat) => cat.id === newPost.categoryId),
        }),
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: async ({
      where,
      data,
      include,
    }: {
      where: { id: string };
      data: Partial<Post>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const postIndex = mockPosts.findIndex((post) => post.id === where.id);
      if (postIndex === -1) throw new Error("Post not found");

      mockPosts[postIndex] = {
        ...mockPosts[postIndex],
        ...data,
        updatedAt: new Date(),
      };
      const updatedPost = mockPosts[postIndex];

      // Update user total likes if likes changed
      if (data.likes !== undefined) {
        const author = mockUsers.find(
          (user) => user.id === updatedPost.authorId
        );
        if (author) {
          author.totalLikes = calculateUserTotalLikes(author.id);
        }
      }

      return {
        ...updatedPost,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === updatedPost.authorId),
        }),
        ...(include?.category && {
          category: mockCategories.find(
            (cat) => cat.id === updatedPost.categoryId
          ),
        }),
      };
    },
    delete: async ({ where }: { where: { id: string } }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const postIndex = mockPosts.findIndex((post) => post.id === where.id);
      if (postIndex === -1) throw new Error("Post not found");

      const deletedPost = mockPosts.splice(postIndex, 1)[0];
      // Also delete related comments
      const commentIndices = mockComments
        .map((comment, index) => (comment.postId === where.id ? index : -1))
        .filter((i) => i !== -1);
      commentIndices
        .reverse()
        .forEach((index) => mockComments.splice(index, 1));

      // Update author's total likes
      const author = mockUsers.find((user) => user.id === deletedPost.authorId);
      if (author) {
        author.totalLikes = calculateUserTotalLikes(author.id);
      }

      return deletedPost;
    },
  },
  comment: {
    findMany: async ({
      where,
      include,
      orderBy,
    }: {
      where?: { postId?: string; authorId?: string };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      orderBy?: any;
    } = {}) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      let comments = mockComments;

      if (where?.postId) {
        comments = comments.filter(
          (comment) => comment.postId === where.postId
        );
      }
      if (where?.authorId) {
        comments = comments.filter(
          (comment) => comment.authorId === where.authorId
        );
      }

      if (orderBy?.createdAt === "desc") {
        comments = [...comments].sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
      }

      return comments.map((comment) => ({
        ...comment,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === comment.authorId),
        }),
      }));
    },
    findUnique: async ({
      where,
      include,
    }: {
      where: { id: string };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const comment = mockComments.find((c) => c.id === where.id);
      if (!comment) return null;

      return {
        ...comment,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === comment.authorId),
        }),
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: async ({
      data,
      include,
    }: {
      data: Omit<Comment, "id" | "createdAt" | "updatedAt">;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const newComment: Comment = {
        ...data,
        id: `comment${Date.now()}`,
        likes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockComments.push(newComment);

      return {
        ...newComment,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === newComment.authorId),
        }),
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: async ({
      where,
      data,
      include,
    }: {
      where: { id: string };
      data: Partial<Comment>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      include?: any;
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const commentIndex = mockComments.findIndex(
        (comment) => comment.id === where.id
      );
      if (commentIndex === -1) throw new Error("Comment not found");

      mockComments[commentIndex] = {
        ...mockComments[commentIndex],
        ...data,
        updatedAt: new Date(),
      };
      const updatedComment = mockComments[commentIndex];

      // Update user total likes if likes changed
      if (data.likes !== undefined) {
        const author = mockUsers.find(
          (user) => user.id === updatedComment.authorId
        );
        if (author) {
          author.totalLikes = calculateUserTotalLikes(author.id);
        }
      }

      return {
        ...updatedComment,
        ...(include?.author && {
          author: mockUsers.find((user) => user.id === updatedComment.authorId),
        }),
      };
    },
    delete: async ({ where }: { where: { id: string } }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const commentIndex = mockComments.findIndex(
        (comment) => comment.id === where.id
      );
      if (commentIndex === -1) throw new Error("Comment not found");

      const deletedComment = mockComments.splice(commentIndex, 1)[0];

      // Update author's total likes
      const author = mockUsers.find(
        (user) => user.id === deletedComment.authorId
      );
      if (author) {
        author.totalLikes = calculateUserTotalLikes(author.id);
      }

      return deletedComment;
    },
  },
  like: {
    findMany: async ({
      where,
      orderBy,
    }: {
      where?: { userId?: string };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      orderBy?: any;
    } = {}) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      let likes = mockLikes;

      if (where?.userId) {
        likes = likes.filter((like) => like.userId === where.userId);
      }

      if (orderBy?.createdAt === "desc") {
        likes = [...likes].sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
      }

      return likes;
    },
    findFirst: async ({
      where,
    }: {
      where: { userId: string; postId?: string; commentId?: string };
    }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return (
        mockLikes.find(
          (like) =>
            like.userId === where.userId &&
            like.postId === where.postId &&
            like.commentId === where.commentId
        ) || null
      );
    },
    create: async ({ data }: { data: Omit<Like, "id" | "createdAt"> }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const newLike: Like = {
        ...data,
        id: `like${Date.now()}`,
        createdAt: new Date(),
      };
      mockLikes.push(newLike);

      // Update post or comment likes count
      if (data.postId) {
        const post = mockPosts.find((p) => p.id === data.postId);
        if (post) {
          post.likes++;
          // Update author's total likes
          const author = mockUsers.find((user) => user.id === post.authorId);
          if (author) {
            author.totalLikes = calculateUserTotalLikes(author.id);
          }
        }
      }
      if (data.commentId) {
        const comment = mockComments.find((c) => c.id === data.commentId);
        if (comment) {
          comment.likes++;
          // Update author's total likes
          const author = mockUsers.find((user) => user.id === comment.authorId);
          if (author) {
            author.totalLikes = calculateUserTotalLikes(author.id);
          }
        }
      }

      return newLike;
    },
    delete: async ({ where }: { where: { id: string } }) => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const likeIndex = mockLikes.findIndex((like) => like.id === where.id);
      if (likeIndex === -1) throw new Error("Like not found");

      const deletedLike = mockLikes.splice(likeIndex, 1)[0];

      // Update post or comment likes count
      if (deletedLike.postId) {
        const post = mockPosts.find((p) => p.id === deletedLike.postId);
        if (post) {
          post.likes = Math.max(0, post.likes - 1);
          // Update author's total likes
          const author = mockUsers.find((user) => user.id === post.authorId);
          if (author) {
            author.totalLikes = calculateUserTotalLikes(author.id);
          }
        }
      }
      if (deletedLike.commentId) {
        const comment = mockComments.find(
          (c) => c.id === deletedLike.commentId
        );
        if (comment) {
          comment.likes = Math.max(0, comment.likes - 1);
          // Update author's total likes
          const author = mockUsers.find((user) => user.id === comment.authorId);
          if (author) {
            author.totalLikes = calculateUserTotalLikes(author.id);
          }
        }
      }

      return deletedLike;
    },
  },
};
