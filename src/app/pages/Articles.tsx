import { AnimatedSection } from "../components/AnimatedSection";
import { Clock, ChevronRight } from "lucide-react";

export function Articles() {
  const articles = [
    {
      date: "2026-05-12",
      title: "从内丹术看现代人工智能的「涌现」",
      excerpt: "道家讲求『精气神』的凝练与转化，而在大语言模型中，通过海量参数的训练是否也产生了一种类似『神识』的涌现？本文尝试将古老修炼体系与深度学习网络进行跨界对比。",
      readTime: "8 min read",
      category: "AI与道"
    },
    {
      date: "2026-03-28",
      title: "CIC法脉筑基心得：身心合一的现代实践",
      excerpt: "在快节奏的现代社会中，如何保持身心的清明？分享我进入CIC法脉后的初期修持体会，以及如何将静坐导引融入日常工作流中。",
      readTime: "12 min read",
      category: "修行随笔"
    },
    {
      date: "2026-01-15",
      title: "祝由符箓与心理暗示：从脑科学的角度解读",
      excerpt: "符箓是否仅仅是封建迷信？还是包含着深刻的心理干预机制？结合现代神经科学与我的画符实证，探讨符箓在改变潜意识和生物场中的可能作用。",
      readTime: "15 min read",
      category: "法术研究"
    },
    {
      date: "2025-11-03",
      title: "用 Cursor 和 Claude 搭建我的第一个太极排盘工具",
      excerpt: "记录一个没有深厚前端基础的修行者，如何利用前沿的 AI 辅助编程工具，在三天内完成一个包含复杂易理逻辑的 Web 应用程序的经历。",
      readTime: "10 min read",
      category: "技术实践"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 flex flex-col gap-12">
      <AnimatedSection>
        <h1 className="text-4xl font-serif text-white mb-4">悟道笔记</h1>
        <p className="text-zinc-400">
          修真之路的吉光片羽，技术探索的灵光一现。
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-8">
        {articles.map((article, i) => (
          <AnimatedSection key={i} delay={i * 0.15} className="group relative pl-8 md:pl-0">
            {/* Timeline dot for desktop */}
            <div className="hidden md:block absolute left-[-2rem] top-2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:border-emerald-500 group-hover:bg-emerald-400 transition-colors z-10" />
            <div className="hidden md:block absolute left-[-1.7rem] top-5 bottom-[-3rem] w-[1px] bg-zinc-800 group-last:hidden" />
            
            <article className="flex flex-col gap-3 p-6 rounded-2xl bg-transparent hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 transition-all cursor-pointer">
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.date}
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-800/50 text-zinc-300">
                  {article.category}
                </span>
                <span>{article.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-medium text-zinc-100 group-hover:text-emerald-400 transition-colors">
                {article.title}
              </h2>
              
              <p className="text-zinc-400 leading-relaxed text-sm">
                {article.excerpt}
              </p>
              
              <div className="mt-2 text-emerald-500 text-sm font-medium flex items-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                阅读全文 <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
