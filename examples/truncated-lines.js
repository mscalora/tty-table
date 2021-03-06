require("../test/example-utils.js").quickInit()
const Table = require("../")

const header = [
  {
    value: "item name",
    formatter: function (value) {
      return this.style(value, "cyan")
    },
    width: 10
  },
  {
    value: "price",
    width: 10
  },
  {
    value: "100% organic",
    width: 10
  }
]

// test truncation with elipsis
const t1 = Table(header, [], {
  borderStyle: "solid",
  paddingBottom: 0,
  headerAlign: "center",
  align: "center",
  color: "green",
  truncate: "..."
})

t1.push(
  ["chocolate cake", 4.65, "no"]
)

const str1 = t1.render()
console.log(str1)

// test truncation with spaces
const t2 = Table(header, [], {
  borderStyle: "solid",
  paddingBottom: 0,
  headerAlign: "center",
  align: "center",
  color: "green",
  truncate: "..."
})

t2.push(
  ["pound cake", 123456789123456789, "no"]
)

const str2 = t2.render()
console.log(str2)

// test with padding
const t3 = Table(header, [], {
  borderStyle: "solid",
  paddingLeft: 2,
  paddingRight: 2,
  headerAlign: "center",
  align: "center",
  color: "green",
  truncate: "..."
})

t3.push(
  ["pound cake", 123456789123456789, "no"]
)

const str3 = t3.render()
console.log(str3)

// test truncation with boolean false
const t4 = Table(header, [], {
  borderStyle: "solid",
  paddingBottom: 0,
  headerAlign: "center",
  align: "center",
  color: "green",
  truncate: false
})

t4.push(
  ["chocolate cake", 4.65, "no"]
)

const str4 = t4.render()
console.log(str4)

// test truncation with boolean false
const t5 = Table(header, [], {
  borderStyle: "solid",
  paddingBottom: 0,
  headerAlign: "center",
  align: "center",
  color: "green",
  truncate: true
})

t5.push(
  ["chocolate cake", 5.65, "no"]
)

const str5 = t5.render()
console.log(str5)

const t6 = Table([
  { width: 5 }, { width: 4 }, { width: 5 }
], [], {
  truncate: "...",
  paddingLeft: 0,
  paddingRight: 0
})

t6.push(
  ["特制的酱汁", 0.10],
  ["2玉米饼, 大米和豆类, 奶酪", 9.80, ""],
  ["苹果片", 1.00, "yes"]
)

const str6 = t6.render()
console.log(str6)
