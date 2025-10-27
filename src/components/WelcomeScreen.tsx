import { FileText } from 'lucide-react';
import JSConfetti from 'js-confetti';

const WelcomeScreen = () => {
  const handleLogoClick = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({ 
      confettiColors: ['hsl(var(--primary))', 'hsl(var(--code-function))', 'hsl(var(--code-keyword))', 'hsl(var(--code-string))', 'hsl(var(--code-variable))'] 
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="text-center space-y-6 max-w-2xl px-4">
        <button 
          onClick={handleLogoClick}
          className="mx-auto flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] transition-all duration-300 group"
          aria-label="Click for confetti!"
        >
          <FileText className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
        </button>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Inga Maholwana
          </h1>
          <p className="text-xl text-muted-foreground font-mono">
            Full Stack Software Engineer
          </p>
        </div>

        <div className="pt-8 space-y-2 text-sm text-muted-foreground/60">
          <p className="font-mono">
            Click the logo for a surprise! 🎉
          </p>
          <p className="font-mono">
            Or try: <kbd className="px-2 py-1 bg-sidebar rounded text-xs">Ctrl</kbd> + 
            <kbd className="px-2 py-1 bg-sidebar rounded text-xs mx-1">Shift</kbd> + 
            <kbd className="px-2 py-1 bg-sidebar rounded text-xs">K</kbd>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
