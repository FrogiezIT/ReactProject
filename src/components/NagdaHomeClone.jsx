import profileImage from "../assets/aman.jpg";

const sliderImages = [
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
];

const navItems = [
  "होम",
  "नागरिक सेवाएं",
  "ई-टेंडर",
  "सूचना का अधिकार",
  "ऑडिट रिपोर्ट",
  "बजट",
  "योजनाएं",
  "सी.एम.ओ",
  "अध्यक्ष",
  "विभाग",
  "गैलरी",
  "संपर्क करें"
];

const leftServices = [
  "जन्म प्रमाण पत्र",
  "मृत्यु प्रमाण पत्र",
  "विवाह प्रमाण पत्र",
  "संपत्ति कर नागरिक लॉगिन",
  "संपत्ति कर भुगतान लॉगिन",
  "जल बिल भुगतान",
  "जल कनेक्शन आवेदन ट्रैक",
  "टैंकर बुकिंग",
  "सेप्टिक टैंक सफाई",
  "फायर सेवा",
  "अग्निशमन एनओसी",
  "अनुरोध पर सेवाएं"
];

const importantLinks = [
  "अध्यक्ष",
  "सी.एम.ओ",
  "परिषद्",
  "बजट",
  "योजनाएं",
  "नगरीय प्रशासन एवं निकाय",
  "ई-टेंडर",
  "गूगल मैप",
  "प्रधानमंत्री आवास योजना",
  "ट्रेड लाइसेंस",
  "एम.पी ऑनलाइन",
  "मेरी सरकार",
  "रोजगार और लोक निर्माण",
  "राष्ट्रीय पोर्टल"
];

function NagdaHomeClone() {
  const now = new Date();
  const topDate = now.toLocaleString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <main className="min-h-screen bg-[#f2f4f8] font-sans text-[#1f2a37]">
      <div className="bg-[#0f355f] text-[11px] text-white">
        <div className="mx-auto flex w-full max-w-[1220px] flex-wrap items-center justify-between px-2.5 py-1">
          <p>{topDate}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              लॉगिन
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      <header className="border-y border-slate-300 bg-white">
        <div className="mx-auto flex w-full max-w-[1220px] items-center justify-between gap-3 px-2.5 py-2.5">
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="नगर पालिका लोगो"
              className="h-14 w-14 rounded-sm border border-slate-300 object-cover"
            />
            <div>
              <h1 className="text-[21px] font-bold leading-tight text-[#0f355f]">
                नगर पालिका परिषद् नागदा
              </h1>
              <p className="text-[13px] text-slate-600">जिला: उज्जैन (म.प्र.)</p>
            </div>
          </div>
          <div className="text-right text-[12px] text-slate-600">
            <p>नगरीय प्रशासन एवं विकास विभाग</p>
            <p>मध्य प्रदेश शासन</p>
          </div>
        </div>
      </header>

      <nav className="border-b border-[#082440] bg-[#0f4c81] text-[12px] font-semibold text-white">
        <div className="mx-auto flex w-full max-w-[1220px] flex-wrap gap-x-4 gap-y-1 px-2.5 py-2">
          {navItems.map((item) => (
            <a key={item} href="#" className="border-r border-white/30 pr-4 last:border-r-0 hover:text-[#ffdf7c]">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto w-full max-w-[1220px] px-2.5 pb-2 pt-2.5">
        <div className="grid gap-2 md:grid-cols-5">
          {sliderImages.map((image, idx) => (
            <img
              key={image}
              src={image}
              alt={`Slider ${idx + 1}`}
              className="h-32 w-full border border-slate-300 object-cover md:h-36"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-2.5 pb-2.5">
        <div className="overflow-hidden border border-[#d7a93a] bg-[#fff8e6]">
          <div className="bg-[#e1a221] px-3 py-1 text-[12px] font-bold text-white">
            विज्ञप्ति
          </div>
          <div className="overflow-hidden px-3 py-1.5 text-[12px] text-slate-700">
            <p className="animate-[marquee_22s_linear_infinite] whitespace-nowrap">
              नगर आपका है इसे साफ व स्वच्छ रखने में सहयोग दें | पार्क अथवा सार्वजनिक स्थानों पर गंदगी न फैलाएं | संपत्ति कर व जल कर समय पर जमा करें | नगर पालिका परिषद नागदा में आपका स्वागत है |
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1220px] gap-2.5 px-2.5 pb-3 lg:grid-cols-[270px_1fr_270px]">
        <aside className="border border-slate-300 bg-white">
          <h2 className="border-b border-slate-300 bg-[#dbe8f6] px-3 py-2 text-[13px] font-bold text-[#0f355f]">
            नागरिक सेवाएं
          </h2>
          <ul className="max-h-[530px] overflow-auto p-2">
            {leftServices.map((item) => (
              <li key={item} className="border-b border-dashed border-slate-200 px-1 py-1.5 text-[12px]">
                <a href="#" className="hover:text-[#0f4c81] hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-3">
          <article className="border border-slate-300 bg-white p-3">
            <h2 className="border-b border-slate-200 pb-1 text-[17px] font-bold text-[#0f355f]">
              नागदा के बारे में
            </h2>
            <p className="mt-2 text-[12px] leading-6 text-slate-700">
              नागदा मध्य प्रदेश का एक प्रमुख औद्योगिक एवं शहरी क्षेत्र है। नगर पालिका परिषद नागरिकों को जल, स्वच्छता, सड़क, कर, प्रकाश व्यवस्था और अन्य आवश्यक सेवाएं उपलब्ध कराती है। हमारा उद्देश्य पारदर्शी शासन, स्वच्छ नगर, बेहतर बुनियादी सुविधाएं और डिजिटल सेवाओं का विस्तार है।
            </p>
          </article>

          <div className="grid gap-3 md:grid-cols-2">
            <article className="border border-slate-300 bg-white p-3">
              <h3 className="border-b border-slate-200 pb-1 text-[14px] font-bold text-[#0f355f]">अध्यक्ष</h3>
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={profileImage}
                  alt="अध्यक्ष"
                  className="h-16 w-16 border border-slate-300 object-cover"
                />
                <div className="text-[12px]">
                  <p className="font-semibold">श्रीमती प्रतिनिधि नाम</p>
                  <p className="text-slate-600">अध्यक्ष, नगर पालिका परिषद</p>
                </div>
              </div>
            </article>

            <article className="border border-slate-300 bg-white p-3">
              <h3 className="border-b border-slate-200 pb-1 text-[14px] font-bold text-[#0f355f]">
                मुख्य नगर पालिका अधिकारी
              </h3>
              <div className="mt-2 flex items-center gap-3">
                <img
                  src={profileImage}
                  alt="सीएमओ"
                  className="h-16 w-16 border border-slate-300 object-cover"
                />
                <div className="text-[12px]">
                  <p className="font-semibold">श्री प्रतिनिधि नाम</p>
                  <p className="text-slate-600">सी.एम.ओ, नगर पालिका परिषद</p>
                </div>
              </div>
            </article>
          </div>

          <article className="border border-slate-300 bg-white p-3">
            <h3 className="border-b border-slate-200 pb-1 text-[14px] font-bold text-[#0f355f]">
              फोटो गैलरी
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-3 md:grid-cols-4">
              {sliderImages.concat(sliderImages[0], sliderImages[1]).map((img, i) => (
                <img
                  key={`${img}-${i}`}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="h-20 w-full border border-slate-300 object-cover"
                />
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-3">
          <article className="border border-slate-300 bg-white">
            <h2 className="border-b border-slate-300 bg-[#dbe8f6] px-3 py-2 text-[13px] font-bold text-[#0f355f]">
              महत्वपूर्ण लिंक
            </h2>
            <div className="p-2">
              {importantLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block border-b border-dashed border-slate-200 px-1 py-1.5 text-[12px] hover:text-[#0f4c81] hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </article>

          <article className="border border-slate-300 bg-white p-3 text-[12px]">
            <h3 className="border-b border-slate-200 pb-1 text-[13px] font-bold text-[#0f355f]">
              स्थान और मौसम
            </h3>
            <p className="mt-2 text-slate-700">Nagda, Madhya Pradesh</p>
            <p className="mt-1 text-slate-600">तापमान: 30°C | आर्द्रता: 42%</p>
          </article>
        </aside>
      </section>

      <footer className="border-t border-[#082440] bg-[#0f355f] text-white">
        <div className="mx-auto grid w-full max-w-[1220px] gap-3 px-2.5 py-4 text-[12px] md:grid-cols-3">
          <div>
            <p className="font-bold">नगर पालिका परिषद् नागदा</p>
            <p className="mt-1 text-slate-200">जिला उज्जैन, मध्य प्रदेश</p>
          </div>
          <div>
            <p className="font-bold">संपर्क</p>
            <p className="mt-1 text-slate-200">फोन: 07366-000000</p>
            <p className="text-slate-200">ईमेल: info@nagdanp.in</p>
          </div>
          <div>
            <p className="font-bold">Follow Us</p>
            <p className="mt-1 text-slate-200">Facebook | YouTube | Twitter</p>
          </div>
        </div>
      </footer>

      <style>
        {`@keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }`}
      </style>
    </main>
  );
}

export default NagdaHomeClone;
