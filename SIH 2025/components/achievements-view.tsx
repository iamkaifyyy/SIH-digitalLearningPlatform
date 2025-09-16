"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Trophy, Star, Target, BookOpen, Clock, Users, TrendingUp } from "lucide-react"

const achievementsData = [
  {
    id: 1,
    title: "Perfect Attendance",
    description: "Attended all classes for 30 consecutive days",
    category: "attendance",
    icon: Clock,
    earned: true,
    earnedDate: "2024-01-15",
    points: 50,
    rarity: "common",
  },
  {
    id: 2,
    title: "Math Wizard",
    description: "Scored 95% or above in 5 consecutive math tests",
    category: "academic",
    icon: Trophy,
    earned: true,
    earnedDate: "2024-01-10",
    points: 100,
    rarity: "rare",
  },
  {
    id: 3,
    title: "Assignment Master",
    description: "Submitted 20 assignments on time",
    category: "academic",
    icon: BookOpen,
    earned: false,
    progress: 85,
    points: 75,
    rarity: "uncommon",
  },
  {
    id: 4,
    title: "Class Participation Star",
    description: "Actively participated in 50 live classes",
    category: "participation",
    icon: Star,
    earned: false,
    progress: 60,
    points: 60,
    rarity: "common",
  },
  {
    id: 5,
    title: "Science Explorer",
    description: "Completed all science lab experiments with excellence",
    category: "academic",
    icon: Target,
    earned: true,
    earnedDate: "2024-01-08",
    points: 80,
    rarity: "uncommon",
  },
  {
    id: 6,
    title: "Helping Hand",
    description: "Helped 10 classmates with their studies",
    category: "social",
    icon: Users,
    earned: false,
    progress: 40,
    points: 90,
    rarity: "rare",
  },
  {
    id: 7,
    title: "Consistent Learner",
    description: "Maintained 90%+ average for entire semester",
    category: "academic",
    icon: TrendingUp,
    earned: false,
    progress: 75,
    points: 150,
    rarity: "legendary",
  },
]

const badges = [
  { name: "Early Bird", description: "Joined 10 classes early", earned: true },
  { name: "Question Master", description: "Asked 50 thoughtful questions", earned: true },
  { name: "Study Streak", description: "7-day study streak", earned: false, progress: 5 },
  { name: "Top Performer", description: "Top 3 in class rankings", earned: true },
]

export function AchievementsView() {
  const earnedAchievements = achievementsData.filter((a) => a.earned)
  const inProgressAchievements = achievementsData.filter((a) => !a.earned)

  const totalPoints = earnedAchievements.reduce((sum, achievement) => sum + achievement.points, 0)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800"
      case "uncommon":
        return "bg-green-100 text-green-800"
      case "rare":
        return "bg-blue-100 text-blue-800"
      case "legendary":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-blue-100 text-blue-800"
      case "attendance":
        return "bg-green-100 text-green-800"
      case "participation":
        return "bg-orange-100 text-orange-800"
      case "social":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const AchievementCard = ({ achievement }: { achievement: any }) => {
    const Icon = achievement.icon

    return (
      <Card
        className={`hover:shadow-md transition-all ${achievement.earned ? "ring-2 ring-primary/20" : "opacity-75"}`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${achievement.earned ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className={getCategoryColor(achievement.category)}>{achievement.category}</Badge>
                  <Badge className={getRarityColor(achievement.rarity)}>{achievement.rarity}</Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">{achievement.points} pts</p>
              {achievement.earned && achievement.earnedDate && (
                <p className="text-xs text-muted-foreground">{new Date(achievement.earnedDate).toLocaleDateString()}</p>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">{achievement.description}</CardDescription>

          {!achievement.earned && achievement.progress && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{achievement.progress}%</span>
              </div>
              <Progress value={achievement.progress} className="h-2" />
            </div>
          )}

          {achievement.earned && (
            <div className="flex items-center gap-2 text-green-600">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Achievement Unlocked!</span>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-balance">Achievements</h1>
          <p className="text-muted-foreground">Track your learning milestones and rewards</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">{earnedAchievements.length}</p>
                <p className="text-sm text-muted-foreground">Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{inProgressAchievements.length}</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">{totalPoints}</p>
                <p className="text-sm text-muted-foreground">Total Points</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{badges.filter((b) => b.earned).length}</p>
                <p className="text-sm text-muted-foreground">Badges</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Achievements</TabsTrigger>
          <TabsTrigger value="earned">Earned</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {achievementsData.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="earned" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {earnedAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {inProgressAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="badges" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {badges.map((badge, index) => (
              <Card
                key={index}
                className={`hover:shadow-md transition-all ${badge.earned ? "ring-2 ring-primary/20" : "opacity-75"}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-full ${badge.earned ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{badge.name}</h3>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                    </div>
                  </div>

                  {!badge.earned && badge.progress && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">Progress</span>
                        <span className="text-xs text-muted-foreground">{badge.progress}/7</span>
                      </div>
                      <Progress value={(badge.progress / 7) * 100} className="h-1" />
                    </div>
                  )}

                  {badge.earned && <Badge className="bg-green-100 text-green-800">Earned</Badge>}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
