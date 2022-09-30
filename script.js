//this shit barely works
const counters = document.querySelectorAll(".value");

const speed = 1500;
counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    // const speed = +counter.getAttribute("speed");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});
