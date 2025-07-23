import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calculator, CheckSquare, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Interactive Calculator",
      description: "A modern, responsive calculator with advanced mathematical functions and a beautiful dark theme interface.",
      technologies: ["JavaScript", "CSS3", "HTML5"],
      icon: Calculator,
      link: "/calculator",
      github: "#",
      featured: true
    },
    {
      title: "Smart To-Do List",
      description: "A productivity app with task management, categories, priorities, and local storage persistence.",
      technologies: ["JavaScript", "CSS3", "HTML5", "Local Storage"],
      icon: CheckSquare,
      link: "/todo",
      github: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing my skills, projects, and journey as a developer.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      icon: Code,
      link: "/",
      github: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some projects I've built while learning and exploring different technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-hover p-6 h-full flex flex-col ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {project.featured && (
                <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30">
                  Featured
                </Badge>
              )}
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="bg-muted/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link.startsWith('/') ? (
                    <Link to={project.link} className="flex-1">
                      <Button variant="default" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-hover p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Follow my journey and see what I'm building next.
            </p>
            <Button variant="hero" size="lg">
              <Github className="h-5 w-5 mr-2" />
              Follow on GitHub
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;