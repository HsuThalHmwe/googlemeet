const names = [
  "Hsu Hsu",
  "Hla Hla",
  "Mya Mya",
  "Ko Ko",
  " Bo Bo",
  "Nyo Nyo",
  "Mo Mo",
  "No No",
  "Thar Thar",
  "Hsu Hsu",
  "Hla Hla",
  "Mya Mya",
  "Ko Ko",
  " Bo Bo",
  "Nyo Nyo",
  "Mo Mo",
  "No No",
  "Thar Thar",
];

const main = document.querySelector(".main");
for (let index = 0; index < names.length; index++) {
  const secDiv = document.createElement("div");
  secDiv.textContent = names[index];
  main.append(secDiv);
  secDiv.classList.add("innerDiv");
  const image = document.createElement("img");
  secDiv.append(image);
  image.src =
    "https://plus.unsplash.com/premium_photo-1661331671845-9433ddbbec2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60";
}
