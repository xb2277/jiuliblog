import { AnimatedSection } from "../components/AnimatedSection";
import { MessageSquare, Send, QrCode } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Contact() {
  const [messages, setMessages] = useState([
    { name: "云游道人", date: "2026-06-15", text: "网站设计得非常有禅意！AI与道法的结合让人耳目一新。" },
    { name: "AI研究员老李", date: "2026-05-22", text: "请问那个『数字道藏』系统有开源的计划吗？对其中的向量检索部分很感兴趣。" }
  ]);

  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !name.trim()) return;
    
    const newMsg = {
      name,
      date: new Date().toISOString().split('T')[0],
      text: input
    };
    
    setMessages([newMsg, ...messages]);
    setInput("");
    setName("");
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 py-8">
      {/* Contact Info & QR */}
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <AnimatedSection>
          <h1 className="text-4xl font-serif text-white mb-4">结缘</h1>
          <p className="text-zinc-400">
            天涯未远，道法自然。<br/>
            若有学术探讨、修持交流或项目合作，皆可扫码结缘。
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col items-center text-center gap-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-medium text-zinc-200 mb-1">添加微信</h3>
            <p className="text-sm text-zinc-500">扫码时请注明来意</p>
          </div>
          
          <div className="w-48 h-48 bg-white p-2 rounded-xl relative overflow-hidden group">
            {/* WeChat QR Code */}
            <ImageWithFallback 
              src="wechat-qr.jpg"
              alt="WeChat QR Code"
              className="w-full h-full object-cover rounded-lg opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Guestbook */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-serif text-white">访客留影</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800 flex flex-col gap-4 mb-8">
            <input 
              type="text" 
              placeholder="您的称呼（道号/昵称）" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <textarea 
              placeholder="写下您的感悟或留言..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            />
            <div className="flex justify-end">
              <button 
                type="submit"
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
                disabled={!input.trim() || !name.trim()}
              >
                发送 <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className="p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-emerald-400">{msg.name}</span>
                  <span className="text-xs text-zinc-600 font-mono">{msg.date}</span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
