export default function gerarImagemPerfilRandom() {
    const ImagemA = './assets/perfil_padrao/a.webp';
    const ImagemB = './assets/perfil_padrao/b.webp';
    const ImagemC = './assets/perfil_padrao/c.webp';
    const ImagemD = './assets/perfil_padrao/d.webp';
    const ImagemE = './assets/perfil_padrao/e.webp';
    const ImagemF = './assets/perfil_padrao/f.webp';
    const ImagemG = './assets/perfil_padrao/g.webp';
    const ImagemH = './assets/perfil_padrao/h.webp';
    const ImagemI = './assets/perfil_padrao/i.webp';
    const ImagemJ = './assets/perfil_padrao/j.webp';

    const listaImagens = [ImagemA, ImagemB, ImagemC, ImagemD, ImagemE, ImagemF, ImagemG, ImagemH, ImagemI, ImagemJ];

    const random = Math.floor(Math.random() * listaImagens.length);
    return listaImagens[random];
}