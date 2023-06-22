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
      class_codes: {
        Row: {
          class_code: number
          created_at: string | null
          sherpas: string | null
        }
        Insert: {
          class_code?: number
          created_at?: string | null
          sherpas?: string | null
        }
        Update: {
          class_code?: number
          created_at?: string | null
          sherpas?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      sherpas: {
        Row: {
          created_at: string | null
          first_name: string
          id: string
          last_name: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          first_name: string
          id?: string
          last_name?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string
          id?: string
          last_name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sherpas_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      students: {
        Row: {
          avatar_url: string | null
          class_codes: number | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          user_id: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          class_codes?: number | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          user_id?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          class_codes?: number | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          user_id?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "students_class_codes_fkey"
            columns: ["class_codes"]
            referencedRelation: "class_codes"
            referencedColumns: ["class_code"]
          },
          {
            foreignKeyName: "students_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
