const inputs = [
  {
    id: 1,
    name: "Vietnam",
    basedId: null,
  },
  {
    id: 2,
    name: "HCM",
    basedId: 5,
  },
  {
    id: 3,
    name: "Hanoi",
    basedId: 9,
  },
  {
    id: 4,
    name: "Quang Ngai",
    basedId: 1,
  },
  {
    id: 5,
    name: "Quan 1",
    basedId: 2,
  },
  {
    id: 6,
    name: "Binh Thanh",
    basedId: 2,
  },
  {
    id: 7,
    name: "Thanh Xuan",
    basedId: 3,
  },
  {
    id: 9,
    name: "Pho Hien",
    basedId: 3,
  },
  {
    id: 8,
    name: "Thu Duc",
    basedId: 1,
  },
];

/**
 * Expected output:
 */

// {
//   "Vietnam": {
//     "HCM": {
//       "Quan 1": {},
//       "Binh Thanh": {}
//     },
//     "Hanoi": {
//       "Thanh Xuan": {}
//     },
//     "Quang Ngai": {}
//   }
// }

/**
 * =========================
 */

// tree("Vietnam")
//   tree("HCM")
//     tree("Quan 1")
//     tree("Binh Thanh")
//   tree("Hanoi")
//     tree("Thanh Xuan")
//   tree("Quang Ngai")

function tree(id) {
  let results = {};
  inputs
    .filter((item) => item.basedId === id)
    .map((item) => {
      results[item.name] = tree(item.id);
    });

  return results;
}

/**
 * Trường hợp có vòng, ví dụ: HCM: {id: 2, basedId: 5}, Quan 1: {id: 5, basedId: 2}
 */

// Điều kiện để xảy ra vòng:
// if (item1.baseId === item2.id && item2.basedId === item1.id) {
// }

/**
 * Hướng xử lý:
 *
 * trước khi chạy hàm tree,
 * mình sẽ chạy hàm kiểm tra xem có hai phần tử nào thỏa mãn điều kiện vòng trên không
 */

const isCycle = (inputs) => {
  if (inputs.length === 0) return false;

  let results = [];
  for (let i = 0; i < inputs.length - 1; i++) {
    for (let j = i + 1; j < inputs.length; j++) {
      if (
        inputs[i].basedId === inputs[j].id &&
        inputs[i].id === inputs[j].basedId
      ) {
        results.push([inputs[i], inputs[j]]);
      }
    }
  }

  return results.length === 0 ? false : results;
};

function printTree(inputs) {
  if (inputs.length === 0) return [];

  let checkingCycle = isCycle(inputs); // O(n^2)

  if (checkingCycle) {
    return `Có ${checkingCycle.length} vòng: ${JSON.stringify(checkingCycle)}`;
  } else {
    return JSON.stringify(tree(null), null, 2); // O(n)
  }
}

console.log(printTree(inputs));
