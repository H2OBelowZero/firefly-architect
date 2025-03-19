
import React from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Bell, Settings, User, FileIcon, BarChart3, Calendar, Filter } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Dashboard = () => {
  // Sample projects data for demonstration
  const recentProjects = [
    {
      name: "Cape Town Hospital Fire Plan",
      clientName: "Metro Healthcare Group",
      buildingType: "Healthcare Facility",
      lastEdited: "2 hours ago",
      complianceScore: 95,
      status: "approved" as const
    },
    {
      name: "Sandton Office Tower",
      clientName: "Executive Properties Ltd",
      buildingType: "Commercial Office",
      lastEdited: "Yesterday",
      complianceScore: 78,
      status: "review" as const
    },
    {
      name: "Durban Shopping Mall",
      clientName: "Coastal Retail Developers",
      buildingType: "Public Assembly",
      lastEdited: "3 days ago",
      complianceScore: 65,
      status: "draft" as const
    },
    {
      name: "Pretoria Residential Complex",
      clientName: "Urban Living SA",
      buildingType: "Residential R2",
      lastEdited: "1 week ago",
      complianceScore: 92,
      status: "approved" as const
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 bg-background border-r border-border z-10">
        <div className="p-4 border-b border-border">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-fire flex items-center justify-center">
              <span className="font-bold text-white">FP</span>
            </div>
            <span className="font-bold text-lg">FirePlan</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-auto py-4 px-3">
          <nav className="space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary"
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <FileIcon className="mr-3 h-5 w-5 text-muted-foreground" />
              Projects
            </Link>
            <Link
              to="/calendar"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
              Calendar
            </Link>
            <Link
              to="/templates"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <svg
                className="mr-3 h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Templates
            </Link>
            <Link
              to="/resources"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              <svg
                className="mr-3 h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Resources
            </Link>
          </nav>
          
          <div className="mt-10">
            <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Recent Projects
            </h3>
            <div className="mt-2 space-y-1">
              {recentProjects.slice(0, 3).map((project, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-secondary transition-colors"
                >
                  <span className="truncate">{project.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-border">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Fire Engineer</p>
            </div>
            <button className="ml-auto p-1 rounded-md hover:bg-muted">
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="bg-background border-b border-border sticky top-0 z-10">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center md:hidden">
              <button className="p-2 rounded-md hover:bg-muted">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 flex items-center px-4 md:px-0 md:ml-0">
              <div className="max-w-lg w-full relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="search"
                  placeholder="Search projects..."
                  className="input-field w-full pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <button className="p-2 rounded-md hover:bg-muted relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-fire rounded-full"></span>
              </button>
              <div className="ml-2 md:hidden">
                <button className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your fire plan projects.
            </p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center">
                <div className="p-3 rounded-md bg-primary/10">
                  <FileIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Projects</h3>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center">
                <div className="p-3 rounded-md bg-amber-100">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">In Progress</h3>
                  <p className="text-2xl font-bold">4</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center">
                <div className="p-3 rounded-md bg-safety-muted">
                  <svg className="h-6 w-6 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Approved</h3>
                  <p className="text-2xl font-bold">7</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center">
                <div className="p-3 rounded-md bg-fire-muted">
                  <svg className="h-6 w-6 text-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Needs Attention</h3>
                  <p className="text-2xl font-bold">1</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Projects */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Projects</h2>
              <div className="flex space-x-2">
                <button className="btn-secondary h-9 px-3 flex items-center text-xs">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </button>
                <Link
                  to="/projects/new"
                  className="btn-primary h-9 px-3 flex items-center bg-fire text-white hover:bg-fire/90 text-xs"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  New Project
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  clientName={project.clientName}
                  buildingType={project.buildingType}
                  lastEdited={project.lastEdited}
                  complianceScore={project.complianceScore}
                  status={project.status}
                />
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link
                to="/projects"
                className="btn-secondary inline-flex"
              >
                View All Projects
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Activity and Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="glass-card p-5 rounded-xl lg:col-span-2">
              <h3 className="font-medium mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      You updated <span className="font-medium">Cape Town Hospital Fire Plan</span>
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-safety-muted flex items-center justify-center">
                      <svg className="h-4 w-4 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">Pretoria Residential Complex</span> was approved
                    </p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">Sandton Office Tower</span> submitted for review
                    </p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      You created <span className="font-medium">Durban Shopping Mall</span>
                    </p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Link to="/activity" className="text-xs text-primary hover:text-primary/80 font-medium">
                  View all activity
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-xl">
              <h3 className="font-medium mb-4">Upcoming Deadlines</h3>
              <div className="space-y-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Sandton Office Tower</p>
                    <span className="badge badge-primary">2 days</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Review submission deadline</p>
                </div>
                
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Durban Shopping Mall</p>
                    <span className="badge badge-primary">5 days</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Complete draft</p>
                </div>
                
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Site Inspection</p>
                    <span className="badge badge-primary">1 week</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Johannesburg Hotel</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <Link to="/calendar" className="text-xs text-primary hover:text-primary/80 font-medium">
                  View full calendar
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
