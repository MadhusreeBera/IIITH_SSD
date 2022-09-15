var flag = true;
var flag1 = true;
function handleSubmit() {
  console.log("clicked");
  const name = document.getElementById("nameid").value;
  const email = document.getElementById("emailid").value;

  const username = document.getElementById("sname").value;

  const lead = document.getElementById("lead").value;

  var members = "";

  const children = document.getElementById("div2").childNodes;
  console.log(children);
  children.forEach((ele) => {
    members += "\n" + ele.innerText;
    //   console.log(ele.id);
    console.log(ele.innerText);
  });
  if (name != "" && email != "" && username != "" && lead != "" && flag && flag1) {
    alert(
      "Name: " +
        name +
        "\nEmail: " +
        email +
        "\nUsername: " +
        username +
        "\nTeam Lead: " +
        lead +
        "\n\nTeam Members:\n" +
        members
    );
  } else {
    alert("Fill properly");
  }
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
function f(event) {
  const s = document.querySelector("#sname").value;
  const err = document.getElementById("error_msg");
  isValid = false;
  if (s != "") {
    if (hasUpperCase(s) && hasDigit(s)) {
      // console.log("valid");
      err.innerHTML = "";
      flag1 = true;
    } else {
      // console.log("invalid");
      err.innerHTML = "Invalid Username";
      flag1 = false;
    }
  }
}

function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
function hasDigit(str) {
  return /[0-9]/.test(str);
}
const checkPass = () => {
  const oldp = document.getElementById("pass");
  const conp = document.getElementById("conp");
  if (oldp.value !== conp.value) {
    alert("Re-enter password correctly!");
    flag = false;
  } else {
    flag = true;
  }
};
