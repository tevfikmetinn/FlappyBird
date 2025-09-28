# Flappy Bird Projesi - Nesne Tabanlı Programlama Dersi

Bu proje, Nesne Tabanlı Programlama dersi kapsamında C# ASP.NET Core ve JS teknolojileri kullanılarak geliştirilmiş bir Flappy Bird oyunudur.

##  canlı Demo

**[Oyunun Canlı Demosuna Buradan Ulaşabilirsiniz!](YAKINDA-EKLENECEK)**

---

## Proje Hakkında

Bu proje, bir web sunucusunun (ASP.NET Core) statik web varlıklarını (HTML, CSS, JavaScript) nasıl sunabileceğini ve tarayıcı tabanlı bir oyunun temel mekaniklerinin nasıl kodlanacağını göstermek amacıyla yapılmıştır. Oyun, Canvas API kullanılarak sıfırdan yazılmıştır ve aşağıdaki temel özellikleri içerir:

* **Oyun Durumları:** Başlangıç, oynanış ve oyun sonu gibi farklı durumları yöneten bir yapı.
* **Fizik Motoru:** Kuşun yerçekimi ve zıplama hareketlerini simüle eden basit bir fizik motoru.
* **Dinamik Engeller:** Ekranda rastgele konumlarda sürekli olarak oluşturulan ve hareket eden borular.
* **Çarpışma Tespiti:** Kuşun borulara, yere veya gökyüzüne çarptığını algılayan mantık.
* **Skor Sistemi:** Oyuncunun başarıyla geçtiği her engelde puanını artıran bir sayaç.

### C# ve Arka Plan (Backend) Kullanımı

Projenin arka planı (backend), **C#** dili ve **ASP.NET Core** çatısı ile oluşturulmuştur. Bu sunucu:
1.  Oyunun çalışması için gerekli olan `wwwroot` klasöründeki statik dosyaları (HTML, CSS, JavaScript, resimler) tarayıcıya servis eder.
2.  Ayrıca, C# kullanımını göstermek amacıyla `/highscore` adresinde bir Yüksek Skor API uç noktası içerir.

### Kullanılan Teknolojiler

* **Backend:** C# 10, ASP.NET Core 6.0
* **Frontend:** JavaScript (ES6+), HTML5 (Canvas API), CSS3
* **Versiyon Kontrol:** Git
* **Platform:** GitHub & GitHub Pages

## Yerel Makinede Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için:
1.  Bu depoyu klonlayın: `git clone https://github.com/tevfikmetinn/FlappyBird.git`
2.  Projeyi Visual Studio 2022 ile açın.
