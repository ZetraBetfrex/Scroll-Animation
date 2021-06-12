const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes(){

	const triggerBottom = window.innerHeight/5*4
	boxes.forEach(box => {
		const boxx= box.getBoundingClientRect().top
		if(boxx<triggerBottom){
			box.classList.add('show')
		}else{
			box.classList.remove('show')
		}
	})
}