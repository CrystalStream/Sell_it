(function(){
	  	// show number case add shoes.
	if($('#category-chooser').val() === '1'){
		$('#shoes-pick').removeClass('hidden');
		$('#save-btn').removeClass('mt');
	}else{
		$('#shoes-pick').addClass('hidden');
		$('#save-btn').addClass('mt');		
	}
	$('#category-chooser').change(function(){
		if($(this).val() === '1'){
			$('#shoes-pick').removeClass('hidden');
			$('#save-btn').removeClass('mt');
		}
		else{
			$('#shoes-pick').addClass('hidden');
			$('#save-btn').addClass('mt');
		}
	});
}());