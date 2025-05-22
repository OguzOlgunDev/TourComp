###### Turları Getir (Fetch Tours)
Tours bileşeninde, URL’den tur verilerini fetch API ile çekiyorum. Veriler yüklenirken kullanıcıya bir yükleniyor göstergesi veya mesajı göstermek için Loading bileşenini kullandım.

###### Turları Göster (Render Tours)
Veriler yüklendiğinde, bunları state’ime kaydettim. Sonra tours dizisi üzerinde map yaparak her bir tur için bir Tour bileşeni render ettim. Her Tour bileşenine tour un id, image, info, name ve price gibi bilgilerini props olarak gönderdim.

###### Turu Kaldır (Remove Tour)
Her Tour bileşenine bir “tur kaldır” butonu ekledim. Bu butona tıklandığında, ilgili turu state’imden çıkarıyorum ve böylece listeden kaldırıyorum.

###### Daha Fazla Oku (Read More)
“Daha fazla oku” butonuna tıklandığında tur açıklamasının tamamını gösterebilmek için Tour bileşeninde bir readMore flag’i tutuyorum. Bu flag’e göre açıklamanın tamamını ya da kısa halini koşullu olarak gösteriyorum.

###### Turları Yeniden Getir (Re-fetch Tours)
Ayrıca, kullanıcı tıkladığında tur verilerini yeniden çekmek için bir buton ekledim. Bu butona basıldığında veriler tekrar URL’den geliyor ve bu süreçte tekrar yükleniyor göstergesi gösteriyorum.
