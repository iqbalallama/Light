function light(view){
    var pic;
    if(view == 0){
        pic = 'light-bulb-on-off-png-11553940208oq66nq8jew.png';
    }
    else{
        pic = 'light-bulb-on-off-png-11553940319kdxsp3rf0i.png';
    }
    document.getElementById('bulb').src = pic;
}