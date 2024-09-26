const imageData = [
    { url: "images/teams/Ablast2024.png", alt: "blast 2024 " },
    { url: "images/teams/Amanchester2024.png", alt: "manchester 2024" },
    { url :"images/teams/Amontreal2024.png", alt: "montreal 2024"},
    { url :"images/teams/Asi2024.png", alt: "S.I. 2024"},
    { url :"images/teams/asts2022.png", alt: "astralis"},
    { url :"images/teams/bc2023.png", alt: "beastcoast"},
    { url :"images/teams/bd2023.png", alt: "blackdragons"},
    { url :"images/teams/bds2024.png", alt: "bds"},
    { url :"images/teams/cag2024.png", alt: "cag"},
    { url :"images/teams/d+kia2024.png", alt: "D+Kia"},
    { url :"images/teams/dw2023.png", alt: "dire wolves"},
    { url :"images/teams/dz2024.png", alt: "dark zero"},
    { url :"images/teams/elevate2024.png", alt: "elevate"},
    { url :"images/teams/flcns2024.png", alt: "falcons"},
    { url :"images/teams/flx2024.png", alt: "fluxo"},
    { url :"images/teams/fntc2024.png", alt: "fanatic"},
    { url :"images/teams/fur2022.png", alt: "furia"},
    { url :"images/teams/fury2024.png", alt: "fury"},
    { url :"images/teams/fx2024.png", alt: "fearX"},
    { url :"images/teams/fzc2024.png", alt: "faze"},
    { url :"images/teams/g2-2024.png", alt: "g2"},
    { url :"images/teams/hrc2023.png", alt: "heroic"},
    { url :"images/teams/knights2024.png", alt: "knights"},
    { url :"images/teams/koi2023.png", alt: "koi"},
    { url :"images/teams/lqd2024.png", alt: "liquid"},
    { url :"images/teams/m80-2024.png", alt: "m80"},
    { url :"images/teams/mibr2023.png", alt: "mibr"},
    { url :"images/teams/mnm2023.png", alt: "mnm"},
    { url :"images/teams/mrg2023.png", alt: "mirage"},
    { url :"images/teams/nip2023.png", alt: "ninjas in pyjamas"},
    { url :"images/teams/oxg2024.png", alt: "oxg"},
    { url :"images/teams/pb2023.png", alt: "parabellum"},
    { url :"images/teams/reject2022.png", alt: "reject"},
    { url :"images/teams/sbx2023.png", alt: "sandbox"},
    { url :"images/teams/scrz2024.png", alt: "scarz"},
    { url :"images/teams/secret2024.png", alt: "secret"},
    { url :"images/teams/snqs2024.png", alt: "soniqs"},
    { url :"images/teams/ssg2024.png", alt: "ssg"},
    { url :"images/teams/tln2024.png", alt: "talon"},
    { url :"images/teams/vks2024.png", alt: "vivo keyd"},
    { url :"images/teams/w7m2024.png", alt: "w7m"},
    { url :"images/teams/wc2024.png", alt: "wc"},
    { url :"images/teams/whws2023.png", alt: "wolves"},
    { url :"images/teams/wyld2024.png", alt: "wylde"},
    // Add more images here
    { url :"images/players/cyber.avif", alt: "cyber"},
    { url :"images/players/handy.avif", alt: "handy"},
    { url :"images/players/kds.avif", alt: "kds"},
    { url :"images/players/soulz1.avif", alt: "soulz1"},
    { url :"images/players/vitaking.avif", alt: "vitaking"},
    { url :"images/players/rafadell.avif", alt: "rafadell"},
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
