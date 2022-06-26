butt1 = document.querySelector('.count');

butt1.addEventListener('click', () => {
    
    const sum = Number(document.querySelector('.inp1').value);
    const qul = Number(document.querySelector('.quality').value);
    const num = Number(document.querySelector('.inp3').value);

    const tea = sum*qul;
    const singl = sum/num;
    const sin = singl*qul;
    const total1 = singl+sin

    document.querySelector('.otp1').textContent = sin;
    document.querySelector('.otp2').textContent = total1;
});

butt2 = document.querySelector('.throw');

butt2.addEventListener('click', () => {

    const sin = null;
    const total1 = null;

    document.querySelector('.otp1').textContent = sin;
    document.querySelector('.otp2').textContent = total1;
});