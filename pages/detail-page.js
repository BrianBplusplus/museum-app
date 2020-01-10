const data = {
    artObjects: [
      {
        links: {
          self: "https://www.rijksmuseum.nl/api/nl/collection/SK-A-180",
          web: "https://www.rijksmuseum.nl/nl/collectie/SK-A-180"
        },
        id: "nl-SK-A-180",
        objectNumber: "SK-A-180",
        title: "Een vrolijke vioolspeler",
        hasImage: true,
        principalOrFirstMaker: "Gerard van Honthorst",
        longTitle: "Een vrolijke vioolspeler, Gerard van Honthorst, 1623",
        showImage: false,
        permitDownload: false,
        webImage: {
          guid: "868fdc90-94e1-432c-92aa-bc328a866119",
          offsetPercentageX: 0,
          offsetPercentageY: 0,
          width: 2500,
          height: 2500,
          url: "https://lh3.googleusercontent.com/V3sjNgCA_Jssjm0sTKaPZeOwCv_vAPpjllrAF-yAB8UkqIlc6UX_jxJmxH_axVHTHxlK1E7Slecg8K5bIvSbDlw0zg"
        },
        headerImage: {
          guid: "03e0bed7-56ce-48f4-828a-6a3c96f578f1",
          offsetPercentageX: 0,
          offsetPercentageY: 0,
          width: 460,
          height: 460,
          url: "https://lh3.googleusercontent.com/lqio6vHMqpMaVBeWBHUxhqpgnyYsTG24Xf-6o2JzuRscjt5TphP3DKoDX-M8VnrDAtnyEI_ROpnSVvttlGWba_3pfwo"
        },
        productionPlaces: [ ]
        },
    ]  
}

function displayPainting(painting){
    const dynamicPainting = data.artObjects[i];
    const contentId = document.getElementById('content');
    
    const a = document.createElement('a');
    const img = document.createElement('img');
    
    img.alt = dynamicPainting.title;
    img.classList.add('artObject');
    img.src = dynamicPainting.webImage.url;
    
    a.href = ('./pages/detail-page.html');
    
    a.appendChild(img);
    contentId.appendChild(a);
  };
  
  const arrayLength = data.artObjects.length;
  
  for (var i = 0; i < arrayLength; i++) {
    displayPainting(data.artObjects[i]);
  };

function doesNotPassAllValidations(name, msg) {
    if (name == false || msg == false) {
        console.log('text is not filled in');
        alert('You forgot to fill in your name or message!');
        return true;
    }

    if (msg.length >= 30) {
        console.log('more than 30 characters');
        alert('Message is too long');
        return true;
    }
    return false;
}

function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;

    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    if(doesNotPassAllValidations(name, msg)){
        return null
    };

    comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;

    comment.classList.add('message');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log('comment = ', comment);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
 
    inputField.value = null;
    textArea.value = null;
    };