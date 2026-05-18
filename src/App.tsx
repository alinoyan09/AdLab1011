import { useState, useMemo } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search, User, ChevronRight, Share2, MessageSquare, Heart } from 'lucide-react';

const NEWS_DATA = [
  {
    id: 'ulker',
    title: "Arşivler Konuşuyor: Ülker’in Reklam Stratejisinde 70 Yıllık Süreklilik!",
    author: "Ali Noyan",
    date: "Ocak 29, 2026",
    image: "https://i0.wp.com/adlab1011.wordpress.com/wp-content/uploads/2026/01/httpsadllllab_wordpress_com-2.png?fit=1200%2C675&ssl=1",
    sections: [
      {
        subtitle: "Basılı Reklamlardan Gündelik Hayata Uzanan İlk Adımlar",
        content: "Türkiye’de reklam denince akla gelen köklü markalardan biri olan Ülker, yalnızca ürün çeşitliliğiyle değil, yıllar boyunca konuştuğu tutarlı reklam diliyle de toplumsal hafızada önemli bir yer edindi. Bugün televizyon ve dijital mecralarda izlenen Ülker reklamları incelendiğinde markanın iletişim anlayışının dönemsel tercihlerden çok, uzun vadeli bir iletişim sürecine dayandığı görüldü."
      },
      {
        subtitle: "Duygusal Anlatının Güçlenmesi",
        content: "1970’li ve 1980’li yıllara gelindiğinde televizyonun yaygınlaşması, Ülker’in reklam anlatısını daha geniş kitlelere ulaştırmasını sağladı. Bu döneme ait televizyon reklamları incelendiğinde; çocuklar, ebeveynler ve ev içi mutluluk temasının daha yoğun biçimde kullanıldığı görüldü. Neşeli müzikler, sıcak ev atmosferleri ve samimi karakterler; markanın reklam dilinin ayırt edici unsurları haline geldi."
      },
      {
        subtitle: "Reklam Hafızasında Süreklilik",
        content: "Ülker’in geçmiş reklam örnekleri ile günümüzde yayınlanan kampanyalar karşılaştırıldığında, anlatı dilinde dikkat çekici bir süreklilik olduğu görüldü. Dijitalleşme, kitle iletişim araçları ve değişen izleyici alışkanlıklarına rağmen aile, paylaşım ve mutluluk temalarının hâlâ merkezde yer alması bu sürekliliğin en somut göstergelerinden olduğunu gösterdi."
      }
    ]
  },
  {
    id: 'arcelik',
    title: "Bir Reklamdan Daha Fazlası: Geçmişten Geleceğe Köklü Bir Hikaye",
    author: "Ali Noyan",
    date: "Ocak 24, 2026",
    image: "https://i0.wp.com/adlab1011.wordpress.com/wp-content/uploads/2026/01/nicen.png.png?fit=1200%2C675&ssl=1",
    sections: [
      {
        subtitle: "Arçelik ve Çeliknaz İş Birliği",
        content: "Reklam dünyasında her gün yüzlerce yeni reklam izleyici kitleleriyle buluşuyor. Ancak bunların çok azı izlendikten sonra akılda kalmayı başarıyor. Arçelik’in, sosyal medyanın kendine has isimlerinden Çeliknaz ile gerçekleştirdiği reklam iş birliği, sıradan bir kampanya olmanın ötesine geçerek geniş kitlelerin hafızasında yer etmeyi başardı."
      },
      {
        subtitle: "Samimiyet ve Doğru Eşleşmenin Gücü",
        content: "Reklamın akılda kalıcılığını artıran en önemli faktörlerden biri, marka ile içerik üreticisi arasındaki doğru eşleşmeydi. Çeliknaz’ın kendi üslubunu koruyarak Arçelik ürünlerini anlatması, izleyicide güven duygusunu baştan yaratmış oldu. Bu durum, 'bana bir şey satılıyor' algısını zayıflatarak markanın mesajının daha kolay kabul edilmesini sağladı."
      },
      {
        subtitle: "Reklam Körlüğünü Aşan Anlatım",
        content: "Dijital platformlarda kullanıcılar, reklam içeriklerine karşı ciddi bir körlük geliştirmiş durumda. Arçelik x Çeliknaz reklamı ise bu bariyeri aşmayı başardı. Bunun en önemli nedeni de içeriğin sosyal medya dinamiklerine uygun bir dil ve tempo ile kurgulanmış olmasıydı. İzleyicinin beklentilerine gerçeklik ve sadelikle yanıt verildi."
      }
    ]
  },
  {
    id: 'banabi',
    title: "Hızın Reklamla Buluştuğu Yer: Banabi Neden Bu Kadar Konuşuldu?",
    author: "Ali Noyan",
    date: "Ocak 28, 2026",
    image: "https://i0.wp.com/adlab1011.wordpress.com/wp-content/uploads/2026/01/httpsadllllab_wordpress_com.png?fit=1200%2C675&ssl=1",
    sections: [
      {
        subtitle: "Hızlı Tüketim Kültürü",
        content: "Yemeksepeti’nin hızlı teslimat servisi Banabi için hazırladığı reklam kampanyaları, bir hizmet tanıtımının ötesine geçerek dijital çağın özellikle Z kuşağının tüketim alışkanlıklarını merkezine alan ilgi çekici bir iletişim örneği sundu. Esprili dili, kısa ve akılda kalıcı anlatımıyla öne çıkan reklamlar, markanın 'acil ihtiyaç' algısını güçlendirdi."
      },
      {
        subtitle: "Safiye Soyman ve Faik Öztürk Sürprizi",
        content: "Banabi’nin reklam stratejisinde öne çıkan dikkat çekici hamlelerden biri de Safiye ve Faik çiftinin birlikte kamera karşısına geçtiği, #ŞımartBeni etiketli reklam filmi oldu. Medyada uzun yıllardır birlikte görünmeleriyle tanınan ikilinin kampanyada yer alması, reklama sempatik ve doğal bir ilişki kazandırdı."
      },
      {
        subtitle: "Dijital Mecralarda Viral Etki",
        content: "Kampanya, dijital platformlarda kısa sürede yüksek etkileşimlere ulaştı. YouTube, Instagram ve TikTok gibi mecralarda paylaşılan kısa formatlı reklamlar, hızlı tüketilen içerik yapısına birebir uyum sağladı. Bu da Banabi’nin mesajını uzun anlatılara ihtiyaç duymadan sade bir içerikle yaymasını mümkün kıldı."
      }
    ]
  }
];

export default function App() {
  const [view, setView] = useState<'home' | 'article'>('home');
  const [selectedArticleIdx, setSelectedArticleIdx] = useState(0);
  const [currentStepContent, setCurrentStepContent] = useState({ articleIndex: 0, sectionIndex: 0 });

  const onStepEnter = ({ data }: { data: any }) => {
    setCurrentStepContent(data);
  };

  const openArticle = (index: number) => {
    setSelectedArticleIdx(index);
    setCurrentStepContent({ articleIndex: index, sectionIndex: 0 });
    setView('article');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const activeArticle = NEWS_DATA[currentStepContent.articleIndex];
  const stepProgress = ((currentStepContent.sectionIndex + 1) / (activeArticle.sections.length || 1)) * 100;

  return (
    <div id="blog-root" className="min-h-screen bg-white font-sans text-[#1a1a1a] flex flex-col">
      {/* Top Navigation Bar */}
      <nav id="main-nav" className="sticky top-0 z-50 h-16 border-b border-black flex items-center justify-between px-8 bg-white">
        <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-black text-xs">A</span>
          </div>
          <span id="site-logo" className="font-black tracking-tighter text-xl italic underline decoration-4 underline-offset-4 uppercase">ADLAB 1011</span>
        </div>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] items-center">
          <button onClick={goHome} className={`hover:text-red-600 transition-colors ${view === 'home' ? 'border-b-2 border-black' : ''}`}>Journal</button>
          <a href="#" className="hover:text-red-600 transition-colors">Archive</a>
          <a href="#" className="hidden md:block hover:text-red-600 transition-colors">Research</a>
          <div className="hidden sm:block ml-4 px-3 py-1 bg-black text-white text-[9px]">ISSUE 04 // 2026</div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col"
          >
            {/* Home Hero */}
            <header id="home-hero" className="border-b border-black grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-3 p-12 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                  Trending Analysis 2026
                </span>
                <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-10 uppercase">
                  Reklam<br/>Hafızası<br/><span className="text-red-600">Arşivi.</span>
                </h1>
                <p className="text-sm md:text-base leading-relaxed font-medium max-w-sm mb-12 opacity-80">
                  Türkiye'nin dijital iletişim geçmişini scrollytelling ile keşfedin. Markaların köklü hikayelerinden bugünün hızlı tüketim dünyasına derin bir yolculuk.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-20 bg-black"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Select an issue to begin</span>
                </div>
              </div>
              <div className="col-span-2 relative bg-black overflow-hidden flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 opacity-40">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1548" 
                    className="w-full h-full object-cover grayscale"
                    alt="Creative Studio"
                  />
                </div>
                <div className="relative z-10 text-white p-12 text-center">
                  <h2 className="text-4xl font-serif italic mb-4">"İyi reklam sadece satmaz, bir iz bırakır."</h2>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">— ADLAB_EDİTÖR</span>
                </div>
              </div>
            </header>

            {/* News Grid */}
            <main className="p-8 md:p-16">
              <div className="flex justify-between items-end mb-12 border-b border-black pb-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter">Current Issues</h3>
                <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{NEWS_DATA.length} Analyses Available</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {NEWS_DATA.map((article, idx) => (
                  <motion.article 
                    key={article.id}
                    whileHover={{ y: -8 }}
                    onClick={() => openArticle(idx)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] mb-6 overflow-hidden border-2 border-black bg-[#f4f4f4]">
                      <div className="absolute inset-0 bg-red-600 translate-x-3 translate-y-3 -z-10 bg-opacity-0 group-hover:bg-opacity-100 transition-all duration-300"></div>
                      <img 
                        src={article.image} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        alt={article.title}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                        0{idx + 1}
                      </div>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-2">{article.date}</p>
                    <h4 className="text-2xl font-black leading-tight uppercase mb-4 group-hover:underline decoration-2 underline-offset-4 tracking-tighter">
                      {article.title}
                    </h4>
                    <p className="text-sm opacity-60 leading-relaxed font-semibold mb-6 line-clamp-2 italic">
                      {article.sections[0].content}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-[1px] w-8 bg-black transition-all group-hover:w-16"></div>
                      <span className="text-[9px] font-black uppercase tracking-widest">Read Full Analysis</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </main>
          </motion.div>
        ) : (
          <motion.div 
            key="article"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col"
          >
            {/* Scrollytelling Visualizer */}
            <div id="scrolly-container" className="flex-1 flex flex-col md:flex-row min-h-screen relative">
              
              {/* Sticky Visual Side */}
              <aside className="sticky top-16 h-[50vh] md:h-[calc(100vh-64px)] w-full md:w-1/2 overflow-hidden border-b md:border-b-0 md:border-r border-black bg-[#f4f4f4]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeArticle.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="h-full flex flex-col"
                  >
                    <div className="p-8 flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-8xl font-black opacity-10 leading-none">0{selectedArticleIdx + 1}</span>
                        <span className="text-[10px] uppercase tracking-widest font-black mt-2 text-red-600">Active Analysis</span>
                      </div>
                      <div className="text-right font-mono text-[9px] opacity-40">
                        FILE: {activeArticle.id.toUpperCase()}_STRATEGY.PDF<br/>
                        DATE: {activeArticle.date.toUpperCase()}
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center p-8">
                      <div className="relative w-full max-w-lg aspect-video group">
                        <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                        <div className="absolute inset-0 border-2 border-black bg-white overflow-hidden">
                          <img 
                            src={activeArticle.image} 
                            className="w-full h-full object-cover grayscale brightness-95"
                            alt={activeArticle.title}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-8 border-t border-black bg-white">
                      <h3 className="text-2xl font-black leading-tight uppercase mb-2 tracking-tight">
                        {activeArticle.title}
                      </h3>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span>Author: {activeArticle.author}</span>
                        <button onClick={goHome} className="opacity-60 hover:opacity-100 flex items-center gap-1 cursor-pointer">
                          <ChevronRight className="w-3 h-3 rotate-180" /> Back to Journal
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-red-600 transition-all duration-300 z-20" style={{ width: `${stepProgress}%` }}></div>
              </aside>

              {/* Scrollable Content Steps */}
              <div id="scroll-steps" className="w-full md:w-1/2">
                <Scrollama onStepEnter={onStepEnter} offset={0.5}>
                  {activeArticle.sections.map((section, sIdx) => {
                    const isActive = currentStepContent.articleIndex === selectedArticleIdx && currentStepContent.sectionIndex === sIdx;
                    return (
                      <Step key={`${activeArticle.id}-${sIdx}`} data={{ articleIndex: selectedArticleIdx, sectionIndex: sIdx }}>
                        <div className={`min-h-[80vh] flex flex-col justify-center p-8 md:p-16 border-b border-black last:border-b-0 ${isActive ? 'bg-white' : 'bg-neutral-50'}`}>
                          <div className="flex items-center gap-4 mb-8">
                            <span className="w-6 h-6 border-2 border-black flex items-center justify-center text-[9px] font-black">
                              {sIdx + 1}
                            </span>
                            <div className="h-[1px] flex-1 bg-black/10"></div>
                          </div>
                          
                          <h2 className={`text-4xl md:text-5xl font-black mb-8 leading-[0.9] tracking-tighter uppercase ${isActive ? 'text-black' : 'text-neutral-300'}`}>
                            {section.subtitle}
                          </h2>
                          
                          <p className={`text-sm md:text-lg leading-relaxed font-medium mb-12 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                            {section.content}
                          </p>
                          
                          <div className={`flex items-center justify-between border-t border-black pt-8 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="flex gap-4">
                              <button className="flex items-center gap-2 group">
                                <Heart className="w-4 h-4 group-hover:fill-red-600 group-hover:text-red-600 transition-colors" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none mt-0.5">Collect</span>
                              </button>
                              <button className="flex items-center gap-2">
                                <Share2 className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none mt-0.5">Push</span>
                              </button>
                            </div>
                            <span className="font-mono text-[10px] opacity-40">FRAGMENT_{selectedArticleIdx}{sIdx}_DATA</span>
                          </div>
                        </div>
                      </Step>
                    );
                  })}
                </Scrollama>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Area */}
      <footer id="footer" className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-md">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic mb-8 underline decoration-red-600 decoration-4 underline-offset-8">AdLab 1011</h2>
            <p className="text-sm opacity-50 mb-10 leading-relaxed font-medium">
              Türkiye'nin reklam hafızası ve dijital iletişim laboratuvarı. Geçmişin köklü stratejilerini günümüzün trendleriyle harmanlayan bağımsız araştırma platformu.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {['Socials', 'Resources', 'Collab', 'Contact'].map(item => (
                <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-white/20 hover:border-red-600 transition-colors pb-1">{item}</a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 flex-1 md:justify-items-end">
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Sections</h4>
              {['Journal', 'Archives', 'Case Studies', 'Research'].map(i => <a key={i} href="#" className="text-sm font-medium hover:text-red-500 transition-colors">{i}</a>)}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Platform</h4>
              {['About Us', 'Terms', 'Privacy', 'Legal'].map(i => <a key={i} href="#" className="text-sm font-medium hover:text-red-500 transition-colors">{i}</a>)}
            </div>
            <div className="hidden sm:flex flex-col gap-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Meta</h4>
              <div className="font-mono text-[9px] opacity-40 leading-relaxed">
                BUILD: v2.0.4-LATEST<br/>
                ENGINE: SCROLLAMA_JS<br/>
                LOC: ISTANBUL_TR
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center font-mono text-[9px] opacity-30">
          <span>© 2026 ADLAB 1011 RESEARCH CORE. ALL RIGHTS OBSERVED.</span>
          <span className="hidden sm:block">OPEN_SOURCE_LICENSE // MIT</span>
        </div>
      </footer>
    </div>
  );
}
