# View Counter Feature

## Overview
Fitur ini menampilkan jumlah pengunjung (view count) untuk setiap halaman pembelajaran di aplikasi Vibe Coding Alpro.

## Architecture

### 1. API Route (`/api/views`)
**File:** `app/api/views/route.ts`

API endpoint untuk tracking dan mengambil data view count:

- **GET `/api/views?page={pageName}`** - Mengambil jumlah views untuk halaman tertentu
- **POST `/api/views`** - Menambah counter untuk halaman yang dikunjungi

```typescript
// Example GET request
fetch('/api/views?page=variabel')

// Example POST request
fetch('/api/views', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ page: 'variabel' })
})
```

**Storage:** Menggunakan in-memory storage (`Record<string, number>`). Data akan reset saat server restart.

### 2. Custom Hook (`usePageViews`)
**File:** `hooks/index.ts`

Hook untuk automatic tracking dan fetching view count:

```typescript
const { views, loading } = usePageViews('variabel');
```

**Behavior:**
- Otomatis increment counter saat component mount
- Fetch jumlah views terbaru dari API
- Return `{ views: number, loading: boolean }`

### 3. ViewCounter Component
**File:** `components/ViewCounter.tsx`

React component untuk menampilkan view count dengan icon mata (👁️):

```tsx
<ViewCounter pageName="variabel" className="optional-class" />
```

**Features:**
- Loading state saat fetching data
- Format angka dengan `toLocaleString()` (e.g., 1,234)
- Responsive design
- Optional className untuk custom styling

## Implementation

Setiap halaman pembelajaran sudah dilengkapi dengan ViewCounter:

```tsx
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
    📦 Variabel di Java
  </h1>
  <ViewCounter pageName="variabel" />
</div>
```

### Pages with ViewCounter:
1. ✅ Tipe Data (`tipe-data`)
2. ✅ Variabel (`variabel`)
3. ✅ Operator (`operator`)
4. ✅ Control Flow (`control-flow`)
5. ✅ Perulangan (`perulangan`)
6. ✅ Method (`method`)
7. ✅ Array (`array`)
8. ✅ ArrayList (`arraylist`)
9. ✅ Sorting & Searching (`sorting-searching`)

## Limitations & Future Improvements

### Current Limitations:
- **In-Memory Storage**: Data hilang saat server restart
- **No Unique Users**: Menghitung total page loads, bukan unique visitors
- **No Persistence**: Tidak menyimpan data ke database

### Recommended Upgrades:
1. **Database Integration** (untuk production):
   - Vercel KV (Redis)
   - PostgreSQL
   - MongoDB
   - Supabase

2. **Analytics Enhancement**:
   - Track unique visitors (IP-based atau session-based)
   - Page view history (timestamps)
   - View duration
   - Geographic data

3. **UI Improvements**:
   - Animated counter transitions
   - Popularity badge (🔥 untuk halaman populer)
   - View trends (naik/turun)

## Example Database Integration

### Using Vercel KV (Redis):

```bash
npm install @vercel/kv
```

```typescript
// app/api/views/route.ts
import { kv } from '@vercel/kv';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  
  const views = await kv.get<number>(`views:${page}`) || 0;
  return Response.json({ page, views });
}

export async function POST(request: Request) {
  const { page } = await request.json();
  const views = await kv.incr(`views:${page}`);
  return Response.json({ page, views });
}
```

### Using PostgreSQL (Prisma):

```prisma
// prisma/schema.prisma
model PageView {
  id        Int      @id @default(autoincrement())
  page      String   @unique
  views     Int      @default(0)
  updatedAt DateTime @updatedAt
}
```

```typescript
// app/api/views/route.ts
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { page } = await request.json();
  
  const result = await prisma.pageView.upsert({
    where: { page },
    update: { views: { increment: 1 } },
    create: { page, views: 1 }
  });
  
  return Response.json({ page, views: result.views });
}
```

## Testing

Test view counter functionality:

1. Buka dev server: `npm run dev`
2. Kunjungi halaman: `http://localhost:3000/variabel`
3. Refresh beberapa kali
4. View count akan bertambah setiap refresh
5. Check API endpoint: `http://localhost:3000/api/views?page=variabel`

## Notes

- View counter increment terjadi di client-side (`useEffect` on mount)
- Tidak ada deduplication, setiap page load akan increment counter
- Cocok untuk demo dan development
- Untuk production, gunakan database dan implement proper analytics
