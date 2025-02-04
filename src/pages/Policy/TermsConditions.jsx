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

const TermsConditions = () => {
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

        <section id="sart-giris" className="scroll-mt-28">
          <p className="text-black text-sm tracking-normal mb-10 leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Bu Şartlar ve Koşullar, EO Creative tarafından sunulan hizmetlerin
            kullanımını düzenler. Hizmetlerimize erişim sağlayarak veya bunları
            kullanarak bu Şartları kabul etmiş sayılırsınız. Lütfen bu Şartları
            dikkatlice okuyun.
          </p>

          <h2 className="text-4xl font-primarySemiBold mb-10 space-y-6">
            Şartlar & Koşullar
          </h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Bu Şartlar, siz ve EO Creative arasında yasal olarak bağlayıcı bir
            sözleşme oluşturur. Hizmetlerimizi kullanarak bu şartların tümünü
            okuduğunuzu, anladığınızı ve bunlara uymayı kabul ettiğinizi beyan
            edersiniz.
          </p>
        </section>

        <section id="saglanan-hizmetler" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Sağlanan Hizmetler
          </h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            EO Creative, markalaşma, dijital deneyimler ve web geliştirmenin
            çeşitli yönlerini kapsayan kapsamlı bir tasarım ve geliştirme
            hizmetleri paketi sunar. Bu hizmetler, her Müşterinin özel
            ihtiyaçlarına göre, bireysel anlaşmalarda veya proje
            bilgilendirmelerinde ayrıntılı olarak belirtildiği şekilde sağlanır.
            Sağlanan hizmetlerin kapsamı ve niteliği, müşterinin özel
            gereksinimlerine bağlı olarak değişebilir ve ilgili sözleşme
            belgelerinde tam olarak açıklanacaktır. EO Creative, her projenin
            benzersiz hedeflerini karşılamak üzere uyarlanmış yüksek kaliteli
            hizmetler sunmaya kendini adamıştır.
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Marka Hizmetleri:</span> EO
            Creative, bir dizi marka hizmeti aracılığıyla benzersiz ve akılda
            kalıcı marka kimlikleri oluşturmak üzere uzmanlaşmıştır. Buna,
            müşterinin marka kimliğini yansıtacak şekilde tasarlanmış özgün logo
            tasarımlarının oluşturulması dahildir. Marka konumlandırma ve pazar
            farklılaştırması konusunda stratejik rehberlik sağlayarak, markanın
            ilgili pazarında öne çıkmasını sağlarız. Ek olarak, EO Creative, tüm
            ortamlarda marka öğelerinin tutarlı bir şekilde uygulanması için bir
            plan görevi gören kapsamlı marka yönergeleri geliştirir. Hizmet, tüm
            iletişim biçimlerinin temelini oluşturan tutarlı bir marka sesi ve
            tonunun geliştirilmesine kadar uzanır. Ayrıca, müşterinin markasını
            tanıtmayı amaçlayan reklamlar ve diğer yan ürünler gibi çeşitli
            pazarlama materyalleri tasarlarız. Hizmetlerimiz ayrıca,
            kartvizitler, antetli kağıtlar ve diğer ilgili öğelerin
            oluşturulması da dahil olmak üzere kırtasiye tasarımını ve çekici ve
            işlevsel ambalaj çözümleri oluşturduğumuz ambalaj tasarımını da
            kapsar. Ek olarak, EO Creative, müşterinin markasıyla uyumlu özel
            simge tasarımları geliştirir ve fikirleri etkili bir şekilde iletmek
            için profesyonel, ilgi çekici sunumlar hazırlar.
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">
              Dijital Deneyim Hizmetleri
            </span>
            EO Creative görsel olarak çekici ve kullanıcı dostu dijital
            deneyimler yaratma konusunda uzmanlaşmıştır. Web sitesi tasarım
            hizmetlerimiz, estetik açıdan hoş ve işlevsel arayüzler aracılığıyla
            kullanıcı etkileşimini artırmaya odaklanır. Mobil uygulama tasarımı
            alanında, EO Creative çeşitli platformlarda ilgi çekici ve kullanıcı
            merkezli arayüzler geliştirir. Ayrıca, müşterinin markasının dijital
            varlığını artıran özel çizim hizmetleri de sağlıyoruz. EO Creative,
            tasarım kararlarını bilgilendirmek için kapsamlı kullanıcı
            araştırması yürütür ve böylece genel kullanıcı deneyimini
            iyileştirir. Tam ölçekli geliştirmeden önce kavramları
            görselleştirmek için prototipleme hizmetleri sunulur ve fikirlerin
            kapsamlı bir şekilde değerlendirilmesi ve iyileştirilmesi sağlanır.
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">
              Web Geliştirme Hizmetleri:
            </span>
            EO Creative, belirli müşteri hedeflerine ulaşan yüksek dönüşümlü
            açılış sayfalarının tasarımı ve geliştirilmesiyle başlayarak
            kapsamlı bir web geliştirme hizmetleri yelpazesi sunar. Müşterilerin
            içeriklerini kolayca yönetmelerini ve güncellemelerini sağlayan
            içerik yönetim sistemi (CMS) web siteleri oluşturuyoruz.
            Uzmanlığımız, güvenli ödeme entegrasyonu ve kullanıcı dostu
            arayüzlerle tamamlanmış e-ticaret web sitelerinin geliştirilmesine
            kadar uzanır ve sorunsuz çevrimiçi işlemleri kolaylaştırır.
            Benzersiz gereksinimleri olan müşteriler için EO Creative, belirli
            iş ihtiyaçlarını karşılayan özel çözümler oluşturan özel geliştirme
            hizmetleri sunar. Ek olarak, EO Creative, hızı ve verimliliği
            artırarak web sitelerinin performansını optimize etmeye ve böylece
            genel kullanıcı deneyimini iyileştirir. Son olarak bakım
            hizmetlerimiz, web sitelerinin güncel, güvenli ve hatasız kalmasını
            sağlar, ihtiyaç duyulduğunda sürekli destek ve güncellemeler sunar.
          </p>
        </section>

        <section id="odeme-kosullari" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Ödeme Koşulları
          </h2>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Ödeme Yöntemleri:</span> Proje
            bazlı ve abonelik hizmetlerinde ödemeler banka havalesiyle
            yapılabilir.
          </p>
          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Faturalar:</span> Hizmet
            Sağlayıcı, Sözleşmenin imzalanması üzerine fatura düzenleyecektir.
            Ödemeler, fatura tarihinden itibaren 15 gün içinde yapılmalıdır.
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Vergiler:</span> Banka havalesi
            yoluyla yapılan ödemelerin faturalarına toplam hizmet bedeli
            üzerinden <span className="font-primaryMedium">%20</span> KDV
            eklenecektir.
          </p>
        </section>

        <section id="fikri-mulkiyet" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Fikri Mülkiyet
          </h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Ödeme yapıldığında, çalışmanın tüm fikri mülkiyet hakları müşteriye
            devredilecektir. Ancak, siz bize, Hizmetlerle bağlantılı olarak
            geliştirdiğimiz tüm teslimatları pazarlama ve reklamcılık amacıyla
            kullanma, yayınlama ve görüntüleme konusunda sınırlı, münhasır
            olmayan, alt lisansı verilemeyen, telifsiz dünya çapında bir lisans
            veriyorsunuz (&ldquo;Portföy Hakları Lisansı&ldquo;). Bu lisansı
            istediğiniz zaman info@ercanozcancreative.com.tr adresine yazılı
            bildirim göndererek iptal edebilirsiniz. Portföy Hakları Lisansını
            iptal ederseniz, çalışmaları pazarlama ve reklamcılık amaçlarıyla
            kullanmayı bırakacağız, ancak Portföy Hakları Lisansı uyarınca
            başkaları tarafından kullanıldığı gibi çevrimiçi olarak var olmaya
            devam edebilir.
          </p>
        </section>

        <section id="revizyonlar" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">Revizyonlar</h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Müşterilerimiz için en iyi sonuçları sunma taahhüdümüzde, geri
            bildirimleri ve revizyonları memnuniyetle karşılıyoruz. Revizyon
            sayısına katı bir sınır koymasak da, izin verilen değişikliklerin
            küçük olduğunu ve üzerinde anlaşılan proje konseptiyle uyumlu olması
            gerektiğini belirtmek önemlidir. Kapsamlı revizyonlardan kaynaklanan
            herhangi bir zaman çizelgesi gecikmesi Müşterinin sorumluluğundadır
            ve sonuç olarak ortaya çıkan maddi veya manevi kayıplardan sorumlu
            değiliz.
          </p>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Önemli değişiklikler, Hizmet Sağlayıcı tarafından belirlenebilecek
            ve her iki tarafça kabul edilebilecek ek ücretlere tabi olacaktır.
            Bu ek maliyetler faturalandırılacak ve projenin tamamlanmasından
            önce ödenecektir.
          </p>
        </section>

        <section id="duyarlilik" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">Duyarlılık</h2>

          <p className="text-black text-sm mt-8 mb-8 tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
            Müşteri Sorumlulukları:
          </p>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>
              ◉ İletişimlere 2 iş günü içerisinde yanıt vermenizi bekliyoruz.
            </div>
            <div>
              ◉ Talepten itibaren 3 iş günü içerisinde geri bildirim, onay ve
              materyalleri sağlayın.
            </div>
          </div>

          <p className="text-black text-sm mt-8 mb-8  tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
            Hizmet Sağlayıcının Sorumlulukları:
          </p>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>◉ İletişimleri 2 iş günü içerisinde yanıtlıyoruz.</div>
          </div>

          <p className="text-black text-sm mt-8 mb-8  tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
            Gecikmiş İletişimin Sonuçları:
          </p>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>
              ◉ Taraflardan herhangi biri belirtilen süre içerisinde yanıt
              vermezse proje zaman çizelgesi değiştirilebilir.
            </div>
            <div>
              ◉ Müşterinin 14 gün boyunca yanıt vermemesi durumunda yeniden
              etkinleştirme ücreti alınabilir.
            </div>
            <div>
              ◉ Hizmet Sağlayıcının 14 gün boyunca herhangi bir işlem yapmaması
              halinde ücret iadesi talebinde bulunulabilir veya Sözleşme
              feshedilebilir.
            </div>
            <div>
              ◉ Müşterinin 30 gün boyunca yanıt vermemesi Sözleşmenin
              feshedilmesiyle sonuçlanabilir ve Müşteri tamamlanan tüm işlerden
              ve ödenmemiş faturalardan sorumlu olur.
            </div>
          </div>

          {/* Giriş içeriği */}
        </section>

        <section id="fesih" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">Fesih</h2>

          <p className="text-black text-sm mt-4 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Ödeme Yöntemleri:</span>
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Hizmet Sağlayıcı, Sözleşmenin imzalanması üzerine fatura
            düzenleyecektir. Ödemeler, fatura tarihinden itibaren 15 gün içinde
            yapılmalıdır.
          </p>

          <p className="text-black text-sm mt-4 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Hizmet Sağlayıcı Feshi:</span>
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Hizmet Sağlayıcı, Müşterinin 7 iş günü içinde ödeme yapmaması
            halinde yazılı bildirimde bulunarak bu Sözleşmeyi feshedebilir.
          </p>

          <p className="text-black text-sm mt-4 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Fesih Etkisi:</span>
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Müşteri, feshe kadar sağlanan tüm hizmetlerin bedelini ödemeli ve
            ödenmemiş faturalar derhal muaccel hale gelmelidir.
          </p>

          <p className="text-black text-sm mt-6 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Geri ödemeler:</span>
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Henüz sunulmamış hizmetler için yapılan ön ödemeler hariç olmak
            üzere geri ödeme yapılmayacak olup, ön ödemeler orantılı olarak iade
            edilecektir.
          </p>

          <p className="text-black text-sm mt-6 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">Devamlılık:</span>
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Gizlilik yükümlülükleri ve devam etmesi amaçlanan diğer hükümler
            fesih sonrasında da devam eder.
          </p>
        </section>

        <section id="mucbir-sebep" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">Mücbir Sebep</h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Bu Sözleşme kapsamındaki herhangi bir yükümlülüğümüzü makul
            kontrolümüz dışındaki koşullar nedeniyle yerine getiremememiz
            halinde, bunlarla sınırlı olmamak üzere salgın hastalıklar veya
            bulaşıcı hastalıkların yaygın salgınları, hükümet kapanmaları,
            yıldırım, sel, olağanüstü şiddetli hava koşulları, yangınlar,
            patlamalar, savaşlar, iç karışıklıklar, endüstriyel veya işçi
            anlaşmazlıkları (çalışanlarımızı ilgilendirsin veya
            ilgilendirmesin), hükümet eylemleri, telekomünikasyon, kamu
            hizmetleri veya diğer üçüncü taraf hizmetleriyle ilgili kayıplar
            veya sorunlar veya düşmanca ağ saldırıları (her biri bir
            &ldquo;Mücbir Sebep Olayı&ldquo;) dahil olmak üzere, bu Sözleşme
            kapsamındaki herhangi bir yükümlülüğümüzü yerine getiremememiz
            durumunda, bu tür bir performans başarısızlığından sorumlu
            tutulmayacağız. Ancak, Mücbir Sebep Olayını oluşturan koşullar
            çözüldüğünde performansı derhal yeniden başlatmak için her türlü
            makul çabayı göstereceğiz.
          </p>
        </section>

        <section id="sartlarin-kabulu" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Şartların Kabulü
          </h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Müşteriler, Hizmet Sağlayıcısı tarafından sağlanan hizmetlerin, ırk,
            din, cinsiyet, cinsel yönelim, yaş, engellilik, soy veya ulusal
            köken dahil ancak bunlarla sınırlı olmamak üzere başkalarına karşı
            ayrımcılık yapmak için kullanılmayacağını kabul eder ve onaylar.
            Hizmet Sağlayıcı, hizmetlerinin ayrımcılığı, düşmanlığı veya şiddeti
            teşvik eden veya destekleyen bir şekilde kullanılmasını kesinlikle
            yasaklar.
          </p>

          <p className="text-black mt-8 text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            <span className="font-primaryMedium">
              Hizmet Sağlayıcı , kumar, yasadışı uyuşturucular, pornografi,
              dolandırıcılık, silahlar, flört uygulamaları veya bu kategorilerle
              ilgili herhangi bir başka içerik
            </span>{" "}
            içeren hiçbir projeyi kabul etmez . Ayrıca, Hizmet Sağlayıcı bu tür
            içerikleri içeren veya tanıtan projeleri reddetme veya sonlandırma
            hakkını saklı tutar.
          </p>

          <p className="text-black text-sm mt-8  tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[64%]">
            Hizmet Sağlayıcı, kendi takdirine bağlı olarak, Müşterinin
            hizmetleri kullanımının ayrımcı olduğunu veya bu şartları ihlal
            ettiğini tespit ederse, Hizmet Sağlayıcı, Müşterinin hizmetlere
            erişimini, bildirimde bulunmaksızın ve sorumluluk üstlenmeksizin,
            geçici veya kalıcı olarak askıya alabilir veya sonlandırabilir. Bu
            gibi durumlarda, Müşteri, askıya alma veya sonlandırma tarihine
            kadar tamamlanan iş için ödenmemiş ödemelerden sorumlu olmaya devam
            edecektir.
          </p>
        </section>

        <section id="sart-iletisim" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Bizimle İletişime Geçin
          </h2>

          <p className="text-black text-sm mb-10 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Sorularınız veya endişeleriniz varsa lütfen bizimle şu adresten
            iletişime geçin:
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
      </div>
    </PolicyLayout>
  );
};

export default TermsConditions;
