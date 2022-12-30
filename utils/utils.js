export const handleLogin = async (provider) => {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      provider: provider,
    });
  } catch (error) {
    console.log(error);
  }
};
