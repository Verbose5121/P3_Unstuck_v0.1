export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      user_details: {
        Row: {
          created_at: string | null
          first_name: string | null
          last_name: string | null
          user_id: number
          username: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          last_name?: string | null
          user_id?: number
          username?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          last_name?: string | null
          user_id?: number
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
