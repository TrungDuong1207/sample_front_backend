import imageFile from '../assets/picture.jpg';

const toBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

const convertImageToBase64 = async () => {
    try {
        const response = await fetch(imageFile);
        const blob = await response.blob();
        const base64String = await toBase64(blob);
        console.log(base64String);
    } catch (error) {
        console.error(error);
    }
};

convertImageToBase64();
