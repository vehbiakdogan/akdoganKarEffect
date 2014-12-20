/*
	@author: Vehbi AKDOGAN
	@mail: mf.leqelyy@gmail.com
	@website: http:/vehbiakdogan.com




*/
(function($){
	
	$.fn.akdoganKarEffect = function(ayarlar){
	
			var karTanesi 			= $('<div id="karTanesi" />')
									  .css({'position': 'absolute', 'top': '-30px',"cursor":"pointer"})
									  .html('&#10052;'),
									  
				ekranH 	= $(document).height(),
				ekranW	= $(document).width(),
				ayarlar	= $.extend({
							minBoyut		: 10,
							maxBoyut		: 20,
							karHizi		: 500,
							karTanesiRengi	: "#FFFFFF",
						 }, ayarlar);
			
			
			var interval		= setInterval( function(){
				var baslangicPozisyonu 	= Math.random() * ekranW - 100,
				 	opasite		= 1 + Math.random(),
					karTanesiBoyutu			= ayarlar.minBoyut + Math.random() * ayarlar.maxBoyut,
					ustBaslangicYeri		= ekranH - 40,
					yanBaslangicYeri		= baslangicPozisyonu - 100 + Math.random() * 200,
					durationFall		= ekranH * 10 + Math.random() * 5000;
				karTanesi
					.clone()
					.appendTo('body')
					.css(
						{
							left: baslangicPozisyonu,
							opacity: opasite,
							'font-size': karTanesiBoyutu,
							color: ayarlar.karTanesiRengi
						}
					)
					.animate(
						{
							top: ustBaslangicYeri,
							left: yanBaslangicYeri,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);					
					
			}, ayarlar.karHizi);
	
	};
	
})(jQuery);
