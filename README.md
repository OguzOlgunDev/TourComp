#### Turları Getir (Fetch Tours)
Tours bileşeni, bir dizi Tour bileşenini render etmekten sorumlu olacak. App.jsx dosyasında, fetch API'si kullanılarak bir URL'den tur verileri alınacak. Veri yüklenmeden önce, bir yükleniyor göstergesi veya mesajı gösterilmelidir. Bu, Loading bileşeni kullanılarak uygulanabilir.

#### Turları Göster (Render Tours)
Veriler yüklendikten sonra, bileşenin state'i güncellenerek turların verisi saklanabilir. Daha sonra bu tours dizisi üzerinde map işlemi uygulanarak her bir tur için bir Tour bileşeni render edilebilir. Her Tour bileşeni, id, image, info, name ve price gibi tour verilerini props olarak alacak.

#### Turu Kaldır (Remove Tour)
"Tur kaldır" işlevini uygulamak için, her Tour bileşenine bir buton eklenebilir. Bu butona tıklandığında, turlar listesinden ilgili tur kaldırılır. Bu işlem, Tours bileşeninin state'ini güncelleyerek, tours dizisinden ilgili turların çıkarılmasıyla sağlanabilir.

#### Daha Fazla Oku (Read More)
"Read more" (daha fazla oku) işlevini uygulamak için, her Tour bileşenine bir buton eklenebilir. Bu butona tıklandığında tur açıklamasının tamamı genişletilir. Bu işlem, Tour bileşeninin state'ine bir read more (daha fazla oku) flag'i eklenerek yapılabilir. Bu flag'e göre açıklamanın tamamı koşullu olarak render edilir.

#### Turları Yeniden Getir (Re-fetch Tours)
Son olarak, "veriyi yeniden getir" işlevi uygulanabilir. Bu işlev için, tıklanıldığında tur verilerini URL'den yeniden getiren bir buton veya kullanıcı arayüzü öğesi eklenebilir. Yeniden veri getirildiğinde, loading durumu yeniden gösterilmelidir.
