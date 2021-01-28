// Slick Carousel
$(function () {
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
      },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      },
    ],
  });


});








$(function () {
  $('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1
  });
});



















  




// Parallax Scrolling
const parallax = document.getElementById('wrap_cover');

window.addEventListener('scroll', function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = `${offset * 0.5}px`;
});




// Contact Us Form Validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Електронна адреса не дійсна');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} потрібно заповнити`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} має містити хоча б ${min} символи(ів)`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} не має перевищувати ${max} символи(ів)`
    );
  } else {
    showSuccess(input);
  }
}

// Check imput digits
function validateForm(input) {
  const nu = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (nu.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Вкажіть вірний номер');
  }
}


// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(!checkRequired([username, phone, email])){
    checkLength(username, 3, 15);
    checkLength(phone, 10, 13);
    checkEmail(email);
    validateForm(phone)
  }

});