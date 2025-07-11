document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  const fullNameError = document.getElementById("fullName-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const messageError = document.getElementById("message-error");

  const successModal = document.getElementById("successModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  const closeButton = document.querySelector(".close-button");
  const modalCloseButton = document.querySelector(".modal-close-button");

  function showError(inputElement, errorElement, message) {
    inputElement.classList.remove("input-valid");
    inputElement.classList.add("input-invalid");
    errorElement.textContent = message;
    errorElement.classList.add("show");
  }

  function clearError(inputElement, errorElement) {
    inputElement.classList.remove("input-invalid");
    inputElement.classList.add("input-valid");
    errorElement.textContent = "";
    errorElement.classList.remove("show");
  }

  function resetBorder(inputElement) {
    inputElement.classList.remove("input-valid");
    inputElement.classList.remove("input-invalid");
  }

  function validateFullName() {
    const value = fullNameInput.value.trim();
    if (value === "") {
      showError(fullNameInput, fullNameError, "Please add your full name.");
      return false;
    } else if (value.length < 3) {
      showError(
        fullNameInput,
        fullNameError,
        "Your full name should have at least 3 characters."
      );
      return false;
    } else {
      clearError(fullNameInput, fullNameError);
      return true;
    }
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    if (value === "") {
      showError(emailInput, emailError, "Please add your email address.");
      return false;
    }

    const atIndex = value.indexOf("@");
    const dotIndex = value.lastIndexOf(".");

    if (
      atIndex < 1 ||
      dotIndex < atIndex + 2 ||
      dotIndex === value.length - 1
    ) {
      showError(emailInput, emailError, "Please enter a valid email address.");
      return false;
    } else {
      clearError(emailInput, emailError);
      return true;
    }
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    if (value === "") {
      showError(phoneInput, phoneError, "Please add your telephone number.");
      return false;
    }

    let cleanedValue = value;
    if (cleanedValue.startsWith("+")) {
      cleanedValue = cleanedValue.substring(1);
    }

    for (let i = 0; i < cleanedValue.length; i++) {
      const char = cleanedValue.charAt(i);
      if (char < "0" || char > "9") {
        showError(phoneInput, phoneError, "Please enter only numbers.");
        return false;
      } else {
        clearError(phoneInput, phoneError);
        return true;
      }
    }
  }

  function validateMessage() {
    const value = messageInput.value.trim();
    if (value === "") {
      showError(messageInput, messageError, "Please add your message.");
      return false;
    } else if (value.length < 5) {
      showError(
        messageInput,
        messageError,
        "Your message should have at least 5 characters."
      );
      return false;
    } else {
      clearError(messageInput, messageError);
      return true;
    }
  }

  const fields = [
    { input: fullNameInput, error: fullNameError, validate: validateFullName },
    { input: emailInput, error: emailError, validate: validateEmail },
    { input: phoneInput, error: phoneError, validate: validatePhone },
    { input: messageInput, error: messageError, validate: validateMessage },
  ];

  fields.forEach((field) => {
    field.input.addEventListener("input", () => {
      if (
        field.input.classList.contains("input-invalid") ||
        field.input.classList.contains("input-valid")
      ) {
        field.validate();
      }
    });

    field.input.addEventListener("blur", () => {
      field.validate();
    });

    field.input.addEventListener("focus", () => {
      resetBorder(field.input);
      field.error.textContent = "";
      field.error.classList.remove("show");
    });
  });

  function showSuccessModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    successModal.classList.add("show");
  }
  function hideSuccessModal() {
    successModal.classList.remove("show");
  }

  closeButton.addEventListener("click", hideSuccessModal);
  modalCloseButton.addEventListener("click", hideSuccessModal);

  successModal.addEventListener("click", (event) => {
    if (event.target === successModal) {
      hideSuccessModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (isFullNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      form.reset();
      fields.forEach((field) => resetBorder(field.input));

      showSuccessModal(
        "Sent",
        "Thank you for reaching out to Circle. Your message has been successfully submitted."
      );
    }
  });
});


let myButton = document.getElementById("scroll-to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}