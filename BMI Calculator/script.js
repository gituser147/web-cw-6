// هنا سوف تنشئ دالة calculate
function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let BMI = weight / (height * height);
  let status = " ";
  if (BMI < 18.5) {
    status = "تعاني من نقص في الوزن";
  } else if (BMI < 25) {
    status = "وزنك صحي";
  }
  BMI = BMI.toFixed(2);
  document.getElementById("result").innerHTML = BMI;
  document.getElementsByClassName("Comment")[0].innerHTML = status;
}
