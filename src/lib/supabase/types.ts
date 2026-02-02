export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      contact_inquiries: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          inquiry_type: string;
          message: string;
          status: 'new' | 'read' | 'replied' | 'closed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone?: string | null;
          inquiry_type?: string;
          message: string;
          status?: 'new' | 'read' | 'replied' | 'closed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          phone?: string | null;
          inquiry_type?: string;
          message?: string;
          status?: 'new' | 'read' | 'replied' | 'closed';
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          subscribed_at: string;
          is_active: boolean;
          source: string;
        };
        Insert: {
          id?: string;
          email: string;
          subscribed_at?: string;
          is_active?: boolean;
          source?: string;
        };
        Update: {
          id?: string;
          email?: string;
          subscribed_at?: string;
          is_active?: boolean;
          source?: string;
        };
        Relationships: [];
      };
      admission_inquiries: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          program_interest: string | null;
          current_qualification: string | null;
          message: string | null;
          created_at: string;
          status: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone: string;
          program_interest?: string | null;
          current_qualification?: string | null;
          message?: string | null;
          created_at?: string;
          status?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          phone?: string;
          program_interest?: string | null;
          current_qualification?: string | null;
          message?: string | null;
          created_at?: string;
          status?: string;
        };
        Relationships: [];
      };
      event_registrations: {
        Row: {
          id: string;
          event_id: string;
          full_name: string;
          email: string;
          phone: string | null;
          registered_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          full_name: string;
          email: string;
          phone?: string | null;
          registered_at?: string;
        };
        Update: {
          id?: string;
          event_id?: string;
          full_name?: string;
          email?: string;
          phone?: string | null;
          registered_at?: string;
        };
        Relationships: [];
      };
      page_views: {
        Row: {
          id: string;
          page_path: string;
          referrer: string | null;
          user_agent: string | null;
          ip_address: string | null;
          viewed_at: string;
        };
        Insert: {
          id?: string;
          page_path: string;
          referrer?: string | null;
          user_agent?: string | null;
          ip_address?: string | null;
          viewed_at?: string;
        };
        Update: {
          id?: string;
          page_path?: string;
          referrer?: string | null;
          user_agent?: string | null;
          ip_address?: string | null;
          viewed_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

// Helper types for table access
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];
