const gallery = {};

gallery.init = () => {
  new Glide(".glide", {
    type: "carousel",
    autoplay: 6000,
    animationDuration: 1200,
    gap: 5,
  }).mount();
};

export default gallery;
