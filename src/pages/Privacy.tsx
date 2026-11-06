import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { Layout } from '@/components/Layout';
import { fadeInUp } from '@/lib/motion';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';

export default function Privacy() {
  return (
    <Layout>
      <Seo title="Privacy Policy | PGE Consulting" description="How PGE Consulting handles information submitted through this website." path="/privacy" />
      <div className="min-h-screen">
        <motion.section
          className="relative bg-gradient-to-b from-background via-muted/30 to-background py-24"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: July 14, 2026</p>
          </div>
        </motion.section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <p className="text-foreground font-medium leading-relaxed">
                  <strong>Short version:</strong> PGE Consulting's website does not collect, sell, or share your personal information for marketing purposes. Any information you voluntarily submit through our contact or booking forms is used solely to respond to your inquiry.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed">
                  PGE Consulting (also operating as Pine Grove Enterprises) is an industrial project execution and advisory firm. Our website is at <a href="https://www.pge-consulting.com" className="text-primary hover:underline">www.pge-consulting.com</a>. For privacy questions, contact <a href="mailto:staceyr@pge-consulting.com" className="text-primary hover:underline">staceyr@pge-consulting.com</a>.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-foreground">Information You Provide Voluntarily</h3>
                <p className="text-muted-foreground leading-relaxed">When you submit our contact or consultation booking forms, we collect:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your company name (optional)</li>
                  <li>Your phone number (optional)</li>
                  <li>Your project description or message</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This information is used only to respond to your inquiry. We do not use it for marketing, and we do not sell or share it with third parties.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-6">Information Collected Automatically</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use <strong className="text-foreground">Google Analytics</strong> to understand how visitors use our website. Google Analytics collects anonymized data including pages visited, time on site, and general geographic region. This data does not identify you personally. You can opt out via the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>To respond to your inquiry or consultation request</li>
                  <li>To schedule and conduct project consultations</li>
                  <li>To follow up on project discussions you have initiated</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">We will not send unsolicited marketing emails or add you to mailing lists without your explicit consent.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Data Storage and Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Form submissions are stored securely in Supabase, a PostgreSQL database platform with enterprise-grade security. Emails are delivered via Resend. Both services use industry-standard encryption in transit and at rest. We retain form submission data for 2 years, after which it is deleted.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website does not use advertising cookies, tracking pixels, or retargeting technologies. Google Analytics uses a first-party cookie (<code className="text-primary bg-muted px-1 rounded">_ga</code>) to distinguish visitors. You can block or delete cookies through your browser settings at any time.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Third-Party Services</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong className="text-foreground">Google Analytics</strong> — anonymized website traffic analytics</li>
                  <li><strong className="text-foreground">Supabase</strong> — secure form submission storage</li>
                  <li><strong className="text-foreground">Resend</strong> — transactional email delivery</li>
                  <li><strong className="text-foreground">Cloudflare Pages</strong> — website hosting and CDN</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">You have the right to request access, correction, or deletion of your personal data. Contact <a href="mailto:staceyr@pge-consulting.com" className="text-primary hover:underline">staceyr@pge-consulting.com</a> to exercise these rights.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">This website is intended for business professionals and is not directed at individuals under 18 years of age.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">We may update this Privacy Policy from time to time. Changes will be reflected by the "Last updated" date at the top of this page.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">PGE Consulting</strong><br />
                  <a href="mailto:staceyr@pge-consulting.com" className="text-primary hover:underline">staceyr@pge-consulting.com</a><br />
                  Port Charlotte, FL, USA
                </p>
              </div>

              <div className="border-t border-border pt-8 flex gap-6">
                <Link to={ROUTE_PATHS.HOME} className="text-primary hover:underline text-sm">← Back to Home</Link>
                <Link to={ROUTE_PATHS.TERMS} className="text-primary hover:underline text-sm">Terms of Service →</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
