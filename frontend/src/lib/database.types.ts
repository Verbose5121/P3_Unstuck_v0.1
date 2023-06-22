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
      expeditions: {
        Row: {
          created_at: string | null
          expedition_title: string | null
          id: number
          topic_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          expedition_title?: string | null
          id?: number
          topic_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          expedition_title?: string | null
          id?: number
          topic_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expeditions_topic_id_fkey"
            columns: ["topic_id"]
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expeditions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
      topics: {
        Row: {
          created_at: string | null
          id: number
          join_code: number | null
          topic_string: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          join_code?: number | null
          topic_string?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          join_code?: number | null
          topic_string?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "topics_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_details: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          display_name: string | null
          first_name: string | null
          last_name: string | null
          user_id: string
          user_type: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          first_name?: string | null
          last_name?: string | null
          user_id: string
          user_type?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          first_name?: string | null
          last_name?: string | null
          user_id?: string
          user_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_details_user_id_fkey"
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
