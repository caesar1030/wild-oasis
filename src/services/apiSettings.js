import supabase from "./supabase";

export async function getSettings() {
  let { data: settings, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) {
    throw new Error("Settings could not be loaded");
  }

  return settings;
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    throw new Error("Settings could note be updated");
  }

  return data;
}
