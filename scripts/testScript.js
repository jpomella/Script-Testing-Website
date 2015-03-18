//Test Script Website Alpha
	
// Test DATA, Comment out the values you don't need.

	//startAjaxJSON();
	startAjaxPOST();
	//startAjaxGET();


function startAjaxJSON() {
	
	var empytyBaseURL
	
	$.ajax({
		url: empytyBaseURL,
		dataType: 'json',
		timeout: 10000
	}).done(function(jsonResult){
		console.log(jsonResult);
	}).fail(function(jsonError){
		console.log(jsonError);
	}).always(function() {
		console.log("Always...Always...JSON");
	});		
			
}
 
function startAjaxPOST() {

	var empytyBaseURL = "http://wmsolutions.com.au/SFScripts/scripts/addAccounts/addaccount.php";
	var data = "orgid=33&australiapostkey=333&fastwaycourierskey=333&tntkey=333&validsubscription=1";
			
		$.ajax({
			url: empytyBaseURL,
			type: 'POST',
			data: data,
			timeout: 7000
		}).done(function(postResult){
			console.log(postResult);
		}).fail(function(postError){
			console.log(postError);
		});	

}

function startAjaxGET(){

		var empytyBaseURL
				
		$.ajax({
			url: empytyBaseURL,
			type: 'get',
			timeout: 7000
		}).done(function(getResult){
			console.log(getResult);
		}).fail(function(getError){
			console.log(getError);
		});	
}
