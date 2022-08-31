const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const imgUrlGenerator = () => {
  const randomHash = Math.random().toString(36).substring(5);
  return `https://avatars.dicebear.com/api/big-ears-neutral/${randomHash}.svg`;
};

const IMG_COUNT = 8;

const { ref, onMounted } = Vue;

const App = {
  setup() {
    const imgList = ref([]);
    const imgRefs = ref([]);

    const onImgLoaded = async (entries, observer) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          const { index } = entry.target.dataset; // get data-index
          await delay(250); // delay display
          imgList.value[index].isLoaded = true;
          observer.unobserve(imgRefs.value[index]); // cancel observation
        }
      }
    };

    const watcher = new IntersectionObserver(onImgLoaded); // init observer

    const setImgRef = (el) => {
      if (el) {
        imgRefs.value.push(el);
        watcher.observe(el); // add observation
      }
    };

    const initImages = () => {
      imgList.value = Array.apply([], Array(IMG_COUNT)).map(() => ({
        isLoaded: false,
        src: imgUrlGenerator(),
      }));
    };

    onMounted(() => {
      initImages();
    });

    return {
      imgList,
      setImgRef,
    };
  },
};

Vue.createApp(App).mount("#app");
Vue.createApp(App).mount("#app2");
