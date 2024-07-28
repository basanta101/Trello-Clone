import { supabase } from "@/utils/supabase/db"

export default async function editTask({ name = "", description = '', taskId = "" }) {
    // Validate that an ID is provided
    if (!taskId) {
        throw new Error('Task ID is required for editing.')
    }

    const { data, error } = await supabase
        .from('task')
        .update({ name, description, id: taskId })
        .match({ id: taskId })  // Match the task with the given ID
        .select()  // Optionally select the updated data

    if (error) {
        throw new Error(error || 'Something went wrong!')
    }

    console.log('editTask action callback', data)
    return data
}
