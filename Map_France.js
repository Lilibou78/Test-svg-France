var map = document.querySelector('.map');
var paths = map.querySelectorAll('.map__france a');
var links = map.querySelectorAll('.list__region a');

//Polyfill du forEach
/*if(NodeList.prototype.forEach === undifined) {
	NodeList.prototype.forEach = callback => { 
	[].forEach.call(this,callback);
	}
}*/


paths.forEach( path => {
	path.addEventListener('mouseenter', e => {
		var id = e.target.id;
		console.log(id);
		map.querySelectorAll('.is-active').forEach(item => item.classList.remove("is-active"));
		e.target.classList.add("is-active");
		console.log(id.replace('region_','liste-'));
		var list = id.replace('region_','liste-');
		document.getElementById(list).classList.add("is-active");
		console.log(list);
	});
});

