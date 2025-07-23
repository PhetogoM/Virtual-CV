import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BSc Information Technology Student",
      description: "Third-year student at North-West University, Vaal Triangle, graduating in 2026."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Dedicated to continuous learning and building projects that make a real impact."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "I love turning complex challenges into elegant, efficient solutions through code."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ASPIRING SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              About Me
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a BSc Information Technology student at North-West University, I have completed 
                a comprehensive, multi-year academic programme covering key areas of computing, 
                programming, and systems design. My journey in technology started with curiosity 
                and has evolved into a genuine passion for creating innovative software solutions.
              </p>
              <p>
                I have gained foundational skills in programming (Structured and Object-Oriented 
                Programming), statistics, and data analytics, advancing to specialized subjects 
                like Data Structures and Algorithms, Artificial Intelligence, and Computer Networks. 
                My coursework includes practical modules in Database Systems, Decision Support 
                Systems, and Operating Systems.
              </p>
              <p>
                With expertise in C# .NET Core, Angular 17, and AI technologies like PyTorch 
                and Keras, I am equipped with both theoretical knowledge and applied technical 
                skills. I have also developed professional competencies in communication, 
                problem-solving, and business management, preparing me for cross-functional 
                roles in tech-driven environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-hover p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-primary p-[1px] rounded-lg">
            <Card className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Let's create something extraordinary together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;