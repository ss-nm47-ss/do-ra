'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [code, setCode] = useState('')
  const [sharedCodes, setSharedCodes] = useState<string[]>([])

  useEffect(() => {
    const storedCodes = JSON.parse(localStorage.getItem('sharedCodes') || '[]')
    setSharedCodes(storedCodes)
  }, [])

  const saveCode = (newCode: string) => {
    const updatedCodes = [...sharedCodes, newCode]
    setSharedCodes(updatedCodes)
    localStorage.setItem('sharedCodes', JSON.stringify(updatedCodes))
  }

  const handleSubmit = () => {
    if (code.trim()) {
      saveCode(code)
      setCode('')
      setIsModalOpen(false)
    }
  }

  return (
    <div className="container mx-auto p-4 bg-[#FFF4E3] min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        <Card className="col-span-2 bg-[#E0F0FF] cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <CardContent className="flex flex-col items-center justify-center h-[300px]">
            <span className="text-2xl font-bold text-[#B38746] absolute top-2 right-4">+</span>
            <img src="/placeholder.svg" alt="Team Spark" className="w-24 h-24 rounded-2xl mb-4" />
            <h3 className="text-2xl font-bold">Team Spark</h3>
          </CardContent>
        </Card>

        <Link href="/kinokotakenokovote" passhref>
          <Card className="bg-[#E5D3F3] cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-[300px]">
              <span className="text-2xl font-bold text-[#B38746] absolute top-2 right-4">+</span>
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold">Employee Handbook</h3>
            </CardContent>
          </Card>
        </Link>

        <Card className="bg-[#E7CA99]">
          <CardContent className="flex flex-col items-center justify-center h-[300px]">
            <span className="text-2xl font-bold text-[#B38746] absolute top-2 right-4">+</span>
            <div className="text-6xl mb-4">🍂</div>
            <h3 className="text-2xl font-bold">Project Reports</h3>
          </CardContent>
        </Card>

        <Card className="bg-[#FFA37F]">
          <CardContent className="flex flex-col items-center justify-center h-[300px]">
            <span className="text-2xl font-bold text-[#B38746] absolute top-2 right-4">+</span>
            <div className="text-6xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold">Annual Report</h3>
          </CardContent>
        </Card>

        <Card className="bg-[#D6E8FA]">
          <CardContent className="flex flex-col items-center justify-center h-[300px]">
            <span className="text-2xl font-bold text-[#B38746] absolute top-2 right-4">+</span>
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-2xl font-bold">New Services</h3>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Your Code</DialogTitle>
            <DialogDescription>
              Enter your code to share with the team.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code"
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogContent>
      </Dialog>

      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Shared Results:</h3>
        <ul>
          {sharedCodes.map((sharedCode, index) => (
            <li key={index} className="mb-2 p-2 bg-[#E0F0FF] rounded">
              {sharedCode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

