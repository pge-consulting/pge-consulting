import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ROUTE_PATHS } from '@/lib/index';
import { CONTACT_INFO } from '@/data/index';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number required'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [projectType, setProjectType] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setProjectType('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <motion.section
          className="relative bg-gradient-to-b from-background via-muted/30 to-background py-24"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Talk About Your Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No sales pitch. No generic proposals. Just a direct conversation about your project challenges and whether we're the right fit to help.
            </p>
          </div>
        </motion.section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={staggerItem}>
                <Card className="p-8 h-full border-border/50 shadow-lg">
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a
                          href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                          className="text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Location</p>
                        <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Office Hours</p>
                        <p className="text-muted-foreground">{CONTACT_INFO.officeHours}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Card className="p-8 border-border/50 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  
                  {isSubmitted && (
                    <Alert className="mb-6 bg-primary/10 border-primary/20">
                      <AlertDescription className="text-foreground">
                        Thank you for your message. We'll get back to you within 1 business day.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        {...register('fullName')}
                        placeholder="John Smith"
                        className="w-full"
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold mb-2">
                        Company Name *
                      </label>
                      <Input
                        id="companyName"
                        {...register('companyName')}
                        placeholder="Your Company"
                        className="w-full"
                      />
                      {errors.companyName && (
                        <p className="text-destructive text-sm mt-1">{errors.companyName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="john@company.com"
                        className="w-full"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        placeholder="(555) 123-4567"
                        className="w-full"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold mb-2">
                        Project Type *
                      </label>
                      <Select
                        value={projectType || 'none'}
                        onValueChange={(value) => {
                          const actualValue = value === 'none' ? '' : value;
                          setProjectType(actualValue);
                          setValue('projectType', actualValue, { shouldValidate: true });
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Select project type</SelectItem>
                          <SelectItem value="rng-anaerobic">RNG/Anaerobic Digestion</SelectItem>
                          <SelectItem value="wood-pellet">Wood Pellet</SelectItem>
                          <SelectItem value="heavy-industrial">Heavy Industrial</SelectItem>
                          <SelectItem value="private-equity">Private Equity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.projectType && (
                        <p className="text-destructive text-sm mt-1">{errors.projectType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="w-full resize-none"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-base font-semibold"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-foreground text-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Delivering Industrial Projects. On Schedule. On Budget. Safely.
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Ready to discuss your project in detail? Schedule a free 30-minute consultation.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background text-foreground hover:bg-background/90 border-background"
            >
              <Link to={ROUTE_PATHS.APPOINTMENTS}>Schedule a Call</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
