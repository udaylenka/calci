 function currentTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
      
    const disp = `${hours}:${minutes}`;
      
    document.getElementById('time').textContent = disp;
}

setInterval(currentTime, 1000);
currentTime();
function adda(val){
	let v=document.getElementById("res");
	v.value +=val;
}

function calc(){
	let v=document.getElementById("res").value;
	let res = eval(v);
	document.getElementById("res").value=res;
}

function cclear(){
	document.getElementById("res").value='';
}

function del() {
    let d = document.getElementById("res");
    d.value = d.value.slice(0, -1);
}



function trag() {
    let s = document.getElementById("res");
    let cu = s.value.trim(); 

    if (cu === "" || /[-+*/]$/.test(cu)) {
        return;
    }

    const nex = /-?\d*\.?\d+$/;
    const match = cu.match(nex);

    if (!match) {
        return;
    }

    let la = match[0];

    if (la.startsWith('-')) {
        s.value = cu.slice(0, cu.lastIndexOf(la)) + la.slice(1);
    } else {
        s.value = cu.slice(0, cu.lastIndexOf(la)) + '-' + la;
    }
}
