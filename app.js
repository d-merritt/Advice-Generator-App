const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  console.log(data);

  document.getElementById("advice").innerHTML = ` Advice #${data.slip.id}`;
  document.getElementById("advice-text").innerHTML = `"${data.slip.advice}"`;

  let endpoint =
    "https://api.unsplash.com/photos/random/?client_id=a87_7MH25OIQrt9-xTKWNQq5eJU7sTpVzv9lHHia77M";

  let imageElement = document.querySelector("#unsplashimages");
  let imageLink = document.querySelector("#creator");

  fetch(endpoint)
    .then((response) => response.json())
    .then((jsonData) => {
      imageElement.src = jsonData.urls.regular;
      imageLink.setAttribute("href", jsonData.links.html);

      creator.innerText = jsonData.user.name;
      creator.setAttribute("href", jsonData.user.portfolio_url);

    })
    .catch((error) => {
      console.log("Error: " + error);
    });

};

getAdvice();
