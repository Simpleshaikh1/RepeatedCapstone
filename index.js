const personsData = [
  {
    personName: 'Mosh Hemdani',
    personProfession: 'Software Developer',
    personInfo: 'Mosh Hemdani is a postdoctoral software engineer at the SEART research group, at Software Institute, USI, Switzerland.',
    personImage: './images/person1.jpg',
  },
  {
    personName: 'Juliana  Pereira',
    personProfession: 'Kollagen University',
    personInfo: 'Juliana is a Lecturer (Assistant Professor) in Software Engineering at the School of Computing Science, University of Glasgow, United Kingdom.',
    personImage: './images/person2.jpg',
  },
  {
    personName: 'Faizal Ashkur',
    personProfession: 'Simon Fraser University',
    personInfo: 'Saba Alimadadi is an Assistant Professor in the Department of Computer Science and Engineering at Simon Fraser University.',
    personImage: './images/blackgirl.jpeg',
  },
  {
    personName: 'Aliko Dangote',
    personProfession: 'Saarland University',
    personInfo: 'Sven Apel is an associate professor in the School of Electrical Engineering and Computer Science at Washington State University, Pullman.',
    personImage: './images/dangote.jpeg',
  },
];

function myPersons() {
  const featureSection = document.querySelector('.persons');
  const overlay = document.createElement('div');
  overlay.classList.add('inner-div');

  let cardContent = `<h2>Featured persons</h2>
        <hr class="hr">
        <ul class="personsList">`;

  for (let i = 0; i < personsData.length; i += 1) {
    const personInformation = personsData[i];

    cardContent += `
                
        <li class="person person-${i + 1}">
            <div class="backFrame"><img class="personImg" src="${personInformation.personImage}" alt="person Picture"></div>
                <ul class="person-detail">
                    <li class="person-name">
                        <h3>${personInformation.personName}</h3>
                    </li>
                    <li class="person-affiliation">
                        <h4>${personInformation.personProfession}</h4>
                    </li>
                    <li class="person-description">
                        <p>${personInformation.personInfo}
                        </p>
                    </li>
                </ul>
        </li>`;
  }

  cardContent += `</ul>
    <button class="seeMoreBtn">More <i class="fa-solid fa-angle-down down-arrow"></i></button>
    <button class="person-3 less">Less <i class="fa-solid fa-angle-up down-arrow"></i></button>`;
  overlay.innerHTML = cardContent;
  featureSection.appendChild(overlay);
  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const seeLessBtn = document.querySelector('.less');
  const person3 = document.querySelector('.person-3');
  const person4 = document.querySelector('.person-4');

  function seeMore() {
    seeMoreBtn.setAttribute('class', 'person-3');
    person3.classList.remove('person-3');
    person4.classList.remove('person-4');
    seeLessBtn.setAttribute('class', 'seeMoreBtn');
  }

  function seeLess() {
    seeLessBtn.setAttribute('class', 'person-3 less');
    person3.classList.add('person-3');
    person4.classList.add('person-4');
    seeMoreBtn.setAttribute('class', 'seeMoreBtn');
  }

  seeMoreBtn.addEventListener('click', seeMore);
  seeLessBtn.addEventListener('click', seeLess);
}

window.addEventListener('load', myPersons);