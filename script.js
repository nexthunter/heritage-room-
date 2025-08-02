function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();



const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./assest/male0001.png
     ./assest/male0002.png
     ./assest/male0003.png
     ./assest/male0004.png
     ./assest/male0005.png
     ./assest/male0006.png
     ./assest/male0007.png
     ./assest/male0008.png
     ./assest/male0009.png
     ./assest/male0010.png
     ./assest/male0011.png
     ./assest/male0012.png
     ./assest/male0013.png
     ./assest/male0014.png
     ./assest/male0015.png
     ./assest/male0016.png
     ./assest/male0017.png
     ./assest/male0018.png
     ./assest/male0019.png
     ./assest/male0020.png
     ./assest/male0021.png
     ./assest/male0022.png
     ./assest/male0023.png
     ./assest/male0024.png
     ./assest/male0025.png
     ./assest/male0026.png
     ./assest/male0027.png
     ./assest/male0028.png
     ./assest/male0029.png
     ./assest/male0030.png
     ./assest/male0031.png
     ./assest/male0032.png
     ./assest/male0033.png
     ./assest/male0034.png
     ./assest/male0035.png
     ./assest/male0036.png
     ./assest/male0037.png
     ./assest/male0038.png
     ./assest/male0039.png
     ./assest/male0040.png
     ./assest/male0041.png
     ./assest/male0042.png
     ./assest/male0043.png
     ./assest/male0044.png
     ./assest/male0045.png
     ./assest/male0046.png
     ./assest/male0047.png
     ./assest/male0048.png
     ./assest/male0049.png
     ./assest/male0050.png
     ./assest/male0051.png
     ./assest/male0052.png
     ./assest/male0053.png
     ./assest/male0054.png
     ./assest/male0055.png
     ./assest/male0056.png
     ./assest/male0057.png
     ./assest/male0058.png
     ./assest/male0059.png
     ./assest/male0060.png
     ./assest/male0061.png
     ./assest/male0062.png
     ./assest/male0063.png
     ./assest/male0064.png
     ./assest/male0065.png
     ./assest/male0066.png
     ./assest/male0067.png
     ./assest/male0068.png
     ./assest/male0069.png
     ./assest/male0070.png
     ./assest/male0071.png
     ./assest/male0072.png
     ./assest/male0073.png
     ./assest/male0074.png
     ./assest/male0075.png
     ./assest/male0076.png
     ./assest/male0077.png
     ./assest/male0078.png
     ./assest/male0079.png
     ./assest/male0080.png
     ./assest/male0081.png
     ./assest/male0082.png
     ./assest/male0083.png
     ./assest/male0084.png
     ./assest/male0085.png
     ./assest/male0086.png
     ./assest/male0087.png
     ./assest/male0088.png
     ./assest/male0089.png
     ./assest/male0090.png
     ./assest/male0091.png
     ./assest/male0092.png
     ./assest/male0093.png
     ./assest/male0094.png
     ./assest/male0095.png
     ./assest/male0096.png
     ./assest/male0097.png
     ./assest/male0098.png
     ./assest/male0099.png
     ./assest/male0100.png
     ./assest/male0101.png
     ./assest/male0102.png
     ./assest/male0103.png
     ./assest/male0104.png
     ./assest/male0105.png
     ./assest/male0106.png
     ./assest/male0107.png
     ./assest/male0108.png
     ./assest/male0109.png
     ./assest/male0110.png
     ./assest/male0111.png
     ./assest/male0112.png
     ./assest/male0113.png
     ./assest/male0114.png
     ./assest/male0115.png
     ./assest/male0116.png
     ./assest/male0117.png
     ./assest/male0118.png
     ./assest/male0119.png
     ./assest/male0120.png
     ./assest/male0121.png
     ./assest/male0122.png
     ./assest/male0123.png
     ./assest/male0124.png
     ./assest/male0125.png
     ./assest/male0126.png
     ./assest/male0127.png
     ./assest/male0128.png
     ./assest/male0129.png
     ./assest/male0130.png
     ./assest/male0131.png
     ./assest/male0132.png
     ./assest/male0133.png
     ./assest/male0134.png
     ./assest/male0135.png
     ./assest/male0136.png
     ./assest/male0137.png
     ./assest/male0138.png
     ./assest/male0139.png
     ./assest/male0140.png
     ./assest/male0141.png
     ./assest/male0142.png
     ./assest/male0143.png
     ./assest/male0144.png
     ./assest/male0145.png
     ./assest/male0146.png
     ./assest/male0147.png
     ./assest/male0148.png
     ./assest/male0149.png
     ./assest/male0150.png
     ./assest/male0151.png
     ./assest/male0152.png
     ./assest/male0153.png
     ./assest/male0154.png
     ./assest/male0155.png
     ./assest/male0156.png
     ./assest/male0157.png
     ./assest/male0158.png
     ./assest/male0159.png
     ./assest/male0160.png
     ./assest/male0161.png
     ./assest/male0162.png
     ./assest/male0163.png
     ./assest/male0164.png
     ./assest/male0165.png
     ./assest/male0166.png
     ./assest/male0167.png
     ./assest/male0168.png
     ./assest/male0169.png
     ./assest/male0170.png
     ./assest/male0171.png
     ./assest/male0172.png
     ./assest/male0173.png
     ./assest/male0174.png
     ./assest/male0175.png
     ./assest/male0176.png
     ./assest/male0177.png
     ./assest/male0178.png
     ./assest/male0179.png
     ./assestmale0180.png
     ./assest/male0181.png
     ./assest/male0182.png
     ./assest/male0183.png
     ./assest/male0184.png
     ./assest/male0185.png
     ./assest/male0186.png
     ./assest/male0187.png
     ./assest/male0188.png
     ./assest/male0189.png
     ./assest/male0190.png
     ./assest/male0191.png
     ./assest/male0192.png
     ./assest/male0193.png
     ./assest/male0194.png
     ./assest/male0195.png
     ./assest/male0196.png
     ./assest/male0197.png
     ./assest/male0198.png
     ./assest/male0199.png
     ./assest/male0200.png
     ./assest/male0201.png
     ./assest/male0202.png
     ./assest/male0203.png
     ./assest/male0204.png
     ./assest/male0205.png
     ./assest/male0206.png
     ./assest/male0207.png
     ./assest/male0208.png
     ./assest/male0209.png
     ./assest/male0210.png
     ./assest/male0211.png
     ./assest/male0212.png
     ./assest/male0213.png
     ./assest/male0214.png
     ./assest/male0215.png
     ./assest/male0216.png
     ./assest/male0217.png
     ./assest/male0218.png
     ./assest/male0219.png
     ./assest/male0220.png
     ./assest/male0221.png
     ./assest/male0222.png
     ./assest/male0223.png
     ./assest/male0224.png
     ./assest/male0225.png
     ./assest/male0226.png
     ./assest/male0227.png
     ./assest/male0228.png
     ./assest/male0229.png
     ./assest/male0230.png
     ./assest/male0231.png
     ./assest/male0232.png
     ./assest/male0233.png
     ./assest/male0234.png
     ./assest/male0235.png
     ./assest/male0236.png
     ./assest/male0237.png
     ./assest/male0238.png
     ./assest/male0239.png
     ./assest/male0240.png
     ./assest/male0241.png
     ./assest/male0242.png
     ./assest/male0243.png
     ./assest/male0244.png
     ./assest/male0245.png
     ./assest/male0246.png
     ./assest/male0247.png
     ./assest/male0248.png
     ./assest/male0249.png
     ./assest/male0250.png
     ./assest/male0251.png
     ./assest/male0252.png
     ./assest/male0253.png
     ./assest/male0254.png
     ./assest/male0255.png
     ./assest/male0256.png
     ./assest/male0257.png
     ./assest/male0258.png
     ./assest/male0259.png
     ./assest/male0260.png
     ./assest/male0261.png
     ./assest/male0262.png
     ./assest/male0263.png
     ./assest/male0264.png
     ./assest/male0265.png
     ./assest/male0266.png
     ./assest/male0267.png
     ./assest/male0268.png
     ./assest/male0269.png
     ./assest/male0270.png
     ./assest/male0271.png
     ./assest/male0272.png
     ./assest/male0273.png
     ./assest/male0274.png
     ./assest/male0275.png
     ./assest/male0276.png
     ./assest/male0277.png
     ./assest/male0278.png
     ./assest/male0279.png
     ./assest/male0280.png
     ./assest/male0281.png
     ./assest/male0282.png
     ./assest/male0283.png
     ./assest/male0284.png
     ./assest/male0285.png
     ./assest/male0286.png
     ./assest/male0287.png
     ./assest/male0288.png
     ./assest/male0289.png
     ./assest/male0290.png
     ./assest/male0291.png
     ./assest/male0292.png
     ./assest/male0293.png
     ./assest/male0294.png
     ./assest/male0295.png
     ./assest/male0296.png
     ./assest/male0297.png
     ./assest/male0298.png
     ./assest/male0299.png
     ./assest/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

// Ensure the arrow link is clickable
document.addEventListener('DOMContentLoaded', function() {
  const arrowLink = document.querySelector('#text4 a');
  if (arrowLink) {
    arrowLink.addEventListener('click', function(e) {
      console.log('Arrow clicked!');
      // The link should work normally, but let's ensure it's not blocked
    });
  }
});