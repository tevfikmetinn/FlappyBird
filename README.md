# Flappy Bird Projesi - Nesne Tabanlı Programlama Dersi

Bu proje, Nesne Tabanlı Programlama dersi kapsamında C# ASP.NET Core ve JS teknolojileri kullanılarak geliştirilmiş bir Flappy Bird oyunudur.

##  Canlı Demo

**[Oyunun Canlı Demosuna Buradan Ulaşabilirsiniz!](https://tevfikmetinn.github.io/FlappyBird/)**
https://tevfikmetinn.github.io/FlappyBird/

## Oyundan Görüntü
https://github.com/user-attachments/assets/18363f2d-225d-4486-a0b3-c3412c8163a4

## Bu Projede Neler Öğrendim?

Bu proje boyunca hem backend hem de frontend alanında birçok önemli konsepti pratiğe dökme fırsatı buldum:

#### Backend (C# & ASP.NET Core)
* **Statik Dosya Sunumu:** `Program.cs` içinde `app.UseStaticFiles()` kullanarak bir ASP.NET Core sunucusunun `wwwroot` klasöründeki HTML, CSS, JS gibi dosyaları nasıl sunacağını öğrendim.
* **Varsayılan Rota:** `app.UseDefaultFiles()` ara yazılımının, kök dizine gelen istekleri otomatik olarak `index.html` gibi varsayılan bir dosyaya nasıl yönlendirdiğini anladım.
* **API Denetleyicisi (Controller):** Basit bir `[ApiController]` oluşturarak C# ile HTTP GET isteklerine nasıl yanıt verileceğini ve JSON verisi döndürüleceğini öğrendim.
* **Proje Organizasyonu:** `.gitignore` dosyasının önemini ve gereksiz dosyaları versiyon kontrolü dışında nasıl tutacağımı öğrendim.

#### Frontend (JavaScript & Canvas)
* **Oyun Döngüsü (Game Loop):** `requestAnimationFrame` kullanarak akıcı ve verimli bir oyun döngüsünü nasıl oluşturacağımı öğrendim.
* **Canvas API ile Çizim:** `getContext('2d')` ile çizim bağlamını almayı ve `drawImage`, `fillRect`, `fillText` gibi komutlarla ekrana dinamik olarak görseller ve metinler çizmeyi öğrendim.
* **Oyun Durum Yönetimi (State Management):** Oyunun 'start', 'playing', 'gameOver' gibi farklı durumlarını bir değişkenle yöneterek oyun akışını nasıl kontrol edeceğimi öğrendim.
* **Kullanıcı Etkileşimi:** `addEventListener` kullanarak klavye (`keydown`) ve fare (`click`) olaylarını dinleyip oyun içi aksiyonları (zıplama, yeniden başlatma) nasıl tetikleyeceğimi öğrendim.
* **Temel Fizik ve Çarpışma:** Nesnelere yerçekimi ve hız gibi basit fizik kurallarını uygulamayı ve nesnelerin sınılarını (bounding box) karşılaştırarak çarpışma tespitini nasıl yapacağımı öğrendim.

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
2.  Projeyi çalıştırın.
