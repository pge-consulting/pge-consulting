import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { IMAGES } from "@/assets/images";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Clock, Shield, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name is required"),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().min(20, "Please provide at least 20 characters"),
  contactMethod: z.enum(["email", "phone"], {
    required_error: "Please select a preferred contact method"
  })
});
type BookingFormData = z.infer<typeof bookingSchema>;
export default function Appointments() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setValue,
    watch
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      contactMethod: "email"
    }
  });
  const projectType = watch("projectType");
  const contactMethod = watch("contactMethod");
  const onSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", data);
    setIsSubmitted(true);
  };
  const expectationCards = [{
    icon: MessageSquare,
    title: "Straight Talk",
    description: "Honest assessment of your project — no sugar-coating, no sales pitch. We'll tell you if we can help and if we're the right fit."
  }, {
    icon: Clock,
    title: "30 Minutes",
    description: "Focused conversation about your project challenges, timeline, and what success looks like. We respect your time."
  }, {
    icon: Shield,
    title: "No Obligation",
    description: "Zero pressure. This is a discovery call to see if PGE Consulting can add value to your project. No commitment required."
  }];
  const discussionTopics = ["Current project status and key challenges", "Timeline, budget, and scope concerns", "Contractor performance and coordination issues", "Commissioning readiness and startup planning", "Technical risks and mitigation strategies", "How PGE Consulting can support your goals"];
  const faqs = [{
    question: "What happens after I submit?",
    answer: "We typically respond within 1 business day to schedule your 30-minute consultation. You'll receive a confirmation email with available time slots and a brief questionnaire to help us prepare for the call."
  }, {
    question: "What types of projects do you work on?",
    answer: "We specialize in complex industrial facilities — RNG/anaerobic digestion plants, wood pellet manufacturing, heavy industrial construction, and process facilities. We work with project owners, developers, and private equity firms on projects ranging from $10M to $500M+."
  }, {
    question: "Where are you located?",
    answer: "PGE Consulting is based in Port Charlotte, FL, but we work on projects nationwide. Most of our engagements are field-based — we go where the project is. We're comfortable traveling to site locations across the U.S."
  }];
  return <Layout>
      <div className="relative w-full overflow-hidden bg-background">
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img src={IMAGES.HERO_BG_4} alt="Industrial facility" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-24 text-center">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Book a Project Consultation
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                A free, no-obligation 30-minute call with Stacey Roberts. No sales pitch — just an honest discussion about your project and whether PGE Consulting can help.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} className="text-center mb-16">
              <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-4">
                What to Expect
              </motion.h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {expectationCards.map((card, index) => {
              const Icon = card.icon;
              return <motion.div key={index} variants={staggerItem} className="bg-card border border-border rounded-xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </motion.div>;
            })}
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <img src="https://static-us-img.skywork.ai/prod/user/head_picture/2064847650794283008_Linkedin headshot.jpeg?image_process=quality,q_90/resize,w_1280/format,webp" alt="Stacey Roberts" className="w-32 rounded-full border-4 border-primary/20 h-[127.9977035522461px] object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">Stacey Roberts, MBA</h3>
                      <p className="text-lg text-muted-foreground mb-6">Principal Consultant</p>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground mb-3">We'll discuss:</p>
                        {discussionTopics.map((topic, index) => <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-muted-foreground">{topic}</p>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} className="bg-card border border-border rounded-xl p-8">
                {isSubmitted ? <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Request Received</h3>
                    <p className="text-lg text-muted-foreground mb-2">
                      Thank you for your interest in PGE Consulting.
                    </p>
                    <p className="text-muted-foreground">
                      We typically respond within 1 business day to schedule your consultation.
                    </p>
                  </div> : <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" {...register("name")} placeholder="John Smith" className="mt-2" />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" {...register("email")} placeholder="john@company.com" className="mt-2" />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" {...register("phone")} placeholder="(555) 123-4567" className="mt-2" />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" {...register("company")} placeholder="Company Name" className="mt-2" />
                      {errors.company && <p className="text-sm text-destructive mt-1">{errors.company.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select value={projectType} onValueChange={value => setValue("projectType", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rng-anaerobic">RNG/Anaerobic Digestion</SelectItem>
                          <SelectItem value="wood-pellet">Wood Pellet</SelectItem>
                          <SelectItem value="heavy-industrial">Heavy Industrial</SelectItem>
                          <SelectItem value="private-equity">Private Equity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.projectType && <p className="text-sm text-destructive mt-1">{errors.projectType.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="description">Brief Description *</Label>
                      <Textarea id="description" {...register("description")} placeholder="Tell us about your project — current status, key challenges, timeline..." rows={4} className="mt-2" />
                      {errors.description && <p className="text-sm text-destructive mt-1">{errors.description.message}</p>}
                    </div>

                    <div>
                      <Label className="mb-3 block">Preferred Contact Method *</Label>
                      <RadioGroup value={contactMethod} onValueChange={value => setValue("contactMethod", value as "email" | "phone")} className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-method" />
                          <Label htmlFor="email-method" className="cursor-pointer font-normal">
                            Email
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-method" />
                          <Label htmlFor="phone-method" className="cursor-pointer font-normal">
                            Phone
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.contactMethod && <p className="text-sm text-destructive mt-1">{errors.contactMethod.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Request
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 1 business day.
                    </p>
                  </form>}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: "-100px"
          }} className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>;
}