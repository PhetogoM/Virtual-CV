import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Globe } from "lucide-react";

const Education = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Zulu", level: "Native" },
    { name: "Northern Sotho", level: "Native" },
    { name: "Southern Sotho", level: "Native" },
    { name: "Afrikaans", level: "Conversational" }
  ];

  const educationDetails = {
    institution: "North-West University, Vaal Triangle",
    degree: "BSc. Information Technology",
    year: "Third Year",
    graduation: "2026",
    highlights: [
      "Structured and Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Artificial Intelligence and Machine Learning",
      "Computer Networks and Security",
      "Database Systems and Analytics",
      "Decision Support Systems",
      "Operating Systems and IT Development"
    ]
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Education & Languages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and multicultural communication skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="card-hover p-8 h-fit">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-primary/20">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{educationDetails.degree}</h3>
                <p className="text-muted-foreground">{educationDetails.year}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{educationDetails.institution}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Expected Graduation: {educationDetails.graduation}</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Key Coursework</h4>
              <div className="grid grid-cols-1 gap-2">
                {educationDetails.highlights.map((course, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Languages */}
          <Card className="card-hover p-8 h-fit">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-full bg-accent/20">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Languages</h3>
                <p className="text-muted-foreground">Multilingual Communication</p>
              </div>
            </div>

            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-medium">{language.name}</span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${
                      language.level === 'Native' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : language.level === 'Fluent'
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}
                  >
                    {language.level}
                  </Badge>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-muted/20 rounded-lg">
              <h4 className="font-semibold mb-2">Cultural Advantage</h4>
              <p className="text-sm text-muted-foreground">
                Multilingual capabilities enable effective communication across diverse 
                teams and stakeholders in South Africa&apos;s multicultural business environment.
              </p>
            </div>
          </Card>
        </div>

        {/* Academic Achievements */}
        <Card className="card-hover p-8 mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Academic Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">BSc IT</div>
              <div className="text-sm text-muted-foreground">Information Technology</div>
              <div className="text-xs text-muted-foreground mt-1">Comprehensive Program</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2026</div>
              <div className="text-sm text-muted-foreground">Graduation Year</div>
              <div className="text-xs text-muted-foreground mt-1">Third Year Student</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Languages</div>
              <div className="text-xs text-muted-foreground mt-1">Multilingual Skills</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;