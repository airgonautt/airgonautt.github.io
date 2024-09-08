const imageData = [
    { url: "images/_blast2024.png", alt: "blast " },
    { url: "images/_manchester2024.png", alt: "manchester" },
    { url :"images/_montreal2024.png", alt: "montreal"},
    { url :"images/asts2022.png", alt: "astralis"},
    { url :"images/bc2023.png", alt: "beastcoast"},
    { url :"images/bd2023.png", alt: "blackdragons"},
    { url :"images/bds2024.png", alt: "bds"},
    { url :"images/cag2024.png", alt: "cag"},
    { url :"images/d+kia2024.png", alt: "D+Kia"},
    { url :"images/dw2023.png", alt: "dire wolves"},
    { url :"images/dz2024.png", alt: "dark zero"},
    { url :"images/elevate2024.png", alt: "elevate"},
    { url :"images/flcns2024.png", alt: "falcons"},
    { url :"images/flx2024.png", alt: "fluxo"},
    { url :"images/fntc2024.png", alt: "fanatic"},
    { url :"images/fur2022.png", alt: "furia"},
    { url :"images/fury2024.png", alt: "fury"},
    { url :"images/fx2024.png", alt: "fearX"},
    { url :"images/fzc2024.png", alt: "faze"},
    { url :"images/g2-2024.png", alt: "g2"},
    { url :"images/hrc2023.png", alt: "heroic"},
    { url :"images/knights2024.png", alt: "knights"},
    { url :"images/koi2023.png", alt: "koi"},
    { url :"images/lqd2024.png", alt: "liquid"},
    { url :"images/m80-2024.png", alt: "m80"},
    { url :"images/mibr2023.png", alt: "mibr"},
    { url :"images/mnm2023.png", alt: "mnm"},
    { url :"images/mrg2023.png", alt: "mirage"},
    { url :"images/nip2023.png", alt: "ninjas in pyjamas"},
    { url :"images/oxg2024.png", alt: "oxg"},
    { url :"images/pb2023.png", alt: "parabellum"},
    { url :"images/reject2022.png", alt: "reject"},
    { url :"images/sbx2023.png", alt: "sandbox"},
    { url :"images/scrz2024.png", alt: "scarz"},
    { url :"images/secret2024.png", alt: "secret"},
    { url :"images/_si2024.png", alt: "S.I."},
    { url :"images/snqs2024.png", alt: "soniqs"},
    { url :"images/ssg2024.png", alt: "ssg"},
    { url :"images/tln2024.png", alt: "talon"},
    { url :"images/vks2024.png", alt: "vivo keyd"},
    { url :"images/w7m2024.png", alt: "w7m"},
    { url :"images/wc2024.png", alt: "wc"},
    { url :"images/whws2023.png", alt: "wolves"},
    { url :"images/wyld2024.png", alt: "wylde"},
    // Add more images here
];

const imageGrid = document.getElementById('image-grid');

imageData.forEach(image => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');

    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.classList.add('img-fluid');
    imgElement.loading = 'lazy'; // Lazy load attribute

    imgDiv.appendChild(imgElement);
    imageGrid.appendChild(imgDiv);
});
