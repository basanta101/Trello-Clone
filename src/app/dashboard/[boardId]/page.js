"use client"
import { useParams } from 'next/navigation'
import Board from '@/components/Board/Board'

const Dashboard = () => {
    const params = useParams()
    return <Board boardId={params.boardId} />
}

export default Dashboard
