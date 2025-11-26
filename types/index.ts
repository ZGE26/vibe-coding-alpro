// Common types used across the application

export interface MenuItem {
  id: number;
  title: string;
  href: string;
  icon: string;
  description?: string;
}

export interface MemorySlot {
  address: string;
  variable: string;
  value: number | string | boolean;
  type: string;
}

export interface ValidationResult {
  valid: boolean;
  message: string;
}
