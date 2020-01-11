// import local images
function importAll(r) {
  return r.keys().map(r);
}

const importedImages = importAll(
  require.context("assets/img/images", false, /\.(png|jpe?g)$/)
);
let localImageObj = {};
importedImages.forEach(imgUrl => {
  let key = imgUrl.split("/")[imgUrl.split("/").length - 1].split(".")[0];
  localImageObj[key] = imgUrl;
});

// Local Images
export const LOCALIMAGES = {
  profileImg: [
    localImageObj.profileImg1,
    localImageObj.profileImg2,
    localImageObj.profileImg3,
    localImageObj.profileImg4
  ],
  landingPage: {
    bgVideoThumbnail:
      // "https://drive.google.com/uc?export=view&id=1-HwPIOC4EQ8t42lumsTWoIq0FbYXuXw8",
      localImageObj.bgVideoThumbnail,
    bgVideo:
      "https://www.dropbox.com/s/ity7airc92n2czg/landingBgVideo.mp4?raw=1",
    bgVideoMobile:
      "https://www.dropbox.com/s/7uxzm933mde0sex/landingBgVideoMobile.mp4?raw=1"
  },
  sections: {
    aboutMe: {
      // aboutMeImg: localImageObj.dispersionImage,
      aboutMeImg: localImageObj.profileImg5,
      bgImgAboutMe: localImageObj.bgImgAboutMe,
      bgImgAboutMeMobile: localImageObj.bgImgAboutMeMobile
    },
    skills: {
      bgImgSkills: localImageObj.bgImgSkills,
      bgImgSkillsMobile: localImageObj.bgImgSkillsMobile
    }
  }
};

// Hosted Images
export const IMAGES = {
  profileImg: [
    "https://drive.google.com/uc?export=view&id=1LLg6v4pzga46w2gdyefANBwWHgb1zdCW",
    "https://drive.google.com/uc?export=view&id=1gX4LowjBO4BnxB_hKMCVFOMXyDXyD283",
    "https://drive.google.com/uc?export=view&id=1SpeQi089zpq36E9QjXFnWB8Eob0blqgI",
    "https://drive.google.com/uc?export=view&id=1UlD4AgWbq22-uM5jeIMBtWC7WgnIxKbU"
  ],
  landingPage: {
    bgVideoThumbnail:
      "https://drive.google.com/uc?export=view&id=1-HwPIOC4EQ8t42lumsTWoIq0FbYXuXw8",
    bgVideo:
      "https://www.dropbox.com/s/ity7airc92n2czg/landingBgVideo.mp4?raw=1",
    bgVideoMobile:
      "https://www.dropbox.com/s/7uxzm933mde0sex/landingBgVideoMobile.mp4?raw=1"
  },
  sections: {
    aboutMe: {
      aboutMeImg:
        "https://drive.google.com/uc?export=view&id=1KwALMxGcAscex54N9Ek_d9XLq5Rfoy1y",
      bgImgAboutMe:
        "https://drive.google.com/uc?export=view&id=1lkIZsfUnst1k7FG8RaHjxKhy4d_kXacV",
      bgImgAboutMeMobile:
        "https://drive.google.com/uc?export=view&id=1cvJU58resqxQNq4vlhT-_vi_cRlDhoRj"
    },
    skills: {
      bgImgSkills:
        "https://drive.google.com/uc?export=view&id=1IQyLmfkrNjb36a61M5YMwExPnQEZ7XhR",
      bgImgSkillsMobile:
        "https://drive.google.com/uc?export=view&id=1jHS49pTU8zHZGu3DyJOKTChEanNwHv9p"
    }
  }
};
