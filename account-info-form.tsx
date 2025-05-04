"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Loader2, User, ThumbsUp, Award, Clock, Users, Info } from "lucide-react"

interface AccountInfo {
  nickname: string
  likes: number
  level: number
  experience: number
  honorScore: number
  brRank: string
  brPoints: number
  csRank: string
  csPoints: number
  lastLogin: string
  creationDate: string
  bio: string
  booyahPassLevel: number
  equippedPet: string
  guildName: string
  guildTag: string
}

export function AccountInfoForm() {
  const [uid, setUid] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!uid.trim()) {
      setError("Please enter a valid UID")
      return
    }

    setLoading(true)
    setError(null)

    try {
      // In a real application, this would be an API call
      // For demo purposes, we'll simulate a response after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock data for demonstration
      if (uid === "9501116201") {
        setAccountInfo({
          nickname: "ProGamer123",
          likes: 5842,
          level: 75,
          experience: 125000,
          honorScore: 4.8,
          brRank: "Heroic",
          brPoints: 3250,
          csRank: "Diamond II",
          csPoints: 2800,
          lastLogin: "2025-05-04 15:30:22",
          creationDate: "2021-08-15",
          bio: "Competitive player since 2021. Love sniping!",
          booyahPassLevel: 48,
          equippedPet: "Falco",
          guildName: "Elite Warriors",
          guildTag: "EW",
        })
      } else {
        // Random data for any other UID
        setAccountInfo({
          nickname: `Player_${uid.substring(0, 4)}`,
          likes: Math.floor(Math.random() * 10000),
          level: Math.floor(Math.random() * 100),
          experience: Math.floor(Math.random() * 200000),
          honorScore: Number.parseFloat((Math.random() * 5).toFixed(1)),
          brRank: ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Heroic", "Grandmaster"][
            Math.floor(Math.random() * 7)
          ],
          brPoints: Math.floor(Math.random() * 5000),
          csRank:
            ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Heroic", "Grandmaster"][
              Math.floor(Math.random() * 7)
            ] +
            " " +
            (Math.floor(Math.random() * 4) + 1),
          csPoints: Math.floor(Math.random() * 5000),
          lastLogin: new Date().toISOString().split("T")[0] + " " + new Date().toTimeString().split(" ")[0],
          creationDate: `202${Math.floor(Math.random() * 5)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
          bio: ["Casual player", "Competitive gamer", "Just having fun", "Grinding to Heroic", "Looking for squad"][
            Math.floor(Math.random() * 5)
          ],
          booyahPassLevel: Math.floor(Math.random() * 100),
          equippedPet: ["Falco", "Robo", "Ottero", "Moony", "Sensei Tig", "Spirit Fox"][Math.floor(Math.random() * 6)],
          guildName:
            ["Phoenix", "Dragon", "Warriors", "Legends", "Immortals", "Titans"][Math.floor(Math.random() * 6)] +
            " " +
            ["Team", "Squad", "Guild", "Clan", "Alliance"][Math.floor(Math.random() * 5)],
          guildTag: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
        })
      }
    } catch (err) {
      setError("Failed to fetch account information. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="uid" className="block text-sm font-medium mb-2">
            Free Fire UID
          </label>
          <div className="flex gap-2">
            <Input
              id="uid"
              placeholder="Enter Free Fire UID (e.g., 9501116201)"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </>
              ) : (
                "Get Account Info"
              )}
            </Button>
          </div>
          {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
        </div>
      </form>

      {accountInfo && (
        <Card className="bg-gray-800 border-gray-700 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-purple-400">{accountInfo.nickname}</h2>
                <p className="text-gray-400">UID: {uid}</p>
              </div>
              <div className="flex items-center bg-purple-900 bg-opacity-50 px-3 py-1 rounded-full">
                <ThumbsUp className="h-4 w-4 mr-1 text-purple-400" />
                <span>{accountInfo.likes.toLocaleString()} Likes</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <User className="h-5 w-5 mr-2 text-purple-400" />
                    Player Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-gray-400 text-sm">Level</p>
                      <p className="font-medium">{accountInfo.level}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Experience</p>
                      <p className="font-medium">{accountInfo.experience.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Honor Score</p>
                      <p className="font-medium">{accountInfo.honorScore}/5.0</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Booyah Pass</p>
                      <p className="font-medium">Level {accountInfo.booyahPassLevel}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-400" />
                    Rank Information
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-gray-400 text-sm">BR Rank</p>
                      <p className="font-medium">{accountInfo.brRank}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">BR Points</p>
                      <p className="font-medium">{accountInfo.brPoints}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">CS Rank</p>
                      <p className="font-medium">{accountInfo.csRank}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">CS Points</p>
                      <p className="font-medium">{accountInfo.csPoints}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-purple-400" />
                    Time Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Last Login</p>
                      <p className="font-medium">{accountInfo.lastLogin}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Account Created</p>
                      <p className="font-medium">{accountInfo.creationDate}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-400" />
                    Guild Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Guild Name</p>
                      <p className="font-medium">{accountInfo.guildName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Guild Tag</p>
                      <p className="font-medium">{accountInfo.guildTag}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Info className="h-5 w-5 mr-2 text-purple-400" />
                    Additional Info
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Bio</p>
                      <p className="font-medium">{accountInfo.bio}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Equipped Pet</p>
                      <p className="font-medium">{accountInfo.equippedPet}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
