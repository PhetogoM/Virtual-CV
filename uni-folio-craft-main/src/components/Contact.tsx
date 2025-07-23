import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "malokaserake@gmail.com",
      link: "mailto:malokaserake@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(079) 894-0484",
      link: "tel:+27798940484"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Johannesburg, Gauteng",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/PhetogoM"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/phetogo-maloka-64541476/"
    },
    {
      icon: Mail,
      name: "Email",
      link: "mailto:malokaserake@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'm excited to connect with fellow developers and potential employers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" className="bg-muted/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="bg-muted/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-muted/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="Project Collaboration" className="bg-muted/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project idea or how we can work together..."
                  className="bg-muted/50 min-h-[120px]"
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-hover p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/20">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.link.startsWith('#') ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-hover p-8">
              <h3 className="text-xl font-bold mb-6">Follow My Journey</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="hover:border-primary/50"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Connect with me on social media to see my latest projects and learning journey!
              </p>
            </Card>

            <Card className="card-hover p-8 bg-gradient-primary/10 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Open to Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                I'm actively seeking internship and graduate opportunities in software development. 
                Ready to contribute to innovative projects and grow with experienced teams.
              </p>
              <Link to="/resume">
                <Button variant="hero" size="lg" className="w-full">
                  View My Resume
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;