# ☕ Vibe Coding - Java Learning Platform

Platform pembelajaran interaktif untuk belajar bahasa pemrograman Java dengan visualisasi dan animasi yang menarik.

## 🚀 Features

- ✅ **9 Materi Pembelajaran Lengkap**
  - Tipe Data
  - Variabel
  - Operator
  - Control Flow
  - Perulangan (For & While)
  - Method
  - Array (1D & 2D)
  - ArrayList
  - Sorting & Searching

- ✅ **Interactive Demos** - Setiap materi dilengkapi demo interaktif
- ✅ **Visualisasi Real-time** - Animasi untuk memahami konsep
- ✅ **Code Examples** - Contoh kode Java dengan syntax highlighting
- ✅ **View Counter** - Tracking jumlah views untuk setiap halaman
- ✅ **Responsive Design** - Optimal untuk desktop dan mobile
- ✅ **Notion-style Sidebar** - Navigasi mudah antar materi
- ✅ **Sticky Header Mobile** - Header tetap terlihat saat scroll

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
vibe-code/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── api/                 # API routes
│   │   └── views/           # View counter API
│   ├── tipe-data/           # Tipe Data page
│   ├── variabel/            # Variabel page
│   ├── operator/            # Operator page
│   ├── control-flow/        # Control Flow page
│   ├── perulangan/          # Perulangan page
│   │   └── components/      # For & While components
│   ├── method/              # Method page
│   ├── array/               # Array page
│   │   └── components/      # Array 1D & 2D components
│   ├── arraylist/           # ArrayList page
│   └── sorting-searching/   # Sorting & Searching page
│
├── components/              # Reusable components
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── PageLayout.tsx       # Layout wrapper
│   ├── ViewCounter.tsx      # View counter display
│   ├── BackButton.tsx       # Back navigation
│   ├── ContentCard.tsx      # Content wrapper
│   ├── CodeExample.tsx      # Code display
│   ├── InteractiveDemo.tsx  # Demo wrapper
│   └── MemoryVisualization.tsx
│
├── constants/               # Static data
│   └── menu-items.ts        # Navigation menu data
│
├── hooks/                   # Custom React hooks
│   └── index.ts             # useBodyScrollLock, useCurrentPage, usePageViews, etc.
│
├── types/                   # TypeScript types
│   └── index.ts             # Common interfaces
│
├── utils/                   # Helper functions
│   └── index.ts             # Validation, formatting, etc.
│
├── docs/                    # Documentation
│   ├── COMPONENTS.md        # Component guidelines
│   └── VIEW_COUNTER.md      # View counter feature docs
│
└── public/                  # Static assets
```

## 🎯 Architecture Principles

### 1. **Separation of Concerns**
- **Pages**: Hanya fokus pada layout dan orchestration
- **Components**: Reusable UI components
- **Hooks**: Business logic dan side effects
- **Utils**: Pure functions untuk transformasi data
- **Constants**: Static data dan configuration

### 2. **Code Organization**
- Setiap page memiliki struktur yang konsisten
- Complex pages menggunakan sub-components di `/components`
- Shared logic di-extract ke custom hooks
- Type safety dengan TypeScript interfaces

### 3. **Responsive Design**
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Sidebar: Overlay di mobile, fixed di desktop
- Typography: Scales responsively

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/ZGE26/vibe-coding-alpro.git

# Install dependencies
cd vibe-code
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Adding New Content

### 1. Create New Page

```typescript
// app/new-topic/page.tsx
"use client";

import PageLayout from "@/components/PageLayout";
import ContentCard from "@/components/ContentCard";
import CodeExample from "@/components/CodeExample";

export default function NewTopicPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            🎯 New Topic
          </h1>
          
          <ContentCard title="Introduction" icon="💡">
            <p>Your content here...</p>
          </ContentCard>
        </div>
      </div>
    </PageLayout>
  );
}
```

### 2. Add to Menu

```typescript
// constants/menu-items.ts
export const MENU_ITEMS: MenuItem[] = [
  // ... existing items
  {
    id: 10,
    title: "New Topic",
    href: "/new-topic",
    icon: "🎯",
    description: "Description here",
  },
];
```

### 3. Custom Hooks

```typescript
// hooks/useYourHook.ts
export function useYourHook() {
  // Your logic here
}
```

## 🎨 Styling Guidelines

### Color Palette
- **Primary**: Indigo (sidebar, buttons)
- **Backgrounds**: Gradient dari pastel colors
- **Text**: Gray-900 (high contrast)
- **Accents**: Per-page gradients

### Component Styling
```typescript
// Responsive font sizes
text-2xl sm:text-3xl lg:text-4xl

// Responsive padding
px-4 sm:px-6 lg:px-8

// Responsive margin
mb-6 sm:mb-8
```

## 📊 View Counter Feature

Aplikasi ini dilengkapi dengan view counter untuk tracking jumlah pengunjung setiap halaman.

### Architecture
- **API Route**: `/api/views` - GET dan POST untuk tracking views
- **Custom Hook**: `usePageViews` - Automatic tracking on component mount
- **Component**: `ViewCounter` - Display view count dengan icon 👁️

### Usage
```tsx
import ViewCounter from "@/components/ViewCounter";

<ViewCounter pageName="your-page" />
```

### Current Limitations
- Menggunakan **in-memory storage** (data reset saat server restart)
- Cocok untuk development dan demo
- Tidak track unique visitors

### Production Upgrade
Untuk production, upgrade ke database:
- Vercel KV (Redis)
- PostgreSQL dengan Prisma
- MongoDB
- Supabase

📖 **Full documentation**: [docs/VIEW_COUNTER.md](./docs/VIEW_COUNTER.md)

## 🤝 Contributing

Contributions are welcome! Untuk menambahkan fitur:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**ZGE26**
- GitHub: [@ZGE26](https://github.com/ZGE26)
- Repository: [vibe-coding-alpro](https://github.com/ZGE26/vibe-coding-alpro)

## 🙏 Acknowledgments

- Next.js team untuk framework yang amazing
- Tailwind CSS untuk utility-first CSS
- Komunitas developer Indonesia

---

Made with ❤️ for Indonesian developers learning Java
