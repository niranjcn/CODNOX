import TeamSection from '../components/TeamSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        
        {/* We reuse the TeamSection component and tell it to show all members */}
        <TeamSection showAll={true} />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;

