import { supabase } from "@/utils/supabase/db"

export async function getBoard({ boardId = null }) {
    // Fetch all lists and their corresponding cards for the specified board
    const { data, error } = await supabase
    .from('list')
    .select(`
      *,
      tasks:task(*)
    `)
    .eq('board_id', boardId)

  if (error) {
    console.error('Error fetching board items:', error)
    return null
  }

  return data

}