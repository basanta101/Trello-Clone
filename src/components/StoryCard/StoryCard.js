"use client"
import { useRouter } from 'next/navigation'
import styles from './StoryCard.module.scss'


const StoryCard = ({ story = {}}) => {
  const router = useRouter()

  const onClick = () => {
    console.log('story', story);
    router.push(`/dashboard/${story.id}`)
  }
  return (
    <div className={styles.wrap} onClick={onClick}>
        <div className={styles.name}>{story.name}</div>
        <div className={styles.description}>{story.description}</div>
    </div>
  )
}

export default StoryCard