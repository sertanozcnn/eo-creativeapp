import PolicyLayout from "../../components/PolicyLayouts/PolicyLayout";

const sections = [];

const PrivacyPolicy = () => {
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

        <section id="giris" className="scroll-mt-28">
          <h2 className="text-4xl font-primarySemiBold mb-4 space-y-6">
            Gizlilik Politikası
          </h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Web sitemiz, gizliliğinizi korumak adına yasal gerekliliklere uygun
            hareket eder. Bu politika, hangi bilgileri toplayabileceğimizi, bu
            bilgileri nasıl kullanabileceğimizi ve paylaşabileceğimizi, ayrıca
            bilgi paylaşımını nasıl sınırlayabileceğinizi açıklar.
          </p>

          <p className="text-black text-sm mt-8 tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
            Tanımlar
          </p>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>
              ◉ Kişisel Veriler: Belirli bir bireyi tanımlamak için
              kullanılabilecek herhangi bir veri.
            </div>
            <div>
              ◉ Kullanım Verileri: Hizmetimizin kullanımıyla otomatik olarak
              toplanan verilerdir.
            </div>
            <div>
              ◉ Çerezler: Tarayıcınızda saklanan küçük veri dosyalarıdır.
            </div>
            <div>
              ◉ Veri Denetleyicisi: Kişisel verilerin işlenme amacını ve
              yöntemini belirleyen kişi veya kuruluş.
            </div>
            <div>
              ◉ Veri İşleyici: Veri Denetleyicisi adına verileri işleyen kişi
              veya kuruluş.
            </div>
            <div>◉ Veri Sahibi: Kişisel Verilerin konusu olan birey.</div>
            <div>◉ Kullanıcı: Hizmetimizi kullanan kişi.</div>
          </div>

          {/* Giriş içeriği */}
        </section>
        <section id="bilgi-toplama" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Bilgi Toplama ve Kullanımı
          </h2>

          <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Hizmetlerimizi geliştirmek ve size daha iyi bir deneyim sunmak için
            çeşitli türde bilgiler topluyoruz:
          </p>

          <div className="text-black text-sm mt-8 space-y-2 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>
              <div className="text-black text-sm mt-10 mb-2 tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
                1. Kişisel Veriler
              </div>
              <div>
                ◉ İsim, e-posta adresi, telefon numarası gibi bilgiler. Bu
                verileri:
              </div>
              <div>◉ Hizmet sağlamak,</div>
              <div>◉ İletişime geçmek,</div>
              <div>
                ◉ Haber bültenleri ve promosyon içerikleri göndermek için
                kullanıyoruz.
              </div>
            </div>

            <div>
              <div className="text-black text-sm mt-10 mb-2 tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
                2. Kullanım Verileri
              </div>

              <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[100%]">
                Web sitemizi nasıl kullandığınıza dair bilgiler, örneğin IP
                adresi, tarayıcı türü ve ziyaret süresi.
              </p>
            </div>

            <div>
              <div className="text-black text-sm mt-10 mb-2 tracking-normal leading-normal font-primaryMedium max-w-[95%] xl:max-w-[62%]">
                3. Çerezler ve İzleme Teknolojileri
              </div>

              <p className="text-black text-sm tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
                Tercihlerinizi hatırlamak ve deneyiminizi iyileştirmek için
                çerezler kullanıyoruz.
              </p>
            </div>
          </div>
          {/* Bilgi toplama içeriği */}
        </section>
        <section id="verilerin-kullanimi" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Verilerin Kullanımı
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Topladığımız bilgileri aşağıdaki amaçlarla kullanıyoruz:
          </p>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>◉ Hizmetimizi sağlamak ve sürdürmek,</div>
            <div>◉ Hizmetle ilgili değişikliklerden sizi haberdar etmek,</div>
            <div>◉ Hizmetimizi analiz etmek ve geliştirmek,</div>
            <div>◉ Yasal yükümlülüklere uymak.</div>
          </div>
        </section>
        <section id="verilerin-saklanmasi" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Verilerin Saklanması
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Kişisel verileriniz, yalnızca belirtilen amaçlar için gerekli olduğu
            sürece saklanacaktır. Daha uzun saklama süreleri yalnızca yasal
            gereklilikler veya anlaşmazlıkları çözmek amacıyla uygulanır.
          </p>
        </section>

        <section id="verilerin-aktarimi" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Verilerin Aktarımı
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Kişisel verileriniz, farklı veri koruma yasalarına sahip ülkelerde
            işlenebilir ve saklanabilir. Verilerinizin güvenli bir şekilde
            aktarılması için gerekli tüm önlemleri alıyoruz.
          </p>
        </section>

        <section id="verilerin-aciklanmasi" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Verilerin Açıklanması
          </h2>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>
              ◉ Yasal Gereklilikler: Kanunlar gerektirdiğinde veya resmi
              taleplere yanıt olarak verilerinizi açıklayabiliriz.
            </div>
            <div>
              ◉ Ticari İşlemler: Şirket birleşmeleri veya varlık devri
              durumlarında, verilerinizin transfer edilebileceğini bilmenizi
              isteriz.
            </div>
          </div>
        </section>

        <section id="veri-guvenligi" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Veri Güvenliği
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Kişisel verilerinizin korunması için en iyi uygulamaları
            benimsiyoruz, ancak hiçbir yöntemin %100 güvenli olmadığını
            hatırlatırız.
          </p>
        </section>

        <section id="gdp-kapsami-haklariniz" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            GDPR Kapsamında Haklarınız
          </h2>

          <p className="text-black text-sm mb-8 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Eğer Avrupa Ekonomik Alanı’nda (AEA) yaşıyorsanız, şu haklara
            sahipsiniz:
          </p>

          <div className="text-black text-sm mt-2 space-y-1 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            <div>◉ Verilere erişme, güncelleme veya silme hakkı,</div>
            <div>◉ İşlemeye itiraz hakkı,,</div>
            <div>◉ Veri taşınabilirliği hakkı,</div>
            <div>◉ Onayı geri çekme hakkı.</div>
          </div>
        </section>

        <section id="hizmet-saglayicilar" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Hizmet Sağlayıcılar
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Bazı hizmetler için üçüncü taraflarla çalışabiliriz. Bu üçüncü
            taraflar, kişisel bilgilerinize yalnızca bizim adımıza işlem yapmak
            amacıyla erişebilir.
          </p>
        </section>

        <section id="diger-siteler" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Diğer Sitelerle Bağlantılar
          </h2>

          <p className="text-black text-sm mb-12 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Web sitemiz, başka sitelere bağlantılar içerebilir. Bu sitelerin
            gizlilik politikalarından sorumlu değiliz.
          </p>
        </section>

        <section id="iletisim" className="scroll-mt-28">
          <h2 className="text-xl mt-16  font-primaryBold mb-4">
            Bizimle İletişime Geçin
          </h2>

          <p className="text-black text-sm mb-10 tracking-normal leading-normal font-primaryRegular max-w-[95%] xl:max-w-[62%]">
            Bu Gizlilik Politikası veya veri uygulamalarımızla ilgili herhangi
            bir sorunuz, endişeniz veya talebiniz varsa lütfen bizimle şu
            adresten iletişime geçin:
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

export default PrivacyPolicy;
