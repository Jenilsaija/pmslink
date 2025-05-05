import React, { useState } from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList, Plus, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from '@/components/ui/card';
import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const List = (props) => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample projects data (this would typically come from an API)
  const mockProjects = [
    {
      id: "1",
      name: "Website Redesign",
      description: "Redesign the company website to improve user experience and conversion rates.",
      icon: "🎨",
      color: "#0061FF",
      website: "https://example.com",
      progress: 75,
      daysLeft: 5,
      status: "current",
      team: [
        { id: "1", name: "John Doe", avatar: "" },
        { id: "2", name: "Jane Smith", avatar: "" },
        { id: "3", name: "Bob Johnson", avatar: "" },
      ]
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "Build a cross-platform mobile application for our core services.",
      icon: "📱",
      color: "#4CAF50",
      progress: 30,
      daysLeft: 25,
      status: "current",
      team: [
        { id: "1", name: "John Doe", avatar: "" },
        { id: "4", name: "Alice Williams", avatar: "" },
      ]
    },
    {
      id: "3",
      name: "Brand Guidelines",
      description: "Create comprehensive brand guidelines for consistent marketing materials.",
      icon: "📕",
      color: "#F44336",
      progress: 100,
      daysLeft: 0,
      status: "completed",
      team: [
        { id: "2", name: "Jane Smith", avatar: "" },
      ]
    },
    {
      id: "4",
      name: "CRM Integration",
      description: "Integrate our new CRM system with existing tools and migrate data.",
      icon: "🔄",
      color: "#9C27B0",
      progress: 15,
      daysLeft: 45,
      status: "pending",
      team: [
        { id: "1", name: "John Doe", avatar: "" },
        { id: "3", name: "Bob Johnson", avatar: "" },
        { id: "4", name: "Alice Williams", avatar: "" },
        { id: "5", name: "Charlie Brown", avatar: "" },
      ]
    },
  ];

  // Filter projects based on search query
  const filteredProjects = mockProjects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper function to determine badge variant based on project status
  const getStatusVariant = (status) => {
    switch (status) {
      case 'current':
        return 'default';
      case 'completed':
        return 'success';
      case 'pending':
        return 'secondary';
      case 'failed':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const currentUser = {
    name: 'John Doe',
    avatar: ''
  };

  return (
    <div className="flex-1 p-6">
      <Header 
        title="Projects" 
        user={currentUser} 
        notificationCount={3} 
      />
      
      <div className="mt-6">
        <Tabs defaultValue="all">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="all">ALL ({mockProjects.length})</TabsTrigger>
              <TabsTrigger value="current">CURRENT ({mockProjects.filter(p => p.status === 'current').length})</TabsTrigger>
              <TabsTrigger value="pending">PENDING ({mockProjects.filter(p => p.status === 'pending').length})</TabsTrigger>
              <TabsTrigger value="completed">COMPLETED ({mockProjects.filter(p => p.status === 'completed').length})</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-3 items-center">
              <div className="relative">
                <Input
                  type="text" 
                  placeholder="Search projects..." 
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <Button 
                    variant="ghost" 
                    className="absolute right-0 top-0 h-full w-10" 
                    onClick={() => setSearchQuery('')}
                  >
                    ×
                  </Button>
                )}
              </div>
              
              <div className="flex items-center border border-gray-200 rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  className="h-9 w-9 rounded-none rounded-l-lg"
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="icon"
                  className="h-9 w-9 rounded-none rounded-r-lg"
                  onClick={() => setViewMode('table')}
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
              </div>
              
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>
          
          <TabsContent value="all">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <Card className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead>Days Left</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProjects.map(project => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-8 h-8 rounded flex items-center justify-center text-white"
                              style={{ backgroundColor: project.color }}
                            >
                              {project.icon}
                            </div>
                            <div>
                              <div>{project.name}</div>
                              {project.website && (
                                <a 
                                  href={project.website}
                                  className="text-xs text-gray-500 hover:text-blue-600"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {project.website.replace(/(^\w+:|^)\/\//, '')}
                                </a>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full" 
                                style={{ 
                                  width: `${project.progress}%`,
                                  backgroundColor: project.color 
                                }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{project.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex -space-x-2">
                            {project.team.slice(0, 3).map((member) => (
                              <img 
                                key={member.id}
                                src={member.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                                alt={member.name}
                                className="w-8 h-8 rounded-full border-2 border-white"
                                title={member.name}
                              />
                            ))}
                            {project.team.length > 3 && (
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium border-2 border-white">
                                +{project.team.length - 3}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{project.daysLeft} days</TableCell>
                        <TableCell>
                          <Badge variant={getStatusVariant(project.status)}>
                            <span className="capitalize">{project.status}</span>
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="current">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.filter(p => p.status === 'current').map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <Card className="overflow-hidden">
                {/* Table content similar to above but filtered for current projects */}
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="pending">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.filter(p => p.status === 'pending').map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <Card className="overflow-hidden">
                {/* Table content similar to above but filtered for pending projects */}
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="completed">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.filter(p => p.status === 'completed').map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            ) : (
              <Card className="overflow-hidden">
                {/* Table content similar to above but filtered for completed projects */}
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default List;
