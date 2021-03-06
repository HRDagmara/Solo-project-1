'use strict';

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});

function toggleNav(visible) {
  document.querySelector('.nav').classList.toggle('show', visible);
};

toggleNav();

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  console.log("test");
  toggleNav();
});

function toggleBanners(visible) {
  document.querySelector('.banners').classList.toggle('show', visible);
  document.querySelector('.general').classList.remove('show');
  document.querySelector('.links').classList.remove('show');
}

toggleBanners();

document.querySelector('.bannersnav').addEventListener('click', function(e) {
  e.preventDefault();
  toggleBanners();
});

function toggleDetailsta(visible) {
  document.querySelector('.detailsta').classList.toggle('show', visible);
  document.querySelector('.general').classList.remove('show');
  document.querySelector('.links').classList.remove('show');
}

toggleDetailsta();

document.querySelector('.detailsnav').addEventListener('click', function(e) {
  e.preventDefault();
  toggleDetailsta();
});

function togglePersonalData(visible) {
  document.querySelector('.formdata').classList.toggle('show', visible);
  document.querySelector('.general').classList.remove('show');
  document.querySelector('.links').classList.remove('show');
}

togglePersonalData();

document.querySelector('.personalnav').addEventListener('click', function(e) {
  e.preventDefault();
  togglePersonalData();
});

function togglePayout(visible) {
  document.querySelector('.payouthis').classList.toggle('show', visible);
  document.querySelector('.general').classList.remove('show');
  document.querySelector('.links').classList.remove('show');
}

togglePayout();

document.querySelector('.payoutnav').addEventListener('click', function(e) {
  e.preventDefault();
  togglePayout();
});

function closeModal() {
  document.getElementById('#overlay').classList.remove('show');
};

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  })
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  
  if (e.target === this) {
    closeModal();
  }

});

document.addEventListener('keyup', function(e) {
  
  if (e.keyCode === 27) {
    closeModal();
  }

});


function openModal(modal) {
  document.querySelectorAll('#overlay > #myChat').forEach(function(modal) {
  modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector('.modal').classList.add('show');
};

openModal('#myChat');

function openModal(modal) {
  document.querySelectorAll('#overlay > #myLogin').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector('.modal').classList.add('show');
};

openModal('#myLogin');

function openModal(modal) {
  document.querySelectorAll('#overlay > #myQuit').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector('.modal').classList.add('show');
}

openModal('#myQuit');
