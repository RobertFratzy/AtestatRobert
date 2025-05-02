const images = [
    {
      src: "Coloseum.jpg",
      text: "Colosseum"
    },
    {
      src: "victorr.jpg",
      text: "Palatul Lui Victor Emmanuel"
    },
    {
      src: "BazilicaSantaMariaMaggiore.jpg",
      text: "Bazilica Santa Maria Maggiore"
    },
    {
      src: "pietele-lui-traian.jpg",
      text: "Forul Lui Traian"
    },
    {
      src: "trevii.jpg",
      text: "Fântâna Trevi"
    }
  ];
  
  let currentIndex = 0;

  function showImage(index) {
    const img = document.getElementById("mainImage");
    const text = document.getElementById("imageText");
    img.src = images[index].src;
    text.textContent = images[index].text;
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }