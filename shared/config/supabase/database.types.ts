export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          title: string
          id: string
          icon?: string
        }
        Insert: {
          title: string
          id?: string
          icon?: string | null
        }
        Update: {
          title?: string
          id?: string
          icon?: string | null
        }
      }
      transactions: {
        Row: {
          id: string
          created_at: string
          name: string
          value: number
          category_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          name?: string
          value: number
          category_id?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          value?: number
          category_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
