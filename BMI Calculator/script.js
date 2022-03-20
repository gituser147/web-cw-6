// هنا سوف تنشئ دالة calculate
function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let BMI = weight / (height * height);
  let status = "";
  if (BMI < 18.5) {
    status = "تعاني من نقص في الوزن";
  } else if (BMI < 25) {
    status = "وزنك صحي";
  } else if (BMI < 30) {
    status = "تعاني من الزيادة في الوزن";
  } else {
    status = "تعاني من السمنة المفرطة";
  }
  if (weight == "") {
    alert("ادخل الطول و العرض الصحيحين");
  } else if (height == "") {
    alert("ادخل الطول و العرض الصحيحين");
  }
  BMI = BMI.toFixed(2);
  document.getElementById("result").innerHTML = BMI;
  document.getElementsByClassName("comment")[0].innerHTML = status;
}
