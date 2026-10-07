const APIKEY = "vyxUQMQcImUQjBRjFQp3r22Kq5LaAk0qvV2qq0IN";
const APIURL = `https://api.thenewsapi.com/v1/news/top?locale=us&language=en&api_token=${APIKEY}`;
async function loadNews() {
    const response = await fetch(APIURL)
    const data = await response.json()
    console.log(data.data[0].title)
    const title = document.querySelector("#news-list .news h3")
    title.textContent=data.data[0].title
    const desc = document.querySelector("#news-list .news p")
    desc.textContent=data.data[0].description
    const time = document.querySelector("#news-list .news time");
time.textContent = new Date(data.data[0].published_at).toLocaleDateString(); //new date بتحول النص الطويل لتاريخ يفهمه الكود 
//toLocaleDateString() بتكتبه بالشكل المعتاد يوم/شهر/سنة.
const img = document.querySelector("#news-list .news .img");
img.style.backgroundImage = `url(${data.data[0].image_url})`;
const card = document.querySelector("#news-list .news");
card.href = data.data[0].url;
// الكارت 2
const title2 = document.querySelector("#news-list .news:nth-child(2) h3");
title2.textContent = data.data[1].title;

const desc2 = document.querySelector("#news-list .news:nth-child(2) p");
desc2.textContent = data.data[1].description;

const time2 = document.querySelector("#news-list .news:nth-child(2) time");
time2.textContent = new Date(data.data[1].published_at).toLocaleDateString();

const img2 = document.querySelector("#news-list .news:nth-child(2) .img");
img2.style.backgroundImage = `url(${data.data[1].image_url})`;

const card2 = document.querySelector("#news-list .news:nth-child(2)");
card2.href = data.data[1].url;
// الكارت 3 
const title3 = document.querySelector("#news-list .news:nth-child(3) h3");
title3.textContent = data.data[2].title;

const desc3 = document.querySelector("#news-list .news:nth-child(3) p");
desc3.textContent = data.data[2].description;

const time3 = document.querySelector("#news-list .news:nth-child(3) time");
time3.textContent = new Date(data.data[2].published_at).toLocaleDateString();

const img3 = document.querySelector("#news-list .news:nth-child(3) .img");
img3.style.backgroundImage = `url(${data.data[2].image_url})`;

const card3 = document.querySelector("#news-list .news:nth-child(3)");
card3.href = data.data[2].url;
 
}
console.log(APIURL)
loadNews();