"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlayCircle, Search, Filter, BookOpen, Clock, Star, Download, Share2, Eye } from "lucide-react"
import { useState } from "react"

export function RecordedLectures() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedClass, setSelectedClass] = useState("all")

  const lectures = [
    {
      id: 1,
      title: "Quadratic Equations - Introduction",
      subject: "Mathematics",
      class: "10",
      teacher: "Mrs. Priya Sharma",
      duration: "45 min",
      views: 234,
      rating: 4.8,
      progress: 0,
      thumbnail: "/mathematics-quadratic-equations-blackboard.jpg",
      description: "Learn the basics of quadratic equations, standard form, and solving techniques.",
      uploadDate: "2024-01-15",
      tags: ["Algebra", "Equations", "Mathematics"],
    },
    {
      id: 2,
      title: "Light and Reflection - Physics",
      subject: "Physics",
      class: "10",
      teacher: "Mr. Rajesh Kumar",
      duration: "38 min",
      views: 189,
      rating: 4.6,
      progress: 65,
      thumbnail: "/physics-light-reflection-prism.jpg",
      description: "Understanding the properties of light, reflection, and refraction with practical examples.",
      uploadDate: "2024-01-12",
      tags: ["Optics", "Light", "Physics"],
    },
    {
      id: 3,
      title: "Essay Writing Techniques",
      subject: "English",
      class: "10",
      teacher: "Ms. Anjali Verma",
      duration: "32 min",
      views: 156,
      rating: 4.9,
      progress: 100,
      thumbnail: "/english-essay-writing-notebook-pen.jpg",
      description: "Master the art of essay writing with structure, vocabulary, and persuasive techniques.",
      uploadDate: "2024-01-10",
      tags: ["Writing", "Grammar", "English"],
    },
    {
      id: 4,
      title: "Photosynthesis Process",
      subject: "Biology",
      class: "10",
      teacher: "Dr. Meera Patel",
      duration: "42 min",
      views: 201,
      rating: 4.7,
      progress: 30,
      thumbnail: "/biology-photosynthesis-plant-leaves-chlorophyll.jpg",
      description: "Detailed explanation of photosynthesis, chlorophyll function, and energy conversion.",
      uploadDate: "2024-01-08",
      tags: ["Biology", "Plants", "Energy"],
    },
    {
      id: 5,
      title: "Indian Freedom Movement",
      subject: "History",
      class: "10",
      teacher: "Mr. Suresh Gupta",
      duration: "50 min",
      views: 178,
      rating: 4.5,
      progress: 0,
      thumbnail: "/indian-history-freedom-movement-gandhi.jpg",
      description: "Comprehensive overview of India's struggle for independence and key historical figures.",
      uploadDate: "2024-01-05",
      tags: ["History", "Independence", "India"],
    },
    {
      id: 6,
      title: "Chemical Reactions and Equations",
      subject: "Chemistry",
      class: "10",
      teacher: "Dr. Kavita Singh",
      duration: "40 min",
      views: 167,
      rating: 4.6,
      progress: 0,
      thumbnail: "/chemistry-chemical-reactions-laboratory-beakers.jpg",
      description: "Understanding different types of chemical reactions and balancing equations.",
      uploadDate: "2024-01-03",
      tags: ["Chemistry", "Reactions", "Equations"],
    },
  ]

  const filteredLectures = lectures.filter((lecture) => {
    const matchesSearch =
      lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecture.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecture.teacher.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSubject = selectedSubject === "all" || lecture.subject === selectedSubject
    const matchesClass = selectedClass === "all" || lecture.class === selectedClass

    return matchesSearch && matchesSubject && matchesClass
  })

  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-balance mb-2">Recorded Lectures</h1>
          <p className="text-muted-foreground">Browse and watch recorded class sessions</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search lectures, subjects, or teachers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-3">
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="Biology">Biology</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="9">Class 9</SelectItem>
                    <SelectItem value="10">Class 10</SelectItem>
                    <SelectItem value="11">Class 11</SelectItem>
                    <SelectItem value="12">Class 12</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continue Watching Section */}
        {lectures.some((lecture) => lecture.progress > 0 && lecture.progress < 100) && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                Continue Watching
              </CardTitle>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lectures
                  .filter((lecture) => lecture.progress > 0 && lecture.progress < 100)
                  .map((lecture) => (
                    <div
                      key={lecture.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="aspect-video bg-muted rounded-lg mb-3 relative overflow-hidden">
                        <img
                          src={lecture.thumbnail || "/placeholder.svg"}
                          alt={lecture.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <PlayCircle className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {lecture.duration}
                        </div>
                      </div>
                      <h4 className="font-medium mb-1 text-balance">{lecture.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {lecture.subject} • {lecture.teacher}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground">{lecture.progress}% complete</span>
                      </div>
                      <Progress value={lecture.progress} className="h-1 mb-3" />
                      <Button size="sm" className="w-full">
                        Continue Watching
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* All Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lecture) => (
            <Card key={lecture.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                  <img
                    src={lecture.thumbnail || "/placeholder.svg"}
                    alt={lecture.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-black/70 text-white border-none">
                      {lecture.subject}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    {lecture.duration}
                  </div>
                  {lecture.progress === 100 && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-green-600 text-white border-none">
                        Completed
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-balance leading-tight">{lecture.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{lecture.description}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{lecture.teacher}</p>
                        <p className="text-xs text-muted-foreground">Class {lecture.class}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{lecture.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{lecture.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{new Date(lecture.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {lecture.progress > 0 && lecture.progress < 100 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{lecture.progress}%</span>
                      </div>
                      <Progress value={lecture.progress} className="h-1" />
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      {lecture.progress === 100 ? "Rewatch" : lecture.progress > 0 ? "Continue" : "Watch"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {lecture.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLectures.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <PlayCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No lectures found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
