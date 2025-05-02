const images = [
    {
      src: "sfmarcu.jpg",
      text: "Bazilica Sfântul Marcu din Veneția"
    },
    {
      src: "gonmdole.jpg",
      text: "Gondole Venețiene"
    },
    {
      src: "dogi.jpg",
      text: "Palatul Dogilor"
    },
    {
      src: "pzsanmarco.jpg",
      text: "Piața San Marco"
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