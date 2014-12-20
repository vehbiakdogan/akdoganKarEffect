akdoganKarEffect
================

jQuery snow Effect , KAr yağdırma Effecti 

<h2> Kullanımı </h2> 

Öncelikle Sayfamıza jQuery kütüphanesini ve jQuery eklenti dosyamızı çağırıyoruz. <br/>

```js
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="jquery.akdoganKarEffect.js"></script>


```

Daha Sonra Eklentimizi Aşağıdaki Şekilde çalıştırıyoruz.<br/>

```js
	<script type="text/javascript">
		$(function(){
			$(document).akdoganKarEffect({
				minBoyut:15, // minimum kar tanesi boyutu default değer 10
				maxBoyut:25, // maximum kar tanesi boyutu default değer 20
				karHizi:1000, // kar tanesi eklenme hızı default değer 500
				karTanesiRengi: "#fff", // kar tanesi rengi  default değer #FFFFFF
			});
		});
	</script>
```
<h2> Methodlar Ve Kullanımı </h2>
<ul>
<li> <b>minBoyut: </b> Minimum Kar Boyutunu Belirler.Default değeri 10 dur.</li>
<li>  <b>maxBoyut: </b> Maximum kar tanesi boyutunu belirler. default değeri 20 dir.  </li>
<li> <b> karHizi: </b> Kar tanelerinin ne kadar sıklıkta doğacağını belirler. Default değeri 500ms dir.</li>
<li> <b>karTanesiRengi:</b> Kar tanelerinin rengini belirler. Default değeri #ffffff (beyaz) dır.</li>
</ul>

<h2> <a href="http://vehbiakdogan.com/demolar/akdoganKarEffect" target="_blank">DEMO</a></h2>



