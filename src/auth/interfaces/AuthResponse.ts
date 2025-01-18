import { Session, User } from "@supabase/supabase-js";

export type DataType = AuthResponse | null;

interface AuthResponse {
  session: Session | null;
  user: User | null;
}
