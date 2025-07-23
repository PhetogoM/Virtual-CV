import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, User, Briefcase, GraduationCap, Code, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const ResumePage = () => {
  const personalInfo = {
    name: "Phetogo Maloka",
    title: "Software Engineer",
    location: "Johannesburg, Gauteng",
    phone: "(079) 894-0484",
    email: "malokaserake@gmail.com"
  };

  const skills = [
    "C# .NET Core", "Angular 17", "SQL", "JavaScript", 
    "Python", "PyTorch", "Keras", "Git"
  ];

  const languages = [
    "English", "Zulu", "Northern Sotho", "Southern Sotho", "Afrikaans"
  ];

  const downloadResume = () => {
    // This would trigger a PDF download in a real implementation
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-hero print:bg-white">
      <div className="print:hidden">
        <Header />
      </div>
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 print:pt-0">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 print:hidden">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gradient">Resume</h1>
              <p className="text-muted-foreground">Professional CV - Phetogo Maloka</p>
            </div>
            <Button onClick={downloadResume} variant="hero" size="lg">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Resume Content */}
          <Card className="card-hover print:shadow-none print:border-none">
            <div className="p-8 print:p-6">
              {/* Header Section */}
              <div className="text-center mb-8 print:mb-6">
                <h1 className="text-4xl font-bold mb-2 print:text-black">{personalInfo.name}</h1>
                <h2 className="text-2xl text-primary font-semibold mb-4 print:text-gray-700">{personalInfo.title}</h2>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground print:text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="h-6 w-6 text-primary print:text-gray-700" />
                  <h3 className="text-2xl font-bold print:text-black">Experience</h3>
                </div>
                <div className="pl-9">
                  <p className="text-muted-foreground leading-relaxed print:text-gray-700">
                    As a BSc Information Technology student, I have completed a comprehensive, 
                    multi-year academic programme covering key areas of computing, programming, 
                    and systems design. I gained foundational skills in programming (Structured 
                    and Object-Oriented Programming), statistics, and data analytics, and advanced 
                    to subjects such as Data Structures and Algorithms, Artificial Intelligence, 
                    and Computer Networks. My coursework included practical modules like Database 
                    Systems, Decision Support Systems, IT Developments, and Operating Systems, 
                    equipping me with both theoretical knowledge and applied technical skills. 
                    Additionally, I developed professional competencies in communication, 
                    problem-solving, and business management, preparing me for cross-functional 
                    roles in tech-driven environments.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-6 w-6 text-primary print:text-gray-700" />
                  <h3 className="text-2xl font-bold print:text-black">Skills</h3>
                </div>
                <div className="pl-9">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="print:border-gray-400 print:text-gray-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary print:text-gray-700" />
                  <h3 className="text-2xl font-bold print:text-black">Education</h3>
                </div>
                <div className="pl-9">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold print:text-black">North-West University, Vaal Triangle</h4>
                    <p className="text-primary font-medium print:text-gray-700">BSc. Information Technology (Third Year)</p>
                    <p className="text-sm text-muted-foreground print:text-gray-600">Graduation: 2026</p>
                  </div>
                </div>
              </div>

              {/* Languages Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-primary print:text-gray-700" />
                  <h3 className="text-2xl font-bold print:text-black">Languages</h3>
                </div>
                <div className="pl-9">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {languages.map((language, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full print:bg-gray-500"></div>
                        <span className="text-sm text-muted-foreground print:text-gray-700">{language}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center pt-6 border-t border-border print:border-gray-300">
                <p className="text-sm text-muted-foreground print:text-gray-600">
                  Available for internship and graduate opportunities in software development
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="mt-8 text-center print:hidden">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={downloadResume} variant="hero" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download as PDF
              </Button>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;