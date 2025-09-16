"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Video, Users, Bell } from "lucide-react"
import { useState } from "react"

const scheduleData = [
  {
    id: 1,
    subject: "Mathematics",
    topic: "Quadratic Equations",
    time: "09:00 AM - 10:00 AM",
    type: "live",
    teacher: "Mrs. Priya Sharma",
    room: "Room 101",
    date: "Today",
    status: "upcoming",
  },
  {
    id: 2,
    subject: "Physics",
    topic: "Light and Reflection",
    time: "10:15 AM - 11:15 AM",
    type: "live",
    teacher: "Mr. Amit Singh",
    room: "Lab 2",
    date: "Today",
    status: "upcoming",
  },
  {
    id: 3,
    subject: "English",
    topic: "Essay Writing",
    time: "11:30 AM - 12:30 PM",
    type: "recorded",
    teacher: "Ms. Sunita Devi",
    room: "Online",
    date: "Today",
    status: "completed",
  },
  {
    id: 4,
    subject: "Biology",
    topic: "Photosynthesis",
    time: "02:00 PM - 03:00 PM",
    type: "live",
    teacher: "Dr. Rajesh Kumar",
    room: "Room 203",
    date: "Today",
    status: "in-progress",
  },
  {
    id: 5,
    subject: "History",
    topic: "Freedom Movement",
    time: "09:00 AM - 10:00 AM",
    type: "live",
    teacher: "Mr. Harpreet Singh",
    room: "Room 105",
    date: "Tomorrow",
    status: "upcoming",
  },
  {
    id: 6,
    subject: "Chemistry",
    topic: "Chemical Reactions",
    time: "10:15 AM - 11:15 AM",
    type: "live",
    teacher: "Mrs. Neha Gupta",
    room: "Lab 1",
    date: "Tomorrow",
    status: "upcoming",
  },
]

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export function ScheduleView() {
  const [selectedView, setSelectedView] = useState<"today" | "week">("today")

  const todayClasses = scheduleData.filter((item) => item.date === "Today")
  const tomorrowClasses = scheduleData.filter((item) => item.date === "Tomorrow")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "upcoming":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    return type === "live" ? <Video className="h-4 w-4" /> : <Clock className="h-4 w-4" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-balance">Class Schedule</h1>
          <p className="text-muted-foreground">Your daily and weekly class timetable</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedView === "today" ? "default" : "outline"}
            onClick={() => setSelectedView("today")}
            className="gap-2"
          >
            <Calendar className="h-4 w-4" />
            Today
          </Button>
          <Button
            variant={selectedView === "week" ? "default" : "outline"}
            onClick={() => setSelectedView("week")}
            className="gap-2"
          >
            <Calendar className="h-4 w-4" />
            Week View
          </Button>
        </div>
      </div>

      {selectedView === "today" ? (
        <div className="space-y-6">
          {/* Today's Classes */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Today's Classes
            </h2>
            <div className="grid gap-4">
              {todayClasses.map((classItem) => (
                <Card key={classItem.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(classItem.type)}
                            <h3 className="font-semibold text-lg">{classItem.subject}</h3>
                          </div>
                          <Badge className={getStatusColor(classItem.status)}>
                            {classItem.status.replace("-", " ")}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{classItem.topic}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {classItem.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {classItem.teacher}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {classItem.room}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                          <Bell className="h-3 w-3" />
                          Remind
                        </Button>
                        {classItem.type === "live" && classItem.status === "upcoming" && (
                          <Button size="sm" className="gap-1">
                            <Video className="h-3 w-3" />
                            Join
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tomorrow's Classes Preview */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Tomorrow's Classes
            </h2>
            <div className="grid gap-3">
              {tomorrowClasses.slice(0, 3).map((classItem) => (
                <Card key={classItem.id} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getTypeIcon(classItem.type)}
                        <div>
                          <h4 className="font-medium">{classItem.subject}</h4>
                          <p className="text-sm text-muted-foreground">{classItem.time}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{classItem.teacher}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Week View */
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Weekly Schedule
          </h2>
          <div className="grid gap-4">
            {weekDays.map((day, index) => (
              <Card key={day}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {scheduleData.slice(0, 3).map((classItem, classIndex) => (
                      <div key={classIndex} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(classItem.type)}
                          <span className="font-medium">{classItem.subject}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{classItem.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
