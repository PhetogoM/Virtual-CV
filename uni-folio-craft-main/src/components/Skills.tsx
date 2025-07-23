import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "C# .NET Core", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Intermediate" }
      ],
      color: "bg-primary"
    },
    {
      icon: Palette,
      title: "Frontend & Frameworks",
      skills: [
        { name: "Angular 17", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Responsive Design", level: "Intermediate" }
      ],
      color: "bg-accent"
    },
    {
      icon: Database,
      title: "AI & Development Tools",
      skills: [
        { name: "PyTorch", level: "Intermediate" },
        { name: "Keras", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "Database Systems", level: "Intermediate" }
      ],
      color: "bg-secondary"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Beginner":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My current toolkit and technologies I'm passionate about learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover p-8 h-full">
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full ${category.color}/20 mb-4`}>
                  <category.icon className={`h-8 w-8 ${category.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <Badge 
                      variant="outline" 
                      className={`${getLevelColor(skill.level)} border`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Proficiency Overview */}
        <div className="text-center">
          <Card className="card-hover p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Academic & Professional Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2026</div>
                <div className="text-sm text-muted-foreground">Graduation Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Learning Drive</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;