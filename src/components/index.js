//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1, rec2) {
  let rec1copy = JSON.parse(JSON.stringify(rec1));
  let rec2copy = JSON.parse(JSON.stringify(rec2));

  if (rec1.top && rec1.left && rec1.width && rec1.height) {
    return solveCase1(rec1copy, rec2copy);
  }
  if (rec1.top && rec1.left && rec1.bottom && rec1.right) {
    return solveCase2(rec1copy, rec2copy);
  }
  if (rec1.bottom && rec1.right && rec1.width && rec1.height) {
    return solveCase3(rec1copy, rec2copy);
  }
  if (rec1.top && rec1.right && rec1.width && rec1.height) {
    return solveCase4(rec1copy, rec2copy);
  }
  if (rec1.bottom && rec1.left && rec1.width && rec1.height) {
    return solveCase5(rec1copy, rec2copy);
  }
}

function solveCase1(rec1, rec2) {
  let rec1Top = parseInt(rec1.top);
  let rec2Top = parseInt(rec2.top);
  let rec1left = parseInt(rec1.left);
  let rec2left = parseInt(rec2.left);
  let rec1ht = parseInt(rec1.height);
  let rec2ht = parseInt(rec2.height);
  let rec1wd = parseInt(rec1.width);
  let rec2wd = parseInt(rec2.width);
  if (
    rec1Top <= rec2Top &&
    rec1left <= rec2left &&
    rec1left + rec1wd >= rec2left + rec2wd &&
    rec1Top + rec1ht >= rec2Top + rec2ht
  ) {
    return {
      ...rec1,
      children: [
        {
          top: Math.abs(rec2Top - rec1Top) + "px",
          left: Math.abs(rec2left - rec1left) + "px",
          height: rec2.height,
          width: rec2.width,
          children: [],
        },
      ],
    };
  }
  if (
    rec2Top <= rec1Top &&
    rec2left <= rec1left &&
    rec2left + rec2wd >= rec1left + rec1wd &&
    rec2Top + rec2ht >= rec1Top + rec1ht
  ) {
    return {
      ...rec2,
      children: [
        {
          top: Math.abs(rec1Top - rec2Top) + "px",
          left: Math.abs(rec1left - rec2left) + "px",
          height: rec1.height,
          width: rec1.width,
          children: [],
        },
      ],
    };
  }
  return rec1;
}
function solveCase2(rec1, rec2) {
  let rec1Top = parseInt(rec1.top);
  let rec2Top = parseInt(rec2.top);
  let rec1left = parseInt(rec1.left);
  let rec2left = parseInt(rec2.left);
  let rec1bt = parseInt(rec1.bottom);
  let rec2bt = parseInt(rec2.bottom);
  let rec1rt = parseInt(rec1.right);
  let rec2rt = parseInt(rec2.right);
  if (
    rec1Top <= rec2Top &&
    rec1left <= rec2left &&
    rec1rt <= rec2rt &&
    rec1bt <= rec2bt
  ) {
    return {
      ...rec1,
      children: [
        {
          top: Math.abs(rec2Top - rec1Top) + "px",
          left: Math.abs(rec2left - rec1left) + "px",
          bottom: Math.abs(rec2bt - rec1bt) + "px",
          right: Math.abs(rec2rt - rec1rt) + "px",
          children: [],
        },
      ],
    };
  }
  if (
    rec2Top <= rec1Top &&
    rec2left <= rec1left &&
    rec2rt <= rec1rt &&
    rec2bt <= rec1bt
  ) {
    return {
      ...rec2,
      children: [
        {
          top: Math.abs(rec2Top - rec1Top) + "px",
          left: Math.abs(rec2left - rec1left) + "px",
          bottom: Math.abs(rec2bt - rec1bt) + "px",
          right: Math.abs(rec2rt - rec1rt) + "px",
          children: [],
        },
      ],
    };
  }

  return rec1;
}
function solveCase3(rec1, rec2) {
  let rec1bt = parseInt(rec1.bottom);
  let rec2bt = parseInt(rec2.bottom);
  let rec1rt = parseInt(rec1.right);
  let rec2rt = parseInt(rec2.right);
  let rec1ht = parseInt(rec1.height);
  let rec2ht = parseInt(rec2.height);
  let rec1wd = parseInt(rec1.width);
  let rec2wd = parseInt(rec2.width);
  if (
    rec1bt <= rec2bt &&
    rec1rt <= rec2rt &&
    rec1bt + rec1ht >= rec2bt + rec2ht &&
    rec1rt + rec1wd >= rec2rt + rec2wd
  ) {
    return {
      ...rec1,
      children: [
        {
          bottom: Math.abs(rec2bt - rec1t) + "px",
          right: Math.abs(rec2rt - rec1rt) + "px",
          height: rec2.height,
          width: rec2.width,
          children: [],
        },
      ],
    };
  }
  if (
    rec2bt <= rec1bt &&
    rec2rt <= rec1rt &&
    rec2bt + rec2ht >= rec1bt + rec1ht &&
    rec2rt + rec2wd >= rec1rt + rec1wd
  ) {
    return {
      ...rec2,
      children: [
        {
          bottom: Math.abs(rec2bt - rec1bt) + "px",
          right: Math.abs(rec2rt - rec1rt) + "px",
          height: rec1.height,
          width: rec1.width,
          children: [],
        },
      ],
    };
  }

  return rec1;
}

function solveCase4(rec1, rec2) {
  let rec1top = parseInt(rec1.top);
  let rec2top = parseInt(rec2.top);
  let rec1rt = parseInt(rec1.right);
  let rec2rt = parseInt(rec2.right);
  let rec1ht = parseInt(rec1.height);
  let rec2ht = parseInt(rec2.height);
  let rec1wd = parseInt(rec1.width);
  let rec2wd = parseInt(rec2.width);
  if (
    rec1top <= rec2top &&
    rec1rt <= rec2rt &&
    rec1top + rec1ht >= rec2top + rec2ht &&
    rec1rt + rec1wd >= rec2rt + rec2wd
  ) {
    return {
      ...rec1,
      children: [
        {
          top: Math.abs(rec2top - rec1top) + "px",
          right: Math.abs(rec2rt - rec1rt) + "px",
          height: rec2.height,
          width: rec2.width,
          children: [],
        },
      ],
    };
  }
  if (
    rec2top <= rec1top &&
    rec2rt <= rec1rt &&
    rec2top + rec2ht >= rec1top + rec1ht &&
    rec2rt + rec2wd >= rec1rt + rec1wd
  ) {
    return {
      ...rec2,
      children: [
        {
          top: Math.abs(rec2top - rec1top) + "px",
          right: Math.abs(rec2rt - rec1rt) + "px",
          height: rec1.height,
          width: rec1.width,
          children: [],
        },
      ],
    };
  }
  return rec1;
}
function solveCase5(rec1, rec2) {
  let rec1bt = parseInt(rec1.bottom);
  let rec2bt = parseInt(rec2.bottom);
  let rec1left = parseInt(rec1.left);
  let rec2left = parseInt(rec2.left);
  let rec1ht = parseInt(rec1.height);
  let rec2ht = parseInt(rec2.height);
  let rec1wd = parseInt(rec1.width);
  let rec2wd = parseInt(rec2.width);
  if (
    rec1bt <= rec2bt &&
    rec1left <= rec2left &&
    rec1bt + rec1ht >= rec2bt + rec2ht &&
    rec1left + rec1wd >= rec2left + rec2wd
  ) {
    return {
      ...rec1,
      children: [
        {
          bottom: Math.abs(rec2bt - rec1bt) + "px",
          left: Math.abs(rec2left - rec1left) + "px",
          height: rec2.height,
          width: rec2.width,
          children: [],
        },
      ],
    };
  }
  if (
    rec2bt <= rec1bt &&
    rec2left <= rec1left &&
    rec2bt + rec2ht >= rec1bt + rec1ht &&
    rec2left + rec2wd >= rec1left + rec1wd
  ) {
    return {
      ...rec2,
      children: [
        {
          bottom: Math.abs(rec2bt - rec1bt) + "px",
          left: Math.abs(rec2left - rec1left) + "px",
          height: rec1.height,
          width: rec1.width,
          children: [],
        },
      ],
    };
  }

  return rec1;
}

module.exports = updateStructure;
