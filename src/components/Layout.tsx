import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS } from '@/lib/index';
import { NAV_ITEMS, CONTACT_INFO } from '@/data/index';
export function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      }
    };
    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  return <div className="min-h-screen flex flex-col">
      <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-xl transition-transform group-hover:scale-105">
                PGE
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">PGE Consulting</span>
                <span className="text-xs text-muted-foreground font-mono">Industrial Execution</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map(item => <NavLink key={item.path} to={item.path} className={({
              isActive
            }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground'}`}>
                  {item.label}
                </NavLink>)}
            </nav>

            <div className="hidden lg:block">
              <Button asChild size="lg" className="font-semibold">
                <Link to={ROUTE_PATHS.APPOINTMENTS}>Schedule a Call</Link>
              </Button>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.2
      }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
            <motion.nav initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300
        }} className="absolute top-20 right-0 bottom-0 w-full max-w-sm bg-card border-l border-border shadow-xl overflow-y-auto">
              <div className="flex flex-col p-6 gap-6">
                {NAV_ITEMS.map(item => <NavLink key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className={({
              isActive
            }) => `text-lg font-semibold transition-colors hover:text-primary py-2 ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    {item.label}
                  </NavLink>)}
                <div className="pt-4 border-t border-border">
                  <Button asChild size="lg" className="w-full font-semibold">
                    <Link to={ROUTE_PATHS.APPOINTMENTS} onClick={() => setIsMobileMenuOpen(false)}>
                      Schedule a Call
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>}
      </AnimatePresence>

      <main style={{
      paddingTop: `${headerHeight}px`
    }} className="flex-1">
        {children}
      </main>

      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-xl">
                  PGE
                </div>
                <span className="font-bold text-xl">PGE Consulting</span>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 max-w-md">Delivering Industrial Projects. Safely. Start To Finish</p>
              <div className="space-y-2 text-sm">
                <p className="font-mono">
                  <span className="text-muted-foreground">Email:</span>{' '}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground hover:text-primary transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p className="font-mono">
                  <span className="text-muted-foreground">Phone:</span>{' '}
                  <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p className="font-mono">
                  <span className="text-muted-foreground">Location:</span> {CONTACT_INFO.location}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Navigation</h3>
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map(item => <Link key={item.path} to={item.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>)}
                <Link to={ROUTE_PATHS.APPOINTMENTS} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Schedule a Call
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <nav className="flex flex-col gap-2">
                <Link to={ROUTE_PATHS.SERVICES} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Owner's Representative
                </Link>
                <Link to={ROUTE_PATHS.SERVICES} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  RNG & Anaerobic Digestion
                </Link>
                <Link to={ROUTE_PATHS.SERVICES} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Wood Pellet Plants
                </Link>
                <Link to={ROUTE_PATHS.SERVICES} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Commissioning & Startup
                </Link>
                <Link to={ROUTE_PATHS.SERVICES} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Project Recovery
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 PGE Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}