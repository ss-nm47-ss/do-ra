'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function KinokoTakenokoVote() {
  const [votes, setVotes] = useState({ kinoko: 0, takenoko: 0 })

  useEffect(() => {
    const storedKinokoVotes = parseInt(localStorage.getItem('kinokoVotes') || '0')
    const storedTakenokoVotes = parseInt(localStorage.getItem('takenokoVotes') || '0')
    setVotes({ kinoko: storedKinokoVotes, takenoko: storedTakenokoVotes })
  }, [])

  const vote = (type: 'kinoko' | 'takenoko') => {
    setVotes(prevVotes => {
      const newVotes = { ...prevVotes, [type]: prevVotes[type] + 1 }
      localStorage.setItem('kinokoVotes', newVotes.kinoko.toString())
      localStorage.setItem('takenokoVotes', newVotes.takenoko.toString())
      return newVotes
    })
  }

  const total = votes.kinoko + votes.takenoko
  const kinokoPercentage = total ? (votes.kinoko / total * 100).toFixed(1) : '50.0'
  const takenokoPercentage = total ? (votes.takenoko / total * 100).toFixed(1) : '50.0'

  return (
    <div className="container mx-auto p-4 bg-[#E5D3F3] min-h-screen flex flex-col items-center justify-center text-[#5E4981]">
      <Link href="/" passHref>
        <Button className="mb-4 bg-[#5E4981] text-white hover:bg-[#B38746]">
          ダッシュボードに戻る
        </Button>
      </Link>
      <h1 className="text-4xl font-bold mb-4">あなたはどっち派？</h1>
      <p className="text-xl mb-8">家族や友達と議論しよう！</p>
      <div className="space-x-4 mb-8">
        <Button 
          onClick={() => vote('kinoko')}
          className="text-2xl py-6 px-8 bg-[#FFF4E3] text-[#5E4981] border-2 border-[#5E4981] hover:bg-[#D6E8FA] hover:text-black transition duration-300"
        >
          🍄 キノコ派
        </Button>
        <Button 
          onClick={() => vote('takenoko')}
          className="text-2xl py-6 px-8 bg-[#FFF4E3] text-[#5E4981] border-2 border-[#5E4981] hover:bg-[#D6E8FA] hover:text-black transition duration-300"
        >
          🎋 タケノコ派
        </Button>
      </div>
      <Card className="w-full max-w-md bg-[#FFF4E3]">
        <CardHeader>
          <CardTitle>投票結果</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">キノコ派: {votes.kinoko}</p>
          <p className="mb-4">タケノコ派: {votes.takenoko}</p>
          <div className="w-full bg-[#FFF4E3] rounded-lg overflow-hidden">
            <div 
              className="h-6 bg-[#B38746] text-white text-center" 
              style={{width: `${kinokoPercentage}%`}}
            >
              {kinokoPercentage}%
            </div>
            <div 
              className="h-6 bg-[#5E4981] text-white text-center" 
              style={{width: `${takenokoPercentage}%`}}
            >
              {takenokoPercentage}%
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}



