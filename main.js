var images=["https://lh3.googleusercontent.com/pw/ACtC-3fLkluDY-DO69BFD3OFHTCBlCghf6FI7F8r8HkvPxB8aFRzCHAOZMqp4sTNdi5-dHWMK776s7ZNZCpTlIeadg4uLP6DNFcv1-bCv-bmljvvcDyXijNYD0v81lGy_KXytU4nejRSNvluSr-wA3uHy8VJUQ=w631-h842-no?authuser=0,https://lh3.googleusercontent.com/pw/ACtC-3dzKNzV01KSrvZRi464vIa40VBaLqVTD88anh3NZJUQmARcmOFMXbjnpmTRdlTvWvblyeDkp4uS17gVGXxfT5Kvq1Pbwff6fEsf2kF0eyDSsSlzV_A6wNrnJhYrIhKjyWj44DU0848cRdnidqVuFyGJRg=w631-h840-no?authuser=0,https://lh3.googleusercontent.com/pw/ACtC-3eWbnbG_M_E2azDbvEF4Sz5c1ZqJafl0gI0zCpyVfsE_OiHcqqmLy2MlIysBDgAvd25qQ-9TbplautItAacxL6FNoxIhllC_nMx1aZ-MI1ipNNaF5ab8_xHUlJlIgToWTbL4S0145jaE-lJn_8wa4neVQ=w1120-h840-no?authuser=0"];
var i=0;
function nextslide() {
  document.getElementById("album").src=images[i];
  i++;
}  