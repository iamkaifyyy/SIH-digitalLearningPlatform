"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, Upload, CheckCircle, AlertCircle, BookOpen } from "lucide-react"

const assignmentsData = [
  {
    id: 1,
    title: "Quadratic Equations Problem Set",
    subject: "Mathematics",
    description: "Solve 15 problems on quadratic equations using different methods",
    dueDate: "2024-01-20",
    status: "pending",
    priority: "high",
    points: 25,
    submitted: false,
    teacher: "Mrs. Priya Sharma",
  },
  {
    id: 2,
    title: "Light Reflection Lab Report",
    subject: "Physics",
    description: "Write a detailed lab report on light reflection experiments",
    dueDate: "2024-01-22",
    status: "in-progress",
    priority: "medium",
    points: 30,
    submitted: false,
    teacher: "Mr. Amit Singh",
  },
  {
    id: 3,
    title: "Essay on Freedom Fighters",
    subject: "History",
    description: "Write a 500-word essay on Indian freedom fighters",
    dueDate: "2024-01-18",
    status: "completed",
    priority: "medium",
    points: 20,
    submitted: true,
    grade: "A",
    teacher: "Mr. Harpreet Singh",
  },
  {
    id: 4,
    title: "Photosynthesis Diagram",
    subject: "Biology",
    description: "Draw and label a detailed diagram of photosynthesis process",
    dueDate: "2024-01-25",
    status: "pending",
    priority: "low",
    points: 15,
    submitted: false,
    teacher: "Dr. Rajesh Kumar",
  },
  {
    id: 5,
    title: "Chemical Equations Worksheet",
    subject: "Chemistry",
    description: "Balance 20 chemical equations and identify reaction types",
    dueDate: "2024-01-19",
    status: "overdue",
    priority: "high",
    points: 25,
    submitted: false,
    teacher: "Mrs. Neha Gupta",
  },
]

export function AssignmentsView() {
  const pendingAssignments = assignmentsData.filter((a) => a.status === "pending")
  const inProgressAssignments = assignmentsData.filter((a) => a.status === "in-progress")
  const completedAssignments = assignmentsData.filter((a) => a.status === "completed")
  const overdueAssignments = assignmentsData.filter((a) => a.status === "overdue")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-orange-100 text-orange-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-orange-600" />
    }
  }

  const AssignmentCard = ({ assignment }: { assignment: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getStatusIcon(assignment.status)}
              <CardTitle className="text-lg">{assignment.title}</CardTitle>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{assignment.subject}</Badge>
              <Badge className={getPriorityColor(assignment.priority)}>{assignment.priority} priority</Badge>
              <Badge className={getStatusColor(assignment.status)}>{assignment.status}</Badge>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{assignment.points} points</p>
            {assignment.grade && <p className="text-sm text-green-600 font-semibold">Grade: {assignment.grade}</p>}
          </div>
        </div>
        <CardDescription>{assignment.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Due: {new Date(assignment.dueDate).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {assignment.teacher}
            </div>
          </div>
        </div>

        {assignment.status === "in-progress" && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
        )}

        <div className="flex gap-2">
          {!assignment.submitted && assignment.status !== "overdue" && (
            <>
              <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                <FileText className="h-3 w-3" />
                View Details
              </Button>
              <Button size="sm" className="gap-1">
                <Upload className="h-3 w-3" />
                Submit
              </Button>
            </>
          )}
          {assignment.submitted && (
            <Button size="sm" variant="outline" className="gap-1 bg-transparent">
              <CheckCircle className="h-3 w-3" />
              View Submission
            </Button>
          )}
          {assignment.status === "overdue" && (
            <Button size="sm" variant="destructive" className="gap-1">
              <AlertCircle className="h-3 w-3" />
              Submit Late
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-balance">Assignments</h1>
          <p className="text-muted-foreground">Track and submit your assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Calendar className="h-4 w-4" />
            Calendar View
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{pendingAssignments.length}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{inProgressAssignments.length}</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{completedAssignments.length}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-2xl font-bold">{overdueAssignments.length}</p>
                <p className="text-sm text-muted-foreground">Overdue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {assignmentsData.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {pendingAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          {inProgressAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          {overdueAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
