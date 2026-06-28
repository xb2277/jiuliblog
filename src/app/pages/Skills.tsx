import { AnimatedSection } from "../components/AnimatedSection";
import { BookOpen, Flame, Wind } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Skills() {
  const skills = [
    {
      title: "九玄法脉核心修持",
      icon: <Wind className="w-6 h-6 text-emerald-400" />,
      desc: "遵循传承，注重气脉运转与心性修炼，结合能量本质，达到身心合一的境界，日常修持包括内丹静坐、动功导引等。",
      tags: ["内丹术", "导引", "禅定"]
    },
    {
      title: "CIC、本门符箓和祝由术",
      icon: <Flame className="w-6 h-6 text-orange-400" />,
      desc: "CIC的神奇运用，符箓中的能量驱动，祝由术的人人可用，丰富的层次结合，有效运用于辟邪、祛阴、镇宅、净场、转运等实际场景。",
      tags: ["一指定乾坤", "雷法", "马有成"]
    },
    {
      title: "八字命理研究",
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      desc: "深入研读《子平真铨》、《渊海子平》、《三命通会》等命理经典，结合盲派体用，有效融合于现代命理实践之中。",
      tags: ["易经", "推背图", "河图洛书"]
    }
  ];

  return (
    <div className="flex flex-col gap-16 py-8">
      <AnimatedSection className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-serif tracking-tight leading-tight text-white mb-4">修行法门</h1>
        <p className="text-zinc-400">
          修之于身，其德乃真。法脉传承不仅是技法的学习，更是心性的打磨。
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <AnimatedSection key={index} delay={index * 0.1} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-medium text-zinc-200 mb-3">{skill.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {skill.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="mt-12">
        <h2 className="text-2xl font-bold font-serif tracking-tight leading-tight text-white mb-8 border-l-4 border-emerald-500 pl-4">符箓壁纸展示</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/talisman-01.webp", title: "五帝钱·镇煞符" },
            { src: "/talisman-02.webp", title: "太上敕令·五雷符" },
            { src: "/talisman-03.webp", title: "镇宅平安·紫微讳" },
            { src: "/talisman-04.webp", title: "雷祖敕令·除厄符" },
            { src: "/talisman-05.webp", title: "九天玄元·化煞符" },
            { src: "/talisman-06.webp", title: "太上老君·急急如律令" },
            { src: "/talisman-07.webp", title: "勅令·敕召万神" },
            { src: "/talisman-08.webp", title: "北斗星君·财神到" },
          ].map((item, i) => (
            <div key={i} className="aspect-[9/16] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative group card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
              <ImageWithFallback 
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-3 left-3 z-20">
                <p className="text-xs text-amber-200/90 font-serif tracking-wide">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
