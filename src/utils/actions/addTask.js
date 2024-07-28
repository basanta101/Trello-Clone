import { supabase } from "@/utils/supabase/db"

export default async function addTask({ name = "", description = '', listId = "" }) {
    const { data, error } = await supabase
        .from('task')
        .insert([
            { name: name, description: description, list_id: listId },
        ])
        .select()

        if(error) {
            throw new Error(error || 'Something went wrong!')
        }

    return data
}

