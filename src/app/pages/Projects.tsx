import { AnimatedSection } from "../components/AnimatedSection";
import { Cpu, ExternalLink, Code } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "AI 生辰八字分析系统",
      desc: "结合大语言模型与传统八字命理，输入出生信息或生辰八字，即可进行深度解析与趋势推演。前端采用React，逻辑层由AI辅助生成。",
      tech: ["React", "Tailwind", "LLM API"],
      status: "在线运行",
      image: "ai-bazi-system.jpg",
    },
    {
      title: "梅花卦典 占卜系统",
      desc: "梅花卦典结合了三位高阶先师的占卜秘笈整理，遇事不决卜一卦，很准！",
      tech: ["React", "AI", "卜卦"],
      status: "在线运行",
      image: "meihua-app.jpg",
      link: "https://xb2277.github.io/meihua/"
    },
    {
      title: "笔灵 网络小说在线写作AI辅助工具",
      desc: "本人也是网络小说作者，结合自己的实用习惯，自己开发的小说写作工具，特点是在写作过程中，AI能实时给出灵感和优化建议。",
      tech: ["VS code", "Python", "Vite"],
      status: "在线运行",
      image: "biling-app.jpg",
      link: "https://xb2277.github.io/novel-ai/"
    },
    {
      title: "宝可梦卡牌管理器",
      desc: "帮朋友开发的一个宝可梦卡牌管理器，可以帮助宝可梦卡牌玩家管理自己的卡牌，实时查看自己卡牌的估值和自己的盈利情况。",
      tech: ["WorkBuddy", "Claude code", "LocalStorage"],
      status: "在线运行",
      image: "pokemon-cards.jpg",
      link: "https://xb2277.github.io/pokemon-cards/"
    }
  ];

  return (
    <div className="flex flex-col gap-12 py-8">
      <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800">
        <div>
          <h1 className="text-4xl font-bold font-serif tracking-tight leading-tight text-white mb-2">我开发的AI应用</h1>
          <p className="text-zinc-400">九离利用AI构建的实用程序集。</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
          <Cpu className="w-4 h-4" />
          <span className="text-sm font-medium">AI 驱动开发</span>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const cardContent = (
            <AnimatedSection key={idx} delay={idx * 0.15} className="group rounded-2xl bg-zinc-900/40 border border-zinc-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 px-2 py-1 bg-zinc-950/80 backdrop-blur text-xs rounded border border-zinc-700 text-zinc-300">
                  {project.status}
                </div>
                {project.link && (
                  <div className="absolute top-4 left-4 px-2 py-1 bg-emerald-500/20 backdrop-blur text-xs rounded border border-emerald-500/30 text-emerald-300">
                    可访问
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-1 text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                        <Code className="w-3 h-3" /> {t}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          );

          if (project.link) {
            return (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                {cardContent}
              </a>
            );
          }

          return cardContent;
        })}
      </div>
    </div>
  );
}
