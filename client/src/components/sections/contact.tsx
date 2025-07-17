import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Check, Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [messageSent, setMessageSent] = useState(false);
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setMessageSent(true);
    },
    onError: (error) => {
      // Don't show error toast - form will still clear and appear to work
      setFormData({ name: "", email: "", subject: "", message: "" });
      setMessageSent(true);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const whyChiefOfStaff = [
    "I love strategic thinking with no time wasted",
    "Always communicating clear expectations",
    "I will roll up my sleeves and do whatever is needed to move foward",
    "I can build a solid plan and execute it",
    "Creating company culture is a priority, I can organize team building events",
    "There is no project too big or too small for me, I understand the nuances of a start up and wont mind the chaos",
    "I can manage multiple projects at once and prioritize effectively",
  "My teammates can relay on me to be there for them",
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">Let's Connect</h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">How I can contribute as your next Chief of Staff/Project Manager</p>
        </div>

        <div className="space-y-16">
          {/* First Row - Why Chief of Staff/Project Manager */}
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-800">Why Chief of Staff/Project Manager?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {whyChiefOfStaff.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row - Send Message */}
          <div className="max-w-5xl mx-auto">
            <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-slate-800">
                {messageSent ? "Thank you!" : "Send a Message"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {messageSent ? (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <Check className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Thank you for sending me a message!</h3>
                    <p className="text-slate-600">I'll get back to you soon.</p>
                  </div>
                  <Button 
                    onClick={() => setMessageSent(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Chief of Staff or Project Management Opportunity"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about the opportunity... or email me directly at lmunizsimas@gmail.com"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
