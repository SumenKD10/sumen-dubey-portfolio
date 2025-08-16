import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="orange-divider mx-auto"></div>
            <h2 className="section-header">Contact Me</h2>
            <p className="section-subheader mx-auto">
              Let's Work Together
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-center bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">sumenkumardubey02@gmail.com</p>
                </div>
                <div className="ml-auto w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="flex items-center bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">+91-XXXXXXXXXX</p>
                </div>
                <div className="ml-auto w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="flex items-center bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Bengaluru, India</p>
                </div>
                <div className="ml-auto w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-2xl border border-border bg-card focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-2xl border border-border bg-card focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 rounded-2xl border border-border bg-card focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-2xl font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;