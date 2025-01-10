import { supabase } from "../../services/supabase.service";

export async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "https://bearhugmanagement.site/",
    },
  });

  return { data, error };
}

export async function redirectToResetPassword(email: string) {
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://example.com/account/update-password",
  });
}

export async function resetPassword(newPassword: string) {
  await supabase.auth.updateUser({ password: newPassword });
}
