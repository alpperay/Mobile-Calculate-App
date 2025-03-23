# Mobile Hesap Makinesi

Bu hesap makinesi, temel matematiksel işlemleri mobil cihazlarda kolay ve hızlı bir şekilde yapmayı sağlamak amacıyla geliştirilmiştir.

## Açıklama:

Bu mobil uygulama, kullanıcıdan iki sayı girişi alarak dört temel matematiksel işlemi (toplama, çıkarma, çarpma ve bölme) gerçekleştirmektedir. Kullanıcı, iki farklı giriş alanına sayıları girdikten sonra işlem düğmelerine basarak sonucu anında görebilir. Sonuç ekranında hesaplamanın sonucuyla birlikte hatalı girişlerde uyarı mesajları da görüntülenmektedir.

## Kullanılan Teknolojiler:
- **React Native**: Mobil uygulama geliştirme çerçevesi
- **useState Hook**: Bileşenin durumunu yönetmek için kullanılır
- **TextInput**: Kullanıcıdan sayı girişi almak için kullanılan bileşen
- **TouchableOpacity**: Buton oluşturmak ve tıklanabilir alanlar oluşturmak için
- **StyleSheet**: Uygulamanın arayüzünü şekillendirmek için kullanılır

## Uygulamanın Çalışma Mantığı:
1. Kullanıcı iki farklı giriş alanına sayıları girer.
2. Boş giriş durumunda, uygulama kullanıcıyı "Tüm Alanları Doldurunuz!" mesajıyla uyarır.
3. Kullanıcı dört işlem butonlarından birine basar:
   - **Toplama (+)**: İki sayıyı toplar.
   - **Çıkarma (-)**: İlk sayıdan ikinci sayıyı çıkarır.
   - **Çarpma (*)**: İki sayıyı çarpar.
   - **Bölme (/)**: İlk sayıyı ikinci sayıya böler. Eğer ikinci sayı 0 ise "0'a bölme hatası!" mesajı gösterilir.
4. Sonuç, ekranda büyük ve okunaklı bir şekilde gösterilir.

## Özellikler:
- Kullanıcı dostu ve basit bir arayüze sahiptir.
- Sayılar alfanümerik karakterler içermediği sürece sorunsuz işlenir.
- Hatalı girişleri algılayarak kullanıcıya uyarı verir.
- Mobil cihazlar için optimize edilmiştir ve tüm ekran boyutlarına uyum sağlar.
- Renkli butonlar ve okunaklı yazılarla sezgisel bir kullanım sunar.


## Kurulum ve Çalıştırma:
1. Projeyi klonlayın:

   ```sh
   git clone <repository-url>
   cd project-folder
   ```
2. Gerekli bağımlılıkları yükleyin:

   ```sh
   npm install
   ```
3. Uygulamayı çalıştırın:

   ```sh
   npx expo start
   ```

## Ekran Görüntüleri:

Proje ekran görüntüsü aşağıdaki gibidir:

![sc1](https://github.com/user-attachments/assets/a5309936-e2bc-42fe-8138-b6420afc9776)


## Gelecek Gelişmeler:
- **Tema Seçenekleri**: Koyu ve açık tema desteği eklenebilir.
- **Gelişmiş Hata Kontrolü**: Girilen değerlerin yalnızca sayı olup olmadığını kontrol eden ek bir doğrulama mekanizması eklenebilir.
- **Geçmiş Kayıtları**: Yapılan işlemler bir liste şeklinde saklanarak kullanıcıya geçmiş hesaplamaları görüntüleme imkânı sunulabilir.
- **Sesli Komut Desteği**: Kullanıcıların sesli komutlar ile işlem yapmasına olanak tanıyacak bir özellik eklenebilir.

### Sosyal Medya Bağlantıları:

- [Instagram](https://instagram.com/alperaytasci)
- [GitHub](https://github.com/alpperay)
- [LinkedIn](https://linkedin.com/alperaytasci)
- [Twitter](https://x.com/alperaytasci)

### Geliştirici & Yazar:

**Alp Eray Taşçı**

### Lisans:

Bu proje **MIT Lisansı** ile lisanslanmıştır. Lisans bilgilerini [LICENSE](LICENSE) dosyasından görebilirsiniz.

### Katkıda Bulunma:

1. Projeyi fork edin,
2. Değişikliklerinizi yapın ve pull request gönderin.
