import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { fadeInUp } from '@/lib/motion';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';

export default function Terms() {
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
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Legal</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
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
                  By accessing and using <strong>www.pge-consulting.com</strong>, you agree to these Terms of Service. If you do not agree, please do not use this website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Use of This Website</h2>
                <p className="text-muted-foreground leading-relaxed">This website is operated by PGE Consulting (Pine Grove Enterprises) for informational purposes and to facilitate initial contact with prospective clients. You agree not to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Use the site in any way that violates applicable laws or regulations</li>
                  <li>Submit false, misleading, or fraudulent information through any form</li>
                  <li>Attempt to gain unauthorized access to any part of the website or its infrastructure</li>
                  <li>Use automated tools to scrape, crawl, or harvest content from this website</li>
                  <li>Transmit spam, malware, or other harmful content</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. No Consulting Relationship</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Submitting a contact or booking form, or communicating through this website, does not create a consulting or contractual relationship. Any engagement for professional services requires a separate written agreement signed by both parties.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website — including text, photographs, graphics, logos, and design — is the property of PGE Consulting or its licensors. You may not reproduce, distribute, or use any content from this site without prior written permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Project Photography</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Photographs displayed on this website depict real industrial facilities and projects. These images are the property of PGE Consulting and may not be reproduced without written permission. Project names and client identities are not disclosed without explicit authorization.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website is provided on an "as is" basis. PGE Consulting makes no representations or warranties regarding the accuracy, completeness, or reliability of the information on this website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, PGE Consulting shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Our total liability for any claim shall not exceed $100 USD.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website may contain links to third-party websites for reference. PGE Consulting is not responsible for their content, privacy practices, or availability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of this website is also governed by our{' '}
                  <Link to={ROUTE_PATHS.PRIVACY} className="text-primary hover:underline">Privacy Policy</Link>,
                  which is incorporated into these Terms by reference.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles. Disputes shall be resolved in the courts of Charlotte County, Florida.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Changes to These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  PGE Consulting reserves the right to modify these Terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">11. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">PGE Consulting</strong><br />
                  <a href="mailto:staceyr@pge-consulting.com" className="text-primary hover:underline">staceyr@pge-consulting.com</a><br />
                  Port Charlotte, FL, USA
                </p>
              </div>

              <div className="border-t border-border pt-8 flex gap-6">
                <Link to={ROUTE_PATHS.PRIVACY} className="text-primary hover:underline text-sm">← Privacy Policy</Link>
                <Link to={ROUTE_PATHS.HOME} className="text-primary hover:underline text-sm">Back to Home →</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
