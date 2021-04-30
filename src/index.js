import './style.scss';
import "./_checkbox.scss";

function handleChange(checkbox) {
  if (checkbox.checked) {
    document.getElementById("temperature").style.display = "flex";
  } else {
    document.getElementById("temperature").style.display = "none";
  }
}