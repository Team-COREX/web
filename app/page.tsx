"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Rocket,
  Calendar,
  Satellite,
  Microscope,
  Zap,
  Shield,
  Database,
  ChevronRight,
  Activity,
  Target,
  Clock,
  MapPin,
} from "lucide-react"

export default function LambdaCubeSatHub() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [missionStatus, setMissionStatus] = useState("DEVELOPMENT")

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const teamMembers = [
    {
      name: "Jimena Sofía Adragna",
      role: "Software Development & Cybersecurity",
      year: "4th Year",
      career: "Information Systems Engineering",
      expertise: ["Python", "JavaScript", "Cybersecurity", "System Analysis"],
    },
    {
      name: "Luciano Tomás Cortesini Pérez",
      role: "Project Manager & Mechanical Design",
      year: "3rd Year",
      career: "Electronic Engineering",
      expertise: ["3D Printing", "Parametric Design", "C++", "Python", "Git"],
    },
    {
      name: "Ignacio Gil",
      role: "PCB Design & Electronics",
      year: "3rd Year",
      career: "Electronic Engineering",
      expertise: ["PCB Design", "C/C++", "Python", "3D Design"],
    },
    {
      name: "Matías Adolfo Koroch",
      role: "AI & Data Analysis",
      year: "3rd Year",
      career: "Information Systems Engineering",
      expertise: ["Python", "JavaScript", "AI", "Machine Learning", "Data Analysis"],
    },
    {
      name: "Dana Carolina Montesinos",
      role: "Computational Physics",
      year: "3rd Year",
      career: "Information Systems Engineering",
      expertise: ["Python", "JavaScript", "Computational Physics", "Fortran"],
    },
    {
      name: "Franco Palombo",
      role: "Embedded Systems & Hardware",
      year: "3rd Year",
      career: "Electronic Engineering",
      expertise: ["PCB Design", "C/C++", "Embedded Systems", "3D Design"],
    },
    {
      name: "Angelo Prieto",
      role: "Embedded Systems & Documentation",
      year: "3rd Year",
      career: "Electronic Engineering",
      expertise: ["C/C++", "Python", "Embedded Systems", "Photography", "Video Editing"],
    },
  ]

  const upcomingEvents = [
    {
      date: "2025-08-15",
      title: "Critical Design Review (CDR)",
      description: "Final design review before construction phase",
      status: "upcoming",
    },
    {
      date: "2025-09-30",
      title: "Hardware Integration Complete",
      description: "All subsystems integrated and tested",
      status: "upcoming",
    },
    {
      date: "2025-10-15",
      title: "Final Testing Phase",
      description: "Comprehensive system validation and testing",
      status: "upcoming",
    },
    {
      date: "2025-11-01",
      title: "Mission Launch Window",
      description: "Estimated launch timeframe for LAMBDA mission",
      status: "critical",
    },
  ]

  const projectUpdates = [
    {
      date: "2025-07-03",
      title: "Preliminary Design Review Completed",
      description: "Successfully presented PDR with detailed mission specifications and technical architecture",
      category: "milestone",
    },
    {
      date: "2025-06-20",
      title: "Giardia Lamblia Research Partnership",
      description: "Established collaboration with INIMEC-CONICET-UNC for biological payload research",
      category: "partnership",
    },
    {
      date: "2025-06-15",
      title: "Structural Analysis Complete",
      description: "ANSYS simulations confirm structural integrity under launch conditions",
      category: "technical",
    },
    {
      date: "2025-06-01",
      title: "Power Management System Design",
      description: "Completed PMS architecture with 71.04Wh capacity and multiple voltage rails",
      category: "technical",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header HUD */}
      <header className="relative z-10 border-b border-cyan-500/30 bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Satellite className="h-8 w-8 text-cyan-400" />
                <div>
                  <h1 className="text-2xl font-bold text-cyan-400 font-mono">LAMBDA</h1>
                  <p className="text-xs text-cyan-300/70">CubeSat Mission Control</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm font-mono">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-green-400" />
                <span className="text-green-400">STATUS: {missionStatus}</span>
              </div>
              <div className="text-cyan-300">{currentTime.toLocaleTimeString()}</div>
              <div className="text-cyan-300">UTC {currentTime.toISOString().split("T")[0]}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                UTN Córdoba • CubeSat Competition 2025
              </Badge>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                LAMBDA
              </h2>

              <p className="text-xl md:text-2xl text-cyan-300 mb-4 font-mono">
                LAMBDA Analyzes Microorganisms' Biological Damage in Anomalous conditions
              </p>

              <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                A groundbreaking CubeSat mission studying the viability of Giardia Lamblia cells under extreme launch
                conditions, combining aerospace engineering with biomedical research to advance our understanding of
                cellular adaptation mechanisms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold">
                  <Rocket className="mr-2 h-5 w-5" />
                  Mission Overview
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                >
                  <Database className="mr-2 h-5 w-5" />
                  Technical Specs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Objectives */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Mission Objectives</h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-cyan-400" />
                    <CardTitle className="text-cyan-400">Primary Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">
                    Record physical and environmental variables throughout the entire flight:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Atmospheric pressure monitoring</li>
                    <li>• Ambient temperature tracking</li>
                    <li>• 3-axis acceleration measurement</li>
                    <li>• 3-axis rotation angle detection</li>
                  </ul>
                  <p className="text-sm text-cyan-300 font-mono">
                    Goal: Determine apogee altitude and flight phase identification
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Microscope className="h-6 w-6 text-cyan-400" />
                    <CardTitle className="text-cyan-400">Secondary Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">Study Giardia Lamblia cell viability under extreme conditions:</p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Temperature control at 10°C, 37°C, and 55°C</li>
                    <li>• Mechanical stress analysis</li>
                    <li>• Cellular adaptation mechanisms</li>
                    <li>• Post-flight viability assessment</li>
                  </ul>
                  <p className="text-sm text-cyan-300 font-mono">Partnership: INIMEC-CONICET-UNC</p>
                </CardContent>
              </Card>
            </div>

            {/* Scientific Justification Section */}
            <div className="max-w-6xl mx-auto">
              <Card className="bg-slate-800/30 border-cyan-500/40">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400 text-center">
                    Scientific Justification: Why Giardia lamblia?
                  </CardTitle>
                  <CardDescription className="text-center text-slate-300 text-lg">
                    Understanding the biological significance of our secondary mission
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Clinical Relevance */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-slate-700/50 border-red-500/30">
                      <CardHeader>
                        <CardTitle className="text-red-400 text-lg flex items-center">
                          <Activity className="mr-2 h-5 w-5" />
                          Global Health Impact
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p className="text-slate-300">
                          <strong>Most frequent intestinal parasitosis worldwide</strong>
                        </p>
                        <p className="text-slate-400">
                          Giardia lamblia is the leading cause of parasitic intestinal disease globally, contributing
                          significantly to malnutrition and morbidity, especially in vulnerable populations.
                        </p>
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/50">Clinical Priority</Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/50 border-yellow-500/30">
                      <CardHeader>
                        <CardTitle className="text-yellow-400 text-lg flex items-center">
                          <Shield className="mr-2 h-5 w-5" />
                          Adaptation Mechanisms
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p className="text-slate-300">
                          <strong>Extraordinary survival capabilities</strong>
                        </p>
                        <p className="text-slate-400">
                          Giardia exhibits remarkable adaptation to environmental changes through encystment -
                          transforming into resistant forms that can survive extreme conditions.
                        </p>
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50">
                          Biological Defense
                        </Badge>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/50 border-green-500/30">
                      <CardHeader>
                        <CardTitle className="text-green-400 text-lg flex items-center">
                          <Microscope className="mr-2 h-5 w-5" />
                          Research Model
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p className="text-slate-300">
                          <strong>Unique experimental advantages</strong>
                        </p>
                        <p className="text-slate-400">
                          Unlike other parasites (Entamoeba, Cryptosporidium), Giardia can form mature cysts in vitro,
                          making it an ideal model for studying parasite adaptation.
                        </p>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/50">Scientific Model</Badge>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Experimental Design */}
                  <div className="bg-slate-700/30 rounded-lg p-6 border border-cyan-500/20">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                      <Target className="mr-2 h-5 w-5" />
                      Experimental Conditions & Expected Outcomes
                    </h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-slate-300 mb-3">Test Conditions</h5>
                        <ul className="space-y-2 text-sm text-slate-400">
                          <li>
                            • <strong className="text-cyan-300">Flight Condition:</strong> CubeSat samples at 10°C,
                            37°C, 55°C + ambient
                          </li>
                          <li>
                            • <strong className="text-cyan-300">Ground Control:</strong> Same thermal conditions,
                            terrestrial environment
                          </li>
                          <li>
                            • <strong className="text-cyan-300">Lab Control:</strong> Optimal conditions (37°C,
                            controlled environment)
                          </li>
                          <li>
                            • <strong className="text-cyan-300">Positioning:</strong> 45° inclination for optimal
                            parasite adhesion
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-slate-300 mb-3">Research Questions</h5>
                        <ul className="space-y-2 text-sm text-slate-400">
                          <li>
                            • Does launch stress trigger{" "}
                            <strong className="text-cyan-300">encystment mechanisms</strong>?
                          </li>
                          <li>
                            • How do <strong className="text-cyan-300">vibrations and accelerations</strong> affect cell
                            viability?
                          </li>
                          <li>
                            • What are the <strong className="text-cyan-300">tolerance limits</strong> under extreme
                            conditions?
                          </li>
                          <li>
                            • Can findings inform{" "}
                            <strong className="text-cyan-300">vaccine and drug development</strong>?
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Scientific Impact */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                      <Rocket className="mr-2 h-5 w-5" />
                      Scientific Impact & Future Applications
                    </h4>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-cyan-300 font-semibold mb-2">Space Biology</div>
                        <p className="text-slate-400">
                          Understanding cellular adaptation mechanisms in extreme environments for future space missions
                        </p>
                      </div>


                      <div className="text-center">
                        <div className="text-cyan-300 font-semibold mb-2">Parasitology</div>
                        <p className="text-slate-400">
                          Model organism findings applicable to other intestinal parasites and pathogens
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Partnership Highlight */}
                  <div className="text-center bg-slate-700/30 rounded-lg p-4 border border-cyan-500/20">
                    <p className="text-slate-300 mb-2">
                      <strong className="text-cyan-400">Collaborative Research Partnership</strong>
                    </p>
                    <p className="text-sm text-slate-400">
                      This mission represents a unique collaboration between aerospace engineering and biomedical
                      research, combining UTN Córdoba's technical expertise with INIMEC-CONICET-UNC's biological
                      research capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">System Architecture</h3>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-slate-800/50 border-cyan-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    <CardTitle className="text-yellow-400">Power System</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-slate-300">6x Li-Po batteries (3.7V, 3200mAh)</p>
                  <p className="text-slate-400">Total capacity: 71.04Wh</p>
                  <p className="text-slate-400">Voltage rails: 3.3V, 5V, 12V</p>
                  <p className="text-cyan-300 font-mono">PMS with overcurrent protection</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-cyan-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Database className="h-6 w-6 text-green-400" />
                    <CardTitle className="text-green-400">Data Systems</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-slate-300">Raspberry Pi Zero 2W</p>
                  <p className="text-slate-400">Dual microSD RAID 1 (16GB each)</p>
                  <p className="text-slate-400">Estimated data: ~3.7GB</p>
                  <p className="text-cyan-300 font-mono">Redundant storage system</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-cyan-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-red-400" />
                    <CardTitle className="text-red-400">Structure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-slate-300">2mm aluminum folded sheets</p>
                  <p className="text-slate-400">Steel rods for internal mounting</p>
                  <p className="text-slate-400">3D printed polypropylene rails</p>
                  <p className="text-cyan-300 font-mono">ANSYS validated design</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Mission Crew</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-cyan-400 text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-slate-400">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <p className="text-slate-300">
                        {member.year} • {member.career}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-cyan-500/20 text-cyan-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Updates & Events */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="updates" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-cyan-500/30">
                <TabsTrigger
                  value="updates"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                >
                  Project Updates
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                >
                  Upcoming Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="updates" className="mt-8">
                <div className="space-y-6">
                  {projectUpdates.map((update, index) => (
                    <Card key={index} className="bg-slate-800/50 border-cyan-500/30">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge
                                className={`
                                ${update.category === "milestone" ? "bg-green-500/20 text-green-400 border-green-500/50" : ""}
                                ${update.category === "partnership" ? "bg-blue-500/20 text-blue-400 border-blue-500/50" : ""}
                                ${update.category === "technical" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50" : ""}
                              `}
                              >
                                {update.category.toUpperCase()}
                              </Badge>
                              <span className="text-sm text-slate-400 font-mono">{update.date}</span>
                            </div>
                            <h4 className="text-lg font-semibold text-cyan-400 mb-2">{update.title}</h4>
                            <p className="text-slate-300">{update.description}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-cyan-400 mt-1" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events" className="mt-8">
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <Card
                      key={index}
                      className={`
                      bg-slate-800/50 border-cyan-500/30
                      ${event.status === "critical" ? "border-red-500/50 bg-red-500/5" : ""}
                    `}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="flex flex-col items-center">
                              <Calendar
                                className={`h-6 w-6 ${event.status === "critical" ? "text-red-400" : "text-cyan-400"}`}
                              />
                              <span className="text-xs text-slate-400 font-mono mt-1">
                                {new Date(event.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div>
                              <h4
                                className={`text-lg font-semibold mb-2 ${event.status === "critical" ? "text-red-400" : "text-cyan-400"}`}
                              >
                                {event.title}
                              </h4>
                              <p className="text-slate-300">{event.description}</p>
                              <Badge
                                className={`mt-2 ${
                                  event.status === "critical"
                                    ? "bg-red-500/20 text-red-400 border-red-500/50"
                                    : "bg-cyan-500/20 text-cyan-400 border-cyan-500/50"
                                }`}
                              >
                                {event.status.toUpperCase()}
                              </Badge>
                            </div>
                          </div>
                          <Clock
                            className={`h-5 w-5 mt-1 ${event.status === "critical" ? "text-red-400" : "text-cyan-400"}`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Mission Communications</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-slate-800/50 border-cyan-500/30">
                  <CardHeader>
                    <CardTitle className="text-cyan-400 flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Mission Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2">Institution</h4>
                      <p className="text-slate-400">Universidad Tecnológica Nacional</p>
                      <p className="text-slate-400">Facultad Regional Córdoba</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2">Repository</h4>
                      <a
                        href="https://github.com/Team-COREX"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        github.com/Team-COREX
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 bg-slate-950/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Satellite className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-mono">LAMBDA CubeSat Mission</span>
            </div>
            <div className="text-slate-400 text-sm font-mono">
              UTN Córdoba • CubeSat Competition 2025 • Open Source Project
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
