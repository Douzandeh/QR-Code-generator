const generateBtn = document.querySelector('form button');
const qrCodeBox = document.querySelector('.qr-code');
const qrInput = document.querySelector('form input');
const qrImage = document.querySelector('.qr-code img');


generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) {
        return alert('Please enter the address or text!!')
    }
    generateBtn.innerText = 'Receiving QR code'
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImage.addEventListener('load', () => {
        qrCodeBox.classList.remove('hidden')
    generateBtn.innerText = 'QR code generation'
        
    })
})

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        qrCodeBox.classList.add('hidden')
    }
})