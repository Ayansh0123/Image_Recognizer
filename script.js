window.onload=function(){
Webcam.set({
	width: 350,
	height: 300,
	image_format: 'png',
	png_quality: 50
});
var camera = document.getElementById('camera');
Webcam.attach(camera);
};
function takeSnapshot(){
	Webcam.snap(function(data){
		document.getElementById('result').innerHTML = '<img id = "image" src = "'+data+'"/>';
	});
}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NmWKGi-iN/model.json', modelLoaded);
function modelLoaded(){
	console.log('Model Is Loaded')
}
function check(){
	img = document.getElementById('image');
	classifier.classify(img, gotResult);
}
function gotResult(error, results){
	if (error){
		console.error(error);
	}
	else{
		console.log(results);
		document.getElementById('result_object_name').innerHTML=results[0].label;
		document.getElementById('result_object_accuracy').innerHTML=results[0].confidence.toFixed(3);
	}
}