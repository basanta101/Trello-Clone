import { supabase } from '@/utils/supabase/db';
import StoryCard from '@/components/StoryCard/StoryCard'
import styles from './StoryBoard.module.scss'

const StoryBoard = async () => {
    let { data: boards, error } = await supabase
        .from('boards').select('*')

    console.log('boards==>', boards)
    return (
        <div className={styles.wrap}>
            {boards.map((story => <StoryCard key={story.id} story={story} />))}
        </div>
    )
}

export default StoryBoard