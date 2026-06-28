import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, BookOpen, Code2, Users, Calendar, Hexagon, Quote } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const stats = [
  { label: "研学修行", value: "35", unit: "年", icon: <BookOpen className="w-5 h-5" /> },
  { label: "法脉实践", value: "10", unit: "年", icon: <Code2 className="w-5 h-5" /> },
  { label: "独门绝技", value: "1", unit: "招", icon: <Quote className="w-5 h-5" /> },
  { label: "八字批命", value: "3000+", unit: "人", icon: <Users className="w-5 h-5" /> },
];

const timeline = [
  { year: "1992", title: "初入道门", desc: "自幼受家学熏陶，初接触易经八卦、四柱八字，以命学开启修行之路。" },
  { year: "2015", title: "传承九玄法脉", desc: "遇良师，正式拜入九玄法脉，系统修习性命双修之法，体悟道法自然之妙。" },
  { year: "2018", title: "精进CIC祝由符箓", desc: "深入研习神奇CIC道法与本门符箓，以无形之气显化有形之信息，开启道法实践。" },
  { year: "2021", title: "开启自媒体传播道法", desc: "因缘际会进入抖音，小有成就，得十几万粉丝喜爱与支持。" },
  { year: "2025", title: "自学AI人工智能", desc: "打造「智能道法」系统，以向量WiKi重构华夏古老智慧，尝试AI工具上线。" },
];

const featuredProjects = [
  {
    title: "梅花卦典 占卜系统",
    desc: "梅花卦典结合了三位高阶先师的占卜秘笈整理，遇事不决卜一卦，很准！",
    tags: ["React", "AI", "卜卦"],
    img: "meihua-app.jpg",
    category: "AI应用",
    link: "https://xb2277.github.io/meihua/",
  },
  {
    title: "数字道藏检索",
    desc: "以向量数据库构建道家典籍智能检索系统，支持语义搜索与跨经关联。",
    tags: ["Vector DB", "NLP", "道藏"],
    img: "daozang-search.jpg",
    category: "AI应用",
  },
  {
    title: "AI 生辰八字分析",
    desc: "结合子平与盲派八字原理的智能分析工具，不是很特殊的八字，分析结果值得参考。",
    tags: ["Generative AI", "八字", "分析"],
    img: "ai-bazi.jpg",
    category: "AI应用",
  },
  {
    title: "五雷平安符",
    desc: "以九玄法脉精义绘制，凝聚天地正能量，护宅安家保平安、辟邪驱煞镇阴气，可随身携带。",
    tags: ["符箓", "驱邪", "平安"],
    img: "talisman-wulei.jpg",
    category: "法器符箓",
  },
  {
    title: "流年转运符",
    desc: "专为流年不顺、运势低迷者绘制，疏通气场、激活正缘，助人转危为安、逢凶化吉。",
    tags: ["符箓", "开运", "转运"],
    img: "talisman-zhuan.jpg",
    category: "法器符箓",
  },
  {
    title: "招财聚气阵",
    desc: "依奇门财位布局之法，结合五行生克制化，凝聚财气，助旺财运与事业。",
    tags: ["奇门遁甲", "招财", "开库"],
    img: "talisman-cai.jpg",
    category: "法器符箓",
  },
];

const latestArticles = [
  { title: "乾坤定位：易经卦象中的AI算法隐喻", date: "2026-06", tag: "悟道" },
  { title: "打坐入定与神经网络：注意力机制的古老智慧", date: "2026-05", tag: "修行" },
  { title: "数字符箓：当Prompt Engineering遇见道法符箓", date: "2026-04", tag: "造物" },
];

export function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== Section 1: Hero ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden"><div className="absolute inset-0 flex items-center justify-end opacity-[0.07] pointer-events-none">
          <Hexagon className="w-[600px] h-[600px] text-emerald-400 animate-spin" style={{ animationDuration: '60s' }} />
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          <AnimatedSection delay={0.1} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-emerald-400 w-fit">
              <Sparkles className="w-4 h-4" />
              <span>道法自然 · 一念宇宙</span>
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-serif tracking-tight leading-tight"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {/* 问道于真 — 逐字浮现 + 逐字悬浮放大 */}
              <span className="text-white">
                {"问道于真".split("").map((char, i) => (
                  <motion.span
                    key={`a${i}`}
                    className="hero-char inline-block"
                    variants={{
                      hidden:  { opacity: 0, y: 30, filter: "blur(8px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                      }
                    }}
                    whileHover={{
                      scale: 1.4,
                      textShadow: "0 0 24px rgba(255,255,255,0.8), 0 0 48px rgba(52,211,153,0.5)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              {/* 寻道以心 — 逐字流光 + 逐字悬浮放大 */}
              {"寻道以心".split("").map((char, i) => (
                <motion.span
                  key={`b${i}`}
                  className="hero-char inline-block text-transparent bg-clip-text bg-[length:200%_100%] bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-shimmer"
                  style={{ display: 'inline-block' }}
                  variants={{
                    hidden:  { opacity: 0, y: 30, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 + i * 0.08 }
                    }
                  }}
                  whileHover={{
                    scale: 1.4,
                    filter: "drop-shadow(0 0 12px rgba(52,211,153,0.8)) brightness(1.3)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
              九离有幸传承九玄法脉，亦精于CIC与祝由之术，研习四柱八字三十余载，以知命入道，有幸得见天地人之玄妙，窥宇宙乃能量与信息之根本，动则时空，静则瞬达，玄之又玄，妙不可言也！
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/projects" className="relative overflow-hidden px-6 py-3 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center gap-2 font-medium btn-shimmer">
                我的 AI 应用 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/articles" className="relative overflow-hidden px-6 py-3 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-all font-medium btn-shimmer">
                悟道心得与案例
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
              <ImageWithFallback
                src="avatar.jpg"
                alt="九离师兄 - 问道于山"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-lg bg-zinc-950/60 backdrop-blur-md border border-zinc-800/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-700">
                    <ImageWithFallback
                      src="cic-logo.png"
                      alt="CIC 法脉"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">九离师兄 (Jiu Li)</h3>
                    <p className="text-sm text-zinc-400">一指定乾坤</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-3xl"></div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== Section 2: 修行数据 ===== */}
      <section className="py-20 border-t border-zinc-900">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight leading-tight text-white mb-2">高维洞天 · 修行拾阶</h2>
          <p className="text-zinc-500 text-sm">以命运为镜，照见修行之路</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={0.1 * i} className="group">
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all duration-300 text-center card-hover">
                <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  {s.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold font-serif text-white mb-1">
                  {s.value}<span className="text-lg text-emerald-400 ml-1">{s.unit}</span>
                </div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== Section 3: 精选造物 ===== */}
      <section className="py-20 border-t border-zinc-900">
        <AnimatedSection className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight leading-tight text-white mb-2">法器造物 与 我的AI实践</h2>
            <p className="text-zinc-500 text-sm">以道为体，以术为用，造数字之器</p>
          </div>
          <Link to="/projects" className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1 transition-colors">
            查看全部 <ArrowRight className="w-3 h-3" />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((proj, i) => {
            const categoryClass =
              proj.category === "法器符箓"
                ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";

            const card = (
              <div className="rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-300 bg-zinc-900/20 card-hover h-full flex flex-col group">
                <div className="aspect-video overflow-hidden relative">
                  <ImageWithFallback
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full border backdrop-blur-sm font-medium ${categoryClass}`}>
                    {proj.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-white font-medium text-lg group-hover:text-emerald-300 transition-colors">{proj.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return (
              <AnimatedSection key={i} delay={0.1 * i}>
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ===== Section 4: 修行之路 ===== */}
      <section className="py-20 border-t border-zinc-900">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight leading-tight text-white mb-2">修行之路</h2>
          <p className="text-zinc-500 text-sm">道艰且长，行则将至</p>
        </AnimatedSection>

        <div className="relative">
          {/* 时间线中轴线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block"></div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* 桌面端：时间点 */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-zinc-950 z-10"></div>

                <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/20 transition-colors">
                    <div className="text-emerald-400 font-bold text-lg font-serif mb-1">{item.year}</div>
                    <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* 移动端：时间点 */}
                <div className="md:hidden flex items-center gap-4 w-full">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <div className="h-px flex-1 bg-zinc-800"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 5: 最新悟道 ===== */}
      <section className="py-20 border-t border-zinc-900">
        <AnimatedSection className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight leading-tight text-white mb-2">悟道心得 与 法脉实践</h2>
            <p className="text-zinc-500 text-sm">以文载道，以术传法</p>
          </div>
          <Link to="/articles" className="text-emerald-400 hover:text-emerald-300 text-sm flex items-center gap-1 transition-colors">
            查看全部 <ArrowRight className="w-3 h-3" />
          </Link>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {latestArticles.map((article, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="p-5 rounded-xl border border-zinc-800/50 hover:border-emerald-500/20 hover:bg-zinc-900/40 transition-all duration-300 flex items-center gap-6 group cursor-pointer card-hover">
                <div className="hidden sm:flex w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{article.tag}</span>
                    <span className="text-xs text-zinc-600">{article.date}</span>
                  </div>
                  <h3 className="text-white font-medium group-hover:text-emerald-400 transition-colors">{article.title}</h3>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== Section 6: 三大法门 ===== */}
      <section className="py-20 border-t border-zinc-900">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-serif tracking-tight leading-tight text-white mb-2">三门共进</h2>
          <p className="text-zinc-500 text-sm">道·术·器三者兼备，方为圆满</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "九玄法脉传承", desc: "正本清源，性命双修的古老智慧与实证体验。以心印心，口传心授，延续千年法脉之精华。", icon: "🌀", img: "fabao-faxiang.webp" },
            { title: "CIC、祝由与符箓", desc: "以无形之气显化有形之术法，沟通天地信息之媒介。将道法精义融入每一个信息的显化之中。", icon: "✧", img: "fabao-fuji.webp" },
            { title: "AI/Web 应用", desc: "将传统道法转化为数字模型，借AI计算工具与效率平台，让古老智慧以数字形态服务当代众生。", icon: "◈", img: "fabao-ai.webp" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.15 * i}>
              <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all duration-300 h-full">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif text-zinc-200 mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                {item.img && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-zinc-800/50 aspect-[9/16] bg-zinc-900/50">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== Section 7: 结缘 CTA ===== */}
      <section className="py-20 border-t border-zinc-900">
        <AnimatedSection className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-emerald-500/5 border border-zinc-800/50 rounded-3xl"></div>
          <div className="relative z-10 p-10 md:p-16 text-center flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-serif tracking-tight leading-tight text-white">
              随缘结善，共参玄妙
            </h2>
            <p className="text-zinc-400 max-w-lg leading-relaxed">
              无论是学术探讨、修持交流，还是项目合作，皆欢迎结缘。<br/>
              天涯未远，道法自然。
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/contact" className="relative overflow-hidden px-6 py-3 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center gap-2 font-medium btn-shimmer">
                扫码结缘 <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:xuanyuan@dao-ai.dev" className="relative overflow-hidden px-6 py-3 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-all font-medium btn-shimmer">
                发送邮件
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
