import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Video, Calendar, Clock, Award, PlayCircle, BookOpenCheck } from "lucide-react"

export function StudentDashboard() {
  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-balance">Welcome back, Rajesh!</h2>
          <p className="text-muted-foreground">Continue your learning journey today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpenCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Video className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Live Classes</p>
                  <p className="text-xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Study Hours</p>
                  <p className="text-xl font-bold">24h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-chart-1/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-chart-1" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-xl font-bold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Classes */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Live Classes Today
              </CardTitle>
              <CardDescription>Join your scheduled classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Mathematics - Algebra</h4>
                    <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Live</Badge>
                  <Button size="sm">Join</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Science - Physics</h4>
                    <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Upcoming</Badge>
                  <Button size="sm" variant="outline">
                    Remind Me
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">English - Literature</h4>
                    <p className="text-sm text-muted-foreground">4:00 PM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Upcoming</Badge>
                  <Button size="sm" variant="outline">
                    Remind Me
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress & Quick Actions */}
          <div className="space-y-6">
            {/* Weekly Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Progress</CardTitle>
                <CardDescription>Your learning progress this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Mathematics</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Science</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>English</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Hindi</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Browse Recorded Lectures
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Class Schedule
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Award className="h-4 w-4 mr-2" />
                  Check Assignments
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Recorded Lectures */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-primary" />
              Recent Recorded Lectures
            </CardTitle>
            <CardDescription>Continue watching or start new lessons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <PlayCircle className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-medium mb-1 text-balance">Quadratic Equations - Part 1</h4>
                <p className="text-sm text-muted-foreground mb-2">Mathematics • 45 min</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    New
                  </Badge>
                  <Button size="sm" variant="ghost">
                    Watch
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <PlayCircle className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-medium mb-1 text-balance">Light and Reflection</h4>
                <p className="text-sm text-muted-foreground mb-2">Physics • 38 min</p>
                <div className="flex items-center justify-between">
                  <Progress value={65} className="h-1 flex-1 mr-2" />
                  <Button size="sm" variant="ghost">
                    Continue
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <PlayCircle className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-medium mb-1 text-balance">Essay Writing Techniques</h4>
                <p className="text-sm text-muted-foreground mb-2">English • 32 min</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    Completed
                  </Badge>
                  <Button size="sm" variant="ghost">
                    Rewatch
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
