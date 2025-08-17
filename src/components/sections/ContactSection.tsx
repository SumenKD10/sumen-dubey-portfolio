import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useGSAP } from "@/hooks/useGSAP";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_bflxqpj";
const EMAILJS_TEMPLATE_ID = "template_2xkbdyl";
const EMAILJS_PUBLIC_KEY = "gEnAKsq9-UUrB5bQN";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { animateIn, animateSlideIn, gsap } = useGSAP();
  const sectionRef = useRef<HTMLElement>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: "Sumen Kumar Dubey",
      };

      // Send email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Success feedback
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset(); // Clear form
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section header
      animateIn(".contact-header");
      
      // Animate contact info and form
      animateSlideIn(".contact-info", "left", { delay: 0.2 });
      animateSlideIn(".contact-form", "right", { delay: 0.3 });
    }, sectionRef);

    return () => ctx.revert();
  }, [animateIn, animateSlideIn, gsap]);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="contact-header mb-16">
          <div className="text-center">
            <div className="orange-divider mx-auto"></div>
            <h2 className="section-header font-sora">Contact Me</h2>
            <p className="mx-auto font-sora">
              Let's Work Together
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="contact-info order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm lg:text-base truncate font-inter">sumenkumard@gmail.com</p>
                </div>
                {/* <div className="ml-2 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                </div> */}
              </div>

              <div className="flex items-center bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm lg:text-base font-inter">+91-7979927735</p>
                </div>
                {/* <div className="ml-2 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                </div> */}
              </div>

              <div className="flex items-center bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm lg:text-base font-inter">Bengaluru, India</p>
                </div>
                {/* <div className="ml-2 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                </div> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form order-1 lg:order-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
              <div>
                <Input
                  {...register("name")}
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 lg:p-4 rounded-2xl border border-border bg-card focus:border-primary text-sm lg:text-base"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 lg:p-4 rounded-2xl border border-border bg-card focus:border-primary text-sm lg:text-base"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Textarea
                  {...register("message")}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 lg:p-4 rounded-2xl border border-border bg-card focus:border-primary resize-none text-sm lg:text-base"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 lg:py-4 rounded-2xl font-medium hover:bg-primary/90 transition-colors text-sm lg:text-base disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;