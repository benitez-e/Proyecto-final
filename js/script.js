$(document).ready(function(){
      

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
        
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.cd-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.cd-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.cd-item[category="'+catProduct+'"]').show();
			$('.cd-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
               window.scrollTo(0,250);
		} setTimeout(showProduct,400);
      

	});
    

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.cd-item').show();
			$('.cd-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});