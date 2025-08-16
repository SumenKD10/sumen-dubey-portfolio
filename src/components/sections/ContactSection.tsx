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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="order-2 lg:order-1 space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm lg:text-base truncate">sumenkumardubey02@gmail.com</p>
                </div>
                <div className="ml-2 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                </div>
              </div>

              <div className="flex items-center bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm lg:text-base">+91-XXXXXXXXXX</p>
                </div>
                <div className="ml-2 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                </div>
              </div>

              <div className="flex items-center bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm lg:text-base">Bengaluru, India</p>
                </div>
                <div className="ml-2 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4 lg:space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 lg:p-4 rounded-2xl border border-border bg-card focus:border-primary text-sm lg:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 lg:p-4 rounded-2xl border border-border bg-card focus:border-primary text-sm lg:text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 lg:p-4 rounded-2xl border border-border bg-card focus:border-primary resize-none text-sm lg:text-base"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white py-3 lg:py-4 rounded-2xl font-medium hover:bg-primary/90 transition-colors text-sm lg:text-base"
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