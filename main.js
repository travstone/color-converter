	
	var colorConvert = {
		'init': (function() {

			$('body').on('click','#action-delete-group',function(e){
				e.preventDefault();
				e.stopPropagation();
				$(this).parentsUntil('.result-group').parent().animate({
					height: 'hide'
				},350,function(){
					$(this).remove();
				});
			});
		
			$('body').on('click','#convert',function(e){
				e.preventDefault();
				e.stopPropagation();
				
				var historyFlag = $('#save-previous:checked').length;

				
				var formRaw = $('#convert').prev().val();
				var numberRegex = /^\ ?(?:\d{1,3}\ ?,\ ?){3}(?:0|1|1\.0|0?\.\d{1,4})\ ?$/gi;
				if(!numberRegex.test(formRaw)){
					window.alert('Please input like: "120,120,120,.6"');
					$('#convert').prev().val('');
					return;
				} else {
					formRaw = formRaw.split(',');
					if(!historyFlag) {
						$('#results').children().not('.result-group.first').remove();
					}
				}

				var source = [{'r':formRaw[0].trim(),'g':formRaw[1].trim(),'b':formRaw[2].trim(),'a':parseFloat(formRaw[3].trim())}];
		
				var doConvert = function(){
				
					var sLength = source.length;
					var bgColor = {'r':255,'g':255,'b':255};
					var target = {};
					function convertRGBA(original,bgColor,target){
						target.r = Math.floor(((1 - original.a) * bgColor.r) + (original.a * original.r));
						target.g = Math.floor(((1 - original.a) * bgColor.g) + (original.a * original.g));
						target.b = Math.floor(((1 - original.a) * bgColor.b) + (original.a * original.b));
						return target;
					}
					for(var i=0;i<sLength;i++){
						var result = convertRGBA(source[i],bgColor,target);
						var hexValue = '#' + result.r.toString(16).toUpperCase() + result.g.toString(16).toUpperCase() + result.b.toString(16).toUpperCase();
						if(source[i].a.toString().indexOf('0') === 0){
							source[i].a = source[i].a.toString().slice(1)
						}
						var originalColor = 'rgba(' + source[i].r + ', ' + source[i].g + ', ' + source[i].b + ', ' + source[i].a + ')';
						var updatedColor = 'rgb(' + result.r + ', ' + result.g + ', ' + result.b + ')';
						
						var $newRow = $('#results > .result-group').first().clone();
						$newRow.removeClass('first');
						$newRow.find('.result-entry-original').css('background-color',originalColor).find('.color-original').val(originalColor);
						$newRow.find('.result-entry-updated').css('background-color',updatedColor).find('.color-updated').val(updatedColor);
						$newRow.find('.result-entry-updated-hex').css('background-color',hexValue).find('.color-updated-hex').val(hexValue);
						$('#results').append($newRow);
						$newRow.animate({
							height: 'show'
						},150,function(){
							//callback
							$(this).removeClass('hidden');
						});
					}
				
				};
				
				doConvert();

			});
		
		})()// self-executing
	};
	

