import PolicyLayout from "../../components/PolicyLayouts/PolicyLayout";

const sections = [
  { id: "giris", title: "Giriş" },
  { id: "cerez-nedir", title: "Çerez Nedir?" },
  { id: "hangi-tur-cerezler", title: "Hangi Tür Çerezleri Kullanıyoruz?" },
  {
    id: "cerezleri-nasil-kullaniyoruz",
    title: "Çerezleri Nasıl Kullanıyoruz?",
  },
  {
    id: "cerez-tercihleri",
    title: "Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?",
  },
  { id: "ucuncu-taraf-cerezler", title: "Üçüncü Taraf Çerezler" },
  { id: "iletisim", title: "Bizimle İletişime Geçin" },
];

const CookiePolicy = () => {
  return (
    <PolicyLayout sections={sections}>
      <div className="space-y-6">
        <section className="border-b border-gray-200 ">
          <p className="text-black text-sm   tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
            Yayın Tarihi: 01 Ocak 2025
          </p>

          <p className="text-black text-sm mt-2 mb-6 tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
            Son Güncelleme Tarihi: 05 Ocak 2025
          </p>
        </section>

        <section id="cerez-giris" className="scroll-mt-28">
          <h2 className="text-4xl font-primarySemiBold mb-4 space-y-6">
            Çerez Politikası
          </h2>

          <p className="text-black text-sm mt-8 mb-8 tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
            Çerez Nedir?
          </p>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza
            yerleştirilen küçük metin dosyalarıdır. Çerezler, cihazınızı
            tanımamıza, tercihlerinizi hatırlamamıza ve Site deneyiminizi
            iyileştirmemize yardımcı olur.
          </p>
        </section>

        <section id="hangi-tur-cerezler-kullaniyoruz" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Hangi Tür Çerezleri Kullanıyoruz?
          </h2>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>
              <span className="font-primaryMedium">◉ Zorunlu Çerezler:</span>{" "}
              Web sitesinin çalışması için gerekli olan çerezlerdir.
            </div>
            <div>
              <span className="font-primaryMedium">
                ◉ Performans Çerezleri:
              </span>{" "}
              Sitenin performansını ölçmek ve geliştirmek için kullanılan anonim
              veriler sağlar.
            </div>
            <div>
              <span className="font-primaryMedium">◉ Çerezler:</span>{" "}
              Tarayıcınızda saklanan küçük veri dosyalarıdır.
            </div>
            <span className="font-primaryMedium">◉ Fonksiyonel Çerezler:</span>{" "}
            Tercihlerinizi hatırlayarak daha kişiselleştirilmiş bir deneyim
            sunar.
            <div>
              <span className="font-primaryMedium">◉</span> Hedefleme ve Reklam
              Çerezleri: İlgi alanlarınıza uygun reklamlar sunmamıza yardımcı
              olur.
            </div>
          </div>
        </section>

        <section id="cerezleri-nasıl-kullaniyoruz" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Çerezleri Nasıl Kullanıyoruz?
          </h2>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>◉ Site trafiğini analiz etmek,</div>
            <div>◉ Hizmetlerimizi geliştirmek,</div>
            <div>◉ Kullanıcı deneyimini kişiselleştirmek,</div>
            <div>
              ◉ Reklam ve pazarlama faaliyetlerini optimize etmek için çerezleri
              kullanıyoruz.
            </div>
          </div>
        </section>

        <section
          id="cerezleri-tercihlerinizi-nasil-yonetebilirsiniz"
          className="scroll-mt-28"
        >
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Tarayıcınızın ayarlarını kullanarak çerezleri kabul edebilir,
            reddedebilir veya silebilirsiniz. Çerez tercihlerinizi değiştirmek
            için kullandığınız tarayıcının yardım menüsüne başvurabilirsiniz.{" "}
          </p>
        </section>

        <section id="ucuncu-taraf-cerezler" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Üçüncü Taraf Çerezler
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Bazı üçüncü taraf hizmet sağlayıcılar (ör. analitik ve reklam
            sağlayıcılar), çerezler aracılığıyla bilgi toplayabilir. Bu çerezler
            üzerinde kontrol sahibi değiliz.
          </p>
        </section>

        <section id="cerez-iletisim" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Bizimle İletişime Geçin
          </h2>

          <p className="text-black text-sm mb-10 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Çerezlerle ilgili sorularınız veya talepleriniz için bizimle
            iletişime geçebilirsiniz:
          </p>

          <div className="text-sm mb-12 tracking-normal leading-normal max-w-[95%] xl:max-w-[62%]">
            <span className="text-black font-primaryMedium mr-1">E-Posta:</span>
            <span className="text-[#186FF4] font-primaryRegular">
              <a href="mailto:info@ercanozcancreative.com.tr">
                info@ercanozcancreative.com.tr
              </a>
            </span>
          </div>
        </section>

        {/* Diğer bölümler benzer şekilde devam eder */}
      </div>
    </PolicyLayout>
  );
};

export default CookiePolicy;
