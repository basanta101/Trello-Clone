import { supabase } from "@/utils/supabase/db";

export async function updateCardList(cardId, toListId) {
    const { data, error } = await supabase
        .from('task')
        .update({ list_id: toListId })
        .eq('id', cardId);



    return { data, error };
}