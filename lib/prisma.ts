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
  icon: string;
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

export enum MAJOR_ENUM {
  PREMIER_LEAGUE = "Premier League",
  LA_LIGA = "La Liga",
  BUNDESLIGA = "Bundesliga",
  SERIE_A = "Serie A",
  FRANCE_LEAGUE_1 = "Ligue 1",
  UEFA = "UEFA Champions League",
  UEFA_EUROPA_LEAGUE = "UEFA Europa League",
  CONFERENCE_LEAGUE = "Conference League",
  THAI_LEAGUE = "Thai League",
  WORLD_CUP = "World Cup",
  ASIAN_CUP = "Asian Cup",
  OLYMPIC = "Olympic",
  AFF_CUP = "AFF Cup",
  EURO = "Euro",
  ASIA_CUP = "Asia Cup",
  AFC_CHAMPIONS_LEAGUE = "AFC Champions League",
  AFRICAN_NATIONS_CUP = "African Nations Cup",
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
  source?: string[];
  major: MAJOR_ENUM;
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
    id: "cat0",
    name: "หน้าแรก",
    description: "หน้าแรก",
    path: "/",
    icon: "Home",
  },
  {
    id: "cat6",
    name: "เว็บบอร์ด",
    description: "เว็บบอร์ด",
    path: "/board",
    icon: "MessageCircle",
  },
  {
    id: "cat11",
    name: "ตารางคะแนน",
    description: "ตารางคะแนน",
    path: "/score-table",
    icon: "Table",
  },
  {
    id: "cat1",
    name: "ผลบอลย้อนหลัง",
    description: "ผลบอลย้อนหลัง",
    path: "/history-score",
    icon: "History",
  },
  {
    id: "cat2",
    name: "โปรแกรมถ่ายทอดสด",
    description: "โปรแกรมถ่ายทอดสด",
    path: "/live-stream",
    icon: "Tv",
  },
  {
    id: "cat3",
    name: "โปรแกรมถ่ายบอลล่วงหน้า",
    description: "โปรแกรมถ่ายบอลล่วงหน้า",
    path: "/live-stream-next",
    icon: "Calendar",
  },
  {
    id: "cat4",
    name: "สรุปผลย้อนหลัง",
    description: "สรุปผลย้อนหลัง",
    path: "/history-score-summary",
    icon: "List",
  },
  {
    id: "cat5",
    name: "คอลัมป์+สกู๊ป",
    description: "คอลัมป์+สกู๊ป",
    path: "/forum",
    icon: "FileText",
  },
  {
    id: "cat7",
    name: "ประวัติ soccersex",
    description: "ประวัติ soccersex",
    path: "/history-soccersex",
    icon: "BookOpen",
  },
  {
    id: "cat8",
    name: "ติดต่อโฆษณา",
    description: "ติดต่อโฆษณา",
    path: "/contact-ad",
    icon: "Mail",
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
    description:
      "แลกเปลี่ยนและแสดงความคิดเห็น วิพากษ์ประเด็นร้อน ชอนไชเรื่องกังขาเฉพาะเรื่องบอลเท่านั้น",
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
    description:
      "พูดคุยถึงเรื่องข่าวสารบอลไทยและเชีย สำหรับผู้คลั่งไคล้บอลไทยและเอเชียเข้าสายเลือด",
    topic_count: 8,
    answer_count: 18,
    answer_current: {
      id: "answer3",
      date: new Date("2025-06-22T09:15:00Z"),
      author: "สุริยา สุริยะกุล",
    },
    path: "/board/asia-news",
  },
  {
    id: "board4",
    name: "บอร์ดวาไรตี้",
    description:
      "นำเสนอสาระน่ารู้ต่างๆที่ไม่เกี่ยวข้องกับฟุตบอลแต่ต้องไม่หมิ่นเบื้องสูงหรือทำลายชื่อเสียงบุคคลใดๆ",
    topic_count: 8,
    answer_count: 18,
    answer_current: {
      id: "answer4",
      date: new Date("2025-06-23T10:30:00Z"),
      author: "สุริยา สุริยะกุล",
    },
    path: "/board/variety",
  },
  {
    id: "board5",
    name: "บอร์ดฝากร้าน",
    description:
      "เป็นบอร์ดที่ให้สมาชิกโปรโมทสินค้าและบริการของตัวเองไม่ว่าจะเป็นหน้าร้าน facebook, IG, tiktok และอื่นๆหรือรับสมัครงาน,หาดี้,รับซื้อสินค้าที่ต้องการแต่ทุกๆอย่างต้องไม่ผิดกฏหมายเช่นการพนัน, ยาเสพติด, ของละเมิดลิขสิทธิ์หรือของเถื่อนที่กฏหมายไม่อนุญาต",
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
    title: "เนโต้' ยันได้ร่วมสโมสรโลกดีกว่าพักร้อน",
    content: `เปโดร เนโต้ ปีก เชลซี ยืนยันสำหรับเขาการเข้าร่วมสโมสรโลก คือเรื่องดีกว่าการได้พักร้อน แต่ยอมรับทีมกระหายชัยชนะน้อยกว่าคู่แข่ง จนแพ้ ฟลาเมงโก้ 3-1 ในนัดล่าสุด ทัวร์นาเมนต์ช่วงกลางปีที่สหรัฐอเมริกา เจอเสียงวิจารณ์ว่าเบียดบังเวลาพักจนผู้เล่นบางรายไม่ต้องการเข้าร่วม แต่ เนโต้ ไม่คิดแบบนั้น
              "แน่นอน 100 เปอร์เซนต์" แข้งโปรตุเกสวัย 25 ปี ตอบคำถาม อยากช่วยทีมร่วมรายการ มากกว่าไปพักร้อนที่ชายหาดหรือไม่
              "เราต้องมีความสุขและขอบคุณที่ได้โอกาสเล่นรายการนี้ ผู้เล่นหลายคนอยากมาอยู่ในที่ของผม มากกว่าไปที่อื่น"
              เนโต้ ยิงประตูให้ "สิงห์บลูส์" ประเดิมนัดแรกชนะ แอลเอ เอฟซี 2-0 และเกมล่าสุดเบิกอีกสกอร์เพื่อนำก่อน แต่โดน ฟลาเมงโก้ ทีมแกร่งลีกบราซิล พลิกแซง
              "เรื่องผิดพลาดทั้งหลายเกิดขึ้นในครึ่งหลัง ครึ่งแรกคู่แข่งอาจครองบอลมากกว่า แต่เราเป็นฝ่ายสร้างโอกาส" เนโต้ กล่าวต่อ
              "ครึ่งหลังเราพยายามเพรสซิ่งสูงขึ้นเล็กน้อย เราเริ่มต้นได้ดี แต่ข้อแตกต่าง อาจเป็นเรื่องความกระหายชัยชนะที่คู่แข่งมีมากกว่าเรา แล้วหลังจากเราโดนใบแดง ผมก็คิดว่าเกมมันจบแล้ว"`,
    authorId: "admin1",
    categoryId: "cat4",
    images: ["/images/FzWi1kl.png"],
    likes: 25,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
    major: MAJOR_ENUM.PREMIER_LEAGUE,
  },
  {
    id: "post2",
    title: "ฟีฟ่าสอบ 'กัปตันปาชูก้า' เหยียดผิว 'รูดิเกอร์'",
    content: `
    ชาบี อลองโซ่ กุนซือ เรอัล มาดริด เปิดเผย ฟีฟ่า กำลังสอบสวนกรณี อันโตนิโอ รูดิเกอร์ กองหลังลูกทีมกล่าวหาว่า กุสตาโว่ คาบรัล กัปตันฝั่ง ปาชูก้า ใช้ถ้อยคำเหยียดผิว
    สโมสรโลกรอบแบ่งกลุ่ม วันอาทิตย์ที่ผ่านมา "ราชัน" เสีย ราอูล อเซนซิโอ เพราะใบแดงตั้งแต่ 7 นาที ยังเอาชนะคู่แข่งจากเม็กซิโก 3-1
    ช่วงทดเจ็บเกมที่เมือง ชาร์ล็อตต์ สหรัฐอเมริกา รูดิเกอร์ ดาวเตะเยอรมัน ปะทะคารมบางอย่างกับ คาบรัล แล้วร้องเรียนต่อผู้ตัดสินในสนาม
    รามอน อาบัตติ เปาชาวบราซิล เป่าจบเกมโดยไม่แจกใบลงโทษฝั่งใด พร้อมส่งสัญลักษณ์มือ แจ้งใช้มาตรการป้องกันการเหยียดผิว
    "รูดิเกอร์ บอกเราว่ามีบางอย่างเกิดขึ้น และกระบวนการที่ ฟีฟ่า กำหนดไว้ถูกบังคับใช้" อลองโซ่ เปิดเผยหลังแข่ง
    "ตอนนี้พวกเขากำลังสอบสวนเหตุการณ์ เราเชื่อในสิ่งที่ รูดิเกอร์ บอก มันเป็นเรื่องที่รับไม่ได้"
    คาบรัล แนวรับอาร์เจนไตน์วัย 39 ปี ชี้แจงบ้าง: "มันไม่มีอะไรที่เป็นการเหยียดผิว ผมแค่ใช้คำหยาบกับเขา แบบที่เราพูดกันใน อาร์เจนติน่า เท่านั้น"
    "พวกเขาไม่สามารถลงโทษผมจากคำนั้น ทั้งเพื่อนร่วมทีมผม และผู้เล่นฝั่ง มาดริด ที่ยืนอยู่ข้างๆ ล้วนไม่มีใครได้ยินคำเหยียดผิว"
    `,
    authorId: "user1",
    categoryId: "cat2",
    images: ["/images/FIzbAH7.png", "/images/FIzbkfR.png"],
    likes: 42,
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06"),
    major: MAJOR_ENUM.LA_LIGA,
  },
  {
    id: "post7",
    title: "หนุนหลังพี่แรช! 'การ์นาโช่' ใส่เสื้อวิลล่าลงโซเชียล",
    content: `อเลฮานโดร การ์นาโช่ ปีกเด็กปั้น แมนเชสเตอร์ ยูไนเต็ด โพสต์โซเชียลรูปตัวเองใส่เสื้อ แอสตัน วิลล่า เบอร์ 9 ของ มาร์คัส แรชฟอร์ด
      สุดสัปดาห์ที่ผ่านมา การ์นาโช่ ลงไอจีอัลบั้มภาพทริปพักร้อนที่สเปน ซึ่งหนึ่งในนั้นคือรูปใส่เสื้อเหย้า "สิงห์ผงาด" หันหลังให้กล้อง โดยมีรถเฟอร์รารี่ กับ ลัมโบร์กินี่ เป็นแบ็คกราวน์
      แข้งอาร์เจนไตน์วัย 20 ปี เหลือสัญญาถึง 2028 แต่กำลังตกเป็นข่าวย้ายออก "ปีศาจแดง" เพราะไม่อยู่ในแผน รูเบน อโมริม
      อย่างไรก็ตาม แหล่งข่าวของ บีบีซี สื่ออังกฤษระบุ โพสต์ล่าสุด การ์นาโช่ ไม่เกี่ยวกับดีลย้ายไป วิลล่า แต่อย่างใด โดยแค่ต้องการสนับสนุน แรชฟอร์ด เท่านั้น
      แรชฟอร์ด อีกหนึ่งแนวรุกลูกหม้อ เหลือสัญญาถึง 2028 เช่นกัน แต่ก็กำลังเจอสถานการณ์อนาคตไม่แน่นอน ภายหลังเพิ่งจบการยืมตัวที่ วิลล่า ปาร์ค
      "น้องชายผมเอง" แรชฟอร์ด ดาวเตะอังกฤษวัย 27 ปี โผล่ไปคอมเมนต์ใต้โพสต์ พร้อมอีโมจีรูปหัวใจ
      `,
    authorId: "user4",
    categoryId: "cat6",
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-11"),
    images: ["/images/FInlp4f.png"],
    likes: 55,
    source: [
      "https://www.instagram.com/p/DLNmYRVNiyc/?utm_source=ig_embed&ig_rid=792743de-d527-450f-9c7d-04ab00c26b06",
    ],
    major: MAJOR_ENUM.PREMIER_LEAGUE,
  },
  {
    id: "post8",
    title: "'ไคเซโด้' ปลุกสิงห์คืนฟอร์มนัดสุดท้ายรอบแบ่งกลุ่ม",
    content: `
      มอยเซส ไคเซโด้ กองกลางของเชลซี ปลุกเพื่อนร่วมทีมต้องงัดฟอร์มออกมาให้ได้ในเกมหน้าหลังพลิกพ่าย ฟลาเมงโก้ 1-3 ในศึกคลับ เวิลด์ คัพ รอบแบ่งกลุ่ม เมื่อคืนนี้
      แม้ได้ประตูนำก่อนจากเปโดร เนโต้ แต่ "สิงห์บลูส์" ครองเกมไม่ได้แล้วโดนทีมจากแดนแซมบ้า ไล่ยิงแซงชนะในครึ่งหลัง
      ไม่เท่านั้น ทีมของเอ็นโซ่ มาเรสก้า เหลือนักเตะเพียง 10 คน ภายหลังจากนิโคลัส แจ็คสัน โดนไบแดงไล่ออกจากสนามด้วย
      มิดฟิลด์เอกวาดอร์ กล่าวว่า "คุณต้องมีสมาธิตลอดทั้งเกมเพราะเพียงแค่คุณปิดสวิตช์เพียงวินาทีเดียว เรื่องแบบนี้มันก็เกิดขึ้นได้เลย"
      "เราจำเป็นต้องตอบโต้ ตอนนี้เราโฟกัสไปกับเกมหน้า มันจะเป็นเกมยาก แต่เราก็จะเตรียมพร้อมตั้งแต่วันพรุ่งนี้"
      "ในครึ่งหลังนั้น พวกเขาเล่นดีขึ้นมาก พวกเขาเพรสได้ดีขึ้น เราโฟกัสหาพื้นที่ว่าง แต่แน่นอนว่ามันยาก"
      "ทีมกำลังเล่นได้ดี แต่คุณจำเป็นต้องมีสมาธิตลอด 95 นาที หากไม่แล้ว คุณอาจแพ้เกมไปเลยเมื่อเสียสมาธิไปวินาทีเดียว"
      ทั้งนี้ ตัวแทนจากพรีเมียร์ลีกมี 3 คะแนน และจะลงสนามพบเอสเปรานซ์ เดอ ทูนิส ทีมจากตูนีเซีย ในเกมนัดสุดท้ายของรอบแบ่งกลุ่ม
      `,
    authorId: "user5",
    categoryId: "cat5",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    images: ["/images/Gt4vEHEXQAALcom.jpg"],
    likes: 3,
    major: MAJOR_ENUM.PREMIER_LEAGUE,
  },
  {
    id: "post9",
    title: "'โอบี มิเกล' สับสิงห์ไร้ผู้นำ",
    content: `จอห์น โอบี มิเกล อดีตกองกลางของเชลซี วิจารณ์ทีมของรุ่นน้องไม่มีความเป็นผู้นำ ระหว่างพ่าย ฟลาเมงโก้ 1-3 ศึกฟีฟ่า คลับ เวิลด์ คัพ
      "สิงห์บลูส์" พลิกล็อคปราชัยทีมจากแดนกาแฟ หลังโดนยิงแซงในช่วงครึ่งหลัง โดยพวกเขาเหลือนักเตะ 10 คน จากกรณีนิโคลัส แจ็คสัน โดนไล่ออก
      โอบี มิเกล กล่าวว่า "เมื่อคุณพูดถึงพวกผู้นำ คนที่สามารถอยู่ในสนามและคอนโทรลเกมรวมถึงเพื่อนร่วมทีมได้"
      "นี่คือสิ่งที่เชลซี เคยมีอย่างตอนที่นักเตะแบบจอห์น เทอร์รี่ และดิดิเย่ร์ ดร็อกบา อยู่กับสโมสร"
      "ผู้คนที่สามารถเรียกบรรดานักเตะรอบข้างมาแล้วบอกว่า "ฟังนะ ใจเย็นลงหน่อยพวก"
      "แต่ผมไม่เห็นอะไรแบบนั้นเลยที่นี่ ผมไม่เห็นบรรดาผู้นำ ผมเห็นแค่พวกนักเตะที่กำลังก่อความผิดพลาด"
      "จากนั้นนิโคลัส แจ็คสัน ก็ลงมาแล้วโดนใบแดง มันยิ่งทำให้จากย่ำแย่เป็นเลวร้ายเลยแหล่ะ"
      `,
    authorId: "user6",
    categoryId: "cat6",
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
    images: ["/images/obi_mikel.avif"],
    likes: 29,
    major: MAJOR_ENUM.PREMIER_LEAGUE,
  },
  {
    id: "post10",
    title: "ลือสิงห์ชั่งใจปล่อย 'แจ๊คสัน' พ้นทีม-ม้าลาย,นาโปลีถกตัวแทน",
    content: `สื่อจากอิตาลีรายงานว่า เชลซี พิจารณาที่จะปล่อย นิโคลัส แจ๊คสัน ออกจากทีม ทำให้ ยูเวนตุส และ นาโปลี ต่างติดต่อตัวแทนของนักเตะเพื่อเริ่มต้นพูดคุยเบื้องต้น
      แจ๊คสัน เพิ่งโดนเสียงวิจารณ์มาสดๆร้อนๆ กับการโดนใบแดงอีกครั้งแม้เพิ่งลงสนามได้แค่ 4 นาทีในเกมที่ เชลซี พ่ายต่อ ฟลาเมนโก้ เมื่อคืนวันศุกร์ที่ผ่านมา
      แล้วข่าวจาก จานลูก้า ดิ มาร์ซิโอ ระบุว่า เชลซี ไม่ได้มองเขาเป็นนักเตะที่แตะต้องไม่ได้อีกต่อไป และกำลังพิจารณาถึงการปล่อยเขาออกจากทีม
      นอกเหนือจากนี้ ยูเวนตุส ยังได้เริ่มต้นการพูดคุยแล้วเพื่อศึกษาความเป็นไปได้ในการคว้าดาวเตะวัย 24 ปีไปร่วมทีม
      แจ๊คสัน ย้ายจาก บีญาร์เรอัล มาอยู่กับ เชลซี ตั้งแต่ปี 2023 ด้วยค่าตัว 32 ล้านปอนด์และผ่านการทำไป 30 ประตูจากการลงสนาม 80 เกม
      ยูเวนตุส ต้องการกองหน้าคนใหม่แต่พวกเขาจำเป็นต้องหาทางปล่อย ดูซาน วลาโฮวิช ออกจากทีมก่อน
      กลับกัน นาโปลี หมายตา โลเรนโซ่ ลุคก้า และ ดาร์วิน นูนเญซ ไว้มากกว่าแต่พวกเขายังขอข้อมูลเกี่ยวกับอนาคต แจ๊คสัน ผ่านทางตัวแทนนักเตะ
      รายงานก่อนหน้านี้ระบุว่า นาโปลี พร้อมที่จะยื่นข้อเสนอมากกว่า 40 ล้านยูโรเพื่อแลกกับ นูนเญซ ที่เป็นเป้าหมายหลักสำหรับการเติมแดนหน้า
      `,
    authorId: "user7",
    categoryId: "cat2",
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14"),
    images: ["/images/0_Nicolas-Jackson.jpg"],
    likes: 47,
    major: MAJOR_ENUM.SERIE_A,
  },
  {
    id: "post11",
    title: "'ป็อกบา' ดีลโมนาโกฉลุยเตรียมเซ็นสัญญา 2 ปี",
    content: `
    ปอล ป็อกบา ใกล้ที่จะได้กลับสู่วงการฟุตบอลอาชีพอีกครั้งด้วยหลังตอบตกลงสัญญา 2 ปีกับ โมนาโก
    อดีตกองกลาง แมนเชสเตอร์ ยูไนเต็ด และ ยูเวนตุส ถูกแบน 4 ปีจากกรณีใช้สารกระตุ้นหลัง อย่างไรก็ตาม โทษแบนดังกล่าวได้รับการปรับลดเหลือเพียง 18 เดือน
    ในคำพิพากษาขั้นสุดท้ายของศาลอนุญาโตตุลาการกีฬา ยืนยันว่า ป็อกบา ได้ใช้ DHEA โดยไม่ได้ตั้งใจ ซึ่งเป็นสารที่ช่วยเพิ่มฮอร์โมน เทสโทสเตอโรน ที่อยู่ในรายชื่อสารต้องห้ามของ WADA
    อย่างไรก็ตาม คำตัดสินดังกล่าวระบุว่า DHEA ออกฤทธิ์กับผู้หญิงเท่านั้น
    หลังจากพ้นโทษแบนอย่างเป็นทางการเมื่อต้นปีนี้ เขาก็ตกเป็นข่าวว่าจะกลับมาลงสนามอีกครั้งในช่วงซัมเมอร์นี้ และตามรายงานของสื่อฝรั่งเศสอย่าง Le Parisien ระบุว่าเขาตกลงทำข้อตกลงกับ โมนาโก ได้แล้ว
    รายงานระบุว่าเขา "ยอมเสียสละค่าเหนื่อยจำนวนมาก" เพื่อตกลงเงื่อนไขกับทีมจากลีกเอิง เพื่อให้ได้กลับมาลงสนามอีกครั้ง
    เชื่อกันว่าทั้งสองฝ่ายได้หารือกันมาหลายวันแล้ว ก่อนที่จะตกลงเรื่องการเงินกันได้ในที่สุดเมื่อวันอาทิตย์
    รายงานยังระบุเพิ่มเติมด้วยว่า ป็อกบา ได้เดินทางไปพบกับประธานสโมสรในช่วงที่ผ่านมา และได้เริ่มวางแผนชีวิตและการดำเนินการต่างๆ ในการย้ายทีม ซึ่งรวมถึงรายละเอียดต่างๆ เช่น การหาคนขับรถคนใหม่ สถานที่พักอาศัย และมาตรการรักษาความปลอดภัยที่เขาจะจัดเตรียมไว้
    `,
    authorId: "user8",
    categoryId: "cat3",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    images: ["/images/99626301-0-image-m-5_1750657861056.avif"],
    likes: 52,
    major: MAJOR_ENUM.FRANCE_LEAGUE_1,
  },
  {
    id: "post12",
    title: "พร้อมลุย! ‘อิเคดะ’ ยันเป้าหมายพา ชบาแก้ว เข้ารอบสุดท้ายเอเชีย",
    content: `
    “อิเคดะ” แถลง ชบาแก้ว พร้อมลุยศึกชิงแชมป์เอเชีย 2026 รอบคัดเลือก ที่เชียงใหม่ เตรียมดูฟอร์มคู่แข่งนัดแรก เพื่อให้พร้อมที่สุด ยันเป้าหมายเข้ารอบสุดท้ายให้ได้

วันที่ 22 มิถุนายน 2568 เวลา 14.15 น. ณ สนามกีฬาสมโภชเชียงใหม่ 700 ปี จังหวัดเชียงใหม่ ฟุตบอลหญิงทีมชาติไทย เข้าร่วมงานแถลงข่าวความพร้อมก่อนการแข่งขันฟุตบอลหญิงชิงแชมป์เอเชีย 2026 รอบคัดเลือก (AFC Women's Asian Cup 2026 Qualifiers) กลุ่ม B ระหว่างวันที่ 23 มิถุนายน - 5 กรกฎาคม 2568 ณ สนามกีฬาสมโภชเชียงใหม่ 700 ปี

ภายในงานมี “ฟูโตชิ อิเคดะ” หัวหน้าผู้ฝึกสอนฟุตบอลหญิงทีมชาติไทย พร้อมด้วย หัวหน้าผู้ฝึกสอนอีก 4 ชาติ ประกอบด้วย อินเดีย, มองโกเลีย, ติมอร์ เลสเต และ อิรัก เข้าร่วมงานแถลงข่าว

“ฟูโตชิ อิเคดะ” กล่าวว่า “อันดับแรกต้องขอบคุณทุกๆ คนที่เชียร์ทีมชาติไทยของเราอยู่นะครับ เราได้เข้าแคมป์เก็บตัวฝึกซ้อมที่จังหวัดเชียงใหม่มาตั้งแต่วันที่ 13 มิถุนายน เพื่อที่จะแข่งขันในรายการนี้และหวังที่จะทำผลงานให้ได้ดีที่สุดครับ”

“บรรยากาศในทีมตอนนี้ถือว่าดีมากๆ ทุกคนมีเป้าหมายเดียวกันที่ชัดเจนคือเข้ารอบนี้ไปเล่นรอบสุดท้ายให้ได้ รวมถึงเราเล่นที่ประเทศไทยด้วย ซึ่งเป็นบ้านของเรา ทำให้นักเตะมีกำลังใจและแรงผลักดันที่จะสู้มากยิ่งขึ้น”

“สำหรับแมตช์แรกที่จะถึงนี้ทีมชาติไทยไม่มีแข่ง เราจะดูฟอร์มของทีมอื่นๆ เพื่อที่จะมาเตรียมตัวของเราให้พร้อมที่สุด”

สำหรับ ฟุตบอลหญิงทีมชาติไทย อยู่ในกลุ่ม บี ร่วมกับ อินเดีย, มองโกเลีย, ติมอร์ เลสเต และ อิรัก ซึ่งรายการนี้จะแข่งแบบพบกันหมด เพื่อนำทีมแชมป์กลุ่มทั้งหมด 8 กลุ่ม มารวมกับอีก 4 ชาติที่ยืนรออยู่แล้ว ได้แก่ ออสเตรเลีย (เจ้าภาพ), จีน (แชมป์เก่า), เกาหลีใต้ (รองแชมป์เก่า) และ ญี่ปุ่น (อันดับ 3 ครั้งที่แล้ว) เพื่อเข้าไปเล่นรอบสุดท้าย ที่ประเทศออสเตรเลีย ต่อไป
    `,
    authorId: "user9",
    categoryId: "cat4",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
    images: ["/images/IMG_2053.jpg", "/images/IMG_2055.jpg"],
    likes: 52,
    major: MAJOR_ENUM.THAI_LEAGUE,
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
