import { Link, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback } from "react";
import { Compass, Cpu, Feather, MessageSquare, Sparkles } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseActive, setMouseActive] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (!mouseActive) setMouseActive(true);
  }, [mouseActive]);

  const navItems = [
    { path: "/", label: "太极 | 主页", icon: Sparkles },
    { path: "/skills", label: "法门 | 道法术器", icon: Compass },
    { path: "/projects", label: "造物 | AI应用", icon: Cpu },
    { path: "/articles", label: "悟道 | 修行心得", icon: Feather },
    { path: "/contact", label: "结缘 | 留言", icon: MessageSquare },
  ];

  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500/30"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseActive(false)}
    >
      {/* 全局鼠标跟随光斑 */}
      <div
        className={`mouse-glow-spot ${mouseActive ? 'active' : ''}`}
        style={{
          width: 500,
          height: 500,
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />

      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)'
      }}></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold tracking-widest text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="font-serif">九离玄境</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-emerald-400" : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label.split(' | ')[1]}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-zinc-800/50 rounded-md -z-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pt-24 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
