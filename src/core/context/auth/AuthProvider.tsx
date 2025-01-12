import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "./../../services/supabase.service";
import { useNavigate } from "react-router";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [session, setSession] = useState<unknown>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION" || event === "SIGNED_IN") {
        navigate("/dashboard");
        setSession(session);
        console.log("data session", session);
      }

      if (event === "SIGNED_OUT") {
        navigate("/auth/login");
        setSession(null);
        console.log("data session", session);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}
