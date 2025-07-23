import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient animate-float">
                  Phetogo Maloka
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
                A passionate <span className="text-primary font-semibold">Software Engineer</span> 🚀 
                from Johannesburg, building innovative solutions with modern technologies.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                ⚡ BSc Information Technology student specializing in software development<br />
                ⚡ Experienced with C# .NET Core, Angular, and AI technologies<br />
                ⚡ Ready to contribute to innovative projects and grow with your team
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="hero" className="group">
                  <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Contact Me
                </Button>
                <Link to="/resume">
                  <Button variant="glass" size="hero" className="group">
                    <Download className="h-5 w-5 transition-transform group-hover:scale-110" />
                    View Resume
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant animate-float">
                <img
                  src="/ffd74533-a8f5-4d34-ac41-6e83789a72c0.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;