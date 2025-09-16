"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Users,
  MessageSquare,
  Settings,
  Share2,
  Hand,
  BookOpen,
  Clock,
  Send,
} from "lucide-react"
import { useState } from "react"

export function LiveClasses() {
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [isHandRaised, setIsHandRaised] = useState(false)

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Class Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-balance">Mathematics - Algebra</h1>
              <p className="text-muted-foreground">Live Class • Started 15 minutes ago</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Live
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>24 students</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Teacher Video */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Video className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Mrs. Priya Sharma</h3>
                      <p className="text-sm text-muted-foreground">Mathematics Teacher</p>
                    </div>
                  </div>

                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant={isMuted ? "destructive" : "secondary"}
                            onClick={() => setIsMuted(!isMuted)}
                          >
                            {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                          </Button>
                          <Button
                            size="sm"
                            variant={isVideoOff ? "destructive" : "secondary"}
                            onClick={() => setIsVideoOff(!isVideoOff)}
                          >
                            {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                          </Button>
                          <Button
                            size="sm"
                            variant={isHandRaised ? "default" : "secondary"}
                            onClick={() => setIsHandRaised(!isHandRaised)}
                          >
                            <Hand className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="secondary">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Class Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Topic: Quadratic Equations</CardTitle>
                <CardDescription>
                  Learning objectives: Understanding the standard form, solving by factoring, and graphing parabolas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Duration: 60 minutes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Class 10-A</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>Chapter 4: Algebra</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Video Grid */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "Rajesh Kumar", status: "active" },
                    { name: "Priya Singh", status: "muted" },
                    { name: "Amit Sharma", status: "active" },
                    { name: "Neha Gupta", status: "hand-raised" },
                    { name: "Rohit Verma", status: "muted" },
                    { name: "Kavya Patel", status: "active" },
                    { name: "Arjun Singh", status: "muted" },
                    { name: "Riya Jain", status: "active" },
                  ].map((student, index) => (
                    <div key={index} className="relative">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        {/* Status indicators */}
                        <div className="absolute top-2 right-2">
                          {student.status === "muted" && (
                            <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center">
                              <MicOff className="h-3 w-3 text-white" />
                            </div>
                          )}
                          {student.status === "hand-raised" && (
                            <div className="h-6 w-6 bg-yellow-500 rounded-full flex items-center justify-center">
                              <Hand className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-center mt-1 truncate">{student.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageSquare className="h-5 w-5" />
                  Class Chat
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 px-4">
                  <div className="space-y-4 pb-4">
                    {/* System message */}
                    <div className="text-center">
                      <Badge variant="secondary" className="text-xs">
                        Class started at 10:00 AM
                      </Badge>
                    </div>

                    {/* Chat messages */}
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">PS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium">Mrs. Priya Sharma</span>
                            <Badge variant="outline" className="text-xs px-1 py-0">
                              Teacher
                            </Badge>
                          </div>
                          <p className="text-sm">
                            Welcome everyone! Today we'll be learning about quadratic equations.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-secondary/10 text-secondary">RK</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium">Rajesh Kumar</span>
                          </div>
                          <p className="text-sm">Good morning ma'am!</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-accent/10 text-accent">NG</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium">Neha Gupta</span>
                          </div>
                          <p className="text-sm">I have a question about the previous lesson</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">PS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium">Mrs. Priya Sharma</span>
                            <Badge variant="outline" className="text-xs px-1 py-0">
                              Teacher
                            </Badge>
                          </div>
                          <p className="text-sm">Sure Neha, please ask your question.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                {/* Chat input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setChatMessage("")
                        }
                      }}
                    />
                    <Button size="sm" onClick={() => setChatMessage("")}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
