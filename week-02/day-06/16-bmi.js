const getBMI = obj => {
  return { ...obj, bmi: obj.weight / obj.height ** 2 }
}

console.log(getBMI({ weight: 50, height: 1 }))
