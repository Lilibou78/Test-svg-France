var map = document.querySelector('.map');
var paths = map.querySelectorAll('.map__france a');
var links = map.querySelectorAll('.list__region a');

//Polyfill du forEach
/*if(NodeList.prototype.forEach === undifined) {
	NodeList.prototype.forEach = callback => { 
	[].forEach.call(this,callback);
	}
}*/

const check = (carte) =>{
	console.log(carte);
	if (carte.includes('region') || carte.includes('liste')){
		return true;
	}else{
		return false;
	}
}

const activeArea = (ids, vrai) => {
console.log(vrai);
		map.querySelectorAll('.is-active').forEach(item => item.classList.remove("is-active"));

	if (ids !== null && vrai !== false){
		document.querySelector('#region_' + ids).classList.add("is-active")
		document.querySelector('#liste-' + ids).classList.add("is-active");
	}
}

paths.forEach( path => {
	path.addEventListener('mouseenter', e => {
	let test = check(e.target.id);
		if (test === true) {
			var id = e.target.id.replace('region_','');
			activeArea(id);
		}else{
			activeArea(id,test);
		}
	});
});

links.forEach( link => {
	link.addEventListener('mouseenter', e => {
	let test = check(e.target.id);
		if (test === true) {
			var id = e.target.id.replace('liste-','');
			activeArea(id);			
		}else{
			activeArea(id,test);
		}
	});
});


map.addEventListener('mouseleave', e => activeArea());