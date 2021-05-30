// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// const btn = document.getElementById("btn");
// const colour = document.getElementById("colour");
// const copy = document.getElementById("copy");

// const colourChange = () => {
//     let newColour = hexColour();
//     document.body.style.backgroundColor = newColour;
//     colour.textContent = newColour;
//     colour.style.color = newColour;
//     copy.style.color = "#eeeeee"; // Resetting the copy icon color
//     copy.title = "Copy"; // Resetting the copy title
// }

// const hexColour = () => {
//     let hexValue = "#";
//     for(i = 0; i < 6; i++) {
//         hexValue += hex[Math.floor(Math.random() * hex.length)];
//     }
//     return hexValue;
// }

// const copyColour = () => {
//     let colourToCopy = document.getElementById("colour");
//     let cb = navigator.clipboard;
//     cb.writeText(colourToCopy.innerText);
//     copy.style.color = "#15e638";
//     copy.title = "Coppied";
// }

// btn.addEventListener("click", colourChange);
// copy.addEventListener("click", copyColour);
// import domtoimage from 'dom-to-image';
// const codeSnippet = document.querySelector(".codeSnippet");
// const btn = document.getElementById("btn");

// const convertToImage = () => {
//     dometoimage.toPng(codeSnippet)
//         .then(function(dataUrl){
//             let img = new Image();
//             img.src = dataUrl;
//             document.body.appendChild(img);
//         });

// }
// btn.addEventListener("click", convertToImage);