$(function() {
    $('#btn-cuarto').click(function() {
        jQuery.get('https://maker.ifttt.com/trigger/foco/with/key/fe6xaS_xg40IFBKAzQLtNryrDoSeuDSPfE1jindkBdW',{
		}, function(response){
            console.log(response)
            showMessage("success", "se mando señal a foco.")
		});
    });

    $('#btn-pasillo').click(function() {
        jQuery.get('https://maker.ifttt.com/trigger/foco_pasillo/with/key/fe6xaS_xg40IFBKAzQLtNryrDoSeuDSPfE1jindkBdW',{
		}, function(response){
            console.log(response)
            showMessage("success", "se mando señal a foco del pasillo.")
		});
    });

    $('#btn-sala').click(function() {
        jQuery.get('https://maker.ifttt.com/trigger/foco_sala/with/key/fe6xaS_xg40IFBKAzQLtNryrDoSeuDSPfE1jindkBdW',{
		}, function(response){
            console.log(response)
            showMessage("success", "se mando señal a foco de la sala.")
		});
    });
});

function showMessage(type, msg){
	var msgDiv = (type == 'ERROR')? '#alertError' : '#alertSuccess'
	$(msgDiv).show('fade');
	$(msgDiv + ' > span').text(msg);
	setTimeout(function() {
		$(msgDiv).hide('fade');
	}, 2000);
}
