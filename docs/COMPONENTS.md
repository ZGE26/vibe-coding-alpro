# Component Guidelines

## Struktur Component

Setiap component harus mengikuti struktur ini:

```typescript
"use client"; // Jika butuh client-side functionality

import { /* dependencies */ } from "...";

interface ComponentProps {
  // Props definition
}

/**
 * Component description
 * @param props - Component props
 */
export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. Derived values
  const computed = useMemo(() => {}, []);
  
  // 3. Event handlers
  const handleClick = () => {};
  
  // 4. Effects
  useEffect(() => {}, []);
  
  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

## Naming Conventions

### Files
- **Components**: PascalCase.tsx (`Sidebar.tsx`)
- **Pages**: kebab-case/page.tsx (`tipe-data/page.tsx`)
- **Hooks**: camelCase.ts (`useBodyScrollLock.ts`)
- **Utils**: camelCase.ts (`validateVariable.ts`)
- **Types**: kebab-case.ts (`menu-items.ts`)

### Variables
- **Components**: PascalCase (`ContentCard`)
- **Functions**: camelCase (`validateVariableName`)
- **Constants**: UPPER_SNAKE_CASE (`MENU_ITEMS`)
- **Props**: camelCase (`isOpen`, `onClose`)

## Component Types

### 1. Layout Components
Wrapper components untuk page structure:
- `PageLayout` - Main layout dengan sidebar
- `ContentCard` - Card wrapper untuk content sections
- `InteractiveDemo` - Wrapper untuk interactive demos

### 2. UI Components
Reusable UI elements:
- `BackButton` - Navigation button
- `CodeExample` - Code display dengan syntax highlighting
- `MemoryVisualization` - Memory visualization component

### 3. Feature Components
Components untuk specific features:
- `Sidebar` - Navigation sidebar
- `Array1D`, `Array2D` - Array visualizations
- `ForLoop`, `WhileLoop` - Loop demonstrations

## Props Guidelines

### Required vs Optional
```typescript
interface Props {
  // Required
  title: string;
  
  // Optional
  description?: string;
  
  // With default
  isOpen?: boolean; // default: false
}
```

### Children Pattern
```typescript
interface Props {
  children: React.ReactNode;
}

// Usage
<Component>
  <ChildComponent />
</Component>
```

## State Management

### Local State
Use `useState` for component-specific state:
```typescript
const [isOpen, setIsOpen] = useState(false);
```

### Derived State
Use `useMemo` untuk computed values:
```typescript
const total = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);
```

### Side Effects
Use `useEffect` dengan dependency array yang jelas:
```typescript
useEffect(() => {
  // Effect
  return () => {
    // Cleanup
  };
}, [dependency]);
```

## Styling Guidelines

### Tailwind Classes Order
1. Layout (flex, grid)
2. Positioning (absolute, relative)
3. Sizing (w-, h-)
4. Spacing (p-, m-)
5. Typography (text-, font-)
6. Visual (bg-, border-)
7. Interactive (hover:, focus:)
8. Responsive (sm:, md:, lg:)

```typescript
<div className="
  flex items-center justify-between
  relative
  w-full h-16
  px-4 py-2
  text-lg font-bold
  bg-white border-2 border-gray-200 rounded-lg
  hover:bg-gray-50
  sm:px-6 lg:px-8
">
```

### Responsive Design
```typescript
// Mobile first
<div className="
  text-sm        // Mobile: 14px
  sm:text-base   // Tablet: 16px
  lg:text-lg     // Desktop: 18px
">
```

## Performance Best Practices

### 1. Lazy Loading
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

### 2. Memo untuk Expensive Renders
```typescript
export default memo(ExpensiveComponent);
```

### 3. useCallback untuk Event Handlers
```typescript
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

## Accessibility

### 1. Semantic HTML
```typescript
<button> // NOT <div onClick>
<nav>    // NOT <div className="nav">
<header> // NOT <div className="header">
```

### 2. ARIA Labels
```typescript
<button
  aria-label="Close sidebar"
  onClick={onClose}
>
  ✕
</button>
```

### 3. Keyboard Navigation
```typescript
<div
  tabIndex={0}
  onKeyPress={(e) => e.key === 'Enter' && handleAction()}
>
```

## Testing Guidelines

### Component Testing
```typescript
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## Documentation

### JSDoc Comments
```typescript
/**
 * Validates Java variable name according to naming conventions
 * 
 * @param name - Variable name to validate
 * @param isFinal - Whether it's a final (constant) variable
 * @returns Validation result with status and message
 * 
 * @example
 * ```typescript
 * const result = validateVariableName("myVar", false);
 * // { valid: true, message: "✅ Valid!" }
 * ```
 */
export function validateVariableName(
  name: string, 
  isFinal: boolean
): ValidationResult {
  // Implementation
}
```
